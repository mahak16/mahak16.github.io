
import React from 'react';
import { CircleCheckIcon, TrendingUpIcon } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const skillsData = {
  technical: [
    { name: "HTML/CSS", level: 90, color: "bg-[#E34F26]" },
    { name: "JavaScript", level: 85, color: "bg-[#F7DF1E]" },
    { name: "React", level: 80, color: "bg-[#61DAFB]" },
    { name: "TypeScript", level: 75, color: "bg-[#3178C6]" },
    { name: "Node.js", level: 70, color: "bg-[#339933]" },
    { name: "Python", level: 65, color: "bg-[#3776AB]" },
    { name: "TensorFlow", level: 60, color: "bg-[#FF6F00]" },
    { name: "MongoDB", level: 70, color: "bg-[#47A248]" },
  ],
  frameworks: ["React", "Next.js", "Express.js", "TailwindCSS", "Bootstrap", "Material UI", "Flask"],
  tools: ["Git", "GitHub", "VS Code", "Figma", "Docker", "Jupyter Notebook", "Postman", "AWS"],
  softSkills: ["Problem Solving", "Team Collaboration", "Communication", "Time Management", "Adaptability", "Critical Thinking"]
};

const SkillBar = ({ skill, level, color }: { skill: string, level: number, color: string }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-sm font-medium">{skill}</span>
      <span className="text-sm text-gray-500">{level}%</span>
    </div>
    <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
      <Progress value={level} className="h-2" />
      <div 
        className={cn("absolute top-0 left-0 h-2 rounded-full", color)}
        style={{ width: `${level}%` }}
      />
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-portfolio-light">
      <div className="container mx-auto px-4">
        <h2 className="section-title">My Skills</h2>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <TrendingUpIcon className="mr-2 text-portfolio-purple" size={20} />
              Technical Proficiency
            </h3>
            <div className="space-y-6">
              {skillsData.technical.map((skill, index) => (
                <SkillBar key={index} skill={skill.name} level={skill.level} color={skill.color} />
              ))}
            </div>
          </div>
          
          <div className="space-y-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <CircleCheckIcon className="mr-2 text-portfolio-teal" size={20} />
                  Frameworks & Libraries
                </h3>
                <div className="flex flex-wrap">
                  {skillsData.frameworks.map((skill, index) => (
                    <span key={index} className="skill-pill bg-portfolio-purple/10 text-portfolio-purple">
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <CircleCheckIcon className="mr-2 text-portfolio-teal" size={20} />
                  Tools & Platforms
                </h3>
                <div className="flex flex-wrap">
                  {skillsData.tools.map((skill, index) => (
                    <span key={index} className="skill-pill bg-portfolio-teal/10 text-portfolio-teal">
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <CircleCheckIcon className="mr-2 text-portfolio-teal" size={20} />
                  Soft Skills
                </h3>
                <div className="flex flex-wrap">
                  {skillsData.softSkills.map((skill, index) => (
                    <span key={index} className="skill-pill bg-gray-100 text-gray-700">
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
