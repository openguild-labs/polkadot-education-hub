'use client';

import Link from 'next/link';
import { ArrowRight, BookOpen, Video, Layers, Code } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import AnimateInView from '@/components/animations/animate-in-view';
import { motion } from 'framer-motion';

export default function CategoryShowcase() {
  const categories = [
    {
      title: 'Courses',
      description: 'Structured learning paths for Substrate, Rust, and ink! development',
      icon: <BookOpen className="h-6 w-6" />,
      href: '/courses',
      color: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300',
      hoverColor: 'group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50',
      borderColor: 'border-blue-200 dark:border-blue-900/50',
    },
    {
      title: 'Workshops',
      description: 'Hands-on workshop materials for practical learning',
      icon: <Code className="h-6 w-6" />,
      href: '/workshops',
      color: 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-300',
      hoverColor: 'group-hover:bg-purple-200 dark:group-hover:bg-purple-900/50',
      borderColor: 'border-purple-200 dark:border-purple-900/50',
    },
    {
      title: 'Videos',
      description: 'Technical videos, coding sessions, and community calls',
      icon: <Video className="h-6 w-6" />,
      href: '/videos',
      color: 'bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-300',
      hoverColor: 'group-hover:bg-amber-200 dark:group-hover:bg-amber-900/50',
      borderColor: 'border-amber-200 dark:border-amber-900/50',
    },
    {
      title: 'Learning Path',
      description: 'Structured learning journey from beginner to advanced',
      icon: <Layers className="h-6 w-6" />,
      href: '/learning-path',
      color: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-300',
      hoverColor: 'group-hover:bg-emerald-200 dark:group-hover:bg-emerald-900/50',
      borderColor: 'border-emerald-200 dark:border-emerald-900/50',
    },
  ];

  return (
    <section className="bg-white py-24 dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <AnimateInView animation="slideUp" className="mb-12 text-center">
          <h2 className="section-title">Explore by Category</h2>
          <p className="section-description mx-auto">
            Find the perfect learning resources for your Polkadot development journey
          </p>
        </AnimateInView>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <AnimateInView key={index} animation="slideUp" delay={0.1 * index}>
              <Link href={category.href}>
                <motion.div
                  whileHover={{
                    y: -8,
                    boxShadow:
                      '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                  }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  <Card
                    className={`group h-full overflow-hidden border-2 border-transparent bg-white transition-all duration-300 dark:bg-gray-800`}
                  >
                    <CardContent className="p-6">
                      <motion.div
                        className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full transition-colors duration-300 ${category.color} ${category.hoverColor}`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                      >
                        {category.icon}
                      </motion.div>
                      <h3 className="mb-2 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-pink-600 dark:text-white dark:group-hover:text-pink-400">
                        {category.title}
                      </h3>
                      <p className="mb-4 text-gray-600 dark:text-gray-300">
                        {category.description}
                      </p>
                      <div className="flex items-center text-sm font-medium text-pink-600 group dark:text-pink-400">
                        <span>Explore {category.title}</span>
                        <motion.div
                          animate={{ x: 0 }}
                          whileHover={{ x: 5 }}
                          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                        >
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </Link>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  );
}
