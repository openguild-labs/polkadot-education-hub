import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import LearningPathVisualization, {
  Course,
} from '@/components/learning-path/learning-path-visualization';
import AnimateInView from '@/components/animations/animate-in-view';

// Sample course data with prerequisites and positions
const courseData: Course[] = [
  // Beginner courses
  {
    id: 'rust-basics',
    title: 'Rust Programming Basics',
    description:
      'Learn the fundamentals of Rust programming language, the foundation of Polkadot development.',
    level: 'beginner',
    category: 'Rust',
    duration: '10 hours',
    prerequisites: [],
    position: { x: 100, y: 100 },
  },
  {
    id: 'blockchain-fundamentals',
    title: 'Blockchain Fundamentals',
    description: 'Understand the core concepts of blockchain technology and distributed systems.',
    level: 'beginner',
    category: 'Blockchain',
    duration: '8 hours',
    prerequisites: [],
    position: { x: 400, y: 100 },
  },
  {
    id: 'polkadot-intro',
    title: 'Introduction to Polkadot',
    description: 'Get familiar with the Polkadot ecosystem, its architecture, and key components.',
    level: 'beginner',
    category: 'Polkadot',
    duration: '6 hours',
    prerequisites: ['blockchain-fundamentals'],
    position: { x: 400, y: 250 },
  },

  // Intermediate courses
  {
    id: 'rust-advanced',
    title: 'Advanced Rust Programming',
    description:
      'Master advanced Rust concepts including ownership, traits, and async programming.',
    level: 'intermediate',
    category: 'Rust',
    duration: '15 hours',
    prerequisites: ['rust-basics'],
    position: { x: 100, y: 250 },
  },
  {
    id: 'substrate-intro',
    title: 'Introduction to Substrate',
    description: 'Learn the basics of Substrate, the blockchain framework powering Polkadot.',
    level: 'intermediate',
    category: 'Substrate',
    duration: '12 hours',
    prerequisites: ['rust-advanced', 'polkadot-intro'],
    position: { x: 250, y: 400 },
  },
  {
    id: 'ink-smart-contracts',
    title: 'ink! Smart Contracts',
    description:
      "Develop smart contracts using ink!, Substrate's Rust-based smart contract language.",
    level: 'intermediate',
    category: 'Smart Contracts',
    duration: '14 hours',
    prerequisites: ['rust-advanced', 'polkadot-intro'],
    position: { x: 550, y: 400 },
  },
  {
    id: 'frame-pallets',
    title: 'FRAME Pallets Development',
    description:
      "Build custom runtime modules using FRAME, Substrate's runtime development framework.",
    level: 'intermediate',
    category: 'Substrate',
    duration: '16 hours',
    prerequisites: ['substrate-intro'],
    position: { x: 250, y: 550 },
  },

  // Advanced courses
  {
    id: 'parachain-development',
    title: 'Parachain Development',
    description: 'Build and deploy your own parachain on the Polkadot network.',
    level: 'advanced',
    category: 'Polkadot',
    duration: '20 hours',
    prerequisites: ['frame-pallets'],
    position: { x: 250, y: 700 },
  },
  {
    id: 'xcm-integration',
    title: 'Cross-Chain Messaging (XCM)',
    description: 'Implement cross-chain communication between parachains using XCM.',
    level: 'advanced',
    category: 'Polkadot',
    duration: '18 hours',
    prerequisites: ['parachain-development'],
    position: { x: 250, y: 850 },
  },
  {
    id: 'advanced-smart-contracts',
    title: 'Advanced Smart Contract Patterns',
    description: 'Master advanced patterns and optimizations for ink! smart contracts.',
    level: 'advanced',
    category: 'Smart Contracts',
    duration: '16 hours',
    prerequisites: ['ink-smart-contracts'],
    position: { x: 550, y: 550 },
  },
  {
    id: 'defi-on-polkadot',
    title: 'Building DeFi on Polkadot',
    description: 'Develop decentralized finance applications on the Polkadot ecosystem.',
    level: 'advanced',
    category: 'DeFi',
    duration: '25 hours',
    prerequisites: ['advanced-smart-contracts', 'xcm-integration'],
    position: { x: 400, y: 1000 },
  },
];

