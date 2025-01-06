'use client';

import { Network, Users, Building2, Globe2 } from 'lucide-react';

export function AboutUs() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Building the Future of Connectivity</h2>
          <p className="text-lg text-muted-foreground">
            We&apos;re a team of network infrastructure experts committed to bringing 
            next-generation internet connectivity to communities through open fiber networks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Network className="h-12 w-12 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Open Network</h3>
            <p className="text-muted-foreground">
              Built on open fiber infrastructure for maximum flexibility and provider choice
            </p>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Users className="h-12 w-12 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Local Focus</h3>
            <p className="text-muted-foreground">
              Dedicated to serving and improving our local communities
            </p>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Building2 className="h-12 w-12 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Infrastructure First</h3>
            <p className="text-muted-foreground">
              Investing in robust, future-proof network infrastructure
            </p>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Globe2 className="h-12 w-12 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Sustainable Growth</h3>
            <p className="text-muted-foreground">
              Planning for long-term community connectivity needs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}