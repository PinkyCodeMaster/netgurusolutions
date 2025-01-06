'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export function Coverage() {
  const [postcode, setPostcode] = useState('');

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    // Open OFNL checker in a new tab
    window.open('https://www.ofnl.co.uk/residents/#postcode-checker', '_blank');
  };

  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
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
              
              <form onSubmit={handleCheck} className="flex gap-4">
                <Input
                  type="text"
                  placeholder="Enter your postcode"
                  value={postcode}
                  onChange={(e) => setPostcode(e.target.value)}
                  className="flex-1"
                />
                <Button type="submit">
                  <Search className="h-4 w-4 mr-2" />
                  Check
                </Button>
              </form>
            </CardHeader>
          </Card>

          <p className="mt-8 text-sm text-muted-foreground">
            Not covered yet? Register your interest above and we&apos;ll notify you when 
            services become available in your area.
          </p>
        </div>
      </div>
    </section>
  );
}