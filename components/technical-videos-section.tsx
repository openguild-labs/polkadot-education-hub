"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SectionHeader from "@/components/section-header"
import VideoCard from "@/components/video-card"
import { technicalVideos, communityCallVideos, generalVideos } from "@/constants"

export default function TechnicalVideosSection() {
  const [activeTab, setActiveTab] = useState("technical")

  return (
    <section className="py-16">
      <SectionHeader
        id="videos"
        title="Technical Videos"
        description="Watch technical videos, coding sessions, and community calls to deepen your understanding of Polkadot development."
      />

      <Tabs defaultValue="technical" onValueChange={setActiveTab}>
        <TabsList className="mb-8 grid w-full grid-cols-3">
          <TabsTrigger value="technical">Technical Sessions</TabsTrigger>
          <TabsTrigger value="community">Community Calls</TabsTrigger>
          <TabsTrigger value="general">General Videos</TabsTrigger>
        </TabsList>

        <TabsContent value="technical" className="space-y-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {technicalVideos.map((video, index) => (
              <VideoCard
                key={index}
                video={{
                  title: `Technical Session ${index + 1}`,
                  description: "Deep dive into Polkadot development concepts and techniques.",
                  url: video.url,
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
                }}
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  )
}
