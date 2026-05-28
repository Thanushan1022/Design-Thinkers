import {
  Sparkles,
  Target,
  Megaphone,
  LayoutDashboard,
  BarChart3,
  Workflow,
  Mail,
  Users
} from 'lucide-react';
import { Card, CardContent } from './ui/card';

const features = [
  {
    icon: Sparkles,
    title: 'AI JD Generator',
    description: 'Create compelling job descriptions instantly with our advanced AI technology.',
    color: '#0B2A6F',
    gradient: 'from-[#0B2A6F]/10 to-[#0B2A6F]/5'
  },
  {
    icon: Target,
    title: 'AI Screening',
    description: 'Automatically screen and rank candidates based on job requirements and qualifications.',
    color: '#0B6B3A',
    gradient: 'from-[#0B6B3A]/10 to-[#0B6B3A]/5'
  },
  {
    icon: Megaphone,
    title: 'Job Posting Management',
    description: 'Post jobs across multiple platforms and track applications in one centralized dashboard.',
    color: '#D4A017',
    gradient: 'from-[#D4A017]/10 to-[#D4A017]/5'
  },
  {
    icon: LayoutDashboard,
    title: 'Candidate Dashboard',
    description: 'Comprehensive candidate profiles with resume parsing, notes, and activity tracking.',
    color: '#0B2A6F',
    gradient: 'from-[#0B2A6F]/10 to-[#0B2A6F]/5'
  },
  {
    icon: BarChart3,
    title: 'Recruitment Analytics',
    description: 'Gain insights into your hiring pipeline with powerful analytics and reporting tools.',
    color: '#0B6B3A',
    gradient: 'from-[#0B6B3A]/10 to-[#0B6B3A]/5'
  },
  {
    icon: Workflow,
    title: 'HR Workflow Automation',
    description: 'Automate repetitive tasks and create custom workflows for your hiring process.',
    color: '#D4A017',
    gradient: 'from-[#D4A017]/10 to-[#D4A017]/5'
  },
  {
    icon: Mail,
    title: 'Email & WhatsApp Notifications',
    description: 'Stay connected with automated notifications via email and WhatsApp messaging.',
    color: '#0B2A6F',
    gradient: 'from-[#0B2A6F]/10 to-[#0B2A6F]/5'
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Enable seamless collaboration with multi-user access and team communication tools.',
    color: '#0B6B3A',
    gradient: 'from-[#0B6B3A]/10 to-[#0B6B3A]/5'
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0B2A6F]/10 rounded-full mb-4">
            <Sparkles className="h-4 w-4 text-[#0B2A6F]" />
            <span className="text-sm font-medium text-[#0B2A6F]">Powerful Features</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0B2A6F] mb-4">
            Everything You Need to Hire Smarter
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our comprehensive ATS platform provides all the tools you need to streamline your recruitment process from start to finish.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-gray-100 hover:border-gray-200 hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-7 w-7" style={{ color: feature.color }} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
