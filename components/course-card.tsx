'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import CoursePreviewDialog from '@/components/course-preview/course-preview-dialog';

interface CourseCardProps {
  course: {
    id: string;
    title: string;
    description: string;
    img: string;
    instructor: string;
    instructorTitle: string;
    instructorAvatar: string;
    level: string;
    url: string;
  };
  index?: number;
}

export default function CourseCard({ course, index = 0 }: CourseCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="course-card h-full">
        <div className="course-card-image relative">
          <Image
            src={course.img || '/placeholder.svg?height=340&width=600'}
            alt={course.title}
            width={600}
            height={340}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div
            className={`absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <CoursePreviewDialog course={course}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 rounded-full bg-pink-600 px-4 py-2 font-medium text-white transition-colors hover:bg-pink-500"
              >
                Preview Course
              </motion.button>
            </CoursePreviewDialog>
          </div>
        </div>
        <div className="course-card-content">
          <div className="mb-3 flex items-center justify-between">
            <Badge className="bg-pink-100 text-pink-800 hover:bg-pink-200 dark:bg-pink-900/30 dark:text-pink-300 dark:hover:bg-pink-900/50">
              {course.level}
            </Badge>
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
          </div>
        </div>
      </div>
    </motion.div>
  );
}
