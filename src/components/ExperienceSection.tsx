
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-blue to-neon-green mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-dark-700/50 border-dark-600 hover:border-neon-blue/50 transition-all duration-300 group">
            <CardContent className="p-4 sm:p-6 lg:p-8">
              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4 sm:mb-6">
                <div className="flex items-center space-x-3 mb-4 lg:mb-0">
                  <div className="p-2 sm:p-3 bg-neon-blue/10 rounded-lg border border-neon-blue/30 flex-shrink-0">
                    <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-neon-blue" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg sm:text-xl font-semibold text-white">Web Developer</h3>
                    <p className="text-neon-blue font-medium text-sm sm:text-base">Sel Edutech Solutions</p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm">1 year</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm">Kuppam</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Briefcase className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm">Hybrid</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-4 sm:space-y-6">
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  As a Frontend Web Developer at Sel Edutech Solutions, I focused on creating 
                  responsive and user-friendly web interfaces that enhanced the educational 
                  experience for students and educators.
                </p>

                {/* Responsibilities */}
                <div>
                  <h4 className="text-base sm:text-lg font-medium text-neon-green mb-3">Key Responsibilities:</h4>
                  <ul className="space-y-2 sm:space-y-3">
                    {[
                      "Developed responsive frontend applications using HTML, CSS3, and JavaScript",
                      "Implemented SQL-based data handling for dynamic content management",
                      "Designed and built user-focused features to improve platform engagement",
                      "Collaborated on company engagement efforts and user experience optimization",
                      "Ensured cross-browser compatibility and mobile responsiveness"
                    ].map((responsibility, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-neon-blue rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base text-gray-300">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies Used */}
                <div className="pt-2 sm:pt-4">
                  <h4 className="text-base sm:text-lg font-medium text-neon-green mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {['HTML5', 'CSS3', 'JavaScript', 'SQL', 'Responsive Design', 'UI/UX'].map((tech) => (
                      <span 
                        key={tech}
                        className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-dark-800 border border-neon-blue/30 rounded-full text-neon-blue text-xs sm:text-sm hover:bg-neon-blue/10 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
