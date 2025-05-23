"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import CourseNode from "@/components/learning-path/course-node"
import PathConnector from "@/components/learning-path/path-connector"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, ZoomIn, ZoomOut, RotateCw } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface Course {
  id: string
  title: string
  description: string
  level: "beginner" | "intermediate" | "advanced"
  category: string
  duration: string
  prerequisites: string[]
  position: { x: number; y: number }
}

interface LearningPathVisualizationProps {
  courses: Course[]
}

export default function LearningPathVisualization({ courses }: LearningPathVisualizationProps) {
  const [activeFilter, setActiveFilter] = useState<string | null>(null)
  const [activeCourse, setActiveCourse] = useState<string | null>(null)
  const [zoom, setZoom] = useState(1)
  const [showFilters, setShowFilters] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 })
  const [pan, setPan] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })

  // Extract unique categories
  const categories = Array.from(new Set(courses.map((course) => course.category)))

  // Filter courses based on active filter
  const filteredCourses = activeFilter ? courses.filter((course) => course.category === activeFilter) : courses

  // Calculate connections between courses
  const connections = courses.flatMap((course) =>
    course.prerequisites.map((prereqId) => ({
      from: prereqId,
      to: course.id,
    })),
  )

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setContainerSize({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        })
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Handle mouse down for panning
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y })
  }

  // Handle mouse move for panning
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      setPan({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      })
    }
  }

  // Handle mouse up for panning
  const handleMouseUp = () => {
    setIsDragging(false)
  }

  // Handle zoom in
  const handleZoomIn = () => {
    setZoom(Math.min(zoom + 0.1, 1.5))
  }

  // Handle zoom out
  const handleZoomOut = () => {
    setZoom(Math.max(zoom - 0.1, 0.5))
  }

  // Reset view
  const resetView = () => {
    setZoom(1)
    setPan({ x: 0, y: 0 })
    setActiveFilter(null)
    setActiveCourse(null)
  }

  // Handle course click
  const handleCourseClick = (courseId: string) => {
    setActiveCourse(activeCourse === courseId ? null : courseId)
  }

  return (
    <div className="flex h-full flex-col">
      {/* Controls */}
      <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
        <div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-1"
          >
            Filter by Category {showFilters ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" onClick={handleZoomIn} title="Zoom In">
            <ZoomIn className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={handleZoomOut} title="Zoom Out">
            <ZoomOut className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={resetView} title="Reset View">
            <RotateCw className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Category filters */}
      {showFilters && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="mb-4 overflow-hidden"
        >
          <div className="flex flex-wrap gap-2">
            <Badge
              className={`cursor-pointer ${
                activeFilter === null
                  ? "bg-pink-100 text-pink-800 hover:bg-pink-200 dark:bg-pink-900/30 dark:text-pink-300"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300"
              }`}
              onClick={() => setActiveFilter(null)}
            >
              All Categories
            </Badge>
            {categories.map((category) => (
              <Badge
                key={category}
                className={`cursor-pointer ${
                  activeFilter === category
                    ? "bg-pink-100 text-pink-800 hover:bg-pink-200 dark:bg-pink-900/30 dark:text-pink-300"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300"
                }`}
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </motion.div>
      )}

      {/* Legend */}
      <div className="mb-4 flex flex-wrap gap-4">
        <div className="flex items-center">
          <div className="mr-2 h-3 w-3 rounded-full bg-green-500"></div>
          <span className="text-sm">Beginner</span>
        </div>
        <div className="flex items-center">
          <div className="mr-2 h-3 w-3 rounded-full bg-blue-500"></div>
          <span className="text-sm">Intermediate</span>
        </div>
        <div className="flex items-center">
          <div className="mr-2 h-3 w-3 rounded-full bg-purple-500"></div>
          <span className="text-sm">Advanced</span>
        </div>
        <div className="flex items-center">
          <div className="mr-2 h-0.5 w-6 bg-gray-400"></div>
          <span className="text-sm">Prerequisite</span>
        </div>
      </div>

      {/* Visualization container */}
      <div
        ref={containerRef}
        className="relative flex-1 overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <motion.div
          className="absolute h-full w-full"
          style={{
            transformOrigin: "center center",
            scale: zoom,
            x: pan.x,
            y: pan.y,
          }}
        >
          {/* Draw connections first so they appear behind nodes */}
          {connections.map((connection, index) => {
            const fromCourse = courses.find((c) => c.id === connection.from)
            const toCourse = courses.find((c) => c.id === connection.to)

            if (!fromCourse || !toCourse) return null

            // Only show connections for filtered courses
            if (activeFilter && (fromCourse.category !== activeFilter || toCourse.category !== activeFilter)) {
              return null
            }

            return (
              <PathConnector
                key={`${connection.from}-${connection.to}`}
                from={fromCourse.position}
                to={toCourse.position}
                isHighlighted={activeCourse === connection.from || activeCourse === connection.to}
              />
            )
          })}

          {/* Draw course nodes */}
          {filteredCourses.map((course) => (
            <CourseNode
              key={course.id}
              course={course}
              isActive={activeCourse === course.id}
              onClick={() => handleCourseClick(course.id)}
              isHighlighted={
                activeCourse
                  ? activeCourse === course.id ||
                    connections.some(
                      (conn) =>
                        (conn.from === activeCourse && conn.to === course.id) ||
                        (conn.to === activeCourse && conn.from === course.id),
                    )
                  : false
              }
            />
          ))}
        </motion.div>
      </div>

      {/* Course details panel */}
      {activeCourse && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="mt-4 overflow-hidden rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-800"
        >
          {(() => {
            const course = courses.find((c) => c.id === activeCourse)
            if (!course) return null

            const prerequisites = courses.filter((c) => course.prerequisites.includes(c.id))
            const nextCourses = courses.filter((c) => c.prerequisites.includes(course.id))

            return (
              <div>
                <h3 className="mb-2 text-xl font-bold">{course.title}</h3>
                <p className="mb-4 text-gray-600 dark:text-gray-300">{course.description}</p>

                <div className="mb-4 grid gap-4 sm:grid-cols-3">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Level</h4>
                    <p className="font-medium capitalize">{course.level}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Category</h4>
                    <p className="font-medium">{course.category}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Duration</h4>
                    <p className="font-medium">{course.duration}</p>
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <h4 className="mb-2 font-medium">Prerequisites</h4>
                    {prerequisites.length > 0 ? (
                      <ul className="space-y-1">
                        {prerequisites.map((prereq) => (
                          <li key={prereq.id} className="flex items-center">
                            <div
                              className={`mr-2 h-2 w-2 rounded-full ${
                                prereq.level === "beginner"
                                  ? "bg-green-500"
                                  : prereq.level === "intermediate"
                                    ? "bg-blue-500"
                                    : "bg-purple-500"
                              }`}
                            ></div>
                            <button
                              className="text-left text-pink-600 hover:underline dark:text-pink-400"
                              onClick={() => setActiveCourse(prereq.id)}
                            >
                              {prereq.title}
                            </button>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-500 dark:text-gray-400">No prerequisites</p>
                    )}
                  </div>

                  <div>
                    <h4 className="mb-2 font-medium">Next Courses</h4>
                    {nextCourses.length > 0 ? (
                      <ul className="space-y-1">
                        {nextCourses.map((next) => (
                          <li key={next.id} className="flex items-center">
                            <div
                              className={`mr-2 h-2 w-2 rounded-full ${
                                next.level === "beginner"
                                  ? "bg-green-500"
                                  : next.level === "intermediate"
                                    ? "bg-blue-500"
                                    : "bg-purple-500"
                              }`}
                            ></div>
                            <button
                              className="text-left text-pink-600 hover:underline dark:text-pink-400"
                              onClick={() => setActiveCourse(next.id)}
                            >
                              {next.title}
                            </button>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-500 dark:text-gray-400">No follow-up courses</p>
                    )}
                  </div>
                </div>

                <div className="mt-4 flex justify-end">
                  <Button className="rounded-full bg-pink-600 hover:bg-pink-500">View Course</Button>
                </div>
              </div>
            )
          })()}
        </motion.div>
      )}
    </div>
  )
}
