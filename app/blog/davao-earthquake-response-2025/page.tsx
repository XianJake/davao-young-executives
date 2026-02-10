import Link from 'next/link';
import Image from 'next/image';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import Container from '@/components/ui/Container';
import ShareButton from '@/components/blog/ShareButton';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'When the Ground Shook: How Davao\'s Youth Leaders Answered the Call | Davao Young Executives',
  description: 'From earthquake to action in 48 hours: How Davao\'s youth communities mobilized ₱114,709 in donations and served 400+ families, proving that young leaders don\'t wait for permission to create change.',
  openGraph: {
    title: 'When the Ground Shook: How Davao\'s Youth Leaders Answered the Call',
    description: 'From earthquake to action in 48 hours: How Davao\'s youth communities mobilized ₱114,709 in donations and served 400+ families.',
    images: [
      {
        url: '/Donation-Drive-Imgs/01-manay-distribution.jpg',
        width: 1200,
        height: 630,
        alt: 'Davao Young Executives earthquake relief distribution in Manay',
      },
    ],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'When the Ground Shook: How Davao\'s Youth Leaders Answered the Call',
    description: 'From earthquake to action in 48 hours: How Davao\'s youth communities mobilized ₱114,709 in donations and served 400+ families.',
    images: ['/Donation-Drive-Imgs/01-manay-distribution.jpg'],
  },
};

