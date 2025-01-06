'use client'

import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="relative bg-primary text-primary-foreground py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Bringing Big Tech Expertise to Your Local Network
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            At NetGuru Fiber, we combine industry-leading standards with a personal touch, leveraging years of experience from tech giants to empower local communities.
          </p>
          <Button size="lg" variant="secondary">
            Learn Our Story <ArrowRight className="ml-2 h-4 w-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}

