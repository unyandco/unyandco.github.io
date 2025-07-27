import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import precisionIcon from "@/assets/Precision.png";
import innovationIcon from "@/assets/Innovation.png";
import successIcon from "@/assets/Success.png";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background */}
      <div 
        className="absolute inset-0 bg-gradient-hero"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/80 to-primary-glow/70"></div>
        {/* Floating elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-32 right-32 w-48 h-48 bg-accent-glow/15 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/10 rounded-full blur-lg animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Glass morphism content card */}
      <div className="relative z-10 container mx-auto px-2 lg:px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Glass card wrapper */}
          <div className="bg-gradient-glass backdrop-blur-glass border border-white/20 rounded-3xl p-8 md:p-12 lg:p-16 shadow-glass animate-slide-up mx-2">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight -mt-4">
              <span className="block animate-fade-in text-4xl md:text-6xl lg:text-7xl" style={{ fontFamily: 'Cinzel, serif' }}>U N Y & C O</span>
              <span className="block text-2xl md:text-3xl lg:text-4xl text-white/90 mb-6" style={{ fontFamily: 'Cinzel, serif' }}>
                Chartered Accountants
              </span>
              <span className="block bg-gradient-accent bg-clip-text text-transparent animate-glow text-2xl md:text-3xl lg:text-4xl mt-4" style={{ fontFamily: 'Crimson Text, serif' }}>
                Where Excellence Meets Innovation
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-10 mt-8 max-w-3xl mx-auto leading-relaxed font-light" style={{ fontFamily: 'Crimson Text, serif' }}>
              Trust isn't just a word it's how we work. Our team delivers sharp, honest advice with long-term impact in mind.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <Button
                variant="accent"
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto px-10 py-4 text-lg font-semibold"
                style={{ fontFamily: 'Crimson Text, serif' }}
              >
                Request for a consultation
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
              
              <Button
                variant="glass"
                size="lg"
                onClick={() => scrollToSection('services')}
                className="w-full sm:w-auto px-10 py-4 text-lg font-semibold"
                style={{ fontFamily: 'Crimson Text, serif' }}
              >
                Explore Our Expertise
              </Button>
            </div>

            {/* Premium values showcase */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center group hover:scale-105 transition-spring">
                <div className="w-16 h-16 bg-gradient-accent rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-glow">
                  <img 
                    src={precisionIcon} 
                    alt="Precision Icon" 
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <div className="text-xl font-bold text-accent mb-2" style={{ fontFamily: 'Crimson Text, serif' }}>Precision First</div>
                <div className="text-white/80 text-sm leading-relaxed" style={{ fontFamily: 'Crimson Text, serif' }}>Excellence starts with the little things</div>
              </div>
              <div className="text-center group hover:scale-105 transition-spring">
                <div className="w-16 h-16 bg-gradient-accent rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-glow">
                  <img 
                    src={innovationIcon} 
                    alt="Innovation Icon" 
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <div className="text-xl font-bold text-accent mb-2" style={{ fontFamily: 'Crimson Text, serif' }}>Innovation Driven</div>
                <div className="text-white/80 text-sm leading-relaxed" style={{ fontFamily: 'Crimson Text, serif' }}>Cutting-edge solutions for modern challenges</div>
              </div>
              <div className="text-center group hover:scale-105 transition-spring">
                <div className="w-16 h-16 bg-gradient-accent rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-glow">
                  <img 
                    src={successIcon} 
                    alt="Success Icon" 
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <div className="text-xl font-bold text-accent mb-2" style={{ fontFamily: 'Crimson Text, serif' }}>Client Success</div>
                <div className="text-white/80 text-sm leading-relaxed" style={{ fontFamily: 'Crimson Text, serif' }}>Your growth is our greatest achievement</div>
              </div>
            </div>

            {/* Core Values Statement */}
            <div className="text-center mt-6">
              <span className="block text-lg md:text-xl lg:text-2xl text-white/80 font-bold" style={{ fontFamily: 'Cinzel, serif' }}>
                ROOTED IN INTEGRITY. DRIVEN BY INNOVATION. COMMITTED TO YOU.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Premium scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white/40 rounded-full flex justify-center backdrop-blur-glass bg-white/10">
          <div className="w-1.5 h-4 bg-white/70 rounded-full mt-2 animate-glow"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;