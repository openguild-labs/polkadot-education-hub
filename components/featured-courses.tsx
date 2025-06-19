import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { courses, LearningResourceLevel } from '@/constants';
import AnimateInView from '@/components/animations/animate-in-view';
import CourseCard from './course-card';

export default function FeaturedCourses() {
  // Get only released courses and limit to 3
  const featuredCourses = courses.filter(course => course.released).slice(0, 3);
  // Enhanced course data with additional fields for the preview feature
  const enhancedCourses = featuredCourses.map((course, index) => ({
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
    url: course.url,
  }));

  return (
    <section className="bg-white py-24 dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <AnimateInView animation="slideUp" className="mb-12 text-center">
          <h2 className="section-title font-unbounded">Featured Courses</h2>
          <p className="section-description mx-auto font-unbounded">
            Start your journey with our most popular Polkadot development courses
          </p>
        </AnimateInView>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {enhancedCourses.map((course, index) => (
            <CourseCard key={index} course={course} index={index} />
          ))}
        </div>

        <AnimateInView animation="fadeIn" delay={0.3} className="mt-12 text-center">
          <Button
            variant="outline"
            className="rounded-full border-pink-200 text-pink-600 transition-all duration-300 hover:bg-pink-50 hover:text-pink-700 hover:shadow-md hover:shadow-pink-100/50 dark:border-pink-900/50 dark:text-pink-400 dark:hover:bg-pink-950/50 dark:hover:text-pink-300 dark:hover:shadow-pink-900/10"
          >
            <Link href="/courses" className="flex items-center">
              View All Courses{' '}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </AnimateInView>
      </div>
    </section>
  );
}
