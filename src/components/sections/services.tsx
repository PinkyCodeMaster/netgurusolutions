'use client';

import { Laptop, Tv, Phone, Gamepad } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Laptop,
    title: 'Home Internet',
    description: 'High-speed fiber internet with unlimited data for your home',
    features: ['Up to 1Gbps speeds', 'Low latency', 'No data caps']
  },
  {
    icon: Tv,
    title: 'Streaming TV',
    description: 'Crystal-clear streaming with no buffering',
    features: ['4K/8K ready', 'Multi-device support', 'Cloud DVR options']
  },
  {
    icon: Phone,
    title: 'Voice Services',
    description: 'Crystal-clear digital voice services over fiber',
    features: ['HD Voice', 'Keep your number', 'Advanced features']
  },
  {
    icon: Gamepad,
    title: 'Gaming',
    description: 'Ultra-low latency for competitive gaming',
    features: ['<10ms ping', 'Stable connection', 'IPv6 support']
  }
];

export function Services() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Future Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="text-center h-full">
                <CardHeader>
                  <div className="flex justify-center">
                    <service.icon className="h-8 w-8 mb-4 text-primary" aria-hidden="true" />
                  </div>
                  <CardTitle className="mb-2">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

