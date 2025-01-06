'use client'

import { Card, CardContent } from '@/components/ui/card'

export default function Introduction() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-6 text-foreground">Who We Are</h2>
          <Card>
            <CardContent className="pt-6">
              <p className="text-lg mb-4">
                NetGuru Fiber is a forward-thinking internet service provider founded by a former virgin media engineer with additional expertise in software engineering and IT support. We&apos;re dedicated to bridging the digital divide by bringing big tech knowledge to local, independent networks.
              </p>
              <p className="text-lg">
                With over 10 years of combined experience in the tech industry, we&apos;ve crafted a unique approach that combines the reliability and innovation of leading tech companies with the personalized care and community focus of a local provider.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

