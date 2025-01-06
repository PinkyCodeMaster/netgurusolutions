'use client'

import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'

const teamMembers = [
  { name: 'Scott Jones', role: 'Founder & CEO', image: '/placeholder.svg?height=300&width=300' },
  { name: 'Deanna Jones', role: 'CFO', image: '/placeholder.svg?height=300&width=300' },
]

export default function Team() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2
          className="text-3xl font-bold text-center mb-12 text-foreground"
        >
          Meet Our Team
        </h2>
        <div className="flex justify-center items-center min-h-[50vh]">
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
              >
                <Card className="overflow-hidden w-full max-w-sm mx-auto">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="text-center pt-4">
                    <h3 className="font-semibold text-lg">{member.name}</h3>
                    <p className="text-muted-foreground">{member.role}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

