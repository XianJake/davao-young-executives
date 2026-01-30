import Link from 'next/link';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import Container from '@/components/ui/Container';

export default function LeadershipSkillsPost() {
  return (
    <main className="py-12 bg-gray-50">
      <Container>
        <article className="max-w-4xl mx-auto">
          {/* Back Link */}
          <Link
            href="/blog"
            className="inline-flex items-center text-[#09006C] hover:text-[#06004a] font-medium mb-8 transition-colors"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Blog
          </Link>

          {/* Article Header */}
          <div className="bg-white rounded-xl shadow-md p-8 md:p-12 mb-8">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-[#09006C]/10 text-[#09006C] text-sm font-medium rounded-full">
                Leadership
              </span>
            </div>

            <h1 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-6">
              Essential Leadership Skills for Young Professionals in 2026
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-gray-600 pb-6 border-b border-gray-200">
              <div className="flex items-center space-x-2">
                <User size={18} />
                <span>Maria Santos</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar size={18} />
                <span>January 25, 2026</span>
              </div>
              <span>5 min read</span>
            </div>
          </div>

          {/* Article Content */}
          <div className="bg-white rounded-xl shadow-md p-8 md:p-12 prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              In today's rapidly evolving business landscape, young professionals need to develop a unique
              set of leadership skills to thrive and make meaningful impact. Here are the essential
              competencies that will set you apart in 2026 and beyond.
            </p>

            <h2 className="font-poppins font-bold text-2xl text-gray-900 mt-10 mb-4">
              1. Emotional Intelligence
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              The ability to understand and manage your own emotions while empathizing with others has
              become more crucial than ever. Leaders who excel in emotional intelligence create more
              cohesive teams, navigate conflicts effectively, and build stronger professional relationships.
            </p>

            <h2 className="font-poppins font-bold text-2xl text-gray-900 mt-10 mb-4">
              2. Adaptive Thinking
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              With constant technological changes and market shifts, the ability to adapt quickly and
              think on your feet is invaluable. Successful young leaders embrace change, learn continuously,
              and pivot strategies when needed without losing sight of their core objectives.
            </p>

            <h2 className="font-poppins font-bold text-2xl text-gray-900 mt-10 mb-4">
              3. Digital Literacy
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Understanding digital tools, data analytics, and emerging technologies is no longer optional.
              Leaders who can leverage technology to improve processes, make data-driven decisions, and
              stay ahead of digital trends will have a significant competitive advantage.
            </p>

            <h2 className="font-poppins font-bold text-2xl text-gray-900 mt-10 mb-4">
              4. Inclusive Leadership
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Creating environments where diverse voices are heard and valued is essential for innovation
              and team success. Young leaders must actively work to build inclusive cultures that celebrate
              different perspectives and ensure everyone feels empowered to contribute.
            </p>

            <h2 className="font-poppins font-bold text-2xl text-gray-900 mt-10 mb-4">
              5. Strategic Communication
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Clear, concise, and compelling communication across various channels and audiences is
              fundamental to leadership success. This includes not just speaking and writing well, but
              also active listening and tailoring messages to different stakeholders.
            </p>

            <div className="bg-[#09006C]/5 border-l-4 border-[#09006C] p-6 my-8 rounded-r-lg">
              <p className="text-gray-700 italic">
                "The greatest leaders are not those who strive for personal success, but those who empower
                others to achieve their fullest potential." - Maria Santos
              </p>
            </div>

            <h2 className="font-poppins font-bold text-2xl text-gray-900 mt-10 mb-4">
              Conclusion
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Developing these leadership skills takes time, practice, and dedication. At Davao Young
              Executives, we provide numerous opportunities for young professionals to cultivate these
              competencies through our workshops, mentorship programs, and networking events. Join us in
              your leadership journey and become the leader you aspire to be.
            </p>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-[#09006C] to-[#06004a] rounded-xl shadow-md p-8 mt-8 text-white text-center">
            <h3 className="font-poppins font-bold text-2xl mb-4">
              Ready to Develop Your Leadership Skills?
            </h3>
            <p className="text-blue-100 mb-6">
              Join Davao Young Executives and access exclusive leadership development programs
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-[#f59e0b] text-white rounded-lg font-medium hover:bg-[#d97706] transition-colors shadow-md"
            >
              Become a Member
            </Link>
          </div>
        </article>
      </Container>
    </main>
  );
}
