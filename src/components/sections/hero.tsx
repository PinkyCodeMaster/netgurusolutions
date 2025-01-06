'use client';

import { Wifi } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-primary/10 to-background pt-24 pb-32">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="flex justify-center mb-6">
            <Wifi className="h-16 w-16 text-primary" aria-hidden="true" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            The Future of Internet is Coming to Your Neighborhood
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience lightning-fast fiber internet with our upcoming service. 
            We're building the next generation of connectivity using open fiber networks.
          </p>
          <div className="space-x-4">
            <Button size="lg">Register Interest</Button>
            <Button size="lg" variant="outline">Learn More</Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

