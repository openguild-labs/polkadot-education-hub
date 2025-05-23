"use client"

import { motion } from "framer-motion"
import { BookOpen, Clock, ArrowRight } from "lucide-react"

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

interface CourseNodeProps {
  course: Course
  isActive: boolean
  isHighlighted: boolean
  onClick: () => void
}

export default function CourseNode({ course, isActive, isHighlighted, onClick }: CourseNodeProps) {
  // Determine color based on level
  const getLevelColor = (level: string) => {
    switch (level) {
      case "beginner":
        return {
          bg: "bg-green-100 dark:bg-green-900/30",
          border: "border-green-200 dark:border-green-900/50",
          text: "text-green-800 dark:text-green-300",
          shadow: "shadow-green-100/50 dark:shadow-green-900/20",
          activeShadow: "shadow-green-200 dark:shadow-green-900/30",
        }
      case "intermediate":
        return {
          bg: "bg-blue-100 dark:bg-blue-900/30",
          border: "border-blue-200 dark:border-blue-900/50",
          text: "text-blue-800 dark:text-blue-300",
          shadow: "shadow-blue-100/50 dark:shadow-blue-900/20",
          activeShadow: "shadow-blue-200 dark:shadow-blue-900/30",
        }
      case "advanced":
        return {
          bg: "bg-purple-100 dark:bg-purple-900/30",
          border: "border-purple-200 dark:border-purple-900/50",
          text: "text-purple-800 dark:text-purple-300",
          shadow: "shadow-purple-100/50 dark:shadow-purple-900/20",
          activeShadow: "shadow-purple-200 dark:shadow-purple-900/30",
        }
      default:
        return {
          bg: "bg-gray-100 dark:bg-gray-800",
          border: "border-gray-200 dark:border-gray-700",
          text: "text-gray-800 dark:text-gray-300",
          shadow: "shadow-gray-100/50 dark:shadow-gray-900/20",
          activeShadow: "shadow-gray-200 dark:shadow-gray-900/30",
        }
    }
  }

  const colors = getLevelColor(course.level)

  return (
    <motion.div
      className={`absolute cursor-pointer rounded-xl border p-3 transition-all duration-300 ${
        colors.border
      } ${colors.bg} ${
        isActive || isHighlighted
          ? `shadow-lg ${colors.activeShadow} ring-2 ring-pink-300 dark:ring-pink-700`
          : `shadow ${colors.shadow} hover:shadow-md`
      }`}
      style={{
        width: 200,
        left: course.position.x,
        top: course.position.y,
        opacity: isHighlighted || isActive || !isHighlighted ? 1 : 0.5,
        zIndex: isActive ? 10 : 1,
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-1 flex items-center justify-between">
        <div
          className={`h-2 w-2 rounded-full ${
            course.level === "beginner"
              ? "bg-green-500"
              : course.level === "intermediate"
                ? "bg-blue-500"
                : "bg-purple-500"
          }`}
        ></div>
        <div className={`text-xs font-medium capitalize ${colors.text}`}>{course.level}</div>
      </div>
      <h3 className="mb-1 line-clamp-2 text-sm font-bold">{course.title}</h3>
      <div className="mb-2 flex items-center text-xs text-gray-500 dark:text-gray-400">
        <Clock className="mr-1 h-3 w-3" />
        {course.duration}
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
          <BookOpen className="mr-1 h-3 w-3" />
          {course.category}
        </div>
        <ArrowRight className="h-3 w-3 text-pink-500" />
      </div>
    </motion.div>
  )
}
