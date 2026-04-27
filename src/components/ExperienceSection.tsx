
import { Briefcase, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ExperienceSection = () => {
  const experiences = [
    {
      role: 'Software Developer Intern',
      company: 'Shnoor International',
      duration: 'Present',
      description:
        'Working on full-stack development with React, Node.js and PostgreSQL — building real-time, data-driven applications.',
      responsibilities: [
        'Working on full-stack development using React, Node.js, and PostgreSQL',
        'Developing and integrating frontend interfaces with backend APIs',
        'Handling real-time data operations and improving application performance',
        'Collaborating with team members for debugging, feature development, and optimization',
        'Gaining hands-on experience in scalable application development and system design',
      ],
      tech: ['React', 'Node.js', 'PostgreSQL', 'REST APIs', 'Git'],
    },
    {
      role: 'Web Developer Intern',
      company: 'VaultSphereAI Technologies',
      duration: 'Past',
      description:
        'Built responsive web applications and integrated REST APIs with backend systems and databases.',
      responsibilities: [
        'Developed responsive web applications using HTML, CSS, and JavaScript',
        'Integrated REST APIs and worked with backend systems and databases',
        'Improved UI/UX and ensured cross-browser compatibility',
        'Debugged issues and collaborated with team members to deliver features',
      ],
      tech: ['HTML', 'CSS', 'JavaScript', 'REST APIs', 'SQL'],
    },
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-blue to-neon-green mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
          {experiences.map((exp, idx) => (
            <Card
              key={idx}
              className="bg-dark-700/50 border-dark-600 hover:border-neon-blue/50 transition-all duration-300 group"
            >
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4 sm:mb-6">
                  <div className="flex items-center space-x-3 mb-4 lg:mb-0">
                    <div className="p-2 sm:p-3 bg-neon-blue/10 rounded-lg border border-neon-blue/30 flex-shrink-0">
                      <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-neon-blue" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-lg sm:text-xl font-semibold text-white">{exp.role}</h3>
                      <p className="text-neon-blue font-medium text-sm sm:text-base">{exp.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Calendar className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm">{exp.duration}</span>
                  </div>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    {exp.description}
                  </p>

                  <div>
                    <h4 className="text-base sm:text-lg font-medium text-neon-green mb-3">
                      Key Responsibilities:
                    </h4>
                    <ul className="space-y-2 sm:space-y-3">
                      {exp.responsibilities.map((responsibility, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-neon-blue rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                          <span className="text-sm sm:text-base text-gray-300">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2 sm:pt-4">
                    <h4 className="text-base sm:text-lg font-medium text-neon-green mb-3">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech) => (
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
