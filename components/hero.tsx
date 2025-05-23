import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import AnimatedBackground from '@/components/animations/animated-background';
import FloatingIcons from '@/components/animations/floating-icons';
import AnimateInView from '@/components/animations/animate-in-view';

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-white dark:bg-gray-950">
      <AnimatedBackground />
      <FloatingIcons />

      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl text-center">
          <AnimateInView animation="fadeIn" duration={0.8}>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              Polkadot Builders <span className="text-pink-600">Education Hub</span>
            </h1>
          </AnimateInView>

          <AnimateInView animation="slideUp" delay={0.2} duration={0.8}>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Your comprehensive resource for learning Polkadot blockchain development. From
              beginner courses to advanced workshops, we provide everything you need to build on the
              Polkadot ecosystem.
            </p>
          </AnimateInView>

          <AnimateInView animation="slideUp" delay={0.4} duration={0.8}>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button
                size="lg"
                className="rounded-md bg-pink-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-pink-500 hover:shadow-lg hover:shadow-pink-500/25 dark:hover:shadow-pink-500/15 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
              >
                <Link href="#bootcamp">Join Bootcamp</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-md px-6 py-3 text-lg font-semibold transition-all duration-300 hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
              >
                <Link href="#learning-journey" className="flex items-center group">
                  Start Learning
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </AnimateInView>
        </div>
      </div>
    </div>
  );
}
