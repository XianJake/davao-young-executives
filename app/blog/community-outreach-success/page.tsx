import Link from 'next/link';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import Container from '@/components/ui/Container';

export default function CommunityOutreachPost() {
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
                Community
              </span>
            </div>

            <h1 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-6">
              How Our Community Outreach Program Changed Lives
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-gray-600 pb-6 border-b border-gray-200">
              <div className="flex items-center space-x-2">
                <User size={18} />
                <span>Juan dela Cruz</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar size={18} />
                <span>January 20, 2026</span>
              </div>
              <span>4 min read</span>
            </div>
          </div>

          {/* Article Content */}
          <div className="bg-white rounded-xl shadow-md p-8 md:p-12 prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Last year, Davao Young Executives launched its most ambitious community outreach program
              to date. What started as a simple idea to give back to our community evolved into a
              transformative initiative that touched hundreds of lives. Here's the story of how it all happened.
            </p>

            <h2 className="font-poppins font-bold text-2xl text-gray-900 mt-10 mb-4">
              The Beginning
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              It all began during one of our monthly networking events when several members expressed their
              desire to do more for the community. We formed a small committee to explore opportunities
              where we could make a real difference. After conducting research and consultations with local
              leaders, we identified a critical need for skills training and mentorship in underserved areas
              of Davao City.
            </p>

            <h2 className="font-poppins font-bold text-2xl text-gray-900 mt-10 mb-4">
              The Program Launch
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              In March 2025, we officially launched our "Empowering Communities" program. The initiative
              focused on providing free skills training workshops in areas such as:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2 ml-4">
              <li>Digital literacy and basic computer skills</li>
              <li>Financial management and entrepreneurship</li>
              <li>Resume writing and interview preparation</li>
              <li>Communication and soft skills development</li>
            </ul>

            <h2 className="font-poppins font-bold text-2xl text-gray-900 mt-10 mb-4">
              Impact Stories
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Over the course of nine months, we trained over 300 individuals from various communities.
              The results exceeded our expectations:
            </p>

            <div className="bg-gray-50 rounded-lg p-6 my-6">
              <h3 className="font-poppins font-semibold text-lg text-gray-900 mb-3">Success Metrics</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-[#09006C]">300+</p>
                  <p className="text-sm text-gray-600">Individuals Trained</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-[#09006C]">75%</p>
                  <p className="text-sm text-gray-600">Employment Rate</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-[#09006C]">45</p>
                  <p className="text-sm text-gray-600">New Businesses</p>
                </div>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
              One of our most inspiring success stories is that of Rosa, a single mother who attended our
              entrepreneurship workshop. With the skills and confidence she gained, she started her own
              small catering business. Today, she not only supports her family but also employs three
              people from her community.
            </p>

            <div className="bg-[#09006C]/5 border-l-4 border-[#09006C] p-6 my-8 rounded-r-lg">
              <p className="text-gray-700 italic">
                "This program gave me more than just skills—it gave me hope and a path forward. I'm forever
                grateful to DYE for believing in me and my community." - Rosa M., Program Participant
              </p>
            </div>

            <h2 className="font-poppins font-bold text-2xl text-gray-900 mt-10 mb-4">
              Looking Forward
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              The success of this program has energized our entire organization. We're now planning to
              expand to more communities in 2026, with enhanced curriculum and additional partnerships
              with local businesses who can provide internship and employment opportunities for our graduates.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              This experience reinforced our belief that when young professionals come together with a
              shared purpose, we can create meaningful change in our community. We're excited to continue
              this journey and invite more members to join us in making a difference.
            </p>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-[#09006C] to-[#06004a] rounded-xl shadow-md p-8 mt-8 text-white text-center">
            <h3 className="font-poppins font-bold text-2xl mb-4">
              Want to Make a Difference?
            </h3>
            <p className="text-blue-100 mb-6">
              Join our community service initiatives and help transform lives in Davao City
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-[#f59e0b] text-white rounded-lg font-medium hover:bg-[#d97706] transition-colors shadow-md"
            >
              Get Involved
            </Link>
          </div>
        </article>
      </Container>
    </main>
  );
}
