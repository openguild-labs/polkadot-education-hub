'use client';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Book, Boxes, Code, Rocket, Layers, GraduationCap, Play, X } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { motion, AnimatePresence } from 'framer-motion';
import { bootcampPolkadotSdkVideos } from '@/constants';
import { useState } from 'react';

export type BundleItem = {
  title: string;
  category: string;
  format: string;
  status: string;
  durationMinutes?: number;
  description?: string;
  link?: string;
  createdBy?: string;
};

export type Bundle = {
  name: string;
  description: string;
  items: BundleItem[];
};

const generalMaterials: BundleItem[] = [
  {
    title: 'Introduction video to introduce about the bootcamp',
    category: 'General materials',
    format: 'Reading, Video',
    status: 'Not started',
    durationMinutes: 5,
    description:
      "Introduce about the purpose of the bootcamp, Polkadot ecosystem and quick walk through of the bootcamp's materials. We also need to introduce about opportunities that the bootcamp brings to the learners.",
    link: '',
    createdBy: 'OpenGuild Team',
  },
];

export const bundlesData: Bundle[] = [
  {
    name: 'Bundle 1: Getting familiar with Rust & Substrate',
    description:
      'Master the fundamentals of Rust programming and Substrate framework to build your foundation for blockchain development.',
    items: [
      {
        title: 'Rust programming language (curriculum anchor)',
        category: 'Bundle 1',
        format: 'Reading',
        status: 'Done',
        description: 'Module to introduce learners about Rust and Substrate programming.',
        link: 'https://bootcamp.openguild.wtf/curriculum#rust-programming-language',
        createdBy: 'OpenGuild Team',
      },
    ],
  },
  {
    name: 'Bundle 2: Basic fundamentals of blockchain programming',
    description:
      'Understand blockchain architecture, different programming approaches, and how Polkadot enables scalable blockchain development.',
    items: [
      {
        title: '2.1 - What is a blockchain?',
        category: 'Bundle 2',
        format: 'Reading, Video',
        status: 'Not started',
        durationMinutes: 15,
        description:
          'Introduction about blockchain and the applications of blockchain to the financial world.',
        link: '',
        createdBy: 'OpenGuild Team',
      },
      {
        title: '2.2 - Introduction to different types of blockchain programming',
        category: 'Bundle 2',
        format: 'Reading, Video',
        status: 'Not started',
        durationMinutes: 15,
        description:
          'Introduction to different types of blockchain programming: Smart contract programming, blockchain engineering, security researching & auditing…',
        link: '',
        createdBy: 'OpenGuild Team',
      },
      {
        title: '2.3 - Blockchain programming on Polkadot',
        category: 'Bundle 2',
        format: 'Reading, Video',
        status: 'Not started',
        durationMinutes: 15,
        description: 'Go through different paths of development on Polkadot.',
        link: 'https://docs.polkadot.com/develop/',
        createdBy: 'OpenGuild Team',
      },
    ],
  },
  {
    name: 'Bundle 3: Getting familiar with Polkadot SDK',
    description:
      'Learn to build blockchains from scratch using Polkadot SDK, covering runtime development, storage, hooks, and APIs.',
    items: [
      {
        title: '3.1 - Introduce about Polkadot & Polkadot SDK',
        category: 'Bundle 3',
        format: 'Reading, Video',
        status: 'Done',
        durationMinutes: 8,
        description:
          "We'll introduce you to the Polkadot network, its revolutionary blockchain architecture, and the Polkadot SDK that powers developers to build scalable, interoperable blockchains.",
        link: 'https://www.youtube.com/watch?v=h-a0_i5WomA',
        createdBy: 'OpenGuild Team',
      },
      {
        title: '3.2 - Create a blockchain with Polkadot SDK',
        category: 'Bundle 3',
        format: 'Reading, Video',
        status: 'Done',
        durationMinutes: 20,
        description:
          'Create a blockchain from scratch using the Polkadot SDK. Fundamentals of Substrate-based development and customization.',
        link: 'https://www.youtube.com/watch?v=5G6YazQnPI4',
        createdBy: 'OpenGuild Team',
      },
      {
        title: '3.3 - Build a state machine from scratch',
        category: 'Bundle 3',
        format: 'Reading, Video',
        status: 'Done',
        durationMinutes: 120,
        description:
          'Build the foundational state machine and understand state transitions and lifecycle.',
        link: 'https://www.youtube.com/watch?v=QettrQIXA1c&t=1s',
        createdBy: 'OpenGuild Team',
      },
      {
        title: '3.4 - Adding a custom logic to a Runtime',
        category: 'Bundle 3',
        format: 'Reading, Video',
        status: 'Done',
        durationMinutes: 52,
        description:
          'Add custom logic to your blockchain runtime using the Polkadot SDK to tailor chain behavior.',
        link: 'https://www.youtube.com/watch?v=diMgOaIYo-s',
        createdBy: 'OpenGuild Team',
      },
      {
        title: '3.5 - Common Runtime Modules',
        category: 'Bundle 3',
        format: 'Reading, Video',
        status: 'Done',
        durationMinutes: 10,
        description: 'Overview of commonly used runtime modules and their functionalities.',
        link: 'https://www.youtube.com/watch?v=zCIvp_P5atY',
        createdBy: 'OpenGuild Team',
      },
      {
        title: '3.6 - Substrate Storage Abstractions & Common Storage',
        category: 'Bundle 3',
        format: 'Reading, Video',
        status: 'Done',
        durationMinutes: 24,
        description:
          'Storage abstraction in Substrate and common storage types for efficient on-chain data.',
        link: 'https://www.youtube.com/watch?v=Fco3oc1JuoI&index=8&list=PLnhzaKpksqOKiqu9DDjGnmZWB0hYTaOUC',
        createdBy: 'OpenGuild Team',
      },
      {
        title: '3.7 - Hooks',
        category: 'Bundle 3',
        format: 'Reading, Video',
        status: 'Done',
        durationMinutes: 12,
        description:
          'What hooks are, how they work, and how to implement them for lifecycle management.',
        link: 'https://www.youtube.com/watch?v=jGLb5Jlh8WI&index=9&list=PLnhzaKpksqOKiqu9DDjGnmZWB0hYTaOUC',
        createdBy: 'OpenGuild Team',
      },
      {
        title: '3.8 - Runtime API',
        category: 'Bundle 3',
        format: 'Video',
        status: 'Done',
        durationMinutes: 5,
        description:
          'Expose runtime logic to external nodes via Runtime APIs to build interactive solutions.',
        link: 'https://www.youtube.com/watch?v=BTz39Kzlv-U&index=10&list=PLnhzaKpksqOKiqu9DDjGnmZWB0hYTaOUC',
        createdBy: 'OpenGuild Team',
      },
      {
        title: '3.9 - Interact with Substrate node on PolkadotJS Apps',
        category: 'Bundle 3',
        format: 'Video',
        status: 'Done',
        durationMinutes: 9,
        description:
          'Interact with a Substrate node using PolkadotJS Apps: test transactions, query storage, etc.',
        link: 'https://www.youtube.com/watch?v=uMaSEWajHT0&index=11&list=PLnhzaKpksqOKiqu9DDjGnmZWB0hYTaOUC',
        createdBy: 'OpenGuild Team',
      },
    ],
  },
  {
    name: 'Bundle 4: Advanced Polkadot SDK',
    description:
      'Master advanced concepts including parachains, XCM messaging, and cross-chain communication for building sophisticated blockchain applications.',
    items: [
      {
        title: 'Understanding the sharded network design on Polkadot',
        category: 'Bundle 4: External ecosystem materials',
        format: 'Reading',
        status: 'Done',
        description: "Deep dive into Polkadot's sharded (multi-chain) network design.",
        link: 'https://bootcamp.openguild.wtf/building-a-blockchain-with-polkadot-sdk/polkadot/additional-reads/understanding-the-sharded-network-design-of-polkadot',
        createdBy: 'OpenGuild Team',
      },
      {
        title: '4.1 - Mainnet, Testnet and Canary Network',
        category: 'Bundle 4',
        format: 'Video',
        status: 'Done',
        durationMinutes: 7,
        description:
          'Purpose of each environment and best practices for deploying and testing your blockchain.',
        link: 'https://www.youtube.com/watch?v=HL0Y0vseNuE&index=12&list=PLnhzaKpksqOKiqu9DDjGnmZWB0hYTaOUC',
        createdBy: 'OpenGuild Team',
      },
      {
        title: '4.2 - Bump a Polkadot SDK codebase',
        category: 'Bundle 4',
        format: 'Video',
        status: 'Done',
        durationMinutes: 18,
        description:
          'How to bump a Polkadot SDK version for latest features, security and optimizations.',
        link: 'https://www.youtube.com/watch?v=6nhIZmE1Nck&index=13&list=PLnhzaKpksqOKiqu9DDjGnmZWB0hYTaOUC',
        createdBy: 'OpenGuild Team',
      },
      {
        title: '4.3 - Path of Parachain blocks',
        category: 'Bundle 4',
        format: 'Video',
        status: 'Done',
        durationMinutes: 25,
        description: 'Breakdown of parachain block path: data flow, validation, consensus.',
        link: 'https://www.youtube.com/watch?v=qv_kCjFvq8k&index=14&list=PLnhzaKpksqOKiqu9DDjGnmZWB0hYTaOUC',
        createdBy: 'OpenGuild Team',
      },
      {
        title: '4.4 - Introduce to Cumulus',
        category: 'Bundle 4',
        format: 'Video',
        status: 'Done',
        durationMinutes: 19,
        description: 'Cumulus overview and how it connects parachains to the relay chain.',
        link: 'https://www.youtube.com/watch?v=97qt3AdZZnQ&index=14&list=PLnhzaKpksqOKiqu9DDjGnmZWB0hYTaOUC',
        createdBy: 'OpenGuild Team',
      },
      {
        title: '4.5 - Connect A Parachain To Relaychain Network',
        category: 'Bundle 4',
        format: 'Video',
        status: 'Done',
        durationMinutes: 30,
        description: 'Step-by-step: configure and register parachain for network integration.',
        link: 'https://www.youtube.com/watch?v=1epyfBorXI8&index=16&list=PLnhzaKpksqOKiqu9DDjGnmZWB0hYTaOUC',
        createdBy: 'OpenGuild Team',
      },
      {
        title: '4.6 - Introduction to XCM, Transport Protocols & XCVM',
        category: 'Bundle 4',
        format: 'Video',
        status: 'Done',
        durationMinutes: 27,
        description: 'Basics of XCM, transport protocol, and XCVM.',
        link: 'https://www.youtube.com/watch?v=4dcqMtPOlbk&index=17&list=PLnhzaKpksqOKiqu9DDjGnmZWB0hYTaOUC',
        createdBy: 'OpenGuild Team',
      },
      {
        title: '4.7 - XCM Fundamentals with Locations & Assets',
        category: 'Bundle 4',
        format: 'Video',
        status: 'Done',
        durationMinutes: 27,
        description:
          'Location concepts, asset transfers, and fundamentals of cross-chain messaging.',
        link: 'https://www.youtube.com/watch?v=bd-vz5E2Vyk&index=18&t=7s&list=PLnhzaKpksqOKiqu9DDjGnmZWB0hYTaOUC',
        createdBy: 'OpenGuild Team',
      },
      {
        title: '4.8 - Teleport, Transfers and Transact',
        category: 'Bundle 4',
        format: 'Video',
        status: 'Done',
        durationMinutes: 28,
        description:
          'Use Teleport, Transfer, and Transact to move assets and execute transactions across chains.',
        link: 'https://www.youtube.com/watch?v=GQU3EXX8v4Q&index=19&t=304s&list=PLnhzaKpksqOKiqu9DDjGnmZWB0hYTaOUC',
        createdBy: 'OpenGuild Team',
      },
    ],
  },
  {
    name: 'Bundle 5: Polkadot 2.0',
    description:
      'Explore the future of Polkadot with agile coretime, elastic scaling, asynchronous backing, and the new development portal.',
    items: [
      {
        title: '5.1 - Polkadot 2.0 Roadmap',
        category: 'Bundle 5',
        format: 'Video',
        status: 'Not started',
        description: 'Introduction to the Polkadot 2.0 roadmap.',
        link: 'https://polkadot.com/platform/',
        createdBy: 'OpenGuild Team',
      },
      {
        title: '5.2 - Introduction to Agile Coretime & Coretime Marketplace',
        category: 'Bundle 5',
        format: 'Video',
        status: 'Not started',
        durationMinutes: 15,
        description:
          'Introduction to agile coretime and how to acquire new cores for your parachain on the coretime marketplace.',
        link: '',
        createdBy: 'OpenGuild Team',
      },
      {
        title:
          '5.3 - Introduction to Elastic Scaling and how to enable elastic scaling on the runtime',
        category: 'Bundle 5',
        format: 'Video',
        status: 'Not started',
        durationMinutes: 20,
        description: 'Guide developers on enabling elastic scaling in the parachain runtime.',
        link: '',
        createdBy: 'OpenGuild Team',
      },
      {
        title: '5.4 - Introduction to Asynchronous Backing',
        category: 'Bundle 5',
        format: 'Video',
        status: 'Not started',
        description:
          "Elevating Polkadot's performance and scale with asynchronous backing (blog post).",
        link: 'https://polkadot.com/blog/elevating-polkadots-performance-and-scale-with-asynchronous-backing/',
        createdBy: 'OpenGuild Team',
      },
      {
        title: '5.5 - Polkadot Development Portal',
        category: 'Bundle 5',
        format: 'Video',
        status: 'Not started',
        description: 'Follow coretime and DevPortal updates for builders.',
        link: 'https://x.com/PolkadotDeploy',
        createdBy: 'OpenGuild Team',
      },
    ],
  },
];

