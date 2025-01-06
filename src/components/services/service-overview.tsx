import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Wifi, Radio, Smartphone, Server, Users } from 'lucide-react'

const services = [
    { icon: Wifi, title: "Fibre Internet", description: "Ultra-fast fibre optic broadband" },
    { icon: Radio, title: "Wireless Internet", description: "High-speed wireless connectivity" },
    { icon: Smartphone, title: "Mobile Alternatives", description: "Flexible mobile internet solutions" },
    { icon: Server, title: "Hosting Services", description: "Reliable web and email hosting" },
    { icon: Users, title: "Referral Program", description: "Earn rewards by referring friends" },
]

export default function ServiceOverview() {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <Card key={index} className="text-center">
                            <CardHeader>
                                <CardTitle className="flex items-center justify-center">
                                    <service.icon className="h-8 w-8 mr-2 text-primary" />
                                    {service.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>{service.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

