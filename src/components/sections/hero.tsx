'use client';

import { Wifi } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-primary/10 to-background pt-24 pb-32">
      <div className="container mx-auto px-4">
        <div
          className="text-center opacity-0 translate-y-4"
          style={{
            animation: 'fadeInUp 0.6s ease-out forwards',
          }}
        >
          <div className="flex justify-center mb-6">
            <Wifi className="h-16 w-16 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            The Future of Internet is Coming to Your Neighborhood
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience lightning-fast fiber internet with our upcoming service. 
            We're building the next generation of connectivity using open fiber networks.
          </p>
          <Button size="lg" className="mr-4">Register Interest</Button>
          <Button size="lg" variant="outline">Learn More</Button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(1rem);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}