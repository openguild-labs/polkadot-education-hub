import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  CheckCircle,
  Calendar,
  Clock,
  Users,
  Award,
  Book,
  Video,
  Presentation,
  User,
} from 'lucide-react';
import { HeroLayout } from '@/components/hero';
import { BundlesSection } from './bundles';
import AnimateInView from '@/components/animations/animate-in-view';
import { ProtocolFeatureCard } from '@/components/protocol-feature-card';
import { learningResources, courses, technicalVideos, workshops } from '@/constants';

export default function BootcampPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <HeroLayout
        title={
          <span>
            <span className="text-pink-600">Polkadot 2.0</span> APAC Bootcamp
          </span>
        }
        subtitle="Bootcamp series to learn about Polkadot SDK development and Polkadot 2.0 new technologieis, designed for APAC region."
        primaryButton={{ href: '#curriculum', text: 'View Curriculum' }}
        secondaryButton={{ href: '#register', text: 'Register Now' }}
      />
      {/* Why Learn Polkadot Section */}
      <AnimateInView animation="fadeIn">
        <section className="bg-gray-50 py-16 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="mx-auto w-full text-center">
              <AnimateInView animation="slideUp">
                <h2 className="section-title font-unbounded">Why Learn Polkadot?</h2>
                <p className="section-description text-md mx-auto font-unbounded">
                  Polkadot is a platform that enables innovators and changemakers to build and
                  connect blockchains, creating a more decentralized and interconnected world.
                </p>
              </AnimateInView>
              <div className="mt-12 grid gap-8 md:grid-cols-2 sm:grid-cols-1">
                {[
                  {
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-link"
                      >
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                      </svg>
                    ),
                    title: 'Interoperability',
                    description:
                      "Connect multiple blockchains with Polkadot's cross-chain messaging system, allowing seamless communication between parachains.",
                    image: '/images/polkadot-graphics/Polkadot_Asset_05.png',
                  },
                  {
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-shield"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                      </svg>
                    ),
                    title: 'Security',
                    description:
                      'Benefit from shared security across the network, allowing smaller blockchains to leverage the security of the entire ecosystem.',
                    image: '/images/polkadot-graphics/Polkadot_Asset_21.png',
                  },
                  {
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-zap"
                      >
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                      </svg>
                    ),
                    title: 'Scalability',
                    description:
                      "Process multiple transactions in parallel across different parachains, significantly increasing the network's throughput.",
                    image: '/images/polkadot-graphics/Polkadot_Asset_11.png',
                  },
                  {
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-users"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <path d="M17 7h2a2 2 0 1 1 0 4h-2a2 2 0 0 1 0-4zM19 7a2 2 0 1 1 0 4h2a2 2 0 0 1 0 4h-2a2 2 0 0 1 0-4"></path>
                      </svg>
                    ),
                    title: 'Governance',
                    description:
                      'Benefit from on-chain governance, allowing the community to vote on proposals that shape the future of the network.',
                    image: '/images/polkadot-graphics/Polkadot_Asset_25.png',
                  },
                ].map((feature, index) => (
                  <AnimateInView animation="slideUp" delay={0.1 * index}>
                    <ProtocolFeatureCard
                      icon={feature.icon}
                      title={feature.title}
                      description={feature.description}
                      image={feature.image}
                    />
                  </AnimateInView>
                ))}
              </div>
            </div>
          </div>
        </section>
      </AnimateInView>

      {/* Stats Section */}
      <AnimateInView animation="fadeIn">
        <section
          className="py-12 relative isolate overflow-hidden"
          style={{
            backgroundImage: 'url(/images/backgrounds/gradient-bg-4.png)',
            backgroundSize: 'cover',
          }}
        >
          <div className="container mx-auto px-4">
            <div className="grid gap-6 text-black md:grid-cols-4">
              <AnimateInView
                animation="scale"
                delay={0.1}
                className="text-center shadow-lg bg-white p-6 rounded-xl"
              >
                <div className="text-4xl font-bold flex items-center justify-center font-unbounded">
                  <Book className="text-pink-600 mr-2" /> {learningResources.length}+
                </div>
                <div className="mt-2 text-black/80 font-unbounded">Learning Resources</div>
              </AnimateInView>
              <AnimateInView
                animation="scale"
                delay={0.2}
                className="text-center shadow-lg bg-white p-6 rounded-xl"
              >
                <div className="text-4xl font-bold flex items-center justify-center font-unbounded">
                  <Video className="text-pink-600 mr-2" /> {courses.length + technicalVideos.length}
                  +
                </div>
                <div className="mt-2 text-black/80 font-unbounded">Video Tutorials</div>
              </AnimateInView>
              <AnimateInView
                animation="scale"
                delay={0.3}
                className="text-center shadow-lg bg-white p-6 rounded-xl"
              >
                <div className="text-4xl font-bold flex items-center justify-center font-unbounded">
                  <Presentation className="text-pink-600 mr-2" /> {workshops.length}+
                </div>
                <div className="mt-2 text-black/80 font-unbounded">Workshops</div>
              </AnimateInView>
              <AnimateInView
                animation="scale"
                delay={0.4}
                className="text-center shadow-lg bg-white p-6 rounded-xl"
              >
                <div className="text-4xl font-bold flex items-center justify-center font-unbounded">
                  <User className="text-pink-600 mr-2" /> 1,000+
                </div>
                <div className="mt-2 text-black/80 font-unbounded">Students Registered</div>
              </AnimateInView>
            </div>
          </div>
        </section>
      </AnimateInView>
      {/* Bootcamp Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto">
            <div className="grid gap-8 md:grid-cols-2">
              {/** TODO: Enable when bootcamp info is available */}
              <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
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
              </div>
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

      <BundlesSection />

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
