'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Eye, Target } from 'lucide-react'

export default function VisionMission() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2
          className="text-3xl font-bold text-center mb-12 text-foreground"
        >
          Our Vision & Mission
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Eye className="mr-2 h-6 w-6 text-primary" />
                  Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">
                  To create a world where high-speed internet is accessible to all, fostering innovation, education, and connection in every community we serve.
                </p>
              </CardContent>
            </Card>
          </div>
          <div
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Target className="mr-2 h-6 w-6 text-primary" />
                  Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">
                  To deliver cutting-edge fiber optic technology with unparalleled customer service, empowering individuals and businesses to thrive in the digital age.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

