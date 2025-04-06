
import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const ProjectCard = ({ project }: { project: ProjectType }) => {
  return (
    <div className="project-card rounded-xl overflow-hidden h-[300px] relative group">
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <h3 className="text-white text-xl font-semibold">{project.title}</h3>
        <p className="text-white/80 my-2 text-sm">{project.description}</p>
        <div className="flex flex-wrap gap-2 my-2">
          {project.technologies.map((tech, idx) => (
            <Badge key={idx} variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex space-x-3 mt-3">
          {project.demoLink && (
            <Button asChild size="sm" className="bg-portfolio-teal hover:bg-portfolio-teal/90">
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                <ExternalLink size={14} /> Demo
              </a>
            </Button>
          )}
          {project.githubLink && (
            <Button asChild size="sm" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                <Github size={14} /> Code
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

type ProjectType = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: 'web' | 'ai' | 'all';
  demoLink?: string;
  githubLink?: string;
};

const projects: ProjectType[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A fully responsive e-commerce platform with cart functionality and payment integration.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    category: "web",
    demoLink: "https://demo.com/ecommerce",
    githubLink: "https://github.com/mahakjiwnani/ecommerce"
  },
  {
    id: 2,
    title: "AI Image Generator",
    description: "An application that uses machine learning to generate unique images from text descriptions.",
    image: "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?auto=format&fit=crop&w=800&q=80",
    technologies: ["Python", "TensorFlow", "React", "Flask"],
    category: "ai",
    demoLink: "https://demo.com/ai-image",
    githubLink: "https://github.com/mahakjiwnani/ai-image"
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A personal portfolio website to showcase projects and skills.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "Tailwind CSS", "Three.js"],
    category: "web",
    demoLink: "https://demo.com/portfolio",
    githubLink: "https://github.com/mahakjiwnani/portfolio"
  },
  {
    id: 4,
    title: "Chatbot Assistant",
    description: "An intelligent chatbot that uses NLP to provide helpful responses to user queries.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
    technologies: ["Python", "NLTK", "TensorFlow", "React"],
    category: "ai",
    demoLink: "https://demo.com/chatbot",
    githubLink: "https://github.com/mahakjiwnani/chatbot"
  },
  {
    id: 5,
    title: "Weather Dashboard",
    description: "A weather application that provides real-time weather data and forecasts.",
    image: "https://images.unsplash.com/photo-1561484930-998b6a7b22e8?auto=format&fit=crop&w=800&q=80",
    technologies: ["JavaScript", "React", "Weather API", "CSS"],
    category: "web",
    demoLink: "https://demo.com/weather",
    githubLink: "https://github.com/mahakjiwnani/weather"
  },
  {
    id: 6,
    title: "Sentiment Analysis Tool",
    description: "A tool that analyzes the sentiment of text using machine learning algorithms.",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=800&q=80",
    technologies: ["Python", "NLTK", "Scikit-learn", "Flask"],
    category: "ai",
    demoLink: "https://demo.com/sentiment",
    githubLink: "https://github.com/mahakjiwnani/sentiment"
  }
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredProjects = projects.filter(
    project => activeTab === "all" || project.category === activeTab
  );

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto px-4">
        <h2 className="section-title">My Projects</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
          Explore my latest work in web development and artificial intelligence. 
          Each project represents my passion for creating innovative solutions.
        </p>
        
        <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="web">Web Development</TabsTrigger>
              <TabsTrigger value="ai">AI & ML</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="web" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="ai" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
