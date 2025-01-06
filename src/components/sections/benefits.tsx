'use client';

import { Zap, Shield, PiggyBank, Signal } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { motion } from 'framer-motion';

const benefits = [
  {
    icon: Zap,
    title: 'Lightning Fast Speeds',
    description: 'Experience gigabit speeds that let you download, stream, and game without limits'
  },
  {
    icon: Shield,
    title: 'Reliable Connection',
    description: '99.9% uptime guarantee with our state-of-the-art fiber network'
  },
  {
    icon: PiggyBank,
    title: 'Competitive Pricing',
    description: 'Get more value with our transparent, no-hidden-fees pricing structure'
  },
  {
    icon: Signal,
    title: 'Future-Ready Network',
    description: 'Built on open fiber networks for maximum flexibility and upgradability'
  }
];

export function Benefits() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12 text-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Why Choose Us?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="text-center h-full">
                <CardHeader>
                  <div className="flex justify-center">
                    <benefit.icon className="h-12 w-12 mb-4 text-primary" aria-hidden="true" />
                  </div>
                  <CardTitle className="mb-2">{benefit.title}</CardTitle>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

