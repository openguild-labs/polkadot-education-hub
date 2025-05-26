'use client';

import type React from 'react';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Play, X, ChevronRight, Award, BookOpen } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import CoursePreviewCurriculum from '@/components/course-preview/course-preview-curriculum';
import CoursePreviewQuiz from '@/components/course-preview/course-preview-quiz';

interface CoursePreviewDialogProps {
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
  children?: React.ReactNode;
}

export default function CoursePreviewDialog({ course, children }: CoursePreviewDialogProps) {
  const [activeTab, setActiveTab] = useState('overview');
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children || (
          <Button
            variant="outline"
            className="flex items-center gap-2 rounded-full border-pink-200 text-pink-600 hover:bg-pink-50 hover:text-pink-700 dark:border-pink-900/50 dark:text-pink-400 dark:hover:bg-pink-950/50 dark:hover:text-pink-300"
          >
            <Play className="h-4 w-4" /> Preview Course
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-4xl p-0 sm:rounded-2xl">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative flex h-full max-h-[90vh] flex-col overflow-hidden"
            >
              {/* Header with course image */}
              <div className="relative h-48 w-full overflow-hidden sm:h-64">
                <Image
                  src={course.img || '/placeholder.svg?height=400&width=800'}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-black/60"
                >
                  <X className="h-5 w-5" />
                </button>
                <div className="absolute bottom-4 left-4 right-4">
                  <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-2xl font-bold text-white"
                  >
                    {course.title}
                  </motion.h2>
                </div>
              </div>

              {/* Tabs navigation */}
              <Tabs
                defaultValue="overview"
                value={activeTab}
                onValueChange={setActiveTab}
                className="flex flex-1 flex-col overflow-hidden"
              >
                <TabsList className="mx-4 mt-4 justify-start rounded-full bg-gray-100 p-1 dark:bg-gray-800">
                  <TabsTrigger
                    value="overview"
                    className="rounded-full data-[state=active]:bg-white data-[state=active]:text-pink-600 data-[state=active]:shadow-sm dark:data-[state=active]:bg-gray-700 dark:data-[state=active]:text-pink-400"
                  >
                    Overview
                  </TabsTrigger>
                  <TabsTrigger
                    value="curriculum"
                    className="rounded-full data-[state=active]:bg-white data-[state=active]:text-pink-600 data-[state=active]:shadow-sm dark:data-[state=active]:bg-gray-700 dark:data-[state=active]:text-pink-400"
                  >
                    Curriculum
                  </TabsTrigger>
                  <TabsTrigger
                    value="preview"
                    className="rounded-full data-[state=active]:bg-white data-[state=active]:text-pink-600 data-[state=active]:shadow-sm dark:data-[state=active]:bg-gray-700 dark:data-[state=active]:text-pink-400"
                  >
                    Video Preview
                  </TabsTrigger>
                  <TabsTrigger
                    value="quiz"
                    className="rounded-full data-[state=active]:bg-white data-[state=active]:text-pink-600 data-[state=active]:shadow-sm dark:data-[state=active]:bg-gray-700 dark:data-[state=active]:text-pink-400"
                  >
                    Sample Quiz
                  </TabsTrigger>
                  <TabsTrigger
                    value="reviews"
                    className="rounded-full data-[state=active]:bg-white data-[state=active]:text-pink-600 data-[state=active]:shadow-sm dark:data-[state=active]:bg-gray-700 dark:data-[state=active]:text-pink-400"
                  >
                    Reviews
                  </TabsTrigger>
                </TabsList>

                <div className="flex-1 overflow-auto p-4">
                  <TabsContent value="overview" className="h-full">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="grid h-full gap-6 md:grid-cols-3"
                    >
                      <div className="md:col-span-2">
                        <motion.h3
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 }}
                          className="mb-2 text-xl font-bold"
                        >
                          About This Course
                        </motion.h3>
                        <motion.p
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          className="text-gray-600 dark:text-gray-300"
                        >
                          {course.description}
                        </motion.p>

                        <motion.h3
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className="mb-2 mt-6 text-xl font-bold"
                        >
                          What You&apos;ll Learn
                        </motion.h3>
                        <motion.ul
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                          className="space-y-2"
                        >
                          {[
                            'Understand the core concepts of Polkadot architecture',
                            'Build and deploy your own parachain',
                            'Develop smart contracts using ink!',
                            'Implement cross-chain messaging with XCM',
                            'Create decentralized applications on Polkadot',
                          ].map((item, index) => (
                            <motion.li
                              key={index}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.4 + index * 0.1 }}
                              className="flex items-start"
                            >
                              <ChevronRight className="mr-2 h-5 w-5 text-pink-500" />
                              <span>{item}</span>
                            </motion.li>
                          ))}
                        </motion.ul>

                        <motion.h3
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.9 }}
                          className="mb-2 mt-6 text-xl font-bold"
                        >
                          Meet Your Instructor
                        </motion.h3>
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1 }}
                          className="flex items-center"
                        >
                          <Image
                            src={course.instructorAvatar || '/placeholder.svg?height=50&width=50'}
                            alt={course.instructor}
                            width={50}
                            height={50}
                            className="mr-3 rounded-full"
                          />
                          <div>
                            <h4 className="font-bold">{course.instructor}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                              {course.instructorTitle}
                            </p>
                          </div>
                        </motion.div>
                      </div>

                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-800"
                      >
                        <h3 className="mb-4 text-lg font-bold">Course Details</h3>
                        <div className="space-y-4">
                          <div className="flex items-center">
                            <BookOpen className="mr-3 h-5 w-5 text-pink-500" />
                            <div>
                              <p className="text-sm font-medium">Level</p>
                              <p className="text-gray-600 dark:text-gray-300">{course.level}</p>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <Award className="mr-3 h-5 w-5 text-pink-500" />
                            <div>
                              <p className="text-sm font-medium">Certificate</p>
                              <p className="text-gray-600 dark:text-gray-300">Upon completion</p>
                            </div>
                          </div>
                        </div>

                        <div className="mt-6">
                          <Button className="w-full rounded-full bg-pink-600 hover:bg-pink-500">
                            <Link href={course.url} target="_blank" rel="noopener noreferrer">
                              View Course
                            </Link>
                          </Button>
                        </div>
                      </motion.div>
                    </motion.div>
                  </TabsContent>

                  <TabsContent value="curriculum">
                    <CoursePreviewCurriculum />
                  </TabsContent>

                  {/* <TabsContent value="preview"> */}
                  {/* <CoursePreviewVideo videoUrl={course.videoUrl} /> */}
                  {/* </TabsContent> */}

                  <TabsContent value="quiz">
                    <CoursePreviewQuiz />
                  </TabsContent>
                </div>
              </Tabs>

              {/* Footer with CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="border-t border-gray-200 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-900"
              >
                <div className="flex items-center justify-between">
                  <Button
                    size="lg"
                    className="rounded-full bg-pink-600 hover:bg-pink-500 hover:shadow-md hover:shadow-pink-200 dark:hover:shadow-pink-900/20"
                  >
                    <Link href={course.url} target="_blank" rel="noopener noreferrer">
                      View Course
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}
