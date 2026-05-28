import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { Button } from './ui/button';
import logo from '../Images/hr_PNG logo.png';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/#features' },
    { name: 'Pricing', href: '/#pricing' },
    { name: 'About', href: '/about' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Terms', href: '/terms' }
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    
    // Handle anchor links on home page
    if (href.startsWith('/#')) {
      const elementId = href.substring(2);
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2">
              <img
                src={logo}
                alt="Design Thinkers HR Consultancy logo"
                className="mt-5 h-30 w-30 object-contain"
              />
             
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-gray-700 hover:text-[#0B2A6F] transition-colors font-medium"
                onClick={() => handleNavClick(link.href)}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" className="text-[#0B2A6F] hover:text-[#0B2A6F]/80">
              Login
            </Button>
            <Button className="bg-[#0B2A6F] hover:bg-[#0B2A6F]/90 text-white">
              Get Started
            </Button>
          </div>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="block text-gray-700 hover:text-[#0B2A6F] transition-colors font-medium"
                onClick={() => handleNavClick(link.href)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-4">
              <Button variant="outline" className="w-full border-[#0B2A6F] text-[#0B2A6F]">
                Login
              </Button>
              <Button className="w-full bg-[#0B2A6F] hover:bg-[#0B2A6F]/90 text-white">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}