export default function LearningRoadmapPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <AnimateInView animation="fadeIn">
              <h1 className="font-heading text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                Polkadot Learning Roadmap
              </h1>
            </AnimateInView>
            <AnimateInView animation="slideUp" delay={0.1}>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                Visualize your learning journey with our interactive roadmap showing course
                prerequisites and relationships
              </p>
            </AnimateInView>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8 rounded-xl bg-white p-6 shadow-md dark:bg-gray-800">
          <h2 className="mb-4 text-2xl font-bold">How to Use This Roadmap</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900">
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-300">
                1
              </div>
              <h3 className="mb-2 font-bold">Explore the Map</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Pan and zoom to navigate the roadmap. Courses are color-coded by difficulty level.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900">
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-300">
                2
              </div>
              <h3 className="mb-2 font-bold">Click on Courses</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Click on any course to see details, prerequisites, and recommended next courses.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900">
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-300">
                3
              </div>
              <h3 className="mb-2 font-bold">Follow the Path</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Follow the connecting lines to see the recommended learning path from beginner to
                advanced.
              </p>
            </div>
          </div>
        </div>

        {/* Visualization */}
        <div className="mb-8 rounded-xl border border-gray-200 bg-white p-6 shadow-md dark:border-gray-800 dark:bg-gray-800">
          <h2 className="mb-6 text-2xl font-bold">Interactive Learning Path</h2>
          <div className="h-[600px]">
            <LearningPathVisualization courses={courseData} />
          </div>
        </div>

        {/* Additional information */}
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-md dark:border-gray-800 dark:bg-gray-800">
            <h2 className="mb-4 text-xl font-bold">Learning Path Recommendations</h2>
            <p className="mb-4 text-gray-600 dark:text-gray-300">
              Our recommended learning paths are designed to guide you through the Polkadot
              ecosystem in a structured way. Start with the fundamentals and progress to advanced
              topics as you build your skills.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="mb-1 font-bold text-green-600 dark:text-green-400">Beginner Path</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Start with Rust Basics → Blockchain Fundamentals → Introduction to Polkadot
                </p>
              </div>
              <div>
                <h3 className="mb-1 font-bold text-blue-600 dark:text-blue-400">
                  Intermediate Path
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Continue with Advanced Rust → Substrate Introduction → FRAME Pallets or ink! Smart
                  Contracts
                </p>
              </div>
              <div>
                <h3 className="mb-1 font-bold text-purple-600 dark:text-purple-400">
                  Advanced Path
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Master Parachain Development → XCM Integration → DeFi on Polkadot
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-md dark:border-gray-800 dark:bg-gray-800">
            <h2 className="mb-4 text-xl font-bold">Need Personalized Guidance?</h2>
            <p className="mb-6 text-gray-600 dark:text-gray-300">
              Not sure where to start? Take our skills assessment to get a personalized learning
              path based on your current knowledge and goals.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button className="rounded-full bg-pink-600 hover:bg-pink-500">
                Take Skills Assessment
              </Button>
              <Button variant="outline" className="rounded-full">
                <Link href="/bootcamp" className="flex items-center">
                  Join Bootcamp <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-pink-600 to-purple-600 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold sm:text-4xl">
              Ready to Start Your Learning Journey?
            </h2>
            <p className="mt-4 text-lg text-white/80">
              Explore our comprehensive courses and follow the roadmap to become a Polkadot expert.
            </p>
            <div className="mt-8">
              <Button
                size="lg"
                className="rounded-full bg-white px-8 py-6 text-lg font-semibold text-pink-600 shadow-lg transition-all hover:bg-gray-100 hover:shadow-white/20"
              >
                <Link href="/courses">Browse All Courses</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
