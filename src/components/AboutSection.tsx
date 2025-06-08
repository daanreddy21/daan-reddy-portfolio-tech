
import { GraduationCap, Heart, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const AboutSection = () => {
  const education = [
    {
      institution: "KUPM Engineering College",
      degree: "CSE",
      duration: "Oct 2022 – Present",
      grade: "75%",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      institution: "Sree Vidyanikethan Engineering College",
      degree: "Diploma in EEE",
      duration: "May 2023",
      grade: "86.5%",
      icon: <Zap className="w-6 h-6" />
    },
    {
      institution: "Bapuji Vidya Sadan",
      degree: "High School",
      duration: "May 2020",
      grade: "CGPA 9.6/10",
      icon: <Heart className="w-6 h-6" />
    }
  ];

  return (
    <section id="about" className="section-padding bg-dark-800/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-blue to-neon-green mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Image Section */}
          <div className="lg:col-span-1">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-green rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
              <div className="relative bg-dark-700 rounded-2xl p-4 sm:p-6 border border-dark-600 group-hover:border-neon-blue/50 transition-all duration-300">
                <AspectRatio ratio={3/4} className="overflow-hidden rounded-xl">
                  <img
                    src="/lovable-uploads/a37cac62-07ed-4cd2-9ac6-c4b757bc7f28.png"
                    alt="Daan Reddy A - Web Developer"
                    className="w-full h-full object-cover object-center"
                  />
                </AspectRatio>
                <div className="mt-4 sm:mt-6 text-center">
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Daan Reddy A</h3>
                  <p className="text-neon-blue font-medium text-sm sm:text-base">Web Developer & UI/UX Designer</p>
                  <div className="flex justify-center space-x-2 mt-3 sm:mt-4">
                    <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
                    <span className="text-neon-green text-xs sm:text-sm">Available for projects</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:col-span-2 space-y-8">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate web designer and aspiring full-stack developer who thrives on creating 
                beautiful, functional digital experiences. My journey combines technical expertise in 
                UI/UX design, web development, and digital content editing to deliver solutions that 
                truly satisfy clients.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                What drives me is an insatiable curiosity for learning and problem-solving. I stay at 
                the forefront of tech trends through continuous self-improvement, diving into books, 
                leveraging AI tools, and engaging with the development community.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                Beyond coding, I'm fascinated by electronics, love exploring new technologies, and 
                find inspiration in music. My adaptability and dedication to helping others fuel my 
                commitment to creating impactful digital solutions.
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                {['Web Development', 'UI/UX Design', 'Video Editing', 'Problem Solving', 'AI Tools'].map((skill) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 bg-dark-700 border border-neon-blue/30 rounded-full text-neon-blue text-sm hover:bg-neon-blue/10 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6 gradient-text">Education</h3>
              
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <Card key={index} className="bg-dark-700/50 border-dark-600 hover:border-neon-blue/50 transition-all duration-300 group">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <div className="text-neon-blue group-hover:text-neon-green transition-colors duration-200 flex-shrink-0">
                          {edu.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                            <div>
                              <h4 className="font-semibold text-white text-sm sm:text-base">{edu.institution}</h4>
                              <p className="text-neon-blue text-sm">{edu.degree}</p>
                            </div>
                            <div className="text-right sm:text-left">
                              <p className="text-gray-400 text-xs sm:text-sm">{edu.duration}</p>
                              <p className="text-neon-green font-medium text-sm">{edu.grade}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
