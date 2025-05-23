import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface VideoCardProps {
  video: {
    title: string
    description: string
    url: string
  }
}

export default function VideoCard({ video }: VideoCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md dark:hover:shadow-pink-900/10">
      <div className="aspect-video w-full overflow-hidden">
        <iframe
          src={video.url}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="h-full w-full"
        ></iframe>
      </div>
      <CardContent className="p-4">
        <h3 className="line-clamp-2 font-medium text-gray-900 dark:text-white">{video.title}</h3>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <p className="line-clamp-2 text-sm text-gray-500 dark:text-gray-400">{video.description}</p>
      </CardFooter>
    </Card>
  )
}
