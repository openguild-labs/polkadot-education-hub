"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Play, Pause, Volume2, VolumeX, Maximize, SkipForward, SkipBack } from "lucide-react"
import { Slider } from "@/components/ui/slider"

interface CoursePreviewVideoProps {
  videoUrl?: string
}

export default function CoursePreviewVideo({ videoUrl }: CoursePreviewVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [volume, setVolume] = useState(0.7)
  const [isMuted, setIsMuted] = useState(false)
  const [isControlsVisible, setIsControlsVisible] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Default video if none provided
  const defaultVideoUrl = "https://www.youtube.com/embed/xWp-83KYkXs?si=ETs8dhYv0z_Zd-MZ"
  const actualVideoUrl = videoUrl || defaultVideoUrl

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const onTimeUpdate = () => {
      setCurrentTime(video.currentTime)
      setProgress((video.currentTime / video.duration) * 100)
    }

    const onLoadedMetadata = () => {
      setDuration(video.duration)
    }

    const onEnded = () => {
      setIsPlaying(false)
    }

    video.addEventListener("timeupdate", onTimeUpdate)
    video.addEventListener("loadedmetadata", onLoadedMetadata)
    video.addEventListener("ended", onEnded)

    return () => {
      video.removeEventListener("timeupdate", onTimeUpdate)
      video.removeEventListener("loadedmetadata", onLoadedMetadata)
      video.removeEventListener("ended", onEnded)
    }
  }, [])

  const togglePlay = () => {
    const video = videoRef.current
    if (!video) return

    if (isPlaying) {
      video.pause()
    } else {
      video.play()
    }
    setIsPlaying(!isPlaying)
  }

  const handleProgressChange = (value: number[]) => {
    const video = videoRef.current
    if (!video) return

    const newTime = (value[0] / 100) * video.duration
    video.currentTime = newTime
    setProgress(value[0])
    setCurrentTime(newTime)
  }

  const handleVolumeChange = (value: number[]) => {
    const video = videoRef.current
    if (!video) return

    const newVolume = value[0] / 100
    video.volume = newVolume
    setVolume(newVolume)
    setIsMuted(newVolume === 0)
  }

  const toggleMute = () => {
    const video = videoRef.current
    if (!video) return

    if (isMuted) {
      video.volume = volume
      setIsMuted(false)
    } else {
      video.volume = 0
      setIsMuted(true)
    }
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
  }

  const skipForward = () => {
    const video = videoRef.current
    if (!video) return

    video.currentTime = Math.min(video.duration, video.currentTime + 10)
  }

  const skipBackward = () => {
    const video = videoRef.current
    if (!video) return

    video.currentTime = Math.max(0, video.currentTime - 10)
  }

  const toggleFullscreen = () => {
    const videoContainer = document.querySelector(".video-container")
    if (!videoContainer) return

    if (document.fullscreenElement) {
      document.exitFullscreen()
    } else {
      videoContainer.requestFullscreen()
    }
  }

  const showControls = () => {
    setIsControlsVisible(true)
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current)
    }
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) {
        setIsControlsVisible(false)
      }
    }, 3000)
  }

  // YouTube embed handling
  if (actualVideoUrl.includes("youtube.com")) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="aspect-video w-full overflow-hidden rounded-lg"
      >
        <iframe
          src={actualVideoUrl}
          title="Course Preview"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="h-full w-full"
        ></iframe>
      </motion.div>
    )
  }

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
      <h3 className="text-xl font-bold">Course Video Preview</h3>
      <div
        className="video-container relative aspect-video w-full overflow-hidden rounded-lg bg-black"
        onMouseMove={showControls}
        onMouseLeave={() => isPlaying && setIsControlsVisible(false)}
      >
        <video
          ref={videoRef}
          className="h-full w-full"
          src="/videos/course-preview.mp4"
          poster="/images/video-thumbnail.png"
          onClick={togglePlay}
        />

        {/* Play button overlay when paused */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex h-16 w-16 items-center justify-center rounded-full bg-pink-600/90 text-white backdrop-blur-sm transition-colors hover:bg-pink-500"
              onClick={togglePlay}
            >
              <Play className="h-8 w-8" />
            </motion.button>
          </div>
        )}

        {/* Video controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isControlsVisible ? 1 : 0, y: isControlsVisible ? 0 : 20 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4"
        >
          <div className="mb-2">
            <Slider
              value={[progress]}
              min={0}
              max={100}
              step={0.1}
              onValueChange={handleProgressChange}
              className="h-1"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                className="rounded-full p-1 text-white/90 transition-colors hover:bg-white/20 hover:text-white"
                onClick={skipBackward}
              >
                <SkipBack className="h-4 w-4" />
              </button>
              <button
                className="rounded-full p-1 text-white/90 transition-colors hover:bg-white/20 hover:text-white"
                onClick={togglePlay}
              >
                {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
              </button>
              <button
                className="rounded-full p-1 text-white/90 transition-colors hover:bg-white/20 hover:text-white"
                onClick={skipForward}
              >
                <SkipForward className="h-4 w-4" />
              </button>
              <span className="ml-2 text-xs text-white/90">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex w-24 items-center gap-2">
                <button
                  className="rounded-full p-1 text-white/90 transition-colors hover:bg-white/20 hover:text-white"
                  onClick={toggleMute}
                >
                  {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                </button>
                <Slider
                  value={[isMuted ? 0 : volume * 100]}
                  min={0}
                  max={100}
                  step={1}
                  onValueChange={handleVolumeChange}
                  className="h-1"
                />
              </div>
              <button
                className="rounded-full p-1 text-white/90 transition-colors hover:bg-white/20 hover:text-white"
                onClick={toggleFullscreen}
              >
                <Maximize className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
        <h4 className="mb-2 font-medium">About this video</h4>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          This preview showcases the teaching style and content quality of the course. In this lesson, you'll get an
          introduction to the Polkadot ecosystem and learn about the core concepts that will be covered throughout the
          course.
        </p>
      </div>
    </motion.div>
  )
}
