'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'When will the service be available?',
    answer: 'We\'re currently in the pre-launch phase and expect to begin service rollout in select areas within the next few months. Register your interest to be notified when we\'re available in your area.'
  },
  {
    question: 'What speeds will be available?',
    answer: 'We\'ll offer various packages with speeds up to 1Gbps symmetric (same upload and download speeds), with plans to introduce even faster speeds in the future.'
  },
  {
    question: 'How much will the service cost?',
    answer: 'While exact pricing will be announced closer to launch, we\'re committed to offering competitive rates with transparent pricing and no hidden fees.'
  },
  {
    question: 'Will I need special equipment?',
    answer: 'We\'ll provide all necessary equipment for the fiber connection. Our team will handle the installation to ensure optimal performance.'
  },
  {
    question: 'Is there a contract requirement?',
    answer: 'We plan to offer both contract and no-contract options to suit different customer needs. Details will be available closer to launch.'
  }
];

export function FAQ() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}