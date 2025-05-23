import Link from 'next/link';
import Image from 'next/image';
import { Search, Filter, Star, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { courses } from '@/constants';
import CourseCard from '@/components/course-card';
import AnimateInView from '@/components/animations/animate-in-view';
import CoursePreviewDialog from '@/components/course-preview/course-preview-dialog';

export default function CoursesPage() {
  // Enhanced course data with additional fields for the preview feature
  const enhancedCourses = courses.map((course, index) => ({
    id: `course-${index + 1}`,
    ...course,
    instructor: 'Dr. Alex Johnson',
    instructorTitle: 'Polkadot Core Developer',
    instructorAvatar: '/images/avatar-1.png',
    duration: '24 hours',
    level: course.title.includes('Advanced')
      ? 'Advanced'
      : course.title.includes('Intermediate')
        ? 'Intermediate'
        : 'Beginner',
    students: 1200 + index * 300,
    rating: 4.5 + (Math.random() * 0.5 - 0.25),
    reviews: 120 + index * 30,
    price: '$49.99',
    videoUrl: 'https://www.youtube.com/embed/xWp-83KYkXs?si=ETs8dhYv0z_Zd-MZ',
  }));

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <AnimateInView animation="fadeIn">
              <h1 className="font-heading text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                Polkadot Development Courses
              </h1>
            </AnimateInView>
            <AnimateInView animation="slideUp" delay={0.1}>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                Comprehensive learning paths to master blockchain development on Polkadot
              </p>
            </AnimateInView>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input type="search" placeholder="Search courses..." className="pl-10" />
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
            <Badge className="cursor-pointer bg-pink-100 text-pink-800 hover:bg-pink-200 dark:bg-pink-900/30 dark:text-pink-300 dark:hover:bg-pink-900/50">
              All Courses
            </Badge>
            <Badge className="cursor-pointer bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700">
              Substrate
            </Badge>
            <Badge className="cursor-pointer bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700">
              Rust
            </Badge>
            <Badge className="cursor-pointer bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700">
              ink! Smart Contracts
            </Badge>
            <Badge className="cursor-pointer bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700">
              Polkadot SDK
            </Badge>
          </div>
        </AnimateInView>

        {/* Featured Course */}
        <AnimateInView animation="fadeIn" className="mb-12">
          <div className="overflow-hidden rounded-2xl bg-gradient-to-r from-pink-50 to-purple-50 shadow-xl dark:from-pink-950/30 dark:to-purple-950/30">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12">
                <Badge className="mb-4 bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300">
                  Featured Course
                </Badge>
                <h2 className="mb-4 font-heading text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
                  Polkadot Developer Bootcamp
                </h2>
                <p className="mb-6 text-gray-600 dark:text-gray-300">
                  A comprehensive course to master Polkadot development from scratch. Learn
                  Substrate, ink! smart contracts, and parachain development through hands-on
                  projects.
                </p>
                <div className="mb-6 flex flex-wrap gap-4">
                  <div className="flex items-center">
                    <Star className="mr-1 h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      4.9 (250 reviews)
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Users className="mr-1 h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      2,500+ students
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <CoursePreviewDialog
                    course={{
                      id: 'featured-course',
                      title: 'Polkadot Developer Bootcamp',
                      description:
                        'A comprehensive course to master Polkadot development from scratch. Learn Substrate, ink! smart contracts, and parachain development through hands-on projects.',
                      img: '/images/featured-course.png',
                      instructor: 'Dr. Alex Johnson',
                      instructorTitle: 'Polkadot Core Developer',
                      instructorAvatar: '/images/avatar-1.png',
                      duration: '40 hours',
                      level: 'All Levels',
                      students: 2500,
                      rating: 4.9,
                      reviews: 250,
                      price: '$99.99',
                      url: '#',
                      videoUrl: 'https://www.youtube.com/embed/xWp-83KYkXs?si=ETs8dhYv0z_Zd-MZ',
                    }}
                  >
                    <Button variant="outline" className="rounded-full">
                      Preview Course
                    </Button>
                  </CoursePreviewDialog>
                  <Button className="rounded-full bg-pink-600 hover:bg-pink-500 hover:shadow-md hover:shadow-pink-200 dark:hover:shadow-pink-900/20">
                    <Link href="#">Enroll Now</Link>
                  </Button>
                </div>
              </div>
            </div>
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
