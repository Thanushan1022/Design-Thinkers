import { Card, CardContent } from './ui/card';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'HR Director',
    company: 'TechCorp Solutions',
    image: 'SM',
    rating: 5,
    text: 'Design Thinkers ATS has transformed our recruitment process. The AI screening feature alone has saved us 40+ hours per week. Highly recommended!',
    color: '#0B2A6F'
  },
  {
    name: 'James Rodriguez',
    role: 'Talent Acquisition Manager',
    company: 'Global Innovations Inc',
    image: 'JR',
    rating: 5,
    text: 'The analytics dashboard provides incredible insights into our hiring pipeline. We\'ve improved our time-to-hire by 35% since implementing this platform.',
    color: '#0B6B3A'
  },
  {
    name: 'Emily Chen',
    role: 'Chief People Officer',
    company: 'StartUp Ventures',
    image: 'EC',
    rating: 5,
    text: 'Best investment we\'ve made in our HR tech stack. The workflow automation and team collaboration features are game-changers for our growing company.',
    color: '#D4A017'
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4A017]/10 rounded-full mb-4">
            <Star className="h-4 w-4 text-[#D4A017] fill-current" />
            <span className="text-sm font-medium text-[#D4A017]">Client Success Stories</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0B2A6F] mb-4">
            Trusted by HR Leaders Worldwide
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See what our clients have to say about their experience with Design Thinkers HR Consultancy.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="relative overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-gray-100"
            >
              <CardContent className="p-8">
                <Quote
                  className="h-10 w-10 mb-4 opacity-20"
                  style={{ color: testimonial.color }}
                />

                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-current"
                      style={{ color: testimonial.color }}
                    />
                  ))}
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-4">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg"
                    style={{ background: `linear-gradient(135deg, ${testimonial.color}, ${testimonial.color}dd)` }}
                  >
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-xs" style={{ color: testimonial.color }}>
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>

              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-10"
                style={{ background: testimonial.color }}
              />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
