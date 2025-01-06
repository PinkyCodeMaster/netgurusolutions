import Hero from "@/components/services/hero"
import ServiceOverview from "@/components/services/service-overview"
import FibreInternet from "@/components/services/fibre-internet"
import WirelessInternet from "@/components/services/wireless-internet"
import MobileInternetAlternatives from "@/components/services/mobile-internet-alternatives"
import HostingServices from "@/components/services/hosting-services"
import ReferralProgram from "@/components/services/referral-program"
import FAQs from "@/components/services/faqs"

export default function ServicesPage() {
    return (
        <>
            <Hero />
            <ServiceOverview />
            <FibreInternet />
            <WirelessInternet />
            <MobileInternetAlternatives />
            <HostingServices />
            <ReferralProgram />
            <FAQs />
        </>
    )
}

