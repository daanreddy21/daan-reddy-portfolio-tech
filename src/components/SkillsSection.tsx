
import { Code, Database, Palette, Video, Brain, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const SkillsSection = () => {
  const technicalSkills = [
    { name: 'HTML/CSS3', icon: <Code className="w-5 h-5" /> },
    { name: 'JavaScript', icon: <Code className="w-5 h-5" /> },
    { name: 'SQL', icon: <Database className="w-5 h-5" /> },
    { name: 'Core Java', icon: <Code className="w-5 h-5" /> },
    { name: 'UI/UX Design', icon: <Palette className="w-5 h-5" /> }
  ];

  const softSkills = [
    { name: 'Communication', icon: <Users className="w-5 h-5" /> },
    { name: 'Time Management', icon: <Brain className="w-5 h-5" /> },
    { name: 'Teamwork', icon: <Users className="w-5 h-5" /> },
    { name: 'Emotional Intelligence', icon: <Brain className="w-5 h-5" /> },
    { name: 'Adaptability', icon: <Brain className="w-5 h-5" /> },
    { name: 'Problem Solving', icon: <Brain className="w-5 h-5" /> }
  ];

  const nonTechnicalSkills = [
    { name: 'Video Editing', icon: <Video className="w-5 h-5" /> }
  ];

  const SkillCard = ({ title, skills }: { title: string; skills: typeof technicalSkills }) => (
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
            A combination of technical expertise and soft skills that enable me to deliver 
            exceptional results in every project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <SkillCard title="Technical Skills" skills={technicalSkills} />
          <SkillCard title="Soft Skills" skills={softSkills} />
          <div className="md:col-span-2 lg:col-span-1">
            <SkillCard title="Non Technical Skills" skills={nonTechnicalSkills} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
