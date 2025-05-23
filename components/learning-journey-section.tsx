"use client"

import { useState } from "react"
import Link from "next/link"
import { ExternalLink, CheckCircle, Circle } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import SectionHeader from "@/components/section-header"
import { learningResources } from "@/constants"

export default function LearningJourneySection() {
  const [activeTab, setActiveTab] = useState("beginner")

  // Filter resources by level
  const beginnerResources = learningResources.filter((resource) => resource.Level === "Beginner")
  const intermediateResources = learningResources.filter((resource) => resource.Level === "Intermediate")
  const advancedResources = learningResources.filter((resource) => resource.Level === "Advanced")

  const renderResourceCard = (resource: any) => {
    const isCompleted = resource.Status === "Done"
    const isInProgress = resource.Status === "In progress"

    return (
      <Card
        key={resource["Course Name"]}
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
            <Badge variant="outline" className="ml-2 bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300">
              {resource.Category}
            </Badge>
          </div>

          <div className="mt-2 flex flex-wrap gap-2">
            <Badge variant="secondary" className="bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300">
              {resource.Language}
            </Badge>
            {resource["Bundle Name"] && (
              <Badge
                variant="secondary"
                className="bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300"
              >
                {resource["Bundle Name"]}
              </Badge>
            )}
            {resource["Third-party source"] === "Yes" && (
              <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                External
              </Badge>
            )}
          </div>

          <div className="mt-4 flex justify-between">
            <span className="text-sm text-gray-500 dark:text-gray-400">Source: {resource.Source}</span>
            <Link
              href={resource.Link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm font-medium text-pink-600 hover:text-pink-700 dark:text-pink-400 dark:hover:text-pink-300"
            >
              View Resource <ExternalLink className="ml-1 h-3 w-3" />
            </Link>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <section className="py-16">
      <SectionHeader
        id="learning-journey"
        title="Learning Journey"
        description="Follow our structured learning path to become a proficient Polkadot developer. Resources are organized by difficulty level to guide your learning journey."
      />

      <Tabs defaultValue="beginner" onValueChange={setActiveTab}>
        <TabsList className="mb-8 grid w-full grid-cols-3">
          <TabsTrigger value="beginner">Beginner</TabsTrigger>
          <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
          <TabsTrigger value="advanced">Advanced</TabsTrigger>
        </TabsList>

        <TabsContent value="beginner" className="space-y-4">
          <div className="mb-4 rounded-lg bg-pink-50 p-4 dark:bg-pink-950/30">
            <h3 className="text-lg font-medium text-pink-800 dark:text-pink-300">Beginner Path</h3>
            <p className="mt-1 text-pink-700 dark:text-pink-400">
              Start your Polkadot development journey with these foundational resources. Focus on learning Rust,
              understanding blockchain basics, and getting familiar with Substrate.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{beginnerResources.map(renderResourceCard)}</div>
        </TabsContent>

        <TabsContent value="intermediate" className="space-y-4">
          <div className="mb-4 rounded-lg bg-purple-50 p-4 dark:bg-purple-950/30">
            <h3 className="text-lg font-medium text-purple-800 dark:text-purple-300">Intermediate Path</h3>
            <p className="mt-1 text-purple-700 dark:text-purple-400">
              Deepen your knowledge with these intermediate resources. Learn about FRAME pallets, runtime development,
              and building custom blockchains with Substrate.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {intermediateResources.map(renderResourceCard)}
          </div>
        </TabsContent>

        <TabsContent value="advanced" className="space-y-4">
          <div className="mb-4 rounded-lg bg-blue-50 p-4 dark:bg-blue-950/30">
            <h3 className="text-lg font-medium text-blue-800 dark:text-blue-300">Advanced Path</h3>
            <p className="mt-1 text-blue-700 dark:text-blue-400">
              Master advanced topics with these resources. Explore parachain development, cross-chain messaging (XCM),
              consensus mechanisms, and more.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{advancedResources.map(renderResourceCard)}</div>
        </TabsContent>
      </Tabs>
    </section>
  )
}
