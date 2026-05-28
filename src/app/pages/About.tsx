import { Users, Target, Award, TrendingUp, Shield, Globe } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';

const stats = [
  { value: '10,000+', label: 'Companies Trust Us' },
  { value: '500K+', label: 'Candidates Processed' },
  { value: '98%', label: 'Customer Satisfaction' },
  { value: '50+', label: 'Countries Worldwide' }
];

const values = [
  {
    icon: Target,
    title: 'Innovation First',
    description: 'We leverage cutting-edge AI technology to revolutionize the recruitment process and deliver smarter hiring solutions.',
    color: '#0B2A6F'
  },
  {
    icon: Shield,
    title: 'Data Security',
    description: 'Your candidate data is protected with enterprise-grade security, compliance with global regulations, and full transparency.',
    color: '#0B6B3A'
  },
  {
    icon: Users,
    title: 'Customer Success',
    description: 'We are committed to your success with dedicated support, continuous platform improvements, and personalized onboarding.',
    color: '#D4A017'
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Supporting organizations worldwide with multi-language capabilities and localized recruitment solutions.',
    color: '#0B2A6F'
  }
];

const team = [
  {
    name: 'Sarah Mitchell',
    role: 'CEO & Founder',
    bio: '15+ years in HR technology and talent acquisition'
  },
  {
    name: 'David Chen',
    role: 'CTO',
    bio: 'AI/ML expert with background from leading tech companies'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Head of Product',
    bio: 'Product leader passionate about user-centric design'
  },
  {
    name: 'Michael Thompson',
    role: 'VP of Customer Success',
    bio: 'Dedicated to ensuring exceptional customer experiences'
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0B2A6F]/5 via-white to-[#0B6B3A]/5">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0B2A6F]/10 rounded-full mb-6">
            <Users className="h-4 w-4 text-[#0B2A6F]" />
            <span className="text-sm font-medium text-[#0B2A6F]">About Us</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-[#0B2A6F] mb-6">
            Transforming Recruitment with
            <span className="block bg-gradient-to-r from-[#0B2A6F] to-[#0B6B3A] bg-clip-text text-transparent">
              AI-Powered Innovation
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Design Thinkers HR Consultancy is on a mission to revolutionize how companies find, engage, and hire top talent through intelligent automation and human-centered design.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-[#0B2A6F] mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0B2A6F] mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We believe that finding the right talent shouldn't be complicated, time-consuming, or biased. 
              Our AI-powered ATS platform empowers HR teams to make data-driven hiring decisions while 
              maintaining the human touch that's essential to building great teams.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0B2A6F]/10 to-[#0B2A6F]/5 flex items-center justify-center flex-shrink-0">
                <Target className="h-6 w-6 text-[#0B2A6F]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To become the world's most trusted AI-powered recruitment platform, enabling organizations 
                  of all sizes to build diverse, talented teams efficiently and ethically.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0B6B3A]/10 to-[#0B6B3A]/5 flex items-center justify-center flex-shrink-0">
                <Award className="h-6 w-6 text-[#0B6B3A]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Commitment</h3>
                <p className="text-gray-600 leading-relaxed">
                  We are committed to continuous innovation, exceptional customer service, and building 
                  technology that reduces bias while increasing efficiency in the hiring process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0B2A6F] mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div 
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                      style={{ backgroundColor: `${value.color}15` }}
                    >
                      <Icon className="h-7 w-7" style={{ color: value.color }} />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0B2A6F] mb-4">
              Meet Our Leadership
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experienced leaders passionate about transforming recruitment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-gray-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#0B2A6F]/20 to-[#0B6B3A]/20 flex items-center justify-center">
                    <Users className="h-12 w-12 text-[#0B2A6F]" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-[#D4A017] font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#0B2A6F]/5 to-[#0B6B3A]/5 rounded-2xl p-8 md:p-12 border border-gray-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-[#0B2A6F]" />
              </div>
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-[#0B2A6F]">
                  Our Journey
                </h2>
              </div>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Founded in 2020, Design Thinkers HR Consultancy started with a simple observation: 
                recruitment was broken. HR teams were drowning in resumes, struggling with bias, 
                and spending countless hours on manual tasks that technology could handle better.
              </p>
              <p>
                We brought together experts in AI, HR technology, and user experience design to build 
                a platform that would change how companies hire. Today, we serve over 10,000 organizations 
                across 50+ countries, processing hundreds of thousands of candidates and helping teams 
                make better hiring decisions faster.
              </p>
              <p>
                Our platform has evolved from a simple ATS to a comprehensive AI-powered recruitment 
                suite, but our mission remains the same: empower HR teams to hire smarter, faster, and better.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0B2A6F] to-[#0B6B3A]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Join Thousands of Companies Hiring Smarter
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Experience the future of recruitment with our AI-powered platform. 
            Start your 14-day free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#pricing"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-[#0B2A6F] font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get Started Free
            </a>
            <a
              href="/faq"
              className="inline-flex items-center justify-center px-8 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/20"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}