import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function ClosingCTA() {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Experience Big Tech Expertise with a Personal Touch</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join the NetGuru Fiber family today and unlock a world of possibilities. Benefit from our industry-leading expertise and commitment to your local community.
          </p>
          <Button size="lg" variant="secondary">
            Get Started Now <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

