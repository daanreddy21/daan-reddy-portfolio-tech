
import { GraduationCap, Heart, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

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
              <div className="relative bg-dark-700 rounded-2xl p-6 border border-dark-600 group-hover:border-neon-blue/50 transition-all duration-300">
                <img
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=500&fit=crop&crop=face"
                  alt="Daan Reddy A - Web Developer"
                  className="w-full h-80 object-cover rounded-xl"
                />
                <div className="mt-6 text-center">
                  <h3 className="text-xl font-semibold text-white mb-2">Daan Reddy A</h3>
                  <p className="text-neon-blue font-medium">Web Developer & UI/UX Designer</p>
                  <div className="flex justify-center space-x-2 mt-4">
                    <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
                    <span className="text-neon-green text-sm">Available for projects</span>
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
              
              {education.map((edu, index) => (
                <Card key={index} className="bg-dark-700/50 border-dark-600 hover:border-neon-blue/50 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="text-neon-blue group-hover:text-neon-green transition-colors duration-200">
                        {edu.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white mb-1">{edu.institution}</h4>
                        <p className="text-neon-blue mb-1">{edu.degree}</p>
                        <p className="text-gray-400 text-sm mb-1">{edu.duration}</p>
                        <p className="text-neon-green font-medium">{edu.grade}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
