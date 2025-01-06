'use client';

import { Laptop, Tv, Phone, Gamepad } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const services = [
  {
    icon: <Laptop className="h-8 w-8 mb-4 text-primary" />,
    title: 'Home Internet',
    description: 'High-speed fiber internet with unlimited data for your home',
    features: ['Up to 1Gbps speeds', 'Low latency', 'No data caps']
  },
  {
    icon: <Tv className="h-8 w-8 mb-4 text-primary" />,
    title: 'Streaming TV',
    description: 'Crystal-clear streaming with no buffering',
    features: ['4K/8K ready', 'Multi-device support', 'Cloud DVR options']
  },
  {
    icon: <Phone className="h-8 w-8 mb-4 text-primary" />,
    title: 'Voice Services',
    description: 'Crystal-clear digital voice services over fiber',
    features: ['HD Voice', 'Keep your number', 'Advanced features']
  },
  {
    icon: <Gamepad className="h-8 w-8 mb-4 text-primary" />,
    title: 'Gaming',
    description: 'Ultra-low latency for competitive gaming',
    features: ['<10ms ping', 'Stable connection', 'IPv6 support']
  }
];

export function Services() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Future Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="flex justify-center">{service.icon}</div>
                <CardTitle className="mb-2">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}