const bundleIcon = (name: string) => {
  if (name.startsWith('Bundle 1')) return <Book className="h-5 w-5 text-pink-600" />;
  if (name.startsWith('Bundle 2')) return <Boxes className="h-5 w-5 text-pink-600" />;
  if (name.startsWith('Bundle 3')) return <Code className="h-5 w-5 text-pink-600" />;
  if (name.startsWith('Bundle 4')) return <Layers className="h-5 w-5 text-pink-600" />;
  if (name.startsWith('Bundle 5')) return <Rocket className="h-5 w-5 text-pink-600" />;
  return <GraduationCap className="h-5 w-5 text-pink-600" />;
};

const Chip = ({ children }: { children: React.ReactNode }) => (
  <span className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-800 dark:bg-gray-800 dark:text-gray-200">
    {children}
  </span>
);

function getSdkVideosForBundle(name: string) {
  // Bundle 3 -> sections 1-5; Bundle 4 -> sections 6-10; otherwise none
  if (name.startsWith('Bundle 3')) {
    const allowed = new Set(['section1', 'section2', 'section3', 'section4', 'section5']);
    return bootcampPolkadotSdkVideos.filter(v => allowed.has(v.section));
  }
  if (name.startsWith('Bundle 4')) {
    const allowed = new Set(['section6', 'section7', 'section8', 'section9', 'section10']);
    return bootcampPolkadotSdkVideos.filter(v => allowed.has(v.section));
  }
  return [];
}

