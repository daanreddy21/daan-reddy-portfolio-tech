
import { Code, Database, Palette, Wrench, GitBranch, Server, Cloud } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const SkillsSection = () => {
  const backend = [
    { name: 'Java', icon: <Code className="w-5 h-5" /> },
    { name: 'Servlets', icon: <Server className="w-5 h-5" /> },
    { name: 'JDBC', icon: <Database className="w-5 h-5" /> },
    { name: 'Spring Boot', icon: <Server className="w-5 h-5" /> },
    { name: 'REST APIs', icon: <Server className="w-5 h-5" /> },
    { name: 'Node.js', icon: <Server className="w-5 h-5" /> },
  ];

  const frontend = [
    { name: 'HTML', icon: <Code className="w-5 h-5" /> },
    { name: 'CSS', icon: <Palette className="w-5 h-5" /> },
    { name: 'JavaScript', icon: <Code className="w-5 h-5" /> },
    { name: 'React', icon: <Code className="w-5 h-5" /> },
    { name: 'Bootstrap', icon: <Palette className="w-5 h-5" /> },
  ];

  const databaseSkills = [
    { name: 'MySQL', icon: <Database className="w-5 h-5" /> },
    { name: 'SQL', icon: <Database className="w-5 h-5" /> },
    { name: 'PostgreSQL', icon: <Database className="w-5 h-5" /> },
    { name: 'MongoDB', icon: <Database className="w-5 h-5" /> },
    { name: 'Data Cleaning', icon: <Database className="w-5 h-5" /> },
    { name: 'Data Validation', icon: <Database className="w-5 h-5" /> },
    { name: 'Query Optimization', icon: <Database className="w-5 h-5" /> },
  ];

  const toolsPlatforms = [
    { name: 'Git', icon: <GitBranch className="w-5 h-5" /> },
    { name: 'GitHub', icon: <GitBranch className="w-5 h-5" /> },
    { name: 'GitHub Actions (CI/CD)', icon: <Cloud className="w-5 h-5" /> },
    { name: 'Postman', icon: <Wrench className="w-5 h-5" /> },
    { name: 'MySQL Workbench', icon: <Database className="w-5 h-5" /> },
    { name: 'SQL Server Management Studio', icon: <Database className="w-5 h-5" /> },
  ];

  const developerTools = [
    { name: 'VS Code', icon: <Wrench className="w-5 h-5" /> },
    { name: 'Eclipse', icon: <Wrench className="w-5 h-5" /> },
  ];

  type Skill = { name: string; icon: JSX.Element };
  const SkillCard = ({ title, skills }: { title: string; skills: Skill[] }) => (
    <Card className="bg-dark-700/50 border-dark-600 hover:border-neon-blue/50 transition-all duration-300">
      <CardContent className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 gradient-text">{title}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="group flex items-center space-x-3 p-2.5 sm:p-3 bg-dark-800/50 rounded-lg hover:bg-dark-800 transition-all duration-200">
              <span className="text-neon-blue group-hover:text-neon-green transition-colors duration-200 flex-shrink-0">
                {skill.icon}
              </span>
              <span className="text-gray-300 font-medium text-sm sm:text-base">{skill.name}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="skills" className="section-padding bg-dark-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-blue to-neon-green mx-auto mb-6"></div>
          <p className="text-base sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            A backend-focused, data-driven full-stack toolkit — from Java and SQL to
            modern web frameworks, CI/CD and developer tooling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <SkillCard title="Backend Development" skills={backend} />
          <SkillCard title="Frontend Development" skills={frontend} />
          <SkillCard title="Database & Data" skills={databaseSkills} />
          <SkillCard title="Tools & Platforms" skills={toolsPlatforms} />
          <div className="md:col-span-2 lg:col-span-1">
            <SkillCard title="Developer Tools" skills={developerTools} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
