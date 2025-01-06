import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

export default function Hero() {
    return (
        <section className="relative bg-primary text-primary-foreground py-24 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Cutting-Edge Connectivity Solutions
                    </h1>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Discover our range of high-speed internet and hosting services designed to meet the needs of modern homes and businesses.
                    </p>
                    <Button size="lg" variant="secondary">
                        Explore Our Services <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </div>
            </div>
        </section>
    )
}

