import { Button } from './ui/button';
import { ArrowRight, PlayCircle, CheckCircle } from 'lucide-react';
import DashboardCarousel from './DashboardCarousel';

export default function HeroSection() {
  return (
    <section id="home" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B2A6F]/5 via-white to-[#0B6B3A]/5 -z-10" />

      <div className="absolute top-20 right-10 w-72 h-72 bg-[#D4A017]/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#0B6B3A]/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0B6B3A]/10 rounded-full">
              <div className="w-2 h-2 bg-[#0B6B3A] rounded-full animate-pulse" />
              <span className="text-sm font-medium text-[#0B6B3A]">
                AI-Powered Recruitment Platform
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-[#0B2A6F] leading-tight">
              Smart AI-Powered
              <span className="block bg-gradient-to-r from-[#0B2A6F] to-[#0B6B3A] bg-clip-text text-transparent">
                ATS & HR Platform
              </span>
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              Streamline recruitment, automate hiring workflows, manage candidates, and scale your HR operations with Design Thinkers HR Consultancy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-[#0B2A6F] hover:bg-[#0B2A6F]/90 text-white group"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#0B2A6F] text-[#0B2A6F] hover:bg-[#0B2A6F]/5"
              >
                <PlayCircle className="mr-2 h-5 w-5" />
                Book Demo
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-[#0B6B3A]" />
                <span className="text-sm text-gray-600">No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-[#0B6B3A]" />
                <span className="text-sm text-gray-600">14-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-[#0B6B3A]" />
                <span className="text-sm text-gray-600">Cancel anytime</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <DashboardCarousel />
          </div>
        </div>
      </div>
    </section>
  );
}
