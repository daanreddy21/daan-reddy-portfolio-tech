
import { Palette, Code, Video, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
  const services = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'UI/UX Design',
      description: 'Creating intuitive and visually appealing user interfaces that provide exceptional user experiences across all devices.',
      features: [
        'User Research & Analysis',
        'Wireframing & Prototyping',
        'Visual Design & Branding',
        'Usability Testing'
      ],
      color: 'neon-blue'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Web Design & Development',
      description: 'Building responsive, fast, and modern websites using cutting-edge technologies and best practices.',
      features: [
        'Responsive Web Design',
        'Frontend Development',
        'Database Integration',
        'Performance Optimization'
      ],
      color: 'neon-green'
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: 'Video Editing',
      description: 'Professional video editing services to bring your content to life with engaging visuals and smooth transitions.',
      features: [
        'Video Production',
        'Motion Graphics',
        'Color Correction',
        'Audio Enhancement'
      ],
      color: 'neon-purple'
    }
  ];

  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Services</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-blue to-neon-green mx-auto mb-6"></div>
          <p className="text-base sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            Comprehensive digital solutions tailored to bring your ideas to life 
            with creativity and technical excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-dark-700/50 border-dark-600 hover:border-neon-blue/50 transition-all duration-300 group hover:transform hover:scale-105"
            >
              <CardContent className="p-6 sm:p-8 text-center">
                {/* Icon */}
                <div className="mb-4 sm:mb-6">
                  <div className={`inline-flex p-3 sm:p-4 bg-${service.color}/10 rounded-lg border border-${service.color}/30 group-hover:bg-${service.color}/20 transition-all duration-300`}>
                    <span className={`text-${service.color} group-hover:scale-110 transition-transform duration-200`}>
                      {service.icon}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-white group-hover:text-neon-blue transition-colors duration-200">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-4 sm:mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center justify-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-neon-green rounded-full flex-shrink-0"></div>
                      <span className="text-gray-300 text-xs sm:text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  variant="outline"
                  className="border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-dark-900 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-neon-blue/25 text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-2.5 w-full sm:w-auto"
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16">
          <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6 px-4">
            Ready to start your next project?
          </p>
          <Button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-neon-blue to-neon-green hover:from-neon-green hover:to-neon-blue transition-all duration-300 text-base sm:text-lg px-6 sm:px-8 py-2.5 sm:py-3 w-full sm:w-auto"
          >
            Get Started Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
