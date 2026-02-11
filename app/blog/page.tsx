import Link from 'next/link';
import { Calendar, User, ArrowRight } from 'lucide-react';
import Hero from '@/components/sections/Hero';
import Container from '@/components/ui/Container';

export default function Blog() {
  const posts = [
    {
      id: 'davao-earthquake-response-2025',
      title: 'When the Ground Shook: How Davao\'s Youth Leaders Answered the Call',
      excerpt: 'When a 7.4 magnitude earthquake devastated Davao Oriental, 20+ youth organizations united to raise ₱114,709 in just 4 days, delivering hope to 400+ families across Manay and Caraga. This is the story of what happens when young leaders refuse to stand idle.',
      author: 'Christian Jake A. Geonzon',
      date: 'February 10, 2026',
      category: 'Community Impact',
      readTime: '8 min read',
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
                    <span className="inline-block px-3 py-1 bg-[#09006C]/10 text-[#09006C] text-sm font-medium rounded-full">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>

                  <h2 className="font-poppins font-bold text-2xl text-gray-900 mb-3 group-hover:text-[#1200D9] transition-colors">
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
                      className="inline-flex items-center text-[#09006C] font-medium hover:text-[#06004a] transition-colors group"
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