function BundleDialog({ bundle }: { bundle: Bundle }) {
  const [isOpen, setIsOpen] = useState(false);
  const videos = getSdkVideosForBundle(bundle.name);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Card className="group cursor-pointer border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] dark:border-gray-800">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-pink-100 to-purple-100 shadow-sm transition-transform group-hover:scale-110 dark:from-pink-900/30 dark:to-purple-900/30">
                {bundleIcon(bundle.name)}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-bold text-gray-900 transition-colors group-hover:text-pink-600 dark:text-gray-100 dark:group-hover:text-pink-400">
                  {bundle.name}
                </h3>
                <div className="mt-1 flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                  <span className="flex items-center gap-1">
                    <Book className="h-4 w-4" />
                    {bundle.items.length} items
                  </span>
                  {videos.length > 0 && (
                    <span className="flex items-center gap-1">
                      <Play className="h-4 w-4" />
                      {videos.length} videos
                    </span>
                  )}
                </div>
              </div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 transition-all group-hover:bg-pink-100 dark:bg-gray-800 dark:group-hover:bg-pink-900/30">
                <Play className="h-4 w-4 text-gray-400 transition-colors group-hover:text-pink-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent className="max-w-5xl p-0 sm:rounded-2xl overflow-hidden">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative flex h-full max-h-[90vh] flex-col overflow-hidden"
            >
              {/* Enhanced Header */}
              <div className="relative h-40 w-full overflow-hidden sm:h-48">
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  }}
                ></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="gap-4 py-4"
                  >
                    <div>
                      <h2 className="text-2xl font-bold text-black font-unbounded">
                        {bundle.name}
                      </h2>
                      <p className="mt-3 text-lg text-black/80 leading-relaxed max-w-2xl">
                        {bundle.description}
                      </p>
                      <div className="mt-4 flex items-center gap-4 text-black/90">
                        <span className="flex items-center gap-2">
                          <Book className="h-4 w-4" />
                          {bundle.items.length} learning items
                        </span>
                        {videos.length > 0 && (
                          <span className="flex items-center gap-2">
                            <Play className="h-4 w-4" />
                            {videos.length} video lessons
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Content Area */}
              <div className="flex-1 overflow-auto">
                <div className="p-6">
                  {/* Items Section */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-6 w-1 rounded-full bg-gradient-to-b from-pink-500 to-purple-600"></div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                        Learning Items
                      </h3>
                      <Badge variant="secondary" className="ml-auto">
                        {bundle.items.length} items
                      </Badge>
                    </div>

                    <div className="grid gap-4 md:grid-cols-1">
                      {bundle.items.map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-pink-200 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-pink-800"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-pink-50 to-purple-50 opacity-0 transition-opacity group-hover:opacity-100 dark:from-pink-950/20 dark:to-purple-950/20"></div>
                          <div className="relative">
                            <div className="mb-3 flex items-start justify-between">
                              <div className="flex-1 min-w-0">
                                <div className="text-base font-semibold text-gray-900 dark:text-gray-100">
                                  {item.link ? (
                                    <a
                                      href={item.link}
                                      target="_blank"
                                      rel="noreferrer"
                                      className="hover:text-pink-600 transition-colors"
                                    >
                                      {item.title}
                                    </a>
                                  ) : (
                                    item.title
                                  )}
                                </div>
                                {item.description && (
                                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
                                    {item.description}
                                  </p>
                                )}
                              </div>
                              {item.link && (
                                <div className="ml-3 flex-shrink-0">
                                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-pink-100 text-pink-600 transition-all group-hover:scale-110 dark:bg-pink-900/30">
                                    <Play className="h-4 w-4" />
                                  </div>
                                </div>
                              )}
                            </div>

                            <div className="flex flex-wrap gap-2">
                              <Badge
                                variant="outline"
                                className="text-xs border-pink-200 text-pink-700 dark:border-pink-800 dark:text-pink-300"
                              >
                                {item.format}
                              </Badge>
                              <Badge
                                variant={item.status === 'Done' ? 'default' : 'secondary'}
                                className="text-xs"
                              >
                                {item.status}
                              </Badge>
                              {typeof item.durationMinutes === 'number' && (
                                <Badge variant="outline" className="text-xs">
                                  {item.durationMinutes}m
                                </Badge>
                              )}
                              {item.createdBy && (
                                <Badge variant="outline" className="text-xs">
                                  {item.createdBy}
                                </Badge>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Videos Section */}
                    {videos.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                        className="mt-8 space-y-6"
                      >
                        <div className="flex items-center gap-3">
                          <div className="h-6 w-1 rounded-full bg-gradient-to-b from-blue-500 to-cyan-600"></div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                            Video Lessons
                          </h3>
                          <Badge variant="secondary" className="ml-auto">
                            {videos.length} videos
                          </Badge>
                        </div>

                        <div className="grid gap-4 md:grid-cols-1">
                          {videos.map((video, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.3 + index * 0.1 }}
                              className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-blue-200 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-800"
                            >
                              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-cyan-50 opacity-0 transition-opacity group-hover:opacity-100 dark:from-blue-950/20 dark:to-cyan-950/20"></div>
                              <div className="relative">
                                <div className="mb-3 flex items-start justify-between">
                                  <div className="flex-1 min-w-0">
                                    <a
                                      href={video.url}
                                      target="_blank"
                                      rel="noreferrer"
                                      className="text-base font-semibold text-gray-900 hover:text-blue-600 transition-colors dark:text-gray-100"
                                    >
                                      {video.title}
                                    </a>
                                    {video.description && (
                                      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
                                        {video.description}
                                      </p>
                                    )}
                                  </div>
                                  <div className="ml-3 flex-shrink-0">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600 transition-all group-hover:scale-110 dark:bg-blue-900/30">
                                      <Play className="h-4 w-4" />
                                    </div>
                                  </div>
                                </div>

                                <div className="flex items-center gap-2">
                                  <Badge
                                    variant="outline"
                                    className="text-xs border-blue-200 text-blue-700 dark:border-blue-800 dark:text-blue-300"
                                  >
                                    Video
                                  </Badge>
                                  <Badge variant="outline" className="text-xs">
                                    Polkadot SDK
                                  </Badge>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}

export const BundlesSection = () => {
  return (
    <section id="bundles" className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="section-title">Learning Bundles</h2>
          <p className="section-description mx-auto">
            Curated items (videos, reads) aligned to your APAC Bootcamp plan
          </p>
        </div>

        {generalMaterials.length > 0 && (
          <Card className="mb-8 border-0 shadow-xl ring-1 ring-black/5 dark:ring-white/10 bg-white dark:bg-gray-900">
            <CardContent className="p-6">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-100 dark:bg-pink-900/30">
                  <GraduationCap className="h-5 w-5 text-pink-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  General Materials
                </h3>
              </div>
              <div className="mt-4 space-y-3">
                {generalMaterials.map((it, gi) => (
                  <div
                    key={gi}
                    className="rounded-lg border border-gray-200 p-4 dark:border-gray-800"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <div className="text-base font-semibold text-gray-900 dark:text-gray-100 truncate">
                          {it.link ? (
                            <a
                              href={it.link}
                              target="_blank"
                              rel="noreferrer"
                              className="hover:underline"
                            >
                              {it.title}
                            </a>
                          ) : (
                            it.title
                          )}
                        </div>
                        {it.description && (
                          <p className="mt-1 text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                            {it.description}
                          </p>
                        )}
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <div className="flex flex-wrap justify-end gap-2">
                          <Badge variant="secondary" className="text-xs">
                            {it.format}
                          </Badge>
                          <Chip>{it.status}</Chip>
                          {typeof it.durationMinutes === 'number' && (
                            <Chip>{it.durationMinutes}m</Chip>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Bundle cards - one row per bundle */}
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {bundlesData.map((bundle, idx) => (
            <BundleDialog key={idx} bundle={bundle} />
          ))}
        </div>
      </div>
    </section>
  );
};
