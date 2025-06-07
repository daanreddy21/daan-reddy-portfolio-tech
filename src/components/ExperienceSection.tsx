
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-blue to-neon-green mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-dark-700/50 border-dark-600 hover:border-neon-blue/50 transition-all duration-300 group">
            <CardContent className="p-8">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div className="flex items-center space-x-3 mb-4 md:mb-0">
                  <div className="p-3 bg-neon-blue/10 rounded-lg border border-neon-blue/30">
                    <Briefcase className="w-6 h-6 text-neon-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Frontend Web Developer</h3>
                    <p className="text-neon-blue font-medium">Sel Edutech Solutions</p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">4 months</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">Kuppam</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  As a Frontend Web Developer at Sel Edutech Solutions, I focused on creating 
                  responsive and user-friendly web interfaces that enhanced the educational 
                  experience for students and educators.
                </p>

                {/* Responsibilities */}
                <div>
                  <h4 className="text-lg font-medium text-neon-green mb-3">Key Responsibilities:</h4>
                  <ul className="space-y-2">
                    {[
                      "Developed responsive frontend applications using HTML, CSS3, and JavaScript",
                      "Implemented SQL-based data handling for dynamic content management",
                      "Designed and built user-focused features to improve platform engagement",
                      "Collaborated on company engagement efforts and user experience optimization",
                      "Ensured cross-browser compatibility and mobile responsiveness"
                    ].map((responsibility, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-neon-blue rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies Used */}
                <div className="pt-4">
                  <h4 className="text-lg font-medium text-neon-green mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {['HTML5', 'CSS3', 'JavaScript', 'SQL', 'Responsive Design', 'UI/UX'].map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-dark-800 border border-neon-blue/30 rounded-full text-neon-blue text-sm hover:bg-neon-blue/10 transition-colors duration-200"
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
