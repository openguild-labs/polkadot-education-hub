import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar, Users, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimateInView from '@/components/animations/animate-in-view';

export default function BootcampPromo() {
  return (
    <section className="bg-gray-50 py-24 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <AnimateInView animation="slideRight">
            <h2 className="font-unbounded font-heading text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Open Polkadot Bootcamp
            </h2>
            <p className="text-md font-unbounded mt-4 text-lg text-gray-600 dark:text-gray-300">
              Join our comprehensive bootcamp and learn to build on Polkadot from industry experts.
              Master Substrate, Polkadot SDK, and Solidity on PolkaVM through hands-on projects and
              expert guidance.
            </p>

            <div className="mt-8 space-y-4">
              <AnimateInView animation="fadeIn" delay={0.1}>
                <div className="flex items-start">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-pink-100 text-pink-600 shadow-sm dark:bg-pink-900/30 dark:text-pink-300">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium font-unbounded text-gray-900 dark:text-white">
                      Next Cohort Starting Soon
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Registration is now open for the next bootcamp session
                    </p>
                  </div>
                </div>
              </AnimateInView>

              <AnimateInView animation="fadeIn" delay={0.2}>
                <div className="flex items-start">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-pink-100 text-pink-600 shadow-sm dark:bg-pink-900/30 dark:text-pink-300">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium font-unbounded text-gray-900 dark:text-white">
                      Two Specialized Tracks
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Choose between Polkadot SDK or Solidity on PolkaVM
                    </p>
                  </div>
                </div>
              </AnimateInView>

              <AnimateInView animation="fadeIn" delay={0.3}>
                <div className="flex items-start">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-pink-100 text-pink-600 shadow-sm dark:bg-pink-900/30 dark:text-pink-300">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium font-unbounded text-gray-900 dark:text-white">
                      Comprehensive Curriculum
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Over 30 video lessons with hands-on projects
                    </p>
                  </div>
                </div>
              </AnimateInView>
            </div>

            <AnimateInView animation="fadeIn" delay={0.4} className="mt-8">
              <Button className="rounded-full font-unbounded hover:scale-105 hover:bg-pink-500 hover:shadow-pink-200 dark:hover:shadow-pink-900/20 bg-pink-600 px-8 py-6 text-lg font-semibold text-white shadow-lg transition-all hover:bg-pink-500 hover:shadow-pink-200 dark:hover:shadow-pink-900/20">
                <Link href="/bootcamp">Register Now</Link>
              </Button>
              <Link
                href="/bootcamp#curriculum"
                className="ml-4 inline-flex font-unbounded items-center text-pink-600 transition-all duration-300 hover:text-pink-700 dark:text-pink-400 dark:hover:text-pink-300 group"
              >
                View Curriculum{' '}
                <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </AnimateInView>
          </AnimateInView>

          <AnimateInView animation="slideLeft" className="relative">
            <div className="aspect-video overflow-hidden rounded-2xl shadow-xl transition-transform duration-500 hover:scale-[1.02] hover:shadow-2xl">
              <Image
                src="/images/bootcamp/bootcamp-banner.png"
                alt="Polkadot Bootcamp"
                width={700}
                height={400}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center justify-between">
                  <div className="rounded-full bg-white/90 px-4 py-2 backdrop-blur-sm">
                    <div className="flex items-center space-x-2">
                      <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                      <span className="text-sm font-medium font-unbounded text-gray-900">
                        Live Sessions Available
                      </span>
                    </div>
                  </div>
                  <div className="rounded-full bg-pink-600/90 px-4 py-2 text-sm font-unbounded font-medium text-white backdrop-blur-sm">
                    30+ Video Lessons
                  </div>
                </div>
              </div>
            </div>
            <AnimateInView animation="scale" delay={0.4} className="absolute -bottom-6 -left-6">
              <div className="rounded-xl bg-white p-4 shadow-lg transition-transform duration-300 hover:scale-105 dark:bg-gray-800">
                <div className="flex items-center space-x-2">
                  <div className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium font-unbounded text-green-800 dark:bg-green-900/30 dark:text-green-300">
                    Now Open
                  </div>
                  <div className="text-sm font-medium font-unbounded text-gray-600 dark:text-gray-300">
                    Limited Spots Available
                  </div>
                </div>
              </div>
            </AnimateInView>
          </AnimateInView>
        </div>
      </div>
    </section>
  );
}
