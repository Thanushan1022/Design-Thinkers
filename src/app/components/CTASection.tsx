import { Button } from './ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0B2A6F] via-[#0B2A6F] to-[#0B6B3A] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#D4A017] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0B6B3A] rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          Modernize Your Recruitment Process Today
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Join thousands of HR professionals who are hiring smarter with our AI-powered ATS platform.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button
            size="lg"
            className="bg-white text-[#0B2A6F] hover:bg-white/90 group"
          >
            Start Your Free Trial
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white/10"
          >
            Schedule a Demo
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-white/90">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5" />
            <span className="text-sm">14-day free trial</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5" />
            <span className="text-sm">No credit card required</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5" />
            <span className="text-sm">Cancel anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
}
