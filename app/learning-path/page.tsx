import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, Circle, ExternalLink, ArrowRight } from "lucide-react"
import { learningResources } from "@/constants"

export default function LearningPathPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              Your Polkadot Learning Journey
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Follow our structured learning path to become a proficient Polkadot developer
            </p>
          </div>
        </div>
      </div>

      {/* Learning Path Visualization */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="relative">
              <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-gray-200 dark:bg-gray-800"></div>

              {/* Beginner */}
              <div className="relative mb-16">
                <div className="absolute left-1/2 top-0 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-pink-600 text-white">
                  1
                </div>
                <div className="ml-12 rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
                  <h2 className="mb-2 font-heading text-2xl font-bold text-gray-900 dark:text-white">Beginner</h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    Start your journey with the fundamentals of blockchain, Rust programming, and an introduction to
                    Substrate.
                  </p>
                  <div className="mt-4">
                    <Button
                      variant="outline"
                      className="rounded-full text-pink-600 hover:bg-pink-50 hover:text-pink-700 dark:text-pink-400 dark:hover:bg-pink-950/50 dark:hover:text-pink-300"
                    >
                      <Link href="#beginner">View Beginner Resources</Link>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Intermediate */}
              <div className="relative mb-16">
                <div className="absolute left-1/2 top-0 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-purple-600 text-white">
                  2
                </div>
                <div className="ml-12 rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
                  <h2 className="mb-2 font-heading text-2xl font-bold text-gray-900 dark:text-white">Intermediate</h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    Deepen your knowledge with FRAME pallets, runtime development, and building custom blockchains.
                  </p>
                  <div className="mt-4">
                    <Button
                      variant="outline"
                      className="rounded-full text-purple-600 hover:bg-purple-50 hover:text-purple-700 dark:text-purple-400 dark:hover:bg-purple-950/50 dark:hover:text-purple-300"
                    >
                      <Link href="#intermediate">View Intermediate Resources</Link>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Advanced */}
              <div className="relative">
                <div className="absolute left-1/2 top-0 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-blue-600 text-white">
                  3
                </div>
                <div className="ml-12 rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
                  <h2 className="mb-2 font-heading text-2xl font-bold text-gray-900 dark:text-white">Advanced</h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    Master advanced topics like parachain development, cross-chain messaging (XCM), and consensus
                    mechanisms.
                  </p>
                  <div className="mt-4">
                    <Button
                      variant="outline"
                      className="rounded-full text-blue-600 hover:bg-blue-50 hover:text-blue-700 dark:text-blue-400 dark:hover:bg-blue-950/50 dark:hover:text-blue-300"
                    >
                      <Link href="#advanced">View Advanced Resources</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Resources */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="beginner" className="mx-auto max-w-5xl">
            <TabsList className="mb-8 grid w-full grid-cols-3">
              <TabsTrigger value="beginner" id="beginner" className="text-base">
                Beginner
              </TabsTrigger>
              <TabsTrigger value="intermediate" id="intermediate" className="text-base">
                Intermediate
              </TabsTrigger>
              <TabsTrigger value="advanced" id="advanced" className="text-base">
                Advanced
              </TabsTrigger>
            </TabsList>

            <TabsContent value="beginner" className="space-y-4">
              <div className="mb-4 rounded-lg bg-pink-50 p-4 dark:bg-pink-950/30">
                <h3 className="text-lg font-medium text-pink-800 dark:text-pink-300">Beginner Path</h3>
                <p className="mt-1 text-pink-700 dark:text-pink-400">
                  Start your Polkadot development journey with these foundational resources. Focus on learning Rust,
                  understanding blockchain basics, and getting familiar with Substrate.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {learningResources
                  .filter((resource) => resource.Level === "Beginner")
                  .slice(0, 6)
                  .map((resource, index) => {
                    const isCompleted = resource.Status === "Done"
                    const isInProgress = resource.Status === "In progress"

                    return (
                      <Card
                        key={index}
                        className="overflow-hidden transition-all hover:shadow-md dark:hover:shadow-pink-900/10"
                      >
                        <CardContent className="p-4">
                          <div className="mb-3 flex items-start justify-between">
                            <div className="flex items-center">
                              {isCompleted ? (
                                <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                              ) : isInProgress ? (
                                <Badge
                                  variant="outline"
                                  className="mr-2 bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300"
                                >
                                  In Progress
                                </Badge>
                              ) : (
                                <Circle className="mr-2 h-5 w-5 text-gray-300 dark:text-gray-600" />
                              )}
                              <h3 className="line-clamp-2 text-base font-medium text-gray-900 dark:text-white">
                                {resource["Course Name"]}
                              </h3>
                            </div>
                          </div>

                          <div className="mt-2 flex flex-wrap gap-2">
                            <Badge
                              variant="secondary"
                              className="bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300"
                            >
                              {resource.Language}
                            </Badge>
                            <Badge
                              variant="secondary"
                              className="bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
                            >
                              {resource.Category}
                            </Badge>
                          </div>

                          <div className="mt-4 flex justify-between">
                            <span className="text-sm text-gray-500 dark:text-gray-400">Source: {resource.Source}</span>
                            <Link
                              href={resource.Link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center text-sm font-medium text-pink-600 hover:text-pink-700 dark:text-pink-400 dark:hover:text-pink-300"
                            >
                              View <ExternalLink className="ml-1 h-3 w-3" />
                            </Link>
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })}
              </div>

              <div className="mt-6 text-center">
                <Button
                  variant="outline"
                  className="rounded-full text-pink-600 hover:bg-pink-50 hover:text-pink-700 dark:text-pink-400 dark:hover:bg-pink-950/50 dark:hover:text-pink-300"
                >
                  <Link href="/learning-path/beginner" className="flex items-center">
                    View All Beginner Resources <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="intermediate" className="space-y-4">
              <div className="mb-4 rounded-lg bg-purple-50 p-4 dark:bg-purple-950/30">
                <h3 className="text-lg font-medium text-purple-800 dark:text-purple-300">Intermediate Path</h3>
                <p className="mt-1 text-purple-700 dark:text-purple-400">
                  Deepen your knowledge with these intermediate resources. Learn about FRAME pallets, runtime
                  development, and building custom blockchains with Substrate.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {learningResources
                  .filter((resource) => resource.Level === "Intermediate")
                  .slice(0, 6)
                  .map((resource, index) => {
                    const isCompleted = resource.Status === "Done"
                    const isInProgress = resource.Status === "In progress"

                    return (
                      <Card
                        key={index}
                        className="overflow-hidden transition-all hover:shadow-md dark:hover:shadow-purple-900/10"
                      >
                        <CardContent className="p-4">
                          <div className="mb-3 flex items-start justify-between">
                            <div className="flex items-center">
                              {isCompleted ? (
                                <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                              ) : isInProgress ? (
                                <Badge
                                  variant="outline"
                                  className="mr-2 bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300"
                                >
                                  In Progress
                                </Badge>
                              ) : (
                                <Circle className="mr-2 h-5 w-5 text-gray-300 dark:text-gray-600" />
                              )}
                              <h3 className="line-clamp-2 text-base font-medium text-gray-900 dark:text-white">
                                {resource["Course Name"]}
                              </h3>
                            </div>
                          </div>

                          <div className="mt-2 flex flex-wrap gap-2">
                            <Badge
                              variant="secondary"
                              className="bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300"
                            >
                              {resource.Language}
                            </Badge>
                            <Badge
                              variant="secondary"
                              className="bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
                            >
                              {resource.Category}
                            </Badge>
                          </div>

                          <div className="mt-4 flex justify-between">
                            <span className="text-sm text-gray-500 dark:text-gray-400">Source: {resource.Source}</span>
                            <Link
                              href={resource.Link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center text-sm font-medium text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
                            >
                              View <ExternalLink className="ml-1 h-3 w-3" />
                            </Link>
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })}
              </div>

              <div className="mt-6 text-center">
                <Button
                  variant="outline"
                  className="rounded-full text-purple-600 hover:bg-purple-50 hover:text-purple-700 dark:text-purple-400 dark:hover:bg-purple-950/50 dark:hover:text-purple-300"
                >
                  <Link href="/learning-path/intermediate" className="flex items-center">
                    View All Intermediate Resources <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="advanced" className="space-y-4">
              <div className="mb-4 rounded-lg bg-blue-50 p-4 dark:bg-blue-950/30">
                <h3 className="text-lg font-medium text-blue-800 dark:text-blue-300">Advanced Path</h3>
                <p className="mt-1 text-blue-700 dark:text-blue-400">
                  Master advanced topics with these resources. Explore parachain development, cross-chain messaging
                  (XCM), consensus mechanisms, and more.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {learningResources
                  .filter((resource) => resource.Level === "Advanced")
                  .slice(0, 6)
                  .map((resource, index) => {
                    const isCompleted = resource.Status === "Done"
                    const isInProgress = resource.Status === "In progress"

                    return (
                      <Card
                        key={index}
                        className="overflow-hidden transition-all hover:shadow-md dark:hover:shadow-blue-900/10"
                      >
                        <CardContent className="p-4">
                          <div className="mb-3 flex items-start justify-between">
                            <div className="flex items-center">
                              {isCompleted ? (
                                <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                              ) : isInProgress ? (
                                <Badge
                                  variant="outline"
                                  className="mr-2 bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300"
                                >
                                  In Progress
                                </Badge>
                              ) : (
                                <Circle className="mr-2 h-5 w-5 text-gray-300 dark:text-gray-600" />
                              )}
                              <h3 className="line-clamp-2 text-base font-medium text-gray-900 dark:text-white">
                                {resource["Course Name"]}
                              </h3>
                            </div>
                          </div>

                          <div className="mt-2 flex flex-wrap gap-2">
                            <Badge
                              variant="secondary"
                              className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                            >
                              {resource.Language}
                            </Badge>
                            <Badge
                              variant="secondary"
                              className="bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
                            >
                              {resource.Category}
                            </Badge>
                          </div>

                          <div className="mt-4 flex justify-between">
                            <span className="text-sm text-gray-500 dark:text-gray-400">Source: {resource.Source}</span>
                            <Link
                              href={resource.Link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                            >
                              View <ExternalLink className="ml-1 h-3 w-3" />
                            </Link>
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })}
              </div>

              <div className="mt-6 text-center">
                <Button
                  variant="outline"
                  className="rounded-full text-blue-600 hover:bg-blue-50 hover:text-blue-700 dark:text-blue-400 dark:hover:bg-blue-950/50 dark:hover:text-blue-300"
                >
                  <Link href="/learning-path/advanced" className="flex items-center">
                    View All Advanced Resources <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-pink-600 to-purple-600 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold sm:text-4xl">Ready to Accelerate Your Learning?</h2>
            <p className="mt-4 text-lg text-white/80">
              Join our bootcamp for a structured, guided learning experience with expert mentors.
            </p>
            <div className="mt-8">
              <Button
                size="lg"
                className="rounded-full bg-white px-8 py-6 text-lg font-semibold text-pink-600 shadow-lg transition-all hover:bg-gray-100 hover:shadow-white/20"
              >
                <Link href="/bootcamp">Join Bootcamp</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
