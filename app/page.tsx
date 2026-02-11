import { Users, Calendar, Award, Target, Lightbulb, Heart, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Hero from '@/components/sections/Hero';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export default function Home() {
  const stats = [
    { label: 'Active Members', value: '200+', icon: Users },
    { label: 'Events Held', value: '40+', icon: Calendar },
    { label: 'Years of Service', value: '3', icon: Award },
  ];

  const features = [
    {
      icon: Target,
      title: 'Professional Development',
      description: 'Access exclusive workshops, seminars, and training programs designed to enhance your leadership and professional skills.',
    },
    {
      icon: Users,
      title: 'Networking Opportunities',
      description: 'Connect with like-minded young professionals and executives across various industries in Davao City.',
    },
    {
      icon: Lightbulb,
      title: 'Mentorship Programs',
      description: 'Learn from experienced leaders and industry experts through our structured mentorship initiatives.',
    },
    {
      icon: Heart,
      title: 'Community Impact',
      description: 'Make a difference through our community service projects and social responsibility initiatives.',
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <Hero
        title="Empowering Future Leaders to Aspire, Lead, and Excel."
        subtitle="DYE is a youth-led organization that empowers student leaders and academic achievers in Davao to become future-oriented and socially responsible changemakers through training, coaching, partnerships, and outreach."
        ctaText="Partner With Us"
        ctaLink="/contact"
        secondaryCtaText="Learn More"
        secondaryCtaLink="/about"
      />

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="text-center p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#09006C] to-[#06004a] rounded-full mb-4">
                    <Icon className="text-white" size={32} />
                  </div>
                  <p className="text-4xl font-poppins font-bold text-gray-900 mb-2">
                    {stat.value}
                  </p>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/Images/Homepage-1.png"
                alt="DYE Community"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="font-bold text-3xl md:text-4xl text-gray-900 mb-6">
                Building Tomorrow&apos;s Leaders Today
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Davao Young Executives (DYE) is more than just a professional organization; we&apos;re a community
                of passionate individuals committed to making a difference in Davao City.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Through networking events, skill-building workshops, and community service initiatives, we
                empower young professionals to reach their full potential while giving back to society.
              </p>
              <Button href="/about" variant="primary" className="group">
                Learn Our Story
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-bold text-3xl md:text-4xl text-gray-900 mb-4">
              Why Join DYE?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the benefits of being part of Davao&apos;s premier organization for young professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="p-8 bg-white border border-gray-200 rounded-xl hover:border-[#09006C] hover:shadow-lg transition-all group"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-[#09006C]/10 rounded-lg mb-4 group-hover:bg-[#1200D9] transition-colors">
                    <Icon className="text-[#09006C] group-hover:text-white transition-colors" size={24} />
                  </div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Features Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="relative h-[300px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/Images/Homepage-2.png"
                alt="Professional Development"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="relative h-[300px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/Images/Homepage-3.png"
                alt="Networking Events"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="relative h-[300px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/Images/Homepage-4.png"
                alt="Community Service"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Community Impact Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="font-bold text-3xl md:text-4xl text-gray-900 mb-6">
                Making a Difference Together
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our community service initiatives have touched countless lives in Davao City. From educational
                programs to environmental projects, we&apos;re committed to creating lasting positive change.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Every event, every project, every connection we make is an opportunity to give back and build
                a better future for our community.
              </p>
              <div className="flex items-center gap-8">
                <div>
                  <p className="text-4xl font-bold text-[#09006C]">15</p>
                  <p className="text-gray-600 text-sm">Projects Completed</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-[#09006C]">500+</p>
                  <p className="text-gray-600 text-sm">Lives Impacted</p>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl order-1 lg:order-2">
              <Image
                src="/Images/Homepage-5.png"
                alt="Community Impact"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#09006C] to-[#06004a] text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-bold text-3xl md:text-4xl mb-6">
              Partner With Us
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Join hundreds of young professionals who are shaping the future of Davao City. Whether you&apos;re interested in membership, collaboration, or sponsorship opportunities, let&apos;s connect.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/contact"
                variant="secondary"
                className="group"
              >
                Get in Touch
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              <Button
                href="/about"
                variant="outline"
                className="bg-white/10 border-white text-white hover:bg-white hover:text-[#1200D9]"
              >
                Learn About Our Mission
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
