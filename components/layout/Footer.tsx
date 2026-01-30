import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import Container from '@/components/ui/Container';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    organization: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Mission', href: '/about#mission' },
      { name: 'Blog', href: '/blog' },
      { name: 'Contact', href: '/contact' },
    ],
    getInvolved: [
      { name: 'Become a Member', href: '/contact' },
      { name: 'Events', href: '/blog' },
      { name: 'Volunteer', href: '/contact' },
      { name: 'Partner With Us', href: '/contact' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <Container className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#0ea5e9] to-[#0284c7] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">DYE</span>
              </div>
              <span className="font-poppins font-bold text-lg text-white">
                DYE
              </span>
            </div>
            <p className="text-sm mb-4">
              Empowering young professionals and executives in Davao City through networking, mentorship, and community service.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="text-gray-400 hover:text-[#0ea5e9] transition-colors"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Organization Links */}
          <div>
            <h3 className="font-poppins font-semibold text-white mb-4">Organization</h3>
            <ul className="space-y-2">
              {footerLinks.organization.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-[#0ea5e9] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved Links */}
          <div>
            <h3 className="font-poppins font-semibold text-white mb-4">Get Involved</h3>
            <ul className="space-y-2">
              {footerLinks.getInvolved.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-[#0ea5e9] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-poppins font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm">
                <MapPin size={18} className="text-[#0ea5e9] mt-0.5 flex-shrink-0" />
                <span>Davao City, Philippines</span>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Mail size={18} className="text-[#0ea5e9] flex-shrink-0" />
                <a href="mailto:info@davaoyoungexecutives.org" className="hover:text-[#0ea5e9] transition-colors">
                  info@davaoyoungexecutives.org
                </a>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Phone size={18} className="text-[#0ea5e9] flex-shrink-0" />
                <a href="tel:+63821234567" className="hover:text-[#0ea5e9] transition-colors">
                  +63 82 123 4567
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {currentYear} Davao Young Executives. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
