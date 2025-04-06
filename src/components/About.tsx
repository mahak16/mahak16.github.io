
import React from 'react';
import { Code, Laptop, Lightbulb, GraduationCap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useTheme } from '@/context/ThemeProvider';

const About = () => {
  const { theme } = useTheme();
  const highlights = [
    {
      icon: <Code className="text-portfolio-teal" size={24} />,
      title: 'Web Development',
      description: 'Passionate about creating responsive and interactive web experiences'
    },
    {
      icon: <Lightbulb className="text-portfolio-purple" size={24} />,
      title: 'AI Enthusiast',
      description: 'Exploring the possibilities of artificial intelligence and machine learning'
    },
    {
      icon: <Laptop className="text-portfolio-teal" size={24} />,
      title: 'Problem Solver',
      description: 'Love tackling complex challenges with creative solutions'
    },
    {
      icon: <GraduationCap className="text-portfolio-purple" size={24} />,
      title: 'Continuous Learner',
      description: 'Always expanding my knowledge in the ever-evolving tech landscape'
    }
  ];

  return (
    <section id="about" className={`section-padding ${theme === 'dark' ? 'bg-gray-900' : 'bg-portfolio-light'}`}>
      <div className="container mx-auto px-4">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <p className="text-lg">
              Hello! I'm <span className="font-semibold text-portfolio-purple">Mahak Jiwnani</span>, a third-year IT student with a passion for web development and artificial intelligence.
            </p>
            <p>
              My journey in technology began with a curiosity about how digital experiences are created. This led me to explore web development, where I discovered my love for building interfaces that are both beautiful and functional.
            </p>
            <p>
              Alongside web development, I've been fascinated by the potential of AI and how it can revolutionize the way we interact with technology. I'm constantly learning and exploring new technologies to stay at the cutting edge of this rapidly evolving field.
            </p>
            <p>
              When I'm not coding, you can find me exploring design trends, participating in hackathons, or collaborating with fellow tech enthusiasts on innovative projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <Card key={index} className={`hover:shadow-md transition duration-300 ${theme === 'dark' ? 'bg-gray-800 text-gray-100' : 'bg-white'}`}>
                <CardContent className="p-4">
                  <div className="flex flex-col items-center text-center">
                    <div className={`p-3 rounded-full mb-4 ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'}`}>
                      {item.icon}
                    </div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
