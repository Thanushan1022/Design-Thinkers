import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';
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
  },
  {
    question: 'What kind of support do you offer?',
    answer: 'We provide comprehensive support across all plans. Basic plan includes email support with 48-hour response time. Standard plan adds priority email support and chat support. Premium plan includes 24/7 phone, email, and chat support with a dedicated account manager. We also offer extensive documentation, video tutorials, and regular training webinars.'
  },
  {
    question: 'Is my candidate data secure?',
    answer: 'Absolutely! We take data security very seriously. All data is encrypted in transit and at rest using industry-standard AES-256 encryption. We are SOC 2 Type II certified, GDPR compliant, and conduct regular security audits. We also offer custom data retention policies and the ability to export or delete your data at any time.'
  },
  {
    question: 'Can I integrate the ATS with other HR tools?',
    answer: 'Yes! Our platform offers robust integration capabilities. Standard plan includes integrations with popular tools like LinkedIn, Indeed, and Google Workspace. Premium plan adds API access, custom integrations, webhooks, and connects with HRIS systems, payroll software, background check providers, and assessment platforms.'
  },
  {
    question: 'How does the AI candidate screening work?',
    answer: 'Our AI technology uses advanced natural language processing and machine learning algorithms to analyze resumes and applications. It extracts key information like skills, experience, and education, then matches candidates against your job requirements. The AI ranks candidates based on fit, highlights key qualifications, and flags potential concerns - all while being designed to reduce unconscious bias in the screening process.'
  },
  {
    question: 'Do you offer a free trial?',
    answer: 'Yes! We offer a 14-day free trial on all plans with full access to features. No credit card required to start. You can explore the platform, test all features, import sample data, and evaluate whether it meets your needs. Our team is available during your trial to help with onboarding and answer any questions.'
  },
  {
    question: 'What happens to my data if I cancel?',
    answer: 'You maintain full ownership of your data. Upon cancellation, you have 30 days to export all your candidate data, job postings, and analytics. We provide easy-to-use export tools in multiple formats (CSV, Excel, PDF). After the 30-day grace period, data is securely deleted from our systems in compliance with data protection regulations.'
  },
  {
    question: 'Can I customize the platform for my company branding?',
    answer: 'Yes! Standard plan includes basic customization like adding your logo and company colors to job postings. Premium plan offers advanced white-labeling features including custom domains, fully branded candidate portals, customizable email templates, and the ability to remove Design Thinkers branding from all customer-facing materials.'
  }
];

export default function FAQ() {
  return (
    <div className="min-h-screen bg-white">
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0B2A6F]/10 rounded-full mb-4">
              <HelpCircle className="h-4 w-4 text-[#0B2A6F]" />
              <span className="text-sm font-medium text-[#0B2A6F]">Support</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-[#0B2A6F] mb-4">
              Frequently Asked Questions
            </h1>
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
              href="mailto:support@designthinkershr.com"
              className="text-[#0B2A6F] font-medium hover:text-[#0B6B3A] transition-colors"
            >
              Contact our support team →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
