'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Play, Lock, CheckCircle, FileText, Code, Video } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

interface Module {
  id: string;
  title: string;
  duration: string;
  lessons: Lesson[];
  isCompleted: boolean;
  progress: number;
}

interface Lesson {
  id: string;
  title: string;
  duration: string;
  type: 'video' | 'reading' | 'code' | 'quiz';
  isLocked: boolean;
  isCompleted: boolean;
  isFree: boolean;
}

export default function CoursePreviewCurriculum() {
  const [expandedModules, setExpandedModules] = useState<string[]>(['module-1']);

  const toggleModule = (moduleId: string) => {
    setExpandedModules(prev =>
      prev.includes(moduleId) ? prev.filter(id => id !== moduleId) : [...prev, moduleId]
    );
  };

  const modules: Module[] = [
    {
      id: 'module-1',
      title: 'Introduction to Polkadot',
      duration: '2h 15m',
      progress: 100,
      isCompleted: true,
      lessons: [
        {
          id: 'lesson-1-1',
          title: 'Welcome to the Course',
          duration: '5m',
          type: 'video',
          isLocked: false,
          isCompleted: true,
          isFree: true,
        },
        {
          id: 'lesson-1-2',
          title: 'Understanding Blockchain Basics',
          duration: '15m',
          type: 'video',
          isLocked: false,
          isCompleted: true,
          isFree: true,
        },
        {
          id: 'lesson-1-3',
          title: 'Polkadot Architecture Overview',
          duration: '20m',
          type: 'video',
          isLocked: false,
          isCompleted: true,
          isFree: false,
        },
        {
          id: 'lesson-1-4',
          title: 'Setting Up Your Development Environment',
          duration: '25m',
          type: 'reading',
          isLocked: false,
          isCompleted: true,
          isFree: false,
        },
        {
          id: 'lesson-1-5',
          title: 'Module 1 Quiz',
          duration: '10m',
          type: 'quiz',
          isLocked: false,
          isCompleted: true,
          isFree: false,
        },
      ],
    },
    {
      id: 'module-2',
      title: 'Substrate Framework Fundamentals',
      duration: '3h 45m',
      progress: 60,
      isCompleted: false,
      lessons: [
        {
          id: 'lesson-2-1',
          title: 'Introduction to Substrate',
          duration: '20m',
          type: 'video',
          isLocked: false,
          isCompleted: true,
          isFree: false,
        },
        {
          id: 'lesson-2-2',
          title: 'FRAME Pallets Explained',
          duration: '30m',
          type: 'video',
          isLocked: false,
          isCompleted: true,
          isFree: false,
        },
        {
          id: 'lesson-2-3',
          title: 'Building Your First Pallet',
          duration: '45m',
          type: 'code',
          isLocked: false,
          isCompleted: true,
          isFree: false,
        },
        {
          id: 'lesson-2-4',
          title: 'Storage in Substrate',
          duration: '25m',
          type: 'video',
          isLocked: false,
          isCompleted: false,
          isFree: false,
        },
        {
          id: 'lesson-2-5',
          title: 'Hands-on: Creating a Custom Runtime',
          duration: '1h',
          type: 'code',
          isLocked: false,
          isCompleted: false,
          isFree: false,
        },
        {
          id: 'lesson-2-6',
          title: 'Module 2 Quiz',
          duration: '15m',
          type: 'quiz',
          isLocked: false,
          isCompleted: false,
          isFree: false,
        },
      ],
    },
    {
      id: 'module-3',
      title: 'Smart Contracts with ink!',
      duration: '4h 30m',
      progress: 0,
      isCompleted: false,
      lessons: [
        {
          id: 'lesson-3-1',
          title: 'Introduction to ink!',
          duration: '25m',
          type: 'video',
          isLocked: true,
          isCompleted: false,
          isFree: false,
        },
        {
          id: 'lesson-3-2',
          title: 'Setting Up the ink! Environment',
          duration: '20m',
          type: 'reading',
          isLocked: true,
          isCompleted: false,
          isFree: false,
        },
        {
          id: 'lesson-3-3',
          title: 'Your First ink! Smart Contract',
          duration: '45m',
          type: 'code',
          isLocked: true,
          isCompleted: false,
          isFree: false,
        },
        {
          id: 'lesson-3-4',
          title: 'Testing Smart Contracts',
          duration: '35m',
          type: 'video',
          isLocked: true,
          isCompleted: false,
          isFree: false,
        },
        {
          id: 'lesson-3-5',
          title: 'Deploying to a Testnet',
          duration: '40m',
          type: 'code',
          isLocked: true,
          isCompleted: false,
          isFree: false,
        },
        {
          id: 'lesson-3-6',
          title: 'Module 3 Quiz',
          duration: '15m',
          type: 'quiz',
          isLocked: true,
          isCompleted: false,
          isFree: false,
        },
      ],
    },
    {
      id: 'module-4',
      title: 'Parachain Development',
      duration: '5h 15m',
      progress: 0,
      isCompleted: false,
      lessons: [
        {
          id: 'lesson-4-1',
          title: 'Parachain Architecture',
          duration: '30m',
          type: 'video',
          isLocked: true,
          isCompleted: false,
          isFree: false,
        },
        {
          id: 'lesson-4-2',
          title: 'Cumulus Framework',
          duration: '35m',
          type: 'video',
          isLocked: true,
          isCompleted: false,
          isFree: false,
        },
      ],
    },
  ];

  const getLessonIcon = (type: string) => {
    switch (type) {
      case 'video':
        return <Video className="h-4 w-4" />;
      case 'reading':
        return <FileText className="h-4 w-4" />;
      case 'code':
        return <Code className="h-4 w-4" />;
      case 'quiz':
        return <FileText className="h-4 w-4" />;
      default:
        return <FileText className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-4">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-4 flex items-center justify-between"
      >
        <h3 className="text-xl font-bold">Course Curriculum</h3>
        <div className="text-sm text-gray-600 dark:text-gray-300">
          <span className="font-medium">16 modules</span> • <span>42 lessons</span> •{' '}
          <span>24h total length</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="rounded-lg bg-gray-100 p-3 dark:bg-gray-800"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-300">
              <Play className="h-4 w-4" />
            </div>
            <span className="font-medium">Course Progress</span>
          </div>
          <span className="text-sm font-medium">25% Complete</span>
        </div>
        <Progress value={25} className="mt-2 h-2 bg-gray-200 dark:bg-gray-700" />
      </motion.div>

      <div className="space-y-3">
        {modules.map((module, moduleIndex) => (
          <motion.div
            key={module.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + moduleIndex * 0.1 }}
            className="overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-800"
          >
            <div
              className="flex cursor-pointer items-center justify-between p-4"
              onClick={() => toggleModule(module.id)}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full ${
                    module.isCompleted
                      ? 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-300'
                      : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300'
                  }`}
                >
                  {module.isCompleted ? (
                    <CheckCircle className="h-5 w-5" />
                  ) : (
                    <span className="text-sm font-medium">{moduleIndex + 1}</span>
                  )}
                </div>
                <div>
                  <h4 className="font-medium">{module.title}</h4>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <span>{module.lessons.length} lessons</span>
                    <span>•</span>
                    <span>{module.duration}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                {module.progress > 0 && (
                  <div className="hidden text-sm sm:block">
                    <span className="font-medium">{module.progress}%</span> complete
                  </div>
                )}
                <motion.div
                  animate={{ rotate: expandedModules.includes(module.id) ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                </motion.div>
              </div>
            </div>

            <AnimatePresence>
              {expandedModules.includes(module.id) && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="border-t border-gray-200 dark:border-gray-700">
                    {module.lessons.map((lesson, lessonIndex) => (
                      <motion.div
                        key={lesson.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 * lessonIndex }}
                        className={`flex items-center justify-between border-b border-gray-200 p-3 last:border-0 dark:border-gray-700 ${
                          lesson.isLocked ? 'opacity-60' : ''
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`flex h-8 w-8 items-center justify-center rounded-full ${
                              lesson.isCompleted
                                ? 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-300'
                                : lesson.isLocked
                                  ? 'bg-gray-100 text-gray-400 dark:bg-gray-700 dark:text-gray-500'
                                  : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300'
                            }`}
                          >
                            {lesson.isCompleted ? (
                              <CheckCircle className="h-4 w-4" />
                            ) : lesson.isLocked ? (
                              <Lock className="h-4 w-4" />
                            ) : (
                              getLessonIcon(lesson.type)
                            )}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span
                                className={
                                  lesson.isLocked ? 'text-gray-400 dark:text-gray-500' : ''
                                }
                              >
                                {lesson.title}
                              </span>
                              {lesson.isFree && (
                                <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                                  Free
                                </Badge>
                              )}
                            </div>
                            <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                              <span>{lesson.type}</span>
                              <span>•</span>
                              <span>{lesson.duration}</span>
                            </div>
                          </div>
                        </div>
                        {!lesson.isLocked && lesson.type === 'video' && (
                          <button className="flex h-7 w-7 items-center justify-center rounded-full bg-pink-100 text-pink-600 transition-colors hover:bg-pink-200 dark:bg-pink-900/30 dark:text-pink-300 dark:hover:bg-pink-900/50">
                            <Play className="h-3.5 w-3.5" />
                          </button>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
