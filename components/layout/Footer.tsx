import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Linkedin, Mail, MapPin } from 'lucide-react';
import Container from '@/components/ui/Container';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    organization: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Mission', href: '/about#mission' },
      //{ name: 'Blog', href: '/blog' },
      { name: 'Contact', href: '/contact' },
    ],
    getInvolved: [
      //{ name: 'Become a Member', href: '/contact' },
      { name: 'Events', href: '/blog' },
      { name: 'Volunteer', href: '/contact' },
      { name: 'Partner With Us', href: '/contact' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/DavaoYoungExecutives', label: 'Facebook' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/davao-young-executives', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <Container className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="mb-4">
              <Image
                src="/DYELOGO.png"
                alt="Davao Young Executives Logo"
                width={120}
                height={40}
                className="h-auto w-auto max-h-10 brightness-0 invert"
              />
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
                    className="text-gray-400 hover:text-[#D5D3D1] transition-colors"
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
                    className="text-sm hover:text-[#D5D3D1] transition-colors"
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
                    className="text-sm hover:text-[#D5D3D1] transition-colors"
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
                <MapPin size={18} className="text-[#D5D3D1] mt-0.5 flex-shrink-0" />
                <span>Davao City, Philippines</span>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Mail size={18} className="text-[#D5D3D1] flex-shrink-0" />
                <a href="mailto:info@davaoyoungexecutives.org" className="hover:text-[#D5D3D1] transition-colors">
                  info@davaoyoungexecutives.org
                </a>
              </li>
              {/* <li className="flex items-center space-x-2 text-sm">
                <Phone size={18} className="text-[#D5D3D1] flex-shrink-0" />
                <a href="tel:+63821234567" className="hover:text-[#D5D3D1] transition-colors">
                  +63 82 123 4567
                </a>
              </li> */}
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
