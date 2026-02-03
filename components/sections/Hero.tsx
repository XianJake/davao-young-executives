import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
}) => {
  return (
    <section className="relative bg-gradient-to-br from-[#09006C] to-[#06004a] text-white py-20 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/Hero-BG.jpg"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
          quality={90}
        />
      </div>

      {/* Blue Overlay with Blur Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#09006C]/85 to-[#06004a]/85 backdrop-blur-sm" />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {subtitle}
          </p>
          {(ctaText || secondaryCtaText) && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {ctaText && ctaLink && (
                <Button href={ctaLink} variant="secondary" className="group">
                  {ctaText}
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              )}
              {secondaryCtaText && secondaryCtaLink && (
                <Button href={secondaryCtaLink} variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-[#09006C]">
                  {secondaryCtaText}
                </Button>
              )}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default Hero;
