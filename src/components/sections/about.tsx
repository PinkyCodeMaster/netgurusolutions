'use client';

import { Network, Users, Building2, Globe2 } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Network,
    title: 'Open Network',
    description: 'Built on open fiber infrastructure for maximum flexibility and provider choice'
  },
  {
    icon: Users,
    title: 'Local Focus',
    description: 'Dedicated to serving and improving our local communities'
  },
  {
    icon: Building2,
    title: 'Infrastructure First',
    description: 'Investing in robust, future-proof network infrastructure'
  },
  {
    icon: Globe2,
    title: 'Sustainable Growth',
    description: 'Planning for long-term community connectivity needs'
  }
];

export function AboutUs() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6">Building the Future of Connectivity</h2>
          <p className="text-lg text-muted-foreground">
            We&apos;re a team of network infrastructure experts committed to bringing 
            next-generation internet connectivity to communities through open fiber networks.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={feature.title}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex justify-center mb-4">
                <feature.icon className="h-12 w-12 text-primary" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

