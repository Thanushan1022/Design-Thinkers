import { useState, useEffect } from 'react';
import { Users, FileText, TrendingUp, Building, CheckCircle, Clock, Star, BarChart } from 'lucide-react';

const dashboards = [
  {
    title: 'Recruitment Dashboard',
    type: 'recruitment',
    stats: [
      { icon: Users, label: 'Candidates', value: '2,543', color: '#0B2A6F', bg: 'from-[#0B2A6F]/5 to-[#0B2A6F]/10' },
      { icon: FileText, label: 'Open Jobs', value: '142', color: '#0B6B3A', bg: 'from-[#0B6B3A]/5 to-[#0B6B3A]/10' },
      { icon: TrendingUp, label: 'Success Rate', value: '89%', color: '#D4A017', bg: 'from-[#D4A017]/5 to-[#D4A017]/10' }
    ],
    candidates: [
      { name: 'Sarah Johnson', role: 'Senior Developer', status: 'Interview Scheduled', color: '#0B6B3A' },
      { name: 'Michael Chen', role: 'Product Manager', status: 'Under Review', color: '#D4A017' },
      { name: 'Emma Williams', role: 'UX Designer', status: 'Shortlisted', color: '#0B2A6F' }
    ]
  },
  {
    title: 'Candidate Dashboard',
    type: 'candidate',
    stats: [
      { icon: CheckCircle, label: 'Shortlisted', value: '324', color: '#0B6B3A', bg: 'from-[#0B6B3A]/5 to-[#0B6B3A]/10' },
      { icon: Clock, label: 'In Review', value: '156', color: '#D4A017', bg: 'from-[#D4A017]/5 to-[#D4A017]/10' },
      { icon: Star, label: 'Top Rated', value: '89', color: '#0B2A6F', bg: 'from-[#0B2A6F]/5 to-[#0B2A6F]/10' }
    ],
    candidates: [
      { name: 'David Miller', role: 'Full Stack Developer', status: 'Top Match', color: '#0B6B3A' },
      { name: 'Lisa Anderson', role: 'Data Scientist', status: 'High Priority', color: '#0B2A6F' },
      { name: 'John Smith', role: 'DevOps Engineer', status: 'Screening', color: '#D4A017' }
    ]
  },
  {
    title: 'Company Dashboard',
    type: 'company',
    stats: [
      { icon: Building, label: 'Active Departments', value: '12', color: '#0B2A6F', bg: 'from-[#0B2A6F]/5 to-[#0B2A6F]/10' },
      { icon: Users, label: 'HR Team', value: '24', color: '#0B6B3A', bg: 'from-[#0B6B3A]/5 to-[#0B6B3A]/10' },
      { icon: BarChart, label: 'Hiring Rate', value: '92%', color: '#D4A017', bg: 'from-[#D4A017]/5 to-[#D4A017]/10' }
    ],
    candidates: [
      { name: 'Engineering Team', role: '45 Active Positions', status: 'Hiring', color: '#0B2A6F' },
      { name: 'Sales Department', role: '23 Open Roles', status: 'Active', color: '#0B6B3A' },
      { name: 'Marketing Team', role: '12 Positions', status: 'Recruiting', color: '#D4A017' }
    ]
  }
];

export default function DashboardCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % dashboards.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const dashboard = dashboards[currentSlide];

  return (
    <div className="relative">
      <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
        <div className="bg-gradient-to-r from-[#0B2A6F] to-[#0B6B3A] p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-400 rounded-full" />
              <div className="w-3 h-3 bg-yellow-400 rounded-full" />
              <div className="w-3 h-3 bg-green-400 rounded-full" />
            </div>
            <div className="flex gap-1.5">
              {dashboards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'w-8 bg-white' : 'w-1.5 bg-white/40'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="p-6 space-y-4 min-h-[400px]">
          <div className="flex items-center justify-between">
            <h3
              className="font-semibold text-[#0B2A6F] transition-all duration-500"
              key={dashboard.title}
            >
              {dashboard.title}
            </h3>
            <span className="text-xs bg-[#0B6B3A]/10 text-[#0B6B3A] px-2 py-1 rounded-full">
              Live
            </span>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {dashboard.stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  className={`bg-gradient-to-br ${stat.bg} p-4 rounded-lg transform transition-all duration-500`}
                  style={{
                    animation: `slideIn 0.5s ease-out ${i * 0.1}s both`
                  }}
                >
                  <Icon className="h-6 w-6 mb-2" style={{ color: stat.color }} />
                  <div className="text-2xl font-bold" style={{ color: stat.color }}>
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>

          <div className="space-y-3">
            {dashboard.candidates.map((candidate, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-500"
                style={{
                  animation: `slideIn 0.5s ease-out ${(i + 3) * 0.1}s both`
                }}
              >
                <div
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0B2A6F] to-[#0B6B3A] flex items-center justify-center text-white font-semibold"
                >
                  {candidate.name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-sm text-gray-900 truncate">
                    {candidate.name}
                  </div>
                  <div className="text-xs text-gray-500">{candidate.role}</div>
                </div>
                <div
                  className="text-xs px-2 py-1 rounded-full"
                  style={{
                    backgroundColor: `${candidate.color}15`,
                    color: candidate.color
                  }}
                >
                  {candidate.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#D4A017] to-[#D4A017]/50 rounded-2xl rotate-12 opacity-20 blur-xl" />
      <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-[#0B6B3A] to-[#0B6B3A]/50 rounded-2xl -rotate-12 opacity-20 blur-xl" />

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
