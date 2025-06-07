
import { Code, Database, Palette, Video, Brain, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const SkillsSection = () => {
  const technicalSkills = [
    { name: 'HTML/CSS3', level: 90, icon: <Code className="w-5 h-5" /> },
    { name: 'JavaScript', level: 85, icon: <Code className="w-5 h-5" /> },
    { name: 'SQL', level: 80, icon: <Database className="w-5 h-5" /> },
    { name: 'Core Java', level: 75, icon: <Code className="w-5 h-5" /> },
    { name: 'UI/UX Design', level: 88, icon: <Palette className="w-5 h-5" /> },
    { name: 'Video Editing', level: 82, icon: <Video className="w-5 h-5" /> }
  ];

  const softSkills = [
    { name: 'Communication', level: 92, icon: <Users className="w-5 h-5" /> },
    { name: 'Time Management', level: 88, icon: <Brain className="w-5 h-5" /> },
    { name: 'Teamwork', level: 90, icon: <Users className="w-5 h-5" /> },
    { name: 'Emotional Intelligence', level: 85, icon: <Brain className="w-5 h-5" /> },
    { name: 'Adaptability', level: 95, icon: <Brain className="w-5 h-5" /> },
    { name: 'Problem Solving', level: 90, icon: <Brain className="w-5 h-5" /> }
  ];

  const SkillCard = ({ title, skills }: { title: string; skills: typeof technicalSkills }) => (
    <Card className="bg-dark-700/50 border-dark-600 hover:border-neon-blue/50 transition-all duration-300">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-6 gradient-text">{title}</h3>
        <div className="space-y-4">
          {skills.map((skill, index) => (
            <div key={index} className="group">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <span className="text-neon-blue group-hover:text-neon-green transition-colors duration-200">
                    {skill.icon}
                  </span>
                  <span className="text-gray-300 font-medium">{skill.name}</span>
                </div>
                <span className="text-neon-blue font-semibold">{skill.level}%</span>
              </div>
              <Progress 
                value={skill.level} 
                className="h-2 bg-dark-800"
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="skills" className="section-padding bg-dark-800/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-blue to-neon-green mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A combination of technical expertise and soft skills that enable me to deliver 
            exceptional results in every project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <SkillCard title="Technical Skills" skills={technicalSkills} />
          <SkillCard title="Soft Skills" skills={softSkills} />
        </div>

        {/* Additional Skills */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold mb-6 gradient-text">Additional Expertise</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'AI Productivity Tools',
              'Photo Editing',
              'Electronics',
              'Music Production',
              'Responsive Design',
              'Cross-browser Compatibility',
              'Version Control (Git)',
              'Agile Methodology'
            ].map((skill) => (
              <span 
                key={skill}
                className="px-4 py-2 bg-dark-700 border border-neon-green/30 rounded-full text-neon-green text-sm hover:bg-neon-green/10 transition-all duration-200 transform hover:scale-105"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
