'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { motion } from 'framer-motion';

export function Coverage() {
  const [postcode, setPostcode] = useState('');
  const [error, setError] = useState('');

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!postcode.trim()) {
      setError('Please enter a postcode');
      return;
    }
    // Basic UK postcode regex
    const postcodeRegex = /^[A-Z]{1,2}[0-9][A-Z0-9]? [0-9][ABD-HJLNP-UW-Z]{2}$/i;
    if (!postcodeRegex.test(postcode.trim())) {
      setError('Please enter a valid UK postcode');
      return;
    }
    setError('');
    // Open OFNL checker in a new tab
    window.open('https://www.ofnl.co.uk/residents/#postcode-checker', '_blank');
  };

  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6">Check Your Coverage</h2>
          <p className="text-lg text-muted-foreground mb-8">
            We operate on the Open Fiber Networks Limited (OFNL) infrastructure. 
            Check if your area is already connected to the OFNL network.
          </p>

          <Card className="max-w-xl mx-auto">
            <CardHeader>
              <CardTitle className="mb-4">Postcode Checker</CardTitle>
              <CardDescription className="mb-6">
                Enter your postcode to check if OFNL services are available at your address
              </CardDescription>
              
              <form onSubmit={handleCheck} className="flex flex-col gap-4">
                <div className="flex gap-4">
                  <Input
                    type="text"
                    placeholder="Enter your postcode"
                    value={postcode}
                    onChange={(e) => setPostcode(e.target.value)}
                    className="flex-1"
                    aria-label="Postcode"
                  />
                  <Button type="submit">
                    <Search className="h-4 w-4 mr-2" aria-hidden="true" />
                    Check
                  </Button>
                </div>
                {error && <p className="text-red-500 text-sm" role="alert">{error}</p>}
              </form>
            </CardHeader>
          </Card>

          <p className="mt-8 text-sm text-muted-foreground">
            Not covered yet? Register your interest above and we&apos;ll notify you when 
            services become available in your area.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

