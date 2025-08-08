import FeaturedCourses from '@/components/featured-courses';
import BootcampPromo from '@/components/bootcamp-promo';
import CategoryShowcase from '@/components/category-showcase';
import Hero from '@/components/hero';
import AnimateInView from '@/components/animations/animate-in-view';
import { courses, learningResources, technicalVideos, workshops } from '@/constants';
import { ProtocolFeatureCard } from '@/components/protocol-feature-card';
import { Book, Presentation, User, Video } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <Hero />

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

      {/* Bootcamp Promo */}
      <BootcampPromo />

      {/* Featured Courses */}
      <FeaturedCourses />

      {/* Category Showcase */}
      <CategoryShowcase />

      {/* Testimonials */}
      {/* <TestimonialSection /> */}
    </div>
  );
}
