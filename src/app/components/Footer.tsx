import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router';
import logo from '../../imports/image.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: ['Features', 'Pricing', 'Security', 'Integrations', 'API'],
    Company: ['About Us', 'Careers', 'Blog', 'Press Kit', 'Partners'],
    Resources: ['Documentation', 'Help Center', 'Tutorials', 'Community', 'Status'],
    Legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'Compliance', href: '#' },
      { name: 'GDPR', href: '#' }
    ]
  };

  return (
    <footer id="contact" className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img
                src={logo}
                alt="Design Thinkers HR Consultancy logo"
                className="h-10 w-10 object-contain"
              />
              <div>
                <div className="font-bold text-white text-lg leading-tight">
                  Design Thinkers
                </div>
                <div className="text-xs text-[#D4A017]">HR Consultancy</div>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              Empowering HR teams with AI-powered recruitment solutions to hire smarter, faster, and better.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                <Mail className="h-5 w-5 text-[#D4A017]" />
                <span className="text-sm">contact@designthinkers.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                <Phone className="h-5 w-5 text-[#D4A017]" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                <MapPin className="h-5 w-5 text-[#D4A017]" />
                <span className="text-sm">San Francisco, CA 94102</span>
              </div>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-white mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => {
                  const isLegalLink = typeof link === 'object';
                  const linkName = isLegalLink ? link.name : link;
                  const linkHref = isLegalLink ? link.href : '#';
                  
                  return (
                    <li key={linkName}>
                      {isLegalLink && linkHref.startsWith('/') ? (
                        <Link
                          to={linkHref}
                          className="text-gray-400 hover:text-[#D4A017] transition-colors text-sm"
                        >
                          {linkName}
                        </Link>
                      ) : (
                        <a
                          href={linkHref}
                          className="text-gray-400 hover:text-[#D4A017] transition-colors text-sm"
                        >
                          {linkName}
                        </a>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-400 text-sm">
              © {currentYear} Design Thinkers HR Consultancy. All rights reserved.
            </p>

            <div className="flex items-center gap-6">
              {[
                { icon: Facebook, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Linkedin, href: '#' },
                { icon: Instagram, href: '#' }
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#0B2A6F] flex items-center justify-center transition-colors group"
                  >
                    <Icon className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}