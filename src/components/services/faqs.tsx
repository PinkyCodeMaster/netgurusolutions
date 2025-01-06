import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
    {
        question: "What internet speeds do you offer?",
        answer: "We offer a range of speeds from 100 Mbps to 1 Gbps for our fibre internet plans. Our wireless internet solutions can provide speeds up to 100 Mbps, depending on your location and signal strength."
    },
    {
        question: "Is there a data cap on your internet plans?",
        answer: "No, all our internet plans come with unlimited data. We believe in providing our customers with unrestricted access to the internet without worrying about data limits."
    },
    {
        question: "How long does installation typically take?",
        answer: "For fibre internet, installation usually takes 1-2 hours. Wireless internet installation can take 2-4 hours, depending on the complexity of the setup. We always aim to complete installations as quickly and efficiently as possible."
    },
    {
        question: "Do you offer business-specific internet plans?",
        answer: "Yes, we have tailored business internet plans that offer higher speeds, priority support, and additional features like static IPs and enhanced security options. Please contact our business sales team for more information."
    },
    {
        question: "What customer support options do you provide?",
        answer: "We offer 24/7 customer support via phone, email, and live chat. Our support team is based locally and is always ready to assist you with any queries or issues you may have."
    }
]

export default function FAQs() {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
                <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger>{faq.question}</AccordionTrigger>
                            <AccordionContent>{faq.answer}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    )
}

