import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { courses } from '@/constants';
import AnimateInView from '@/components/animations/animate-in-view';
import Spotlight from '@/components/animations/spotlight';

export default function FeaturedCourses() {
  // Get only released courses and limit to 3
  const featuredCourses = courses.filter(course => course.released).slice(0, 3);

  return (
    <section className="bg-white py-24 dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <AnimateInView animation="slideUp" className="mb-12 text-center">
          <h2 className="section-title">Featured Courses</h2>
          <p className="section-description mx-auto">
            Start your journey with our most popular Polkadot development courses
          </p>
        </AnimateInView>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredCourses.map((course, index) => (
            <AnimateInView key={index} animation="slideUp" delay={0.1 * index} className="h-full">
              <Spotlight className="h-full">
                <div
                  className="course-card group h-full"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="course-card-image relative overflow-hidden">
                    <Image
                      src={course.img || '/images/course-placeholder.png'}
                      alt={course.title}
                      width={600}
                      height={340}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  </div>
                  <div className="course-card-content">
                    <div className="mb-3 flex items-center justify-between">
                      <Badge className="bg-pink-100 text-pink-800 hover:bg-pink-200 dark:bg-pink-900/30 dark:text-pink-300 dark:hover:bg-pink-900/50">
                        {course.title.includes('Substrate')
                          ? 'Substrate'
                          : course.title.includes('Rust')
                            ? 'Rust'
                            : 'Blockchain'}
                      </Badge>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <span className="mr-1">4.9</span>
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map(star => (
                            <svg
                              key={star}
                              className="h-4 w-4 fill-current text-yellow-500"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                    <h3 className="course-card-title">{course.title}</h3>
                    <p className="course-card-description">{course.description}</p>
                    <div className="course-card-footer">
                      <Link
                        href={course.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-sm font-medium text-pink-600 transition-colors hover:text-pink-700 dark:text-pink-400 dark:hover:text-pink-300"
                      >
                        View Course{' '}
                        <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        {index === 0 ? '8 modules' : index === 1 ? '6 modules' : '5 modules'}
                      </span>
                    </div>
                  </div>
                </div>
              </Spotlight>
            </AnimateInView>
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
