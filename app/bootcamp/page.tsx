import Link from 'next/link';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  bootcampPolkadotSdkVideos,
  bootcampSolidityOnPolkaVmVideos,
  extractSection,
} from '@/constants';
import { CheckCircle } from 'lucide-react';
import { HeroLayout } from '@/components/hero';

export default function BootcampPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <HeroLayout
        title={
          <span>
            Open <span className="text-pink-600">Polkadot Bootcamp</span>
          </span>
        }
        subtitle="An intensive, hands-on learning experience to master Polkadot development"
        primaryButton={{ href: '#curriculum', text: 'View Curriculum' }}
        secondaryButton={{ href: '#register', text: 'Register Now' }}
      />
      {/* Bootcamp Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-8 md:grid-cols-1">
              {/** TODO: Enable when bootcamp info is available */}
              {/* <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
                <h2 className="mb-4 font-heading text-2xl font-bold text-gray-900 dark:text-white">
                  Bootcamp Details
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-300">
                      <Calendar className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">Start Date</h3>
                      <p className="text-gray-600 dark:text-gray-300">June 15, 2025</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-300">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">Duration</h3>
                      <p className="text-gray-600 dark:text-gray-300">8 weeks, part-time</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-300">
                      <Users className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">Class Size</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Limited to 50 participants per track
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-300">
                      <Award className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">Certification</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Earn a verified certificate upon completion
                      </p>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
                <h2 className="mb-4 font-heading text-2xl font-bold text-gray-900 dark:text-white">
                  What You'll Learn
                </h2>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                    <p className="text-gray-600 dark:text-gray-300">
                      Build scalable blockchains with Polkadot SDK
                    </p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                    <p className="text-gray-600 dark:text-gray-300">
                      Develop smart contracts with Solidity on PolkaVM
                    </p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                    <p className="text-gray-600 dark:text-gray-300">
                      Master parachain development and deployment
                    </p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                    <p className="text-gray-600 dark:text-gray-300">
                      Implement cross-chain messaging with XCM
                    </p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                    <p className="text-gray-600 dark:text-gray-300">
                      Create and deploy dApps on the Polkadot ecosystem
                    </p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                    <p className="text-gray-600 dark:text-gray-300">
                      Work on real-world projects with industry mentors
                    </p>
                  </div>
                </div>
                <div className="mt-6">
                  <Button className="w-full rounded-full bg-pink-600 text-white hover:bg-pink-500">
                    <Link
                      href="https://openguild.notion.site/156659b1c817802383e0ddb34ad07a25?pvs=105"
                      target="_blank"
                    >
                      Register for Bootcamp
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section id="curriculum" className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="section-title">Bootcamp Curriculum</h2>
            <p className="section-description mx-auto">
              Choose between two specialized tracks to focus your learning journey
            </p>
          </div>

          <Tabs defaultValue="polkadot-sdk" className="mx-auto max-w-5xl">
            <TabsList className="mb-8 grid w-full grid-cols-2">
              <TabsTrigger value="polkadot-sdk" className="text-base">
                Polkadot SDK Track
              </TabsTrigger>
              <TabsTrigger value="polkavm" className="text-base">
                Solidity on PolkaVM Track
              </TabsTrigger>
            </TabsList>

            <TabsContent value="polkadot-sdk" className="space-y-8">
              <Card>
                <CardContent className="p-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        Polkadot SDK Curriculum
                      </h3>
                      <p className="mt-2 text-gray-600 dark:text-gray-300">
                        Learn how to build scalable blockchains using the Polkadot SDK. This track
                        covers everything from basic concepts to advanced parachain development.
                      </p>
                      <div className="mt-4 flex items-center">
                        <div className="rounded-full bg-pink-100 px-3 py-1 text-sm font-medium text-pink-800 dark:bg-pink-900/30 dark:text-pink-300">
                          {bootcampPolkadotSdkVideos.length} videos
                        </div>
                        <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                          • {extractSection(bootcampPolkadotSdkVideos).length} sections
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Course Modules</h3>

                {/* Module list with accordion-like structure */}
                <div className="space-y-4">
                  {[
                    {
                      title: 'Module 1: Introduction to Polkadot & Polkadot SDK',
                      lessons: bootcampPolkadotSdkVideos.slice(0, 2),
                    },
                    {
                      title: 'Module 2: Building Your First Blockchain',
                      lessons: bootcampPolkadotSdkVideos.slice(2, 4),
                    },
                    {
                      title: 'Module 3: Runtime Development',
                      lessons: bootcampPolkadotSdkVideos.slice(4, 9),
                    },
                    {
                      title: 'Module 4: Interacting with Substrate Nodes',
                      lessons: bootcampPolkadotSdkVideos.slice(9, 11),
                    },
                    {
                      title: 'Module 5: Advanced Topics',
                      lessons: bootcampPolkadotSdkVideos.slice(11, 14),
                    },
                    {
                      title: 'Module 6: Parachain Development',
                      lessons: bootcampPolkadotSdkVideos.slice(14, 17),
                    },
                  ].map((module, index) => (
                    <div
                      key={index}
                      className="rounded-lg border border-gray-200 dark:border-gray-800"
                    >
                      <div className="rounded-t-lg bg-gray-50 px-4 py-3 dark:bg-gray-900">
                        <h4 className="font-medium text-gray-900 dark:text-white">
                          {module.title}
                        </h4>
                      </div>
                      <div className="p-4">
                        <div className="space-y-2">
                          {module.lessons.map((lesson, lessonIndex) => (
                            <div key={lessonIndex} className="flex items-start">
                              <div className="mr-2 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-300">
                                {lessonIndex + 1}
                              </div>
                              <div className="text-sm text-gray-700 dark:text-gray-300">
                                {lesson.title}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="polkavm" className="space-y-8">
              <Card>
                <CardContent className="p-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        Solidity on PolkaVM Curriculum
                      </h3>
                      <p className="mt-2 text-gray-600 dark:text-gray-300">
                        Learn how to use Solidity on PolkaVM, a revolutionary smart contract
                        platform built on RISC-V. This track is perfect for Ethereum developers
                        looking to build on Polkadot.
                      </p>
                      <div className="mt-4 flex items-center">
                        <div className="rounded-full bg-pink-100 px-3 py-1 text-sm font-medium text-pink-800 dark:bg-pink-900/30 dark:text-pink-300">
                          {bootcampSolidityOnPolkaVmVideos.length} videos
                        </div>
                        <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                          • {extractSection(bootcampSolidityOnPolkaVmVideos).length} sections
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Course Modules</h3>

                {/* Module list with accordion-like structure */}
                <div className="space-y-4">
                  {[
                    {
                      title: 'Module 1: Introduction to PolkaVM',
                      lessons: bootcampSolidityOnPolkaVmVideos.slice(0, 4),
                    },
                    {
                      title: 'Module 2: Solidity Fundamentals on PolkaVM',
                      lessons: bootcampSolidityOnPolkaVmVideos.slice(4, 8),
                    },
                    {
                      title: 'Module 3: Advanced Smart Contract Development',
                      lessons: bootcampSolidityOnPolkaVmVideos.slice(8, 12),
                    },
                  ].map((module, index) => (
                    <div
                      key={index}
                      className="rounded-lg border border-gray-200 dark:border-gray-800"
                    >
                      <div className="rounded-t-lg bg-gray-50 px-4 py-3 dark:bg-gray-900">
                        <h4 className="font-medium text-gray-900 dark:text-white">
                          {module.title}
                        </h4>
                      </div>
                      <div className="p-4">
                        <div className="space-y-2">
                          {module.lessons.map((lesson, lessonIndex) => (
                            <div key={lessonIndex} className="flex items-start">
                              <div className="mr-2 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-300">
                                {lessonIndex + 1}
                              </div>
                              <div className="text-sm text-gray-700 dark:text-gray-300">
                                {lesson.title}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-16"
        style={{ backgroundImage: 'url(/images/backgrounds/gradient-bg-2.png)' }}
      >
        <div className="container mx-auto px-4 bg-white rounded-3xl py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold sm:text-4xl">
              Ready to Start Your Polkadot Journey?
            </h2>
            <p className="mt-4 text-lg text-black/80">
              Join our bootcamp and become a proficient Polkadot developer. Limited spots available.
            </p>
            <div className="mt-8">
              <Button
                size="lg"
                className="rounded-full bg-pink-600 px-8 py-6 text-lg font-semibold text-white shadow-lg transition-all hover:bg-gray-100 hover:shadow-white/20"
              >
                <Link
                  href="https://openguild.notion.site/156659b1c817802383e0ddb34ad07a25?pvs=105"
                  target="_blank"
                >
                  Register Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
