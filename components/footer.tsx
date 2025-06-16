import Link from 'next/link';
import { Github, X, Youtube, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-2">
              <img
                src="/images/og-education-logo.png"
                alt="Logo"
                className="h-12 w-12 rounded-full"
              />
              <span className="font-heading text-xl font-bold text-gray-900 dark:text-white">
                Polkadot Education Hub
              </span>
            </Link>
            <p className="mt-4 max-w-md text-gray-600 dark:text-gray-300">
              A comprehensive education hub for Polkadot blockchain developers. Learn, build, and
              contribute to the Polkadot ecosystem through structured courses, workshops, and
              bootcamps.
            </p>
            <div className="mt-6 flex space-x-4">
              <Link
                href="https://github.com/openguild-labs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-pink-100 hover:text-pink-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-pink-900/30 dark:hover:text-pink-300"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://twitter.com/openguildwtf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-pink-100 hover:text-pink-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-pink-900/30 dark:hover:text-pink-300"
              >
                <X className="h-5 w-5" />
                <span className="sr-only">X</span>
              </Link>
              <Link
                href="https://www.youtube.com/@openguildwtf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-pink-100 hover:text-pink-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-pink-900/30 dark:hover:text-pink-300"
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
              <Link
                href="mailto:admin@openguild.wtf"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-pink-100 hover:text-pink-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-pink-900/30 dark:hover:text-pink-300"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
              Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/courses"
                  className="text-gray-600 transition-colors hover:text-pink-600 dark:text-gray-300 dark:hover:text-pink-400"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/bootcamp"
                  className="text-gray-600 transition-colors hover:text-pink-600 dark:text-gray-300 dark:hover:text-pink-400"
                >
                  Bootcamp
                </Link>
              </li>
              <li>
                <Link
                  href="/workshops"
                  className="text-gray-600 transition-colors hover:text-pink-600 dark:text-gray-300 dark:hover:text-pink-400"
                >
                  Workshops
                </Link>
              </li>
              <li>
                <Link
                  href="/videos"
                  className="text-gray-600 transition-colors hover:text-pink-600 dark:text-gray-300 dark:hover:text-pink-400"
                >
                  Videos
                </Link>
              </li>
              <li>
                <Link
                  href="/learning-path"
                  className="text-gray-600 transition-colors hover:text-pink-600 dark:text-gray-300 dark:hover:text-pink-400"
                >
                  Learning Path
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
              Community
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="https://github.com/openguild-labs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 transition-colors hover:text-pink-600 dark:text-gray-300 dark:hover:text-pink-400"
                >
                  GitHub
                </Link>
              </li>
              <li>
                <Link
                  href="https://twitter.com/openguildwtf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 transition-colors hover:text-pink-600 dark:text-gray-300 dark:hover:text-pink-400"
                >
                  X
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.youtube.com/@openguildwtf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 transition-colors hover:text-pink-600 dark:text-gray-300 dark:hover:text-pink-400"
                >
                  YouTube
                </Link>
              </li>
              <li>
                <Link
                  href="https://openguild.notion.site/156659b1c817802383e0ddb34ad07a25?pvs=105"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 transition-colors hover:text-pink-600 dark:text-gray-300 dark:hover:text-pink-400"
                >
                  Join Bootcamp
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 transition-colors hover:text-pink-600 dark:text-gray-300 dark:hover:text-pink-400"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8 dark:border-gray-800">
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Polkadot Education Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
