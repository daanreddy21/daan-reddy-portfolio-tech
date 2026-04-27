import { Cpu, GitBranch, Cloud, Database, Layers } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const items = [
  {
    icon: <Cpu className="w-6 h-6" />,
    title: 'Code Analysis Tool',
    description:
      'Building a tool that detects code quality issues — indentation, spacing and formatting — and suggests readability improvements.'
  },
  {
    icon: <GitBranch className="w-6 h-6" />,
    title: 'CI/CD with GitHub Actions',
    description:
      'Implementing automated build, test and deploy pipelines for full-stack projects.'
  },
  {
    icon: <Cloud className="w-6 h-6" />,
    title: 'AWS Fundamentals',
    description:
      'Learning EC2, deployment workflows and core cloud concepts for production hosting.'
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: 'SQL & Backend Performance',
    description:
      'Sharpening query optimization, indexing and structured data handling for scalable backends.'
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: 'Full-Stack with React + Node.js',
    description:
      'Expanding end-to-end development skills, integrating REST APIs and PostgreSQL with modern UIs.'
  }
];

const CurrentlyWorkingOnSection = () => {
  return (
    <section id="now" className="section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            What I'm <span className="gradient-text">Currently Working On</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-blue to-neon-green mx-auto mb-6"></div>
          <p className="text-base sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Active focus areas — projects, learning tracks and engineering practices
            I'm investing in right now.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {items.map((item, idx) => (
            <Card
              key={idx}
              className="bg-dark-700/50 border-dark-600 hover:border-neon-blue/50 transition-all duration-300 group"
            >
              <CardContent className="p-5 sm:p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2.5 bg-neon-blue/10 rounded-lg border border-neon-blue/30 text-neon-blue group-hover:text-neon-green group-hover:border-neon-green/40 transition-colors duration-200 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
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

export default CurrentlyWorkingOnSection;