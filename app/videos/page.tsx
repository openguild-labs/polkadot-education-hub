"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Search, Filter, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  technicalVideos,
  communityCallVideos,
  generalVideos,
  bootcampPolkadotSdkVideos,
  bootcampSolidityOnPolkaVmVideos,
} from "@/constants"

export default function VideosPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-600 to-purple-600 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">Technical Videos</h1>
            <p className="mt-4 text-lg text-white/80">
              Watch technical videos, coding sessions, and community calls to deepen your understanding of Polkadot
              development.
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input type="search" placeholder="Search videos..." className="pl-10" />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" /> Filter
            </Button>
          </div>
        </div>
      </div>

      {/* Featured Video */}
      <section className="bg-white py-12 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="overflow-hidden rounded-2xl bg-gradient-to-r from-gray-900 to-gray-800 shadow-xl">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12">
                <Badge className="mb-4 bg-pink-500 text-white hover:bg-pink-600">Featured Video</Badge>
                <h2 className="mb-4 font-heading text-2xl font-bold text-white md:text-3xl">
                  Open Polkadot Bootcamp 2025 - Introduction
                </h2>
                <p className="mb-6 text-gray-300">
                  In this series, Tin Chung will take you step-by-step through the Polkadot SDK, empowering you to build
                  scalable dApps and parachains on the Polkadot ecosystem.
                </p>
                <Button className="rounded-full bg-pink-600 hover:bg-pink-500 hover:shadow-md hover:shadow-pink-500/20">
                  <Link
                    href="https://www.youtube.com/watch?v=JEvsI41bhUg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    Watch Now <Play className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="relative">
                <div className="aspect-video h-full w-full overflow-hidden">
                  <iframe
                    src="https://www.youtube.com/embed/JEvsI41bhUg?si=LwTpbT7-1B7HkEtc"
                    title="Open Polkadot Bootcamp 2025 - Introduction"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Categories */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="bootcamp" className="mx-auto">
            <div className="mb-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
              <h2 className="font-heading text-2xl font-bold text-gray-900 dark:text-white">Video Library</h2>
              <TabsList>
                <TabsTrigger value="bootcamp">Bootcamp</TabsTrigger>
                <TabsTrigger value="technical">Technical</TabsTrigger>
                <TabsTrigger value="community">Community</TabsTrigger>
                <TabsTrigger value="general">General</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="bootcamp" className="space-y-8">
              <div className="mb-6">
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">Polkadot SDK Track</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Learn how to build scalable blockchains using the Polkadot SDK
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {bootcampPolkadotSdkVideos.slice(0, 6).map((video, index) => (
                  <VideoCard
                    key={index}
                    video={{
                      title: video.title,
                      description: video.description,
                      url: video.url,
                      category: "Polkadot SDK",
                    }}
                  />
                ))}
              </div>
              {bootcampPolkadotSdkVideos.length > 6 && (
                <div className="mt-6 text-center">
                  <Button variant="outline" className="rounded-full">
                    <Link href="/bootcamp" className="flex items-center">
                      View All Polkadot SDK Videos <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              )}

              <div className="mb-6 mt-12">
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">Solidity on PolkaVM Track</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Learn how to use Solidity on PolkaVM, a revolutionary smart contract platform
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {bootcampSolidityOnPolkaVmVideos.slice(0, 6).map((video, index) => (
                  <VideoCard
                    key={index}
                    video={{
                      title: video.title,
                      description: video.description,
                      url: video.url,
                      category: "PolkaVM",
                    }}
                  />
                ))}
              </div>
              {bootcampSolidityOnPolkaVmVideos.length > 6 && (
                <div className="mt-6 text-center">
                  <Button variant="outline" className="rounded-full">
                    <Link href="/bootcamp" className="flex items-center">
                      View All PolkaVM Videos <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              )}
            </TabsContent>

            <TabsContent value="technical" className="space-y-8">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {technicalVideos.map((video, index) => (
                  <VideoCard
                    key={index}
                    video={{
                      title: `Technical Session ${index + 1}`,
                      description: "Deep dive into Polkadot development concepts and techniques.",
                      url: video.url,
                      category: "Technical",
                    }}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="community" className="space-y-8">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {communityCallVideos.map((video, index) => (
                  <VideoCard
                    key={index}
                    video={{
                      title: `Community Call ${index + 1}`,
                      description: "Join the Polkadot community discussions and updates.",
                      url: video.url,
                      category: "Community",
                    }}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="general" className="space-y-8">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {generalVideos.map((video, index) => (
                  <VideoCard
                    key={index}
                    video={{
                      title: `General Video ${index + 1}`,
                      description: "General information about Polkadot and blockchain technology.",
                      url: video.url,
                      category: "General",
                    }}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-pink-600 to-purple-600 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold sm:text-4xl">Ready to Apply What You've Learned?</h2>
            <p className="mt-4 text-lg text-white/80">
              Join our bootcamp to put your knowledge into practice with guided projects and expert mentorship.
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

function VideoCard({ video }: { video: any }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-pink-100/50 dark:bg-gray-800 dark:hover:shadow-pink-900/10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-video w-full overflow-hidden">
        <iframe
          src={`${video.url}${isHovered ? "&autoplay=1&mute=1" : ""}`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="h-full w-full"
        ></iframe>
        {!isHovered && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 transition-opacity duration-300 group-hover:opacity-0">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-pink-600/90 text-white">
              <Play className="h-8 w-8" />
            </div>
          </div>
        )}
      </div>
      <CardContent className="p-6">
        <div className="mb-2">
          <Badge
            className={`
            ${
              video.category === "Polkadot SDK"
                ? "bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300"
                : video.category === "PolkaVM"
                  ? "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300"
                  : video.category === "Technical"
                    ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                    : video.category === "Community"
                      ? "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300"
                      : "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300"
            }
          `}
          >
            {video.category}
          </Badge>
        </div>
        <h3 className="mb-2 line-clamp-2 text-lg font-bold text-gray-900 dark:text-white">{video.title}</h3>
        <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-300">{video.description}</p>
      </CardContent>
    </Card>
  )
}
