import Link from 'next/link';
import { Calendar, User, ArrowRight } from 'lucide-react';
import Hero from '@/components/sections/Hero';
import Container from '@/components/ui/Container';

export default function Blog() {
  const posts = [
    {
      id: 'leadership-skills-2026',
      title: 'Essential Leadership Skills for Young Professionals in 2026',
      excerpt: 'Discover the key leadership competencies that will set you apart in today\'s dynamic business environment.',
      author: 'Maria Santos',
      date: 'January 25, 2026',
      category: 'Leadership',
      readTime: '5 min read',
    },
    {
      id: 'community-outreach-success',
      title: 'How Our Community Outreach Program Changed Lives',
      excerpt: 'A look back at our most impactful community service initiative and the stories of transformation it created.',
      author: 'Juan dela Cruz',
      date: 'January 20, 2026',
      category: 'Community',
      readTime: '4 min read',
    },
  ];

  return (
    <main>
      <Hero
        title="News & Insights"
        subtitle="Stay updated with the latest events, stories, and insights from Davao Young Executives"
      />

      <section className="py-20 bg-gray-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden group"
              >
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="inline-block px-3 py-1 bg-[#0ea5e9]/10 text-[#0ea5e9] text-sm font-medium rounded-full">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>

                  <h2 className="font-poppins font-bold text-2xl text-gray-900 mb-3 group-hover:text-[#0ea5e9] transition-colors">
                    <Link href={`/blog/${post.id}`}>
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-2">
                        <User size={16} />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar size={16} />
                        <span>{post.date}</span>
                      </div>
                    </div>

                    <Link
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center text-[#0ea5e9] font-medium hover:text-[#0284c7] transition-colors group"
                    >
                      Read More
                      <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={16} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Empty State Message */}
          <div className="text-center mt-16">
            <p className="text-gray-600">
              More articles coming soon. Stay tuned for updates from our community!
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}
