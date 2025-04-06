
import React, { useEffect, useRef } from 'react';
import { CircleCheckIcon, TrendingUpIcon, Code, Database, Globe, Brain } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { useTheme } from '@/context/ThemeProvider';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skillsData = {
  technical: [
    { name: "HTML/CSS", level: 90, color: "#E34F26", icon: <Code size={20} /> },
    { name: "JavaScript", level: 85, color: "#F7DF1E", icon: <Code size={20} /> },
    { name: "React", level: 80, color: "#61DAFB", icon: <Code size={20} /> },
    { name: "TypeScript", level: 75, color: "#3178C6", icon: <Code size={20} /> },
    { name: "Node.js", level: 70, color: "#339933", icon: <Globe size={20} /> },
    { name: "Python", level: 65, color: "#3776AB", icon: <Code size={20} /> },
    { name: "TensorFlow", level: 60, color: "#FF6F00", icon: <Brain size={20} /> },
    { name: "MongoDB", level: 70, color: "#47A248", icon: <Database size={20} /> },
  ],
  frameworks: ["React", "Next.js", "Express.js", "TailwindCSS", "Bootstrap", "Material UI", "Flask"],
  tools: ["Git", "GitHub", "VS Code", "Figma", "Docker", "Jupyter Notebook", "Postman", "AWS"],
  softSkills: ["Problem Solving", "Team Collaboration", "Communication", "Time Management", "Adaptability", "Critical Thinking"]
};

const SkillBadge = ({ skill, level, color, icon }: { skill: string, level: number, color: string, icon: React.ReactNode }) => {
  const { theme } = useTheme();
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = badgeRef.current;
    if (element) {
      gsap.fromTo(element, 
        { opacity: 0, y: 20 },
        { 
          opacity: 1, 
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: element,
            start: "top bottom-=100",
            toggleActions: "play none none none"
          }
        }
      );
    }
  }, []);

  return (
    <div ref={badgeRef} className="mb-4 transform transition-all duration-300 hover:scale-105">
      <Card className={cn(
        "overflow-hidden border-l-4",
        theme === 'dark' ? "bg-gray-800 border-l-gray-600" : "bg-white"
      )} style={{ borderLeftColor: color }}>
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-full" style={{ backgroundColor: `${color}20` }}>
                {icon}
              </div>
              <span className="font-medium">{skill}</span>
            </div>
            <Badge 
              className="ml-auto" 
              style={{ backgroundColor: color, color: "#fff" }}
            >
              {level}%
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const SkillGroup = ({ title, skills, color, icon }: { title: string, skills: string[], color: string, icon: React.ReactNode }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const element = containerRef.current;
    if (element) {
      gsap.fromTo(element, 
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: element,
            start: "top bottom-=50",
            toggleActions: "play none none none"
          }
        }
      );
    }
  }, []);
  
  const { theme } = useTheme();
  return (
    <Card ref={containerRef} className={cn(
      "h-full transition-all duration-300 hover:shadow-lg",
      theme === 'dark' ? "bg-gray-800 border-gray-700" : "bg-white"
    )}>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-6 flex items-center">
          <div className="mr-2 text-portfolio-teal">{icon}</div>
          {title}
        </h3>
        <div className="flex flex-wrap">
          {skills.map((skill, index) => (
            <Badge 
              key={index} 
              className={cn(
                "m-1 py-1.5 px-2.5 transition-all duration-300 hover:scale-105",
                theme === 'dark' 
                  ? "bg-gray-700 text-gray-200 hover:bg-gray-600" 
                  : `bg-${color}/10 text-${color} hover:bg-${color}/20`
              )}
              style={{ 
                backgroundColor: theme === 'dark' ? undefined : `${color}20`,
                color: theme === 'dark' ? undefined : color 
              }}
            >
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const { theme } = useTheme();
  
  useEffect(() => {
    if (sectionRef.current && titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: -20 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center+=100",
            toggleActions: "play none none none"
          }
        }
      );
    }
  }, []);

  return (
    <section 
      ref={sectionRef} 
      id="skills" 
      className={cn(
        "section-padding transition-colors duration-300",
        theme === 'dark' ? "bg-gray-900" : "bg-portfolio-light"
      )}
    >
      <div className="container mx-auto px-4">
        <h2 ref={titleRef} className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="gradient-text">Skills</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <TrendingUpIcon className="mr-2 text-portfolio-purple" size={20} />
              Technical Proficiency
            </h3>
            <div className="space-y-4">
              {skillsData.technical.map((skill, index) => (
                <SkillBadge 
                  key={index} 
                  skill={skill.name} 
                  level={skill.level} 
                  color={skill.color} 
                  icon={skill.icon}
                />
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-8">
            <SkillGroup 
              title="Frameworks & Libraries" 
              skills={skillsData.frameworks}
              color={theme === 'dark' ? "#9b87f5" : "#7E69AB"}
              icon={<CircleCheckIcon size={20} />}
            />
            
            <SkillGroup 
              title="Tools & Platforms" 
              skills={skillsData.tools}
              color={theme === 'dark' ? "#0EA5E9" : "#0EA5E9"}
              icon={<CircleCheckIcon size={20} />}
            />
            
            <SkillGroup 
              title="Soft Skills" 
              skills={skillsData.softSkills}
              color={theme === 'dark' ? "#64748b" : "#64748b"}
              icon={<CircleCheckIcon size={20} />}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
