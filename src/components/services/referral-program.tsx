import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Gift, Users, Zap } from 'lucide-react'

export default function ReferralProgram() {
    return (
        <section className="py-24 bg-muted/50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Referral Program</h2>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">Earn Rewards by Sharing the Love</h3>
                        <p className="mb-6">
                            Our referral program lets you earn rewards for every friend or family member you bring to NetGuru Fiber.
                            It&apos;s our way of saying thank you for helping us grow our community.
                        </p>
                        <div className="space-y-4 mb-6">
                            <div className="flex items-start">
                                <Gift className="h-6 w-6 mr-2 text-primary flex-shrink-0" />
                                <p>Receive a £50 account credit for each successful referral</p>
                            </div>
                            <div className="flex items-start">
                                <Users className="h-6 w-6 mr-2 text-primary flex-shrink-0" />
                                <p>Your referred friend gets £25 off their first month&apos;s bill</p>
                            </div>
                            <div className="flex items-start">
                                <Zap className="h-6 w-6 mr-2 text-primary flex-shrink-0" />
                                <p>No limit on the number of referrals you can make</p>
                            </div>
                        </div>
                        <Button>Start Referring</Button>
                    </div>
                    <Card>
                        <CardHeader>
                            <CardTitle>How It Works</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ol className="space-y-4 list-decimal list-inside">
                                <li>Log in to your NetGuru Fiber account</li>
                                <li>Navigate to the referral section</li>
                                <li>Get your unique referral code or link</li>
                                <li>Share your code with friends and family</li>
                                <li>When they sign up using your code, you both get rewarded</li>
                            </ol>
                            <p className="mt-4 text-sm text-muted-foreground">
                                Terms and conditions apply. Rewards are credited after the referred customer&apos;s service has been active for 30 days.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

