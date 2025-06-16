'use client';

import { Search, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
  courses,
  inkTutorials,
  LearningResourceLevel,
  rustTutorials,
  substrateCourses,
} from '@/constants';
import CourseCard from '@/components/course-card';
import AnimateInView from '@/components/animations/animate-in-view';
import { useState } from 'react';
import { HeroLayout } from '@/components/hero';

export default function CoursesPage() {
  const [coursesData, setCoursesData] = useState(courses);
  // Enhanced course data with additional fields for the preview feature
  const enhancedCourses = coursesData.map((course, index) => ({
    id: `course-${index + 1}`,
    ...course,
    instructor: 'Tin Chung',
    instructorTitle: 'Head of DevRel | OpenGuild',
    instructorAvatar: '/images/tinchung-avatar.jpg',
    level: course.title.includes(LearningResourceLevel.ADVANCED)
      ? LearningResourceLevel.ADVANCED
      : course.title.includes(LearningResourceLevel.INTERMEDIATE)
        ? LearningResourceLevel.INTERMEDIATE
        : LearningResourceLevel.BEGINNER,
    students: 1200 + index * 300,
    url: course.url,
  }));

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <HeroLayout
        title="Polkadot Courses"
        subtitle="Comprehensive learning paths to master blockchain development on Polkadot"
      />

      {/* Search and Filter */}
      <div className="border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                type="search"
                placeholder="Search courses..."
                className="pl-10"
                onChange={e => {
                  const searchQuery = e.target.value.toLowerCase();
                  const filteredCourses = courses.filter(course =>
                    course.title.toLowerCase().includes(searchQuery)
                  );
                  setCoursesData(filteredCourses);
                }}
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" /> Filter
            </Button>
          </div>
        </div>
      </div>

      {/* Course Categories */}
      <div className="container mx-auto px-4 py-12">
        <AnimateInView animation="fadeIn">
          <div className="mb-8 flex flex-wrap gap-2">
            <Badge
              onClick={() => setCoursesData(courses)}
              className="cursor-pointer bg-pink-100 text-pink-800 hover:bg-pink-200 dark:bg-pink-900/30 dark:text-pink-300 dark:hover:bg-pink-900/50"
            >
              All Courses
            </Badge>
            <Badge
              onClick={() => setCoursesData(substrateCourses)}
              className="cursor-pointer bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              Polkadot SDK
            </Badge>
            <Badge
              onClick={() => setCoursesData(inkTutorials)}
              className="cursor-pointer bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              ink! Smart Contracts
            </Badge>
            <Badge
              onClick={() => setCoursesData(rustTutorials)}
              className="cursor-pointer bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              Rust
            </Badge>
          </div>
        </AnimateInView>

        {/* Course Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {enhancedCourses.map((course, index) => (
            <CourseCard key={index} course={course} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
