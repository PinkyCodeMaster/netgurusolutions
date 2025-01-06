import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Smartphone, Wifi, Zap } from 'lucide-react'

const alternatives = [
    {
        icon: Smartphone,
        title: "4G/5G Mobile Broadband",
        description: "High-speed internet using mobile networks, perfect for on-the-go connectivity or as a primary connection in areas with good mobile coverage."
    },
    {
        icon: Wifi,
        title: "Portable Wi-Fi Hotspots",
        description: "Compact devices that create a Wi-Fi network using mobile data, ideal for traveling or temporary setups."
    },
    {
        icon: Zap,
        title: "Satellite Internet",
        description: "Internet connectivity via satellite, providing coverage in remote areas where other options are unavailable."
    },
]

export default function MobileInternetAlternatives() {
    return (
        <section className="py-24 bg-muted/50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Mobile Internet Alternatives</h2>
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    {alternatives.map((alt, index) => (
                        <Card key={index} className="flex flex-col">
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <alt.icon className="h-6 w-6 mr-2 text-primary" />
                                    {alt.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <p>{alt.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                <div className="text-center">
                    <p className="mb-6">
                        Not sure which alternative is right for you? Our experts can help you choose the best solution for your needs.
                    </p>
                    <Button>Get Expert Advice</Button>
                </div>
            </div>
        </section>
    )
}

