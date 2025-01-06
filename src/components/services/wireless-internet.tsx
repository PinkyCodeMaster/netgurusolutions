"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export default function WirelessInternet() {
  const [location, setLocation] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send this data to your backend
    console.log("Submitted location:", location)
    // Reset the form
    setLocation("")
    // You could also show a success message to the user here
  }

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Wireless Internet Solutions - Coming Soon!</h2>
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>We&apos;re Expanding Our Network</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-6">
              We&apos;re currently planning our wireless network expansion and sourcing the right equipment. Our goal is to bring high-speed internet to areas that need it most. If you feel your work area would benefit from our wireless internet service, please let us know by submitting the form below.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input 
                type="text" 
                placeholder="Your location (city, area, or postcode)" 
                value={location} 
                onChange={(e) => setLocation(e.target.value)}
                required
              />
              <Button type="submit" className="w-full">Submit Your Location</Button>
            </form>
          </CardContent>
        </Card>
      </div>
          {/* <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">High-Speed Wireless Connectivity</h3>
                        <p className="mb-6">
                            Our wireless internet solutions provide high-speed connectivity to areas where fibre isn't available.
                            Using the latest 5GHz and 6GHz frequencies, we deliver reliable and fast internet to rural and hard-to-reach locations.
                        </p>
                        <ul className="space-y-2 mb-6">
                            <li>✓ Speeds up to 100 Mbps</li>
                            <li>✓ Low latency for smooth online experiences</li>
                            <li>✓ Perfect for rural areas and temporary setups</li>
                            <li>✓ Professional installation included</li>
                        </ul>
                        <Button>Check Availability</Button>
                    </div>
                    <Card>
                        <CardHeader>
                            <CardTitle>Coverage Map</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Image
                                src="/placeholder.svg?height=300&width=400"
                                alt="Wireless Internet Coverage Map"
                                width={400}
                                height={300}
                                className="w-full h-auto rounded-md"
                            />
                            <p className="mt-4 text-sm text-muted-foreground">
                                This map shows our current wireless coverage areas. We're constantly expanding, so check back regularly for updates.
                            </p>
                        </CardContent>
                    </Card>
                </div> */}
    </section>
    
  )
}

