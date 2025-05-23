import FeaturedCourses from "@/components/featured-courses"
import BootcampPromo from "@/components/bootcamp-promo"
import TestimonialSection from "@/components/testimonial-section"
import CategoryShowcase from "@/components/category-showcase"
import Hero from "@/components/hero"
import AnimateInView from "@/components/animations/animate-in-view"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <Hero />

      {/* Why Learn Polkadot Section */}
      <AnimateInView animation="fadeIn">
        <section className="bg-gray-50 py-16 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <AnimateInView animation="slideUp">
                <h2 className="section-title">Why Learn Polkadot</h2>
                <p className="section-description mx-auto">
                  Polkadot is a next-generation blockchain platform designed for innovation and scalability
                </p>
              </AnimateInView>

              <div className="mt-12 grid gap-8 md:grid-cols-3">
                <AnimateInView animation="slideUp" delay={0.1}>
                  <div className="rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-gray-800">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-300">
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
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">Interoperability</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Connect multiple blockchains with Polkadot's cross-chain messaging system, allowing seamless
                      communication between parachains.
                    </p>
                  </div>
                </AnimateInView>

                <AnimateInView animation="slideUp" delay={0.2}>
                  <div className="rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-gray-800">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-300">
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
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">Security</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Benefit from shared security across the network, allowing smaller blockchains to leverage the
                      security of the entire ecosystem.
                    </p>
                  </div>
                </AnimateInView>

                <AnimateInView animation="slideUp" delay={0.3}>
                  <div className="rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-gray-800">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-300">
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
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">Scalability</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Process multiple transactions in parallel across different parachains, significantly increasing
                      the network's throughput.
                    </p>
                  </div>
                </AnimateInView>
              </div>
            </div>
          </div>
        </section>
      </AnimateInView>

      {/* Stats Section */}
      <AnimateInView animation="fadeIn">
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid gap-6 rounded-2xl bg-gradient-to-r from-pink-600 to-purple-600 p-8 text-white md:grid-cols-4">
              <AnimateInView animation="scale" delay={0.1} className="text-center">
                <div className="text-4xl font-bold">100+</div>
                <div className="mt-2 text-white/80">Learning Resources</div>
              </AnimateInView>
              <AnimateInView animation="scale" delay={0.2} className="text-center">
                <div className="text-4xl font-bold">30+</div>
                <div className="mt-2 text-white/80">Video Tutorials</div>
              </AnimateInView>
              <AnimateInView animation="scale" delay={0.3} className="text-center">
                <div className="text-4xl font-bold">20+</div>
                <div className="mt-2 text-white/80">Workshops</div>
              </AnimateInView>
              <AnimateInView animation="scale" delay={0.4} className="text-center">
                <div className="text-4xl font-bold">1,000+</div>
                <div className="mt-2 text-white/80">Students Enrolled</div>
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
      <TestimonialSection />
    </div>
  )
}
