"use client"

import { useState } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import SectionHeader from "@/components/section-header"
import VideoCard from "@/components/video-card"
import { bootcampPolkadotSdkVideos, bootcampSolidityOnPolkaVmVideos } from "@/constants"

export default function BootcampSection() {
  const [activeTab, setActiveTab] = useState("polkadot-sdk")

  return (
    <section className="py-16">
      <SectionHeader
        id="bootcamp"
        title="Open Polkadot Bootcamp 2025"
        description="A comprehensive bootcamp to learn Polkadot SDK and PolkaVM development from scratch. Follow our structured curriculum to become a proficient Polkadot developer."
      />

      <div className="mb-8 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 p-1">
        <div className="rounded-lg bg-white p-4 dark:bg-gray-950">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Join the next cohort</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Registration is now open for the next Open Polkadot Bootcamp. Learn from industry experts and build
                real-world projects.
              </p>
            </div>
            <a
              href="https://openguild.notion.site/156659b1c817802383e0ddb34ad07a25?pvs=105"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-pink-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
            >
              📚 Register Now
            </a>
          </div>
        </div>
      </div>

      <Tabs defaultValue="polkadot-sdk" onValueChange={setActiveTab}>
        <TabsList className="mb-8 grid w-full grid-cols-2">
          <TabsTrigger value="polkadot-sdk">Polkadot SDK Track</TabsTrigger>
          <TabsTrigger value="polkavm">Solidity on PolkaVM Track</TabsTrigger>
        </TabsList>

        <TabsContent value="polkadot-sdk" className="space-y-8">
          <Card>
            <CardContent className="p-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Polkadot SDK Curriculum</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    Learn how to build scalable blockchains using the Polkadot SDK. This track covers everything from
                    basic concepts to advanced parachain development.
                  </p>
                  <div className="mt-4 flex items-center">
                    <div className="rounded-full bg-pink-100 px-3 py-1 text-sm font-medium text-pink-800 dark:bg-pink-900/30 dark:text-pink-300">
                      {bootcampPolkadotSdkVideos.length} videos
                    </div>
                    <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">• 10 sections</span>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Polkadot SDK Bootcamp"
                    width={400}
                    height={200}
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {bootcampPolkadotSdkVideos.slice(0, 6).map((video, index) => (
              <VideoCard key={index} video={video} />
            ))}
          </div>

          {bootcampPolkadotSdkVideos.length > 6 && (
            <div className="mt-8 flex justify-center">
              <a
                href="#"
                className="rounded-md bg-white px-4 py-2 text-sm font-medium text-pink-600 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:ring-gray-700 dark:hover:bg-gray-700"
              >
                View all {bootcampPolkadotSdkVideos.length} videos
              </a>
            </div>
          )}
        </TabsContent>

        <TabsContent value="polkavm" className="space-y-8">
          <Card>
            <CardContent className="p-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Solidity on PolkaVM Curriculum</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    Learn how to use Solidity on PolkaVM, a revolutionary smart contract platform built on RISC-V. This
                    track is perfect for Ethereum developers looking to build on Polkadot.
                  </p>
                  <div className="mt-4 flex items-center">
                    <div className="rounded-full bg-pink-100 px-3 py-1 text-sm font-medium text-pink-800 dark:bg-pink-900/30 dark:text-pink-300">
                      {bootcampSolidityOnPolkaVmVideos.length} videos
                    </div>
                    <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">• 3 sections</span>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Solidity on PolkaVM Bootcamp"
                    width={400}
                    height={200}
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {bootcampSolidityOnPolkaVmVideos.slice(0, 6).map((video, index) => (
              <VideoCard key={index} video={video} />
            ))}
          </div>

          {bootcampSolidityOnPolkaVmVideos.length > 6 && (
            <div className="mt-8 flex justify-center">
              <a
                href="#"
                className="rounded-md bg-white px-4 py-2 text-sm font-medium text-pink-600 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:ring-gray-700 dark:hover:bg-gray-700"
              >
                View all {bootcampSolidityOnPolkaVmVideos.length} videos
              </a>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </section>
  )
}
