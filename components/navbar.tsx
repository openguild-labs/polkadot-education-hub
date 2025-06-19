'use client';

import type React from 'react';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const navigation: { name: string; href: string; submenu?: { name: string; href: string }[] }[] = [
    { name: 'Home', href: '/' },
    { name: 'Courses', href: '/courses' },
    { name: 'Bootcamp', href: '/bootcamp' },
    { name: 'Workshops', href: '/workshops' },
    { name: 'Videos', href: '/videos' },
    { name: 'Learning Path', href: '/learning-path' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (e: React.MouseEvent, name: string) => {
    e.stopPropagation();
    e.preventDefault();
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  // Close dropdown when clicking outside or when route changes
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.dropdown-container')) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdown when route changes
  useEffect(() => {
    setActiveDropdown(null);
  }, [pathname]);

  // Close mobile menu when navigating
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <motion.nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'border-b border-gray-200 bg-white/90 backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/90'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href="/" className="flex items-center space-x-2">
              <img
                src="/images/og-education-logo.png"
                alt="Logo"
                className="h-12 w-12 rounded-full"
              />
              <span className="font-heading font-unbounded text-md font-bold text-gray-900 dark:text-white">
                Polkadot Education Hub
              </span>
            </Link>
          </motion.div>

          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="ml-10 flex items-center space-x-1">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  className="relative group"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  {item.submenu ? (
                    <button
                      onClick={e => toggleDropdown(e, item.name)}
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      className={`flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                        pathname?.startsWith(item.href)
                          ? 'bg-pink-50 text-pink-700 dark:bg-pink-900/20 dark:text-pink-300'
                          : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                      }`}
                      aria-expanded={activeDropdown === item.name}
                      aria-haspopup="true"
                    >
                      {item.name}
                      <motion.div
                        animate={{ rotate: activeDropdown === item.name ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </motion.div>
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={`rounded-lg px-3 py-2 text-xs font-medium transition-colors font-unbounded ${
                        pathname === item.href
                          ? 'bg-pink-50 text-pink-700 dark:bg-pink-900/20 dark:text-pink-300'
                          : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}

                  <AnimatePresence>
                    {item.submenu && activeDropdown === item.name && (
                      <motion.div
                        className="dropdown-container absolute left-0 top-full z-10 mt-1 min-w-[200px] rounded-lg border border-gray-200 bg-white p-2 shadow-lg dark:border-gray-800 dark:bg-gray-900"
                        onMouseEnter={() => setActiveDropdown(item.name)}
                        onMouseLeave={() => setActiveDropdown(null)}
                        initial={{ opacity: 0, y: 10, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: 'auto' }}
                        exit={{ opacity: 0, y: 10, height: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.submenu.map((subitem, subIndex) => (
                          <motion.div
                            key={subitem.name}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2, delay: 0.05 * subIndex }}
                          >
                            <Link
                              href={subitem.href}
                              className="block rounded-md px-3 py-2 text-xs font-unbounded font-medium text-gray-700 transition-colors hover:bg-pink-50 hover:text-pink-700 dark:text-gray-300 dark:hover:bg-pink-900/20 dark:hover:text-pink-300"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {subitem.name}
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button
              variant="outline"
              className="hidden rounded-full border-pink-200 dark:border-pink-900/50 md:inline-flex hover:bg-pink-50 hover:text-pink-600 dark:hover:bg-pink-900/20 dark:hover:text-pink-300 transition-all duration-300"
            >
              <Link
                href="https://github.com/openguild-labs"
                target="_blank"
                rel="noopener noreferrer"
                className="font-unbounded text-xs"
              >
                GitHub
              </Link>
            </Button>
            <Button className="hidden font-unbounded text-xs hover:scale-105 rounded-full bg-pink-600 hover:bg-pink-500 hover:shadow-md hover:shadow-pink-200 dark:hover:shadow-pink-900/20 md:inline-flex transition-all duration-300">
              <Link href="/bootcamp">Join Bootcamp</Link>
            </Button>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 * index }}
                >
                  {item.submenu ? (
                    <>
                      <button
                        onClick={e => toggleDropdown(e, item.name)}
                        className={`flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium ${
                          pathname?.startsWith(item.href)
                            ? 'bg-pink-50 text-pink-700 dark:bg-pink-900/20 dark:text-pink-300'
                            : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                        }`}
                        aria-expanded={activeDropdown === item.name}
                        aria-haspopup="true"
                      >
                        {item.name}
                        <motion.div
                          animate={{ rotate: activeDropdown === item.name ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className="h-5 w-5" />
                        </motion.div>
                      </button>
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            className="ml-4 space-y-1"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            {item.submenu.map((subitem, subIndex) => (
                              <motion.div
                                key={subitem.name}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.2, delay: 0.05 * subIndex }}
                              >
                                <Link
                                  href={subitem.href}
                                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-pink-50 hover:text-pink-700 dark:text-gray-300 dark:hover:bg-pink-900/20 dark:hover:text-pink-300"
                                  onClick={() => {
                                    setIsMenuOpen(false);
                                    setActiveDropdown(null);
                                  }}
                                >
                                  {subitem.name}
                                </Link>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={`block rounded-md px-3 py-2 text-base font-medium ${
                        pathname === item.href
                          ? 'bg-pink-50 text-pink-700 dark:bg-pink-900/20 dark:text-pink-300'
                          : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </motion.div>
              ))}
              <div className="mt-4 flex flex-col space-y-2 px-3">
                <Button
                  variant="outline"
                  className="w-full justify-center rounded-full border-pink-200 dark:border-pink-900/50"
                >
                  <Link
                    href="https://github.com/openguild-labs"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </Link>
                </Button>
                <Button className="w-full justify-center rounded-full bg-pink-600 hover:bg-pink-500">
                  <Link href="/bootcamp">Join Bootcamp</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