export default function DavaoEarthquakeResponsePost() {
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
                Community Impact
              </span>
            </div>

            <h1 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-6">
            When the Ground Shook: How Davao&apos;s Youth Leaders Answered the Call
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-gray-600 pb-6 border-b border-gray-200">
              <div className="flex items-center space-x-2">
                <User size={18} />
                <span>Christian Jake A. Geonzon</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar size={18} />
                <span>February 10, 2026</span>
              </div>
              <span>8 min read</span>
            </div>
          </div>

          {/* Article Content */}
          <div className="bg-white rounded-xl shadow-md p-8 md:p-12 prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
             From earthquake to action in 48 hours: How Davao&apos;s youth communities mobilized ₱114,709 in donations and served 400+ families, proving that young leaders don&apos;t wait for permission to create change.
             </p>

            <h2 className="font-poppins font-bold text-2xl text-gray-900 mt-10 mb-4">
              1. The Crisis
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              October 10, 2025. Two massive earthquakes, measuring 7.4 and 6.7 on the Richter scale, ripped through eastern Mindanao, leaving a trail of destruction across Davao Oriental. The doublet quake triggered tsunami warnings across seven provinces, sent 347 people to medical facilities, and left hundreds of families in Manay and Caraga municipalities without shelter, food, or basic necessities.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
            As the Davao City Disaster Risk Reduction and Management Office raised the alert status to Red and emergency responders scrambled to assess the damage, something else was happening across the city. Young leaders from different communities were already asking themselves: What can we do?
            </p>

            <h2 className="font-poppins font-bold text-2xl text-gray-900 mt-10 mb-4">
              2. The Response: From Idea to Action in 48 Hours
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Two days after the earthquake, on October 12, what started as conversations among youth leaders transformed into action. Through Davao Young Executives, we reached out to leads from different communities across the city. The message was simple: Our neighbors need help. Let&apos;s do something.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              What happened next surprised even us.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              In four days, we raised ₱114,709 in monetary and in-kind donations. Volunteers we&apos;d never met before showed up at collection points. Organizations across Davao, from tech communities like DevCon Davao and Phenomenal Filipina to student groups from various colleges, from startups to established institutions, rallied behind a single cause.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              This wasn&apos;t a Davao Young Executives project. It was a collective effort of Davao&apos;s youth who refused to sit idle while communities struggled.
            </p>

            {/* Preparation Images */}
            <div className="grid md:grid-cols-2 gap-4 my-8">
              <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                <Image
                  src="/Donation-Drive-Imgs/02-manay-preparation.jpg"
                  alt="Volunteers preparing relief goods for Manay distribution"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                <Image
                  src="/Donation-Drive-Imgs/04-manay-packing.jpg"
                  alt="Team packing relief goods for affected families"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <p className="text-sm text-gray-500 text-center mb-8 italic">
              Volunteers working tirelessly to prepare relief goods for distribution
            </p>

            <h2 className="font-poppins font-bold text-2xl text-gray-900 mt-10 mb-4">
              3. The Power of Community Collaboration
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Twenty-plus organizations came together, each bringing their networks, resources, and energy. The collaboration list read like a directory of Davao&apos;s most dynamic communities:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="text-gray-600 leading-relaxed">
                <strong>Tech and Innovation:</strong> Dotside Studios, IEEE Philippine Section, The Bloom, DevCon Davao, Base, UXI, DSC, MooManage
              </li>
              <li className="text-gray-600 leading-relaxed">
                <strong>Student Organizations:</strong> Various university chapters including student councils from different institutions
              </li>
              <li className="text-gray-600 leading-relaxed">
                <strong>Professional Networks:</strong> IDEAS, Cavalier Agrivet Supply, Phenomenal Filipina, FEAR NOT, and many others
              </li>
              <li className="text-gray-600 leading-relaxed">
                <strong>Supporting Partners:</strong> MexC Foundation became a major donor for the Caraga phase, demonstrating how established organizations can amplify youth-led initiatives.
              </li>
            </ul>
            <p className="text-gray-600 leading-relaxed mb-6">
              What made this collaboration work wasn&apos;t just the number of partners; it was the trust. People and organizations donated money to youth leaders they barely knew because they saw genuine commitment to making a difference.
            </p>

            <h2 className="font-poppins font-bold text-2xl text-gray-900 mt-10 mb-4">
              4. By the Numbers: Transparency in Action
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              From day one, we knew that managing community donations came with responsibility. We maintained complete transparency throughout the process:
            </p>

            {/* Financial Breakdown */}
            <div className="bg-gradient-to-br from-[#09006C]/5 to-blue-50 rounded-lg p-6 mb-6">
              <h3 className="font-poppins font-bold text-xl text-[#09006C] mb-4">Financial Summary</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="text-sm text-gray-500 mb-1">Total Donations Received</p>
                  <p className="text-2xl font-bold text-[#09006C]">₱114,709</p>
                  <p className="text-xs text-gray-600 mt-1">(monetary + in-kind)</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="text-sm text-gray-500 mb-1">Families Helped</p>
                  <p className="text-2xl font-bold text-[#f59e0b]">400+</p>
                  <p className="text-xs text-gray-600 mt-1">across both municipalities</p>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3">
                <div className="bg-white rounded-lg p-3 shadow-sm text-center">
                  <p className="text-xs text-gray-500 mb-1">Program Cost</p>
                  <p className="text-lg font-bold text-gray-900">₱101,035</p>
                  <p className="text-xs text-green-600 font-medium">91.4%</p>
                </div>
                <div className="bg-white rounded-lg p-3 shadow-sm text-center">
                  <p className="text-xs text-gray-500 mb-1">Operations</p>
                  <p className="text-lg font-bold text-gray-900">₱9,486</p>
                  <p className="text-xs text-blue-600 font-medium">8.6%</p>
                </div>
                <div className="bg-white rounded-lg p-3 shadow-sm text-center">
                  <p className="text-xs text-gray-500 mb-1">Balance</p>
                  <p className="text-lg font-bold text-gray-900">₱4,188</p>
                </div>
              </div>
            </div>

            {/* Relief Goods */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
              <h3 className="font-poppins font-bold text-xl text-gray-900 mb-4">Relief Goods Procured</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-[#09006C] mb-3">Food Supplies</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-[#f59e0b] mr-2">•</span>
                      <span>20 sacks of rice</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#f59e0b] mr-2">•</span>
                      <span>2 cases Birch Tree Fortified milk</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#f59e0b] mr-2">•</span>
                      <span>8 cases Ho-Mi Noodle Beef</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#f59e0b] mr-2">•</span>
                      <span>5 cases Lucky 7 Carne Norte</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#f59e0b] mr-2">•</span>
                      <span>1 case Argentina Beef</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#f59e0b] mr-2">•</span>
                      <span>1 case Great Taste coffee</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#f59e0b] mr-2">•</span>
                      <span>4 cases Bingo Beef Loaf</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#f59e0b] mr-2">•</span>
                      <span>2 cases Sardines</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-[#09006C] mb-3">Hygiene & Essentials</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-[#f59e0b] mr-2">•</span>
                      <span>2 cases Bioderm Bath Soap</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#f59e0b] mr-2">•</span>
                      <span>3 cases Solve Powder Wings detergent</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#f59e0b] mr-2">•</span>
                      <span>1 case Charmepe Nap All Night diapers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#f59e0b] mr-2">•</span>
                      <span>1 case Lampein Baby Pants</span>
                    </li>
                  </ul>

                  <h4 className="font-semibold text-[#09006C] mb-3 mt-6">Emergency Supplies</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-[#f59e0b] mr-2">•</span>
                      <span>50 pieces Tents</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#f59e0b] mr-2">•</span>
                      <span>10 boxes Solar Panels</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-[#09006C] mb-3">Essential Medicines</h4>
                <div className="flex flex-wrap gap-2">
                  {['Paracetamol', 'Loperamide', 'Ascorbic Acid', 'Multivitamins', 'Losartan', 'Amlodipine', 'Ambroxol'].map((medicine) => (
                    <span key={medicine} className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full">
                      {medicine}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed italic">
              <strong>Impact:</strong> 220+ families received food packs, medicines, tents, and solar lights during initial distribution. Overall, we reached <strong>400+ families</strong> across both Manay and Caraga municipalities.
            </p>

            <h2 className="font-poppins font-bold text-2xl text-gray-900 mt-10 mb-4">
              5. On the Ground: Two Missions, One Purpose
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="font-poppins font-bold text-lg text-[#09006C] mb-3">
                  Manay: The First Response
                </h3>
                <p className="text-gray-600 leading-relaxed mb-3">
                  After four intense days of collection and preparation, we loaded vehicles with relief packs and headed to Manay. Working with the Local Government Unit, we coordinated access to affected barangays. The distribution took place at Jose Bitac Integrated School, where families gathered not just for relief goods, but for a moment of hope.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  The logistics were challenging: sorting, packing, loading, traveling, coordinating with officials. But seeing the community come together made every exhausted hour worth it.
                </p>

                {/* Manay Distribution Image */}
                <div className="relative h-80 md:h-96 rounded-lg overflow-hidden mb-2">
                  <Image
                    src="/Donation-Drive-Imgs/01-manay-distribution.jpg"
                    alt="Relief goods distribution in Manay"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-sm text-gray-500 text-center mb-6 italic">
                  Distribution of relief goods to families in Manay
                </p>
              </div>

              <div>
                <h3 className="font-poppins font-bold text-lg text-[#09006C] mb-3">
                  Caraga: Extending the Mission
                </h3>
                <p className="text-gray-600 leading-relaxed mb-3">
                  Four days after Manay, we learned that Caraga needed help too. We didn&apos;t hesitate. With support from MexC Foundation and our network of partners, we launched another four-day drive. The preparation, packing, and coordination process repeated, but this time with lessons learned from our first mission.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Volunteers who had joined us for Manay came back. New ones signed up. The momentum wasn&apos;t slowing down; it was building.
                </p>

                {/* Caraga Images */}
                <div className="grid md:grid-cols-2 gap-4 mb-2">
                  <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                    <Image
                      src="/Donation-Drive-Imgs/05-caraga-distribution.jpg"
                      alt="Caraga relief distribution"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                    <Image
                      src="/Donation-Drive-Imgs/06-caraga-community.jpg"
                      alt="Community members receiving relief in Caraga"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <p className="text-sm text-gray-500 text-center mb-6 italic">
                  Relief distribution in Caraga: reaching more families in need
                </p>
              </div>
            </div>

            <div className="bg-[#09006C]/5 border-l-4 border-[#09006C] p-6 my-8 rounded-r-lg">
              <h3 className="font-poppins font-bold text-xl text-[#09006C] mb-4">
                The Moments That Matter
              </h3>

              <p className="text-gray-700 leading-relaxed mb-4">
                Numbers tell one story. But the real impact lives in the moments between the statistics.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                A mother holding a relief pack, tears streaming down her face, whispering <span className="italic font-medium">&quot;Salamat kaayo dai.&quot;</span> An elderly man receiving medicine for his hypertension, nodding gratefully. Children excited about instant noodles that meant they&apos;d have dinner. Families setting up tents donated by strangers who cared.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                These weren&apos;t just beneficiaries receiving aid; they were our neighbors, our fellow Davaoeños, reminding us why we did this in the first place.
              </p>

              <p className="text-gray-700 leading-relaxed italic">
                For the volunteers, exhaustion mixed with fulfillment. Four straight days of preparation, packing until late at night, then the long journey to deliver personally. We were tired. We were running on minimal sleep. But when we heard <span className="font-medium not-italic">&quot;Salamat kaayo dong&quot;</span> from someone whose home was damaged but whose spirit remained unbroken, the fatigue disappeared.
              </p>
            </div>

            {/* Team Preparation Image */}
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden my-8">
              <Image
                src="/Donation-Drive-Imgs/03-manay-preparation-team.jpg"
                alt="Volunteers and team preparing for the mission"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm text-gray-500 text-center mb-8 italic">
              The team that made it all happen: volunteers united by a common purpose
            </p>

            <h2 className="font-poppins font-bold text-2xl text-gray-900 mt-10 mb-4">
              What We Learned: Lessons for Young Leaders
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-poppins font-semibold text-lg text-[#09006C] mb-2">
                  1. You Don&apos;t Need Permission to Help
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We didn&apos;t wait for someone to organize this. We saw a need and took action. Young leaders often underestimate their capacity to create change. This experience proved that age and experience matter less than genuine commitment and willingness to learn.
                </p>
              </div>

              <div>
                <h3 className="font-poppins font-semibold text-lg text-[#09006C] mb-2">
                  2. Collaboration Multiplies Impact
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  No single organization could have achieved what twenty-plus communities did together. Each partner brought unique strengths: networks, logistics, funding, volunteers. The result was greater than the sum of its parts.
                </p>
              </div>

              <div>
                <h3 className="font-poppins font-semibold text-lg text-[#09006C] mb-2">
                  3. Transparency Builds Trust
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Managing ₱114,709 from community donations meant accountability wasn&apos;t optional. By maintaining detailed records and sharing exactly how every peso was used, we earned trust from donors and partners. That trust became the foundation for everything else.
                </p>
              </div>

              <div>
                <h3 className="font-poppins font-semibold text-lg text-[#09006C] mb-2">
                  4. Logistics Matter as Much as Heart
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Good intentions need good execution. Coordinating with LGUs, organizing volunteer shifts, managing inventory, planning transportation: these operational details determined whether our mission succeeded or failed. Learn these skills. They turn compassion into concrete impact.
                </p>
              </div>

              <div>
                <h3 className="font-poppins font-semibold text-lg text-[#09006C] mb-2">
                  5. Community Trust is Earned Through Action
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  People donated to youth leaders they didn&apos;t know personally because they saw organized action, transparent communication, and genuine care. In a world of broken promises, delivering on commitments builds credibility that extends far beyond one project.
                </p>
              </div>

              <div>
                <h3 className="font-poppins font-semibold text-lg text-[#09006C] mb-2">
                  6. You&apos;re More Capable Than You Think
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Most of us had never organized disaster response. We lacked formal training in emergency management. But we figured it out: asking questions, learning from mistakes, supporting each other. Young leaders often wait until they feel &quot;ready.&quot; This experience taught us that readiness comes through doing, not just preparing.
                </p>
              </div>
            </div>
          </div>

          {/* Share Button */}
          <ShareButton
            url={`${process.env.NEXT_PUBLIC_SITE_URL || 'https://davaoyoungexecutives.com'}/blog/davao-earthquake-response-2025`}
            title="When the Ground Shook: How Davao's Youth Leaders Answered the Call"
            description="From earthquake to action in 48 hours: How Davao's youth communities mobilized ₱114,709 in donations and served 400+ families."
          />

          {/* CTA */}
          <div className="bg-gradient-to-br from-[#09006C] to-[#06004a] rounded-xl shadow-md p-8 md:p-10 mt-8 text-white">
            <h3 className="font-poppins font-bold text-2xl md:text-3xl mb-4 text-center">
              Moving Forward: From Response to Resilience
            </h3>

            <div className="max-w-3xl mx-auto space-y-6 mb-8">
              <p className="text-blue-100 leading-relaxed">
                The Davao Oriental donation drive ended, but the questions it raised remain: How can Davao&apos;s youth communities be better prepared for the next disaster? How do we build systems that enable rapid response when crisis strikes? How do we maintain the collaborative spirit beyond emergency situations?
              </p>

              <p className="text-blue-100 leading-relaxed">
                These are conversations worth having. Because the ground will shake again. Disasters will strike. And when they do, the question isn&apos;t whether young leaders can respond (our experience proved we can). The question is whether we&apos;ll be even better prepared next time.
              </p>

              <div className="border-t border-blue-400/30 pt-6 mt-6">
                <h4 className="font-poppins font-bold text-xl mb-3 text-center">Join the Movement</h4>
                <p className="text-blue-100 leading-relaxed mb-4">
                  The youth leaders who made this mission possible came from different backgrounds, organizations, and communities. What united them was a simple belief: that young people can create meaningful change when they work together.
                </p>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Davao Young Executives exists to build that capacity through trainings that develop skills, bootcamps that strengthen leadership, and outreach programs that turn compassion into action.
                </p>
                <p className="text-blue-100 leading-relaxed font-medium">
                  Want to be part of the next mission? Follow us on social media to stay updated on upcoming trainings, bootcamps, and outreach programs. Because the next time our community needs us, we want you standing alongside us.
                </p>
              </div>
            </div>

            <div className="text-center space-y-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#f59e0b] text-white rounded-lg font-semibold hover:bg-[#d97706] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Connect With Us
              </Link>

              <p className="text-blue-200 text-sm italic max-w-2xl mx-auto mt-6 pt-6 border-t border-blue-400/30">
                Special thanks to every individual donor, partner organization, and volunteer who proved that when young leaders unite, communities rise together.
              </p>
            </div>
          </div>
        </article>
      </Container>
    </main>
  );
}
