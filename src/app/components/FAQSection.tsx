import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'How does the ATS platform work?',
    answer: 'Our ATS platform streamlines your entire recruitment process from job posting to candidate selection. You can post jobs, receive applications, use AI to screen candidates, schedule interviews, collaborate with your team, and track analytics - all in one centralized dashboard. The platform automates repetitive tasks and provides intelligent insights to help you make better hiring decisions.'
  },
  {
    question: 'Can I upgrade my plan later?',
    answer: 'Yes! You can upgrade or downgrade your subscription plan at any time. When you upgrade, you\'ll immediately gain access to the additional features. Any unused portion of your current plan will be credited toward your new subscription. There are no long-term contracts or penalties for changing plans.'
  },
  {
    question: 'Do you support enterprise companies?',
    answer: 'Absolutely! Our Premium tier is specifically designed for enterprise organizations with advanced features like API integrations, custom workflows, dedicated support, and unlimited candidate processing. We also offer custom enterprise solutions with white-labeling, SSO integration, and dedicated account management. Contact our sales team for enterprise pricing and features.'
  },
  {
    question: 'Is there AI-based candidate screening?',
    answer: 'Yes! Our AI screening technology is one of our core features, available across all plans. The AI analyzes resumes, matches candidates to job requirements, ranks applicants based on qualifications, and provides screening recommendations. This helps you identify the best candidates faster while reducing bias and saving countless hours of manual review.'
  },
  {
    question: 'Can multiple HR users access the platform?',
    answer: 'Yes! Multi-user access is available starting with our Standard plan. You can add team members, assign different permission levels, collaborate on candidate evaluations, and track team activities. The Premium plan includes unlimited users with advanced role-based access control and team collaboration tools.'
  }
];

export default function FAQSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0B2A6F]/10 rounded-full mb-4">
            <HelpCircle className="h-4 w-4 text-[#0B2A6F]" />
            <span className="text-sm font-medium text-[#0B2A6F]">Support</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0B2A6F] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Find answers to common questions about our ATS platform and services.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white border border-gray-200 rounded-xl px-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-[#0B2A6F] py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a
            href="#contact"
            className="text-[#0B2A6F] font-medium hover:text-[#0B6B3A] transition-colors"
          >
            Contact our support team →
          </a>
        </div>
      </div>
    </section>
  );
}
