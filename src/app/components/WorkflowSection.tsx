import {
  UserPlus,
  Shield,
  CreditCard,
  Sparkles,
  Users,
  Target,
  BarChart
} from 'lucide-react';

const workflowSteps = [
  {
    icon: UserPlus,
    title: 'Company Registers',
    description: 'Sign up and create your company profile',
    color: '#0B2A6F'
  },
  {
    icon: Shield,
    title: 'Admin Creates Account',
    description: 'Set up admin credentials and permissions',
    color: '#0B6B3A'
  },
  {
    icon: CreditCard,
    title: 'Choose Subscription',
    description: 'Select the plan that fits your needs',
    color: '#D4A017'
  },
  {
    icon: Sparkles,
    title: 'Access ATS Features',
    description: 'Unlock powerful recruitment tools',
    color: '#0B2A6F'
  },
  {
    icon: Users,
    title: 'Manage Candidates',
    description: 'Upload and organize candidate profiles',
    color: '#0B6B3A'
  },
  {
    icon: Target,
    title: 'AI Screening & Hiring',
    description: 'Automate screening and selection process',
    color: '#D4A017'
  },
  {
    icon: BarChart,
    title: 'HR Analytics Dashboard',
    description: 'Track metrics and optimize hiring',
    color: '#0B2A6F'
  }
];

export default function WorkflowSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0B6B3A]/10 rounded-full mb-4">
            <Sparkles className="h-4 w-4 text-[#0B6B3A]" />
            <span className="text-sm font-medium text-[#0B6B3A]">Simple Process</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0B2A6F] mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get started in minutes with our streamlined onboarding process and start hiring smarter today.
          </p>
        </div>

        <div className="relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0B2A6F] via-[#D4A017] to-[#0B6B3A] -translate-y-1/2 hidden lg:block" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {workflowSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <div className="flex flex-col items-center text-center group">
                    <div
                      className="relative w-20 h-20 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300 z-10"
                      style={{
                        background: `linear-gradient(135deg, ${step.color}, ${step.color}dd)`
                      }}
                    >
                      <Icon className="h-10 w-10 text-white" />
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                        <span className="text-sm font-bold" style={{ color: step.color }}>
                          {index + 1}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {step.description}
                    </p>
                  </div>

                  {index < workflowSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 -right-12 w-24">
                      <svg className="w-full h-8" viewBox="0 0 100 32" fill="none">
                        <path
                          d="M0 16 L85 16 M85 16 L75 6 M85 16 L75 26"
                          stroke={step.color}
                          strokeWidth="2"
                          opacity="0.3"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
