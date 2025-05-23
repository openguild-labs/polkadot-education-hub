import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import SectionHeader from "@/components/section-header"
import { courses } from "@/constants"

export default function CoursesSection() {
  return (
    <section className="py-16">
      <SectionHeader
        id="courses"
        title="Comprehensive Courses"
        description="Structured learning paths to master Polkadot development. Our courses cover Substrate, Rust, and other essential technologies for building on Polkadot."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course, index) => (
          <Card key={index} className="overflow-hidden transition-all hover:shadow-md dark:hover:shadow-pink-900/10">
            <div className="aspect-video w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
              {course.img ? (
                <Image
                  src={course.img || "/placeholder.svg"}
                  alt={course.title}
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
              <div className="mb-2 flex items-center justify-between">
                <Badge
                  variant={course.released ? "default" : "outline"}
                  className={course.released ? "bg-green-500 hover:bg-green-600" : ""}
                >
                  {course.released ? "Released" : "Coming Soon"}
                </Badge>
              </div>
              <h3 className="line-clamp-2 text-lg font-medium text-gray-900 dark:text-white">{course.title}</h3>
            </CardContent>
            <CardFooter className="flex flex-col items-start space-y-4 p-4 pt-0">
              <p className="line-clamp-3 text-sm text-gray-500 dark:text-gray-400">{course.description}</p>
              {course.released && (
                <Link
                  href={course.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm font-medium text-pink-600 hover:text-pink-700 dark:text-pink-400 dark:hover:text-pink-300"
                >
                  View Course <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
