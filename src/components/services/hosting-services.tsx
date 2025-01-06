import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Server, Mail, Globe } from 'lucide-react'

const hostingServices = [
    {
        icon: Server,
        title: "Web Hosting",
        description: "Fast and reliable web hosting for your website or web application.",
        features: ["SSD storage", "99.9% uptime guarantee", "24/7 support", "One-click installs"]
    },
    {
        icon: Mail,
        title: "Email Hosting",
        description: "Professional email hosting with advanced features and security.",
        features: ["Custom domain emails", "Large storage capacity", "Spam and virus protection", "Mobile access"]
    },
    {
        icon: Globe,
        title: "Domain Registration",
        description: "Register and manage your domain names with ease.",
        features: ["Wide range of TLDs", "Free DNS management", "Domain privacy", "Easy transfers"]
    },
]

export default function HostingServices() {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Hosting Services</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {hostingServices.map((service, index) => (
                        <Card key={index} className="flex flex-col">
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <service.icon className="h-6 w-6 mr-2 text-primary" />
                                    {service.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <p className="mb-4">{service.description}</p>
                                <ul className="space-y-2 mb-6">
                                    {service.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-center">
                                            <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Button className="w-full">Learn More</Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

