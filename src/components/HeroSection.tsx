
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Animated background particles */}
      <div className="particles">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto text-center z-10 max-w-6xl">
        <div className="animate-fade-in">
          {/* Profile Image */}
          <div className="mb-6 sm:mb-8 flex justify-center">
            <div className="relative">
              <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-r from-neon-blue to-neon-green p-1 animate-glow">
                <div className="w-full h-full rounded-full bg-dark-800 flex items-center justify-center">
                  <span className="text-2xl sm:text-4xl md:text-5xl font-bold gradient-text">DR</span>
                </div>
              </div>
              <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-neon-blue to-neon-green rounded-full opacity-20 animate-pulse"></div>
            </div>
          </div>

          {/* Main Content */}
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
              Hi, I'm <span className="gradient-text">Daan Reddy</span>
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-3 sm:mb-4 px-4">
              I design and build beautiful, responsive web experiences
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Web Developer | UI/UX Designer | Video Editor
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 sm:mb-12 px-4">
              <Button
                onClick={scrollToProjects}
                className="bg-gradient-to-r from-neon-blue to-neon-green hover:from-neon-green hover:to-neon-blue transition-all duration-300 text-base sm:text-lg px-6 sm:px-8 py-2.5 sm:py-3 glow-effect w-full sm:w-auto"
              >
                View My Work
              </Button>
              <Button
                onClick={scrollToAbout}
                variant="outline"
                className="border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-dark-900 transition-all duration-300 text-base sm:text-lg px-6 sm:px-8 py-2.5 sm:py-3 w-full sm:w-auto"
              >
                Let's Connect
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 sm:space-x-8">
              <a
                href="https://github.com/daanreddy21"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-neon-blue transition-colors duration-200 transform hover:scale-110"
              >
                <Github className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                href="https://linkedin.com/in/daan-reddy-a-13a9952a8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-neon-blue transition-colors duration-200 transform hover:scale-110"
              >
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                href="mailto:daanreddyalapaku2105@gmail.com"
                className="text-gray-400 hover:text-neon-blue transition-colors duration-200 transform hover:scale-110"
              >
                <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <button
              onClick={scrollToAbout}
              className="text-gray-400 hover:text-neon-blue transition-colors duration-200"
            >
              <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
