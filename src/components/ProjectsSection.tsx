
import { Github, HeartPulse, Landmark, BarChart3, Code2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Healthcare Management System (MediTrack)',
      description:
        'An end-to-end system to manage patients, doctors and appointments with role-based modules and optimized SQL data handling.',
      icon: <HeartPulse className="w-8 h-8" />,
      technologies: ['Java', 'JSP', 'Servlets', 'MySQL', 'MVC'],
      features: [
        'Built a system to manage patients, doctors, and appointments',
        'Implemented role-based modules (Admin, Doctor, Receptionist)',
        'Designed optimized SQL queries for efficient data handling',
        'Applied MVC architecture for scalability and clean structure',
      ],
      category: 'Full Stack',
      githubUrl: null,
      status: 'Completed',
    },
    {
      title: 'Full Stack Banking Web Application',
      description:
        'A banking platform with Admin and User modules covering accounts, transactions and balance tracking with secure DB interactions.',
      icon: <Landmark className="w-8 h-8" />,
      technologies: ['Java', 'Servlets', 'JSP', 'MySQL'],
      features: [
        'Developed a banking system with Admin and User modules',
        'Implemented account management, transactions, and balance tracking',
        'Designed secure database interactions and business logic',
        'Ensured smooth client-server communication',
      ],
      category: 'Backend / Full Stack',
      githubUrl: null,
      status: 'Completed',
    },
    {
      title: 'Car Sales Data Dashboard',
      description:
        'An interactive analytics dashboard showing sales and revenue trends with SQL-based data cleaning, transformation and Power BI visualizations.',
      icon: <BarChart3 className="w-8 h-8" />,
      technologies: ['SQL', 'Power BI'],
      features: [
        'Built an interactive dashboard to analyze sales and revenue trends',
        'Performed data cleaning, transformation, and aggregation using SQL',
        'Created visual insights using Power BI',
      ],
      category: 'Data & Analytics',
      githubUrl: null,
      status: 'Completed',
    },
    {
      title: 'Code Analysis Tool',
      description:
        'A developer-productivity tool that detects code quality issues and suggests improvements, backed by PostgreSQL and a GitHub Actions CI/CD workflow.',
      icon: <Code2 className="w-8 h-8" />,
      technologies: ['JavaScript', 'React', 'Node.js', 'PostgreSQL', 'GitHub Actions'],
      features: [
        'Developing a tool to analyze code quality and detect issues',
        'Identifies indentation, spacing, and formatting inconsistencies',
        'Provides suggestions to improve code readability and coding standards',
        'Integrated PostgreSQL for storing analysis results and user data',
        'Implemented GitHub CI/CD workflow for automated checks and deployment',
        'Focused on real-time feedback and developer productivity',
      ],
      category: 'Full Stack / DevTools',
      githubUrl: null,
      status: 'Ongoing',
    },
  ];

  return (
    <section id="projects" className="section-padding bg-dark-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-blue to-neon-green mx-auto mb-6"></div>
          <p className="text-base sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Real-world full-stack and data projects — from healthcare and banking
            systems to analytics dashboards and developer tools.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-dark-700/50 border-dark-600 hover:border-neon-blue/50 transition-all duration-300 group overflow-hidden"
            >
              <CardContent className="p-0">
                {/* Project Header */}
                <div className="p-5 sm:p-6 border-b border-dark-600">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-neon-blue/10 rounded-lg border border-neon-blue/30 text-neon-blue">
                      {project.icon}
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Badge variant="outline" className="border-neon-purple text-neon-purple">
                        {project.category}
                      </Badge>
                      <Badge
                        variant="outline"
                        className={
                          project.status === 'Ongoing'
                            ? 'border-neon-green text-neon-green'
                            : 'border-neon-blue/50 text-neon-blue'
                        }
                      >
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-white group-hover:text-neon-blue transition-colors duration-200">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Project Details */}
                <div className="p-5 sm:p-6">
                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-neon-green mb-3 uppercase tracking-wide">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-2.5 sm:px-3 py-1 bg-dark-800 border border-neon-blue/30 rounded-full text-neon-blue text-xs sm:text-sm hover:bg-neon-blue/10 transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-neon-green mb-3 uppercase tracking-wide">
                      Highlights
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
                  <div className="flex">
                    {project.githubUrl ? (
                      <Button
                        variant="outline"
                        className="w-full border-neon-green text-neon-green hover:bg-neon-green hover:text-dark-900 transition-all duration-300"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Source Code
                      </Button>
                    ) : (
                      <Button
                        variant="outline"
                        className="w-full border-dark-600 text-gray-400 cursor-not-allowed"
                        disabled
                      >
                        <Github className="w-4 h-4 mr-2" />
                        {project.status === 'Ongoing' ? 'In Development' : 'Private Code'}
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16">
          <p className="text-base sm:text-lg text-gray-300 mb-6">
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
