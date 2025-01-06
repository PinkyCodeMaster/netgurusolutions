'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Zap, Shield, Users, Headphones } from 'lucide-react'

const reasons = [
  {
    icon: Zap,
    title: 'Industry-Leading Expertise',
    description: 'Benefit from our founder\'s experience at Virgin and in software engineering.'
  },
  {
    icon: Shield,
    title: 'Enterprise-Grade Reliability',
    description: 'Enjoy the stability of big tech infrastructure with the care of a local provider.'
  },
  {
    icon: Users,
    title: 'Personalized Support',
    description: 'Get IT support from experts who understand both complex systems and local needs.'
  },
  {
    icon: Headphones,
    title: 'Community-Focused Innovation',
    description: 'Experience tailored solutions that address the unique needs of your local area.'
  }
]

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2
          className="text-3xl font-bold text-center mb-12 text-foreground"
        >
          Why Choose NetGuru Fiber?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <reason.icon className="mr-2 h-6 w-6 text-primary" />
                    {reason.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{reason.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

