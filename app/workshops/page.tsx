import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Search, Filter, Calendar, Users, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { workshops } from "@/constants"

export default function WorkshopsPage() {
  // Group workshops by category
  const technicalWorkshops = workshops.filter(
    (w) =>
      w.title.includes("Technical") ||
      w.title.includes("Substrate") ||
      w.title.includes("Rust") ||
      w.title.includes("ink!"),
  )

  const communityWorkshops = workshops.filter((w) => w.title.includes("Community") || w.title.includes("Call"))

  const conceptualWorkshops = workshops.filter(
    (w) => !technicalWorkshops.includes(w) && !communityWorkshops.includes(w),
  )

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-600 to-purple-600 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">Polkadot Workshops</h1>
            <p className="mt-4 text-lg text-white/80">
              Hands-on workshop materials to help you learn by doing. These workshops cover a wide range of topics from
              basic Substrate concepts to advanced Polkadot features.
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
              <Input type="search" placeholder="Search workshops..." className="pl-10" />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" /> Filter
            </Button>
          </div>
        </div>
      </div>

      {/* Featured Workshop */}
      <section className="bg-white py-12 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="overflow-hidden rounded-2xl bg-gradient-to-r from-pink-50 to-purple-50 shadow-xl dark:from-pink-950/30 dark:to-purple-950/30">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12">
                <Badge className="mb-4 bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300">
                  Featured Workshop
                </Badge>
                <h2 className="mb-4 font-heading text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
                  Introduction to Polkadot SDK - Substrate
                </h2>
                <p className="mb-6 text-gray-600 dark:text-gray-300">
                  Framework to build blockchain with ease. This comprehensive workshop will guide you through the
                  fundamentals of Substrate and help you get started with blockchain development on Polkadot.
                </p>
                <div className="mb-6 flex flex-wrap gap-4">
                  <div className="flex items-center">
                    <Calendar className="mr-2 h-4 w-4 text-pink-600 dark:text-pink-400" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">Last updated: May 2025</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="mr-2 h-4 w-4 text-pink-600 dark:text-pink-400" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">1,200+ participants</span>
                  </div>
                </div>
                <Button className="rounded-full bg-pink-600 hover:bg-pink-500 hover:shadow-md hover:shadow-pink-200 dark:hover:shadow-pink-900/20">
                  <Link href={workshops[0].url} target="_blank" rel="noopener noreferrer" className="flex items-center">
                    View Workshop <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="relative hidden md:block">
                <Image
                  src="/images/featured-workshop.png"
                  alt="Featured Workshop"
                  width={600}
                  height={400}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-pink-600/20 dark:to-pink-900/30"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Categories */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="mx-auto">
            <div className="mb-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
              <h2 className="font-heading text-2xl font-bold text-gray-900 dark:text-white">Workshop Library</h2>
              <TabsList>
                <TabsTrigger value="all">All Workshops</TabsTrigger>
                <TabsTrigger value="technical">Technical</TabsTrigger>
                <TabsTrigger value="community">Community</TabsTrigger>
                <TabsTrigger value="conceptual">Conceptual</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="space-y-8">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {workshops.map((workshop, index) => (
                  <WorkshopCard key={index} workshop={workshop} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="technical" className="space-y-8">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {technicalWorkshops.map((workshop, index) => (
                  <WorkshopCard key={index} workshop={workshop} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="community" className="space-y-8">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {communityWorkshops.map((workshop, index) => (
                  <WorkshopCard key={index} workshop={workshop} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="conceptual" className="space-y-8">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {conceptualWorkshops.map((workshop, index) => (
                  <WorkshopCard key={index} workshop={workshop} />
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
            <h2 className="font-heading text-3xl font-bold sm:text-4xl">Want a More Structured Learning Experience?</h2>
            <p className="mt-4 text-lg text-white/80">
              Join our bootcamp for a comprehensive curriculum with expert guidance and hands-on projects.
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

function WorkshopCard({ workshop }: { workshop: any }) {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-pink-100/50 dark:bg-gray-800 dark:hover:shadow-pink-900/10">
      <div className="aspect-video w-full overflow-hidden bg-gray-100 dark:bg-gray-700">
        <Image
          src={workshop.img || "/images/workshop-placeholder.png"}
          alt={workshop.title}
          width={400}
          height={225}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <div className="mb-2 flex flex-wrap gap-2">
          <Badge className="bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300">
            {workshop.title.includes("Substrate")
              ? "Substrate"
              : workshop.title.includes("Rust")
                ? "Rust"
                : workshop.title.includes("ink!")
                  ? "ink!"
                  : workshop.title.includes("Community")
                    ? "Community"
                    : "Workshop"}
          </Badge>
          {workshop.released !== false && (
            <Badge
              variant="outline"
              className="border-green-200 bg-green-50 text-green-800 dark:border-green-900/50 dark:bg-green-900/20 dark:text-green-300"
            >
              Available
            </Badge>
          )}
        </div>
        <h3 className="mb-2 line-clamp-2 text-xl font-bold text-gray-900 dark:text-white">{workshop.title}</h3>
        <p className="mb-4 line-clamp-3 text-gray-600 dark:text-gray-300">{workshop.description}</p>
        <Link
          href={workshop.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm font-medium text-pink-600 transition-colors hover:text-pink-700 dark:text-pink-400 dark:hover:text-pink-300"
        >
          View Workshop <ExternalLink className="ml-1 h-3 w-3" />
        </Link>
      </CardContent>
    </Card>
  )
}
