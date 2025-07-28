import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logoImage from "@/assets/CA India Logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-2 lg:px-4">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center">
              <img 
                src={logoImage} 
                alt="UNY & CO Logo" 
                className="w-8 h-8 object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-foreground whitespace-nowrap" style={{ fontFamily: 'Cinzel, serif' }}>U N Y & C O</span>
              <span className="text-[10px] text-muted-foreground whitespace-nowrap -mt-1 tracking-[0.15em]" style={{ fontFamily: 'Cinzel, serif' }}>CHARTERED ACCOUNTANTS</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-smooth"
              style={{ fontFamily: 'Crimson Text, serif' }}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-smooth"
              style={{ fontFamily: 'Crimson Text, serif' }}
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-primary transition-smooth"
              style={{ fontFamily: 'Crimson Text, serif' }}
            >
              Our Services
            </button>
            <button
              className="text-foreground hover:text-primary transition-smooth"
              style={{ fontFamily: 'Crimson Text, serif' }}
            >
              Career
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-smooth"
              style={{ fontFamily: 'Crimson Text, serif' }}
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-foreground hover:text-primary transition-smooth text-left"
                style={{ fontFamily: 'Crimson Text, serif' }}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-foreground hover:text-primary transition-smooth text-left"
                style={{ fontFamily: 'Crimson Text, serif' }}
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-foreground hover:text-primary transition-smooth text-left"
                style={{ fontFamily: 'Crimson Text, serif' }}
              >
                Our Services
              </button>
              <button
                className="text-foreground hover:text-primary transition-smooth text-left"
                style={{ fontFamily: 'Crimson Text, serif' }}
              >
                Career
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-foreground hover:text-primary transition-smooth text-left"
                style={{ fontFamily: 'Crimson Text, serif' }}
              >
                Contact
              </button>
              <Button
                variant="accent"
                size="sm"
                onClick={() => scrollToSection('contact')}
                className="self-start"
                style={{ fontFamily: 'Crimson Text, serif' }}
              >
                Get Quote
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;