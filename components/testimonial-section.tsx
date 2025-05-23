"use client"

import Image from "next/image"
import { Quote } from "lucide-react"
import AnimateInView from "@/components/animations/animate-in-view"
import { motion } from "framer-motion"

export default function TestimonialSection() {
  const testimonials = [
    {
      quote:
        "The Polkadot Bootcamp completely transformed my understanding of blockchain development. The structured curriculum and hands-on projects made complex concepts accessible.",
      name: "Alex Johnson",
      title: "Blockchain Developer",
      avatar: "/images/avatar-1.png",
    },
    {
      quote:
        "As someone coming from Ethereum development, the Solidity on PolkaVM track was exactly what I needed to transition my skills to the Polkadot ecosystem.",
      name: "Sarah Chen",
      title: "Smart Contract Engineer",
      avatar: "/images/avatar-2.png",
    },
    {
      quote:
        "The learning path approach helped me progress from a complete beginner to building my own parachain. The community support was invaluable throughout my journey.",
      name: "Michael Rodriguez",
      title: "Substrate Developer",
      avatar: "/images/avatar-3.png",
    },
  ]

  return (
    <section className="bg-gray-50 py-24 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <AnimateInView animation="slideUp" className="mb-12 text-center">
          <h2 className="section-title">What Our Students Say</h2>
          <p className="section-description mx-auto">
            Hear from developers who have transformed their careers with our educational resources
          </p>
        </AnimateInView>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <AnimateInView key={index} animation="slideUp" delay={0.1 * index}>
              <motion.div
                className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800"
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <motion.div
                  className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-300"
                  whileHover={{ rotate: 15 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <Quote className="h-5 w-5" />
                </motion.div>
                <p className="mb-6 text-gray-600 dark:text-gray-300">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <motion.div
                    className="mr-4 h-12 w-12 overflow-hidden rounded-full border-2 border-pink-100 dark:border-pink-900/30"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="h-full w-full object-cover"
                    />
                  </motion.div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.title}</p>
                  </div>
                </div>
              </motion.div>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  )
}
