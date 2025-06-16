import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import FloatingIcons from '@/components/animations/floating-icons';
import AnimateInView from '@/components/animations/animate-in-view';

export interface HeroLayoutProps {
  title: React.ReactNode;
  subtitle: string;
  primaryButton?: {
    href: string;
    text: string;
  };
  secondaryButton?: {
    href: string;
    text: string;
  };
}

export function HeroLayout({ title, subtitle, primaryButton, secondaryButton }: HeroLayoutProps) {
  return (
    <div
      className="relative isolate overflow-hidden"
      style={{
        backgroundImage: 'url(/images/backgrounds/gradient-bg-2.png)',
        backgroundSize: 'cover',
      }}
    >
      <FloatingIcons />
      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-24 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl shadow-lg bg-white/80 px-10 py-14 rounded-3xl flex items-center justify-center flex-col text-center">
          <AnimateInView animation="fadeIn" duration={0.8}>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              {title}
            </h1>
          </AnimateInView>

          <AnimateInView animation="slideUp" delay={0.2} duration={0.8}>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">{subtitle}</p>
          </AnimateInView>

          <AnimateInView animation="slideUp" delay={0.4} duration={0.8}>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              {primaryButton && (
                <Button
                  size="lg"
                  className="rounded-md bg-pink-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-pink-500 hover:shadow-lg hover:shadow-pink-500/25 dark:hover:shadow-pink-500/15 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
                >
                  <Link href={primaryButton.href}>{primaryButton.text}</Link>
                </Button>
              )}
              {secondaryButton && (
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-md px-6 py-3 text-lg font-semibold transition-all duration-300 hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
                >
                  <Link href={secondaryButton.href} className="flex items-center group">
                    {secondaryButton.text}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
              )}
            </div>
          </AnimateInView>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <HeroLayout
      title={
        <span>
          🎓 Polkadot <span className="text-pink-600">Education Hub</span>
        </span>
      }
      subtitle="Your comprehensive resource for learning Polkadot blockchain development. From beginner courses to advanced workshops, we provide everything you need to build on the Polkadot ecosystem."
      primaryButton={{ href: '/bootcamp', text: 'Join Bootcamp' }}
      secondaryButton={{ href: '/learning-path', text: 'Start Learning' }}
    />
  );
}
