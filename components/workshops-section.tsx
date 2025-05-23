import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import SectionHeader from "@/components/section-header"
import { workshops } from "@/constants"

export default function WorkshopsSection() {
  return (
    <section className="py-16">
      <SectionHeader
        id="workshops"
        title="Workshop Materials"
        description="Hands-on workshop materials to help you learn by doing. These workshops cover a wide range of topics from basic Substrate concepts to advanced Polkadot features."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {workshops.slice(0, 6).map((workshop, index) => (
          <Card key={index} className="overflow-hidden transition-all hover:shadow-md dark:hover:shadow-pink-900/10">
            <div className="aspect-video w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
              {workshop.img ? (
                <Image
                  src={workshop.img || "/placeholder.svg"}
                  alt={workshop.title}
                  width={400}
                  height={225}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center">
                  <span className="text-gray-400">No image</span>
                </div>
              )}
            </div>
            <CardContent className="p-4">
              <h3 className="line-clamp-2 text-lg font-medium text-gray-900 dark:text-white">{workshop.title}</h3>
            </CardContent>
            <CardFooter className="flex flex-col items-start space-y-4 p-4 pt-0">
              <p className="line-clamp-3 text-sm text-gray-500 dark:text-gray-400">{workshop.description}</p>
              <Link
                href={workshop.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm font-medium text-pink-600 hover:text-pink-700 dark:text-pink-400 dark:hover:text-pink-300"
              >
                View Workshop <ExternalLink className="ml-1 h-3 w-3" />
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      {workshops.length > 6 && (
        <div className="mt-8 flex justify-center">
          <Link
            href="#"
            className="rounded-md bg-white px-4 py-2 text-sm font-medium text-pink-600 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:ring-gray-700 dark:hover:bg-gray-700"
          >
            View all {workshops.length} workshops
          </Link>
        </div>
      )}
    </section>
  )
}
