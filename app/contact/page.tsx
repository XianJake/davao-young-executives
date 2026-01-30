import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import Hero from '@/components/sections/Hero';
import Container from '@/components/ui/Container';
import ContactForm from '@/components/forms/ContactForm';

export default function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      details: 'Davao City, Philippines',
      link: null,
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'davaoyoungexecutives@gmail.com',
      link: 'mailto:davaoyoungexecutives@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+63 82 123 4567',
      link: 'tel:+63821234567',
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: 'Mon - Fri: 9:00 AM - 5:00 PM',
      link: null,
    },
  ];

  return (
    <main>
      <Hero
        title="Get in Touch"
        subtitle="Have questions? Want to become a member? We'd love to hear from you!"
      />

      <section className="py-20 bg-gray-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="font-poppins font-bold text-2xl text-gray-900 mb-2">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="font-poppins font-bold text-2xl text-gray-900 mb-6">
                Contact Information
              </h2>
              <p className="text-gray-600 mb-8">
                Reach out to us through any of these channels. We're here to help and answer any
                questions you may have about our organization and membership.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  const content = (
                    <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#09006C] to-[#06004a] rounded-lg flex items-center justify-center">
                          <Icon className="text-white" size={24} />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-poppins font-semibold text-lg text-gray-900 mb-1">
                          {info.title}
                        </h3>
                        <p className="text-gray-600">{info.details}</p>
                      </div>
                    </div>
                  );

                  if (info.link) {
                    return (
                      <a key={index} href={info.link} className="block">
                        {content}
                      </a>
                    );
                  }

                  return <div key={index}>{content}</div>;
                })}
              </div>

              {/* Additional Info */}
              <div className="mt-8 bg-gradient-to-br from-[#09006C] to-[#06004a] rounded-xl p-8 text-white">
                <h3 className="font-poppins font-bold text-xl mb-4">
                  Interested in Becoming a Member?
                </h3>
                <p className="text-blue-100 mb-6">
                  Join our community of young professionals and executives making a difference in
                  Davao City. Membership is open to motivated individuals committed to personal
                  growth and community service.
                </p>
                <ul className="space-y-3 text-blue-100">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#f59e0b] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Access to exclusive networking events and workshops</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#f59e0b] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Mentorship opportunities with industry leaders</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#f59e0b] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Community service projects and initiatives</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#f59e0b] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Professional development resources</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-16 bg-white">
        <Container>
          <div className="bg-gray-200 rounded-xl h-96 flex items-center justify-center">
            <p className="text-gray-500 text-lg">Map integration would go here</p>
          </div>
        </Container>
      </section>
    </main>
  );
}
