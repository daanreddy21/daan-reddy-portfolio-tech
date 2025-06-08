
import { ExternalLink, Github, Gamepad2, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Quiz App',
      description: 'An interactive Java-based quiz application featuring a 4-question game with lifelines including Audience Poll and 50/50. Built with a points and reward-based system using multiple methods for handling game logic.',
      icon: <Gamepad2 className="w-8 h-8" />,
      technologies: ['Java', 'Object-Oriented Programming', 'Game Logic', 'UI Design'],
      features: [
        'Interactive 4-question quiz format',
        'Lifeline system (Audience Poll, 50/50)',
        'Points and rewards system',
        'Multiple method implementations',
        'User-friendly interface'
      ],
      color: 'neon-blue',
      category: 'Software Development',
      githubUrl: 'https://github.com/daanreddy/quiz-app'
    },
    {
      title: 'Hybrid PSW Power Generation System',
      description: 'An innovative energy solution that combines piezoelectric, solar, and wind energy for electric vehicle charging. Built with Arduino and electrical components in just 2 days as a comprehensive mini-project.',
      icon: <Zap className="w-8 h-8" />,
      technologies: ['Arduino', 'Electrical Engineering', 'Renewable Energy', 'IoT'],
      features: [
        'Piezoelectric energy harvesting',
        'Solar panel integration',
        'Wind energy capture',
        'Electric vehicle charging capability',
        'Arduino-based control system'
      ],
      color: 'neon-green',
      category: 'Hardware Engineering',
      githubUrl: null
    }
  ];

  return (
    <section id="projects" className="section-padding bg-dark-800/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-blue to-neon-green mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A showcase of innovative projects that demonstrate my technical skills 
            and creative problem-solving abilities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-dark-700/50 border-dark-600 hover:border-neon-blue/50 transition-all duration-300 group overflow-hidden"
            >
              <CardContent className="p-0">
                {/* Project Header */}
                <div className="p-6 border-b border-dark-600">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 bg-${project.color}/10 rounded-lg border border-${project.color}/30`}>
                      <span className={`text-${project.color}`}>
                        {project.icon}
                      </span>
                    </div>
                    <Badge variant="outline" className="border-neon-purple text-neon-purple">
                      {project.category}
                    </Badge>
                  </div>
                  
                  <h3 className="text-2xl font-semibold mb-3 text-white group-hover:text-neon-blue transition-colors duration-200">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Project Details */}
                <div className="p-6">
                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-neon-green mb-3 uppercase tracking-wide">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-dark-800 border border-neon-blue/30 rounded-full text-neon-blue text-sm hover:bg-neon-blue/10 transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-neon-green mb-3 uppercase tracking-wide">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-neon-blue rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <Button
                      variant="outline"
                      className="flex-1 border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-dark-900 transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                    {project.githubUrl ? (
                      <Button
                        variant="outline"
                        className="flex-1 border-neon-green text-neon-green hover:bg-neon-green hover:text-dark-900 transition-all duration-300"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Source Code
                      </Button>
                    ) : (
                      <Button
                        variant="outline"
                        className="flex-1 border-gray-600 text-gray-400 cursor-not-allowed"
                        disabled
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Private Code
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-300 mb-6">
            Interested in collaborating on a project?
          </p>
          <Button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-neon-blue to-neon-green hover:from-neon-green hover:to-neon-blue transition-all duration-300 text-lg px-8 py-3"
          >
            Let's Work Together
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
