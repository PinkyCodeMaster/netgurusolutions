'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Wifi, Tv, Phone, Building } from 'lucide-react'

const services = [
  {
    icon: Wifi,
    title: 'Residential Internet',
    description: 'High-speed fiber internet for homes, leveraging enterprise-level technology for unparalleled performance.'
  },
  {
    icon: Building,
    title: 'Business Solutions',
    description: 'Tailored fiber connectivity solutions using industry-leading practices to keep your business competitive.'
  },
  {
    icon: Tv,
    title: 'Advanced IPTV Services',
    description: 'Crystal-clear TV streaming with innovative features inspired by major media platforms.'
  },
  {
    icon: Phone,
    title: 'Enterprise-Grade VoIP',
    description: 'Reliable voice communication systems built on experience with large-scale network deployments.'
  },
  {
    icon: Wifi,
    title: 'Comming Soon Wireless Internet To Rural areas',
    description: 'Using the latest 5Gigahertz and 6Gigahertz frequenciesconnecting rural areas with lacking infrastructure through wireless point to point Internet.'
  }
]

export default function ServicesOverview() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2
          className="text-3xl font-bold text-center mb-12 text-foreground"
        >
          Our Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <service.icon className="mr-2 h-6 w-6 text-primary" />
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

