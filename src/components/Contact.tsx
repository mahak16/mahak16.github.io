
import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { useTheme } from '@/context/ThemeProvider';

const ContactInfo = ({ icon, title, content }: { icon: React.ReactNode, title: string, content: React.ReactNode }) => {
  const { theme } = useTheme();
  
  return (
    <div className="flex items-start space-x-4">
      <div className="p-3 bg-portfolio-purple/10 rounded-full text-portfolio-purple">
        {icon}
      </div>
      <div>
        <h4 className="font-medium">{title}</h4>
        <div className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>{content}</div>
      </div>
    </div>
  );
};

const Contact = () => {
  const { toast } = useToast();
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for contacting me. I'll respond as soon as possible.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1000);
  };

  return (
    <section id="contact" className={`section-padding ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <h2 className="section-title">Get In Touch</h2>
        <p className={`text-center max-w-2xl mx-auto mb-12 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
          Have a project in mind or want to discuss potential opportunities? 
          Feel free to reach out to me.
        </p>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className={`p-8 rounded-xl shadow-sm ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
            <h3 className="text-2xl font-semibold mb-6">Send Me A Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Input 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className={theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'}
                />
              </div>
              <div>
                <Input 
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className={theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'}
                />
              </div>
              <div>
                <Input 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className={theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'}
                />
              </div>
              <div>
                <Textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  className={`resize-none min-h-[150px] ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'}`}
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-portfolio-purple hover:bg-portfolio-purple/90"
              >
                <Send className="mr-2" size={16} />
                Send Message
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div className={`p-8 rounded-xl shadow-sm ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <ContactInfo 
                  icon={<Mail size={20} />}
                  title="Email"
                  content={<a href="mailto:mahakjiwnani18@gmail.com" className="text-portfolio-purple hover:underline">mahakjiwnani18@gmail.com</a>}
                />
                <ContactInfo 
                  icon={<Phone size={20} />}
                  title="Phone"
                  content={<a href="tel:+919301751212" className="text-portfolio-purple hover:underline">+91 9301751212</a>}
                />
                <ContactInfo 
                  icon={<MapPin size={20} />}
                  title="Location"
                  content="Raipur, Chhattisgarh, India"
                />
              </div>
            </div>
            
            <div className={`p-8 rounded-xl shadow-sm ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
              <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
              <p className={theme === 'dark' ? 'text-gray-300 mb-4' : 'text-gray-600 mb-4'}>
                Follow me on social media and let's stay connected.
              </p>
              <div className="flex space-x-4">
                <a href="#" className={`p-3 rounded-full transition-colors ${theme === 'dark' ? 'bg-gray-700 text-gray-300 hover:bg-portfolio-purple hover:text-white' : 'bg-gray-100 text-gray-600 hover:bg-portfolio-purple hover:text-white'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/mahak-jiwnani-webdev" className={`p-3 rounded-full transition-colors ${theme === 'dark' ? 'bg-gray-700 text-gray-300 hover:bg-portfolio-purple hover:text-white' : 'bg-gray-100 text-gray-600 hover:bg-portfolio-purple hover:text-white'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                  </svg>
                </a>
                <a href="mailto:mahakjiwnani18@gmail.com" className={`p-3 rounded-full transition-colors ${theme === 'dark' ? 'bg-gray-700 text-gray-300 hover:bg-portfolio-purple hover:text-white' : 'bg-gray-100 text-gray-600 hover:bg-portfolio-purple hover:text-white'}`}>
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
