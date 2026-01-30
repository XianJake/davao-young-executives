import { Users, Calendar, Award, Target, Lightbulb, Heart, ArrowRight } from 'lucide-react';
import Hero from '@/components/sections/Hero';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export default function Home() {
  const stats = [
    { label: 'Active Members', value: '200+', icon: Users },
    { label: 'Events Held', value: '40+', icon: Calendar },
    { label: 'Years of Service', value: '3 Years', icon: Award },
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
        title="Empowering Future Leaders in Davao City"
        subtitle="Join a vibrant community of young professionals and executives dedicated to personal growth, professional excellence, and community service."
        ctaText="Become a Member"
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

      {/* Features Section */}
      <section className="py-20">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900 mb-4">
              Why Join DYE?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the benefits of being part of Davao's premier organization for young professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="p-8 border border-gray-200 rounded-xl hover:border-[#09006C] hover:shadow-lg transition-all group"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-[#09006C]/10 rounded-lg mb-4 group-hover:bg-[#09006C] transition-colors">
                    <Icon className="text-[#09006C] group-hover:text-white transition-colors" size={24} />
                  </div>
                  <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#09006C] to-[#06004a] text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-6">
              Ready to Make an Impact?
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Join hundreds of young professionals who are shaping the future of Davao City. Take the first step towards meaningful connections and personal growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/contact"
                variant="secondary"
                className="group"
              >
                Get Started Today
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              <Button
                href="/about"
                variant="outline"
                className="bg-white/10 border-white text-white hover:bg-white hover:text-[#09006C]"
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
