import { Target, Eye, Heart, Users, Briefcase, Globe, BookOpen } from 'lucide-react';
import Hero from '@/components/sections/Hero';
import Container from '@/components/ui/Container';

export default function About() {
  const values = [
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We uphold the highest standards of honesty, ethics, and transparency in all our endeavors.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of working together to achieve greater impact and shared success.',
    },
    {
      icon: Briefcase,
      title: 'Excellence',
      description: 'We strive for excellence in professional development and community service.',
    },
    {
      icon: Globe,
      title: 'Innovation',
      description: 'We embrace new ideas and creative approaches to address challenges and opportunities.',
    },
  ];

  return (
    <main>
      <Hero
        title="About Davao Young Executives"
        subtitle="Learn about our mission to empower the next generation of leaders in Davao City"
      />

      {/* Our Story Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#09006C] to-[#06004a] rounded-full mb-6">
              <BookOpen className="text-white" size={32} />
            </div>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900 mb-8">
              Our Story
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                DYE began as a project of Kota Study Center Davao, an academic and personal development
                center for men located in downtown Davao. Kota provides programs and spaces for serious
                study, academic support, and holistic formation, helping students grow in character,
                culture, and Christian values while preparing for professional life.
              </p>
              <p>
                In 2024, DYE entered a new chapter. A core team of tech students, student leaders, and
                young entrepreneurs came together to continue the mission—learning from its founders and
                reimagining DYE as a platform for innovation, leadership, and service.
              </p>
              <p className="font-medium text-gray-900">
                Today, DYE carries forward its roots while building for the future, committed to giving
                back to the community and creating meaningful impact.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#09006C] to-[#06004a] rounded-full mb-6">
                <Target className="text-white" size={32} />
              </div>
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900 mb-6">
                Our Mission
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Davao Young Executives (DYE) is dedicated to empowering young professionals and executives
                  in Davao City through networking, mentorship, and community service initiatives.
                </p>
                <p>
                  We create opportunities for personal and professional growth by fostering meaningful
                  connections, providing access to expert mentorship, and organizing impactful community
                  service projects that make a difference in our city.
                </p>
                <p>
                  Through our programs and events, we aim to develop future leaders who are not only
                  successful in their careers but also committed to giving back to their community.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#09006C] to-[#06004a] rounded-2xl p-8 text-white shadow-xl">
              <h3 className="font-poppins font-bold text-2xl mb-6">What We Do</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-[#f59e0b] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Host regular networking events and professional development workshops</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-[#f59e0b] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Facilitate mentorship programs connecting emerging leaders with industry experts</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-[#f59e0b] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Organize community service projects addressing local needs</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-[#f59e0b] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Provide platforms for knowledge sharing and skill development</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-[#f59e0b] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Build a strong community of young professionals committed to excellence</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#09006C] to-[#06004a] rounded-full mb-6">
              <Eye className="text-white" size={32} />
            </div>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900 mb-6">
              Our Vision
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              To be the premier organization for young professionals in Davao City, recognized for
              developing ethical, innovative, and community-minded leaders who drive positive change
              in business and society.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <p className="text-4xl font-poppins font-bold text-[#09006C] mb-2">200+</p>
                <p className="text-gray-600 font-medium">Active Members</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <p className="text-4xl font-poppins font-bold text-[#09006C] mb-2">50+</p>
                <p className="text-gray-600 font-medium">Annual Events</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <p className="text-4xl font-poppins font-bold text-[#09006C] mb-2">3+</p>
                <p className="text-gray-600 font-medium">Years of Service</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and shape the culture of our organization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 border border-gray-200 rounded-xl hover:border-[#09006C] hover:shadow-lg transition-all group"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-[#09006C]/10 rounded-full mb-4 group-hover:bg-[#09006C] transition-colors">
                    <Icon className="text-[#09006C] group-hover:text-white transition-colors" size={28} />
                  </div>
                  <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#09006C] to-[#06004a] text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4">
              Join Our Community
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Be part of a dynamic network of young professionals making a difference in Davao City
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#f59e0b] text-white rounded-lg font-medium hover:bg-[#d97706] transition-colors shadow-md hover:shadow-lg"
            >
              Become a Member Today
            </a>
          </div>
        </Container>
      </section>
    </main>
  );
}
