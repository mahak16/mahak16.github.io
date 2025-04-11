
import React from 'react';
import { ArrowDownIcon, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-portfolio-purple/5 to-portfolio-teal/5 -z-10"></div>
      
      {/* Abstract shapes */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-portfolio-purple/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-portfolio-teal/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col space-y-6 animate-fade-in">
          <p className="text-portfolio-teal font-medium">Hello, I'm</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Mahak Jiwnani</h1>
          <div className="flex items-center space-x-4">
            <div className="h-1 w-12 bg-portfolio-purple rounded"></div>
            <h2 className="text-xl md:text-2xl text-gray-600">Web Developer & AI Enthusiast</h2>
          </div>
          <p className="text-lg text-gray-600 max-w-lg">
            A passionate 3rd year IT student focused on creating innovative web solutions 
            and exploring the possibilities of artificial intelligence.
          </p>
          <div className="flex space-x-4 pt-4">
            <Button asChild className="bg-portfolio-purple hover:bg-portfolio-purple/90">
              <a href="#contact">Get In Touch</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#projects">View Projects</a>
            </Button>
          </div>

          <div className="flex items-center space-x-4 pt-2">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-portfolio-purple transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/mahak-jiwnani-webdev" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-portfolio-purple transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:mahakjiwnani18@gmail.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-portfolio-purple transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="hidden md:flex justify-center items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-portfolio-purple to-portfolio-teal rounded-full opacity-10 blur-2xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&h=600&q=80" 
              alt="Mahak Jiwnani" 
              className="rounded-3xl shadow-xl z-10 relative w-[400px] h-[400px] object-cover"
            />
          </div>
        </div>
      </div>

      <a 
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-500 hover:text-portfolio-purple transition-colors"
      >
        <span className="text-sm mb-2">Scroll Down</span>
        <ArrowDownIcon className="animate-bounce" size={20} />
      </a>
    </section>
  );
};

export default Hero;
