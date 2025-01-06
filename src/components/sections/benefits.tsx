'use client';

import { Zap, Shield, PiggyBank, Signal } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const benefits = [
  {
    icon: <Zap className="h-8 w-8 mb-4 text-primary" />,
    title: 'Lightning Fast Speeds',
    description: 'Experience gigabit speeds that let you download, stream, and game without limits'
  },
  {
    icon: <Shield className="h-8 w-8 mb-4 text-primary" />,
    title: 'Reliable Connection',
    description: '99.9% uptime guarantee with our state-of-the-art fiber network'
  },
  {
    icon: <PiggyBank className="h-8 w-8 mb-4 text-primary" />,
    title: 'Competitive Pricing',
    description: 'Get more value with our transparent, no-hidden-fees pricing structure'
  },
  {
    icon: <Signal className="h-8 w-8 mb-4 text-primary" />,
    title: 'Future-Ready Network',
    description: 'Built on open fiber networks for maximum flexibility and upgradability'
  }
];

export function Benefits() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="flex justify-center">{benefit.icon}</div>
                <CardTitle className="mb-2">{benefit.title}</CardTitle>
                <CardDescription>{benefit.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}