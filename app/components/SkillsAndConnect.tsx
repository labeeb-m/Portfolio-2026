import React from 'react';
import { Mail, Github, Linkedin, Send, Terminal, Database, Layout } from 'lucide-react';

export default function SkillsAndContact() {
  return (
    <div className="bg-neutral-950 text-neutral-100 selection:bg-orange-500 selection:text-white pb-10">
      
      {/* --- SKILLS SECTION --- */}
      <section id="skills" className="py-20 px-6 md:px-20 relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-orange-600/5 rounded-full blur-[100px] -z-10" />

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Technical <span className="text-orange-500">Arsenal</span>
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              The languages, frameworks, and tools I use to bring ideas to life.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Category 1: Languages */}
            <SkillCategory 
              title="Languages" 
              icon={<Terminal size={24} className="text-orange-500" />}
              skills={["TypeScript", "JavaScript", "Java", "Python", "C", "HTML", "CSS", "SQL"]}
            />

            {/* Category 2: Frameworks & Libraries */}
            <SkillCategory 
              title="Frameworks & Libraries" 
              icon={<Layout size={24} className="text-blue-500" />}
              skills={["Next.js", "React.js", "Node.js", "Express.js", "Spring Boot", "Tailwind CSS", "PyTorch", "Pandas", "NumPy"]}
            />

            {/* Category 3: Tools & Databases */}
            <SkillCategory 
              title="Tools & Databases" 
              icon={<Database size={24} className="text-green-500" />}
              skills={["PostgreSQL", "MongoDB", "Docker", "Git & GitHub", "Figma", "Postman", "PowerBI", "Cursor AI"]}
            />

          </div>
        </div>
      </section>

      {/* --- CONNECT WITH ME SECTION --- */}
      <section id="contact" className="py-20 px-6 md:px-20 bg-gradient-to-b from-neutral-900/30 to-neutral-950 border-t border-neutral-800/50">
        <div className="max-w-4xl mx-auto text-center">
          
          <div className="inline-block p-3 bg-orange-500/10 rounded-full mb-6 animate-bounce">
            <Mail className="text-orange-500" size={32} />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Let's Build Something <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Extraordinary.</span>
          </h2>
          
          <p className="text-lg text-neutral-400 mb-10 max-w-xl mx-auto leading-relaxed">
            Whether you have a question, a project idea, or just want to discuss the latest in AI and Web Dev, my inbox is always open.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-12">
            <a 
              href="mailto:labeebmuntasir@gmail.com" 
              className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-black font-bold text-lg rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(249,115,22,0.4)] flex items-center gap-2"
            >
              <Send size={20} />
              Say Hello
            </a>
            <a 
              href="https://www.linkedin.com/in/labeeb-muntasir-53826b255/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-neutral-800 hover:bg-neutral-700 text-white font-medium text-lg rounded-full transition-all border border-neutral-700 flex items-center gap-2"
            >
              <Linkedin size={20} />
              Connect on LinkedIn
            </a>
          </div>

          {/* Social Links Row */}
          <div className="flex justify-center gap-8 pt-8 border-t border-neutral-800">
             <SocialLink href="https://github.com/lbm-realty" icon={<Github size={24} />} label="GitHub" />
             <SocialLink href="https://www.linkedin.com/in/labeeb-muntasir-53826b255/" icon={<Linkedin size={24} />} label="LinkedIn" />
             <SocialLink href="mailto:your.email@example.com" icon={<Mail size={24} />} label="Email" />
          </div>

        </div>
      </section>

      {/* --- FOOTER --- */}
      {/* <footer className="py-8 text-center border-t border-neutral-900 text-neutral-600 text-sm">
        <p className="mb-2">Designed & Built by <span className="text-orange-500 font-semibold">Labeeb Muntasir</span></p>
        <p>© {new Date().getFullYear()} All rights reserved.</p>
      </footer> */}

    </div>
  );
}

/* --- HELPER COMPONENTS --- */

function SkillCategory({ title, icon, skills }: { title: string, icon: React.ReactNode, skills: string[] }) {
  return (
    <div className="bg-neutral-900/40 border border-neutral-800 rounded-2xl p-8 hover:border-neutral-700 transition-all duration-300">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-neutral-800 rounded-lg">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-neutral-200">{title}</h3>
      </div>
      
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span 
            key={skill} 
            className="px-3 py-1.5 text-sm font-medium text-neutral-400 bg-neutral-950 border border-neutral-800 rounded-md hover:text-orange-400 hover:border-orange-500/30 transition-colors cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function SocialLink({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-neutral-500 hover:text-orange-500 transition-colors transform hover:-translate-y-1"
      aria-label={label}
    >
      {icon}
    </a>
  );
}