import React from 'react';
import { Briefcase, Calendar, ExternalLink, Github, Code2, Terminal, Cpu, Shield, Zap } from 'lucide-react';

export default function ExperienceAndProjects() {
  return (
    <div className="bg-neutral-950 text-neutral-100 selection:bg-orange-500 selection:text-white pb-20">
      
      {/* --- EXPERIENCE SECTION --- */}
      <section id="experience" className="py-20 px-6 md:px-20 relative overflow-hidden">
        {/* Background Element */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl -z-10" />

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 md:gap-12 items-end mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Work <span className="text-orange-500">Experience</span>
            </h2>
            <div className="h-px bg-neutral-800 flex-1 mb-2 hidden md:block"></div>
            <p className="text-neutral-500 text-sm font-mono uppercase tracking-widest mb-1">Career Timeline</p>
          </div>

          <div className="relative border-l border-neutral-800 ml-3 md:ml-6 space-y-12">
            
            {/* Experience Item 1: TTU MSA */}
            <ExperienceCard 
              title="Full Stack Developer"
              company="Texas Tech MSA"
              period="June 2024 – Present"
              tech={["React", "Node.js", "MongoDB", "Stripe"]}
              description={[
                "Developed and launched a responsive website enhancing online presence and accessibility.",
                "Integrated Stripe payment processing, securely generating over $11,000 in revenue.",
                "Partnered with the marketing team in an Agile environment to optimize UI/UX."
              ]}
              isCurrent={true}
            />

            {/* Experience Item 2: Student Grader */}
            <ExperienceCard 
              title="Student Grader"
              company="Texas Tech Department of CS"
              period="Sept 2024 – Present"
              tech={["C Language", "Teaching", "Debugging"]}
              description={[
                "Evaluated 200+ exams and programming assignments, ensuring detailed feedback on C concepts.",
                "Facilitated weekly office hours to provide technical guidance and one-on-one debugging support."
              ]}
              isCurrent={true}
            />

            {/* Experience Item 3: Academic Tutor */}
            <ExperienceCard 
              title="Academic Tutor"
              company="Texas Tech Learning Center"
              period="Jan 2024 – Aug 2025"
              tech={["Calculus", "C Programming", "Mentorship"]}
              description={[
                "Instructed 100+ students in Calculus and C Programming using tailored teaching methods.",
                "Assisted students in achieving 90% or higher scores on exams.",
                "Received multiple return offers due to strong teaching and subject matter expertise."
              ]}
              isCurrent={false}
            />

          </div>
        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section id="projects" className="py-20 px-6 md:px-20 bg-neutral-900/20 border-t border-neutral-800/50">
        <div className="max-w-7xl mx-auto">
          
          <div className="mb-16 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Projects</span>
            </h2>
            <p className="text-neutral-400 max-w-2xl">
              A collection of AI tools, full-stack applications, and low-level system optimizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Project 1: Multithreaded I/O Pipeline */}
            <ProjectCard 
              title="Multi-threaded I/O Pipeline"
              tagline="High-Performance C Processor"
              tech={["C", "pthreads", "HPCC"]}
              description="A concurrent producer-consumer architecture to process and categorize 4 billion integer values in under 30 minutes on an HPCC system."
              liveLink="https://github.com/lbm-realty/Mutlithreaded-Data-Pipeline"
              repoLink="#" 
              icon={<Code2 className="text-orange-500" size={32} />}
            />

            {/* Project 2: Multithreaded I/O Pipeline */}
            <ProjectCard 
              title="Network Data Interceptor"
              tagline="Multithreaded Security Proxy"
              tech={["C", "TCP Sockets"]}
              description="High performance reverse proxy preventing AI API data leaks and capable of handling ~3,500 Req/sec with 7.6ms latency."
              liveLink="#"
              repoLink="https://github.com/lbm-realty/Network-Inspector"
              icon={<Shield className="text-purple-500" size={32} />}
            />

            {/* Project 3: CUDA Optimization Series */}
            <ProjectCard 
              title="CUDA Optimization: Matrix Math"
              tagline="1000x Speedup & Memory Tiling"
              tech={["C/C++", "CUDA"]}
              description="Engineered a high-performance GPU compute pipeline. Achieved a 1000x speedup over sequential execution, then implemented 2D shared memory tiling to process massive 16,384x16,384 matrices."
              liveLink="https://github.com/lbm-realty/Matrix-Multiplication-Tile"
              repoLink="#"
              icon={<Zap className="text-yellow-500" size={32} />}
            />

            {/* Project 4: SkillsCoach */}
            <ProjectCard 
              title="SkillsCoach"
              tagline="AI-Driven Interview Simulator"
              tech={["Python", "FastAPI", "Gemini AI", "Next.js", "Supabase"]}
              description="An AI coding simulator helping candidates hone real-world problem-solving skills. Features a rate-limiting system to manage API costs."
              liveLink="https://skills-coach-frontend.vercel.app/"
              repoLink="#" 
              icon={<Code2 className="text-orange-500" size={32} />}
            />

            {/* Project 5: DevsMerge */}
            <ProjectCard 
              title="DevsMerge"
              tagline="Developer Collaboration Platform"
              tech={["Java", "PostgreSQL", "Next.js", "Docker"]}
              description="Full-stack app connecting students for projects. Containerized backend with Docker for consistent CI/CD workflows."
              liveLink="http://devsmerge.com/"
              repoLink="#"
              icon={<Terminal className="text-blue-500" size={32} />}
            />

            {/* Project 6: TTU MSA Website */}
            <ProjectCard 
              title="TTU MSA Portal"
              tagline="Organization Management System"
              tech={["React", "Node.js", "Stripe API", "MongoDB"]}
              description="Official platform for the student org. Handled $11k+ in transactions via Stripe integration."
              liveLink="https://ttumsa.org/"
              repoLink="#"
              icon={<Briefcase className="text-green-500" size={32} />}
            />

             {/* Project 7: C Neural Network */}
             <ProjectCard 
              title="Neural Network in C"
              tagline="Low-Level ML Optimization"
              tech={["C Language", "Memory Management", "Math"]}
              description="Built a neural network from scratch in C. Benchmarked against Python libraries achieving a 100x speedup in training."
              liveLink="https://github.com/lbm-realty/ML-Algorithms-Optimized"
              repoLink="#"
              icon={<Cpu className="text-purple-500" size={32} />}
            />

            {/* Project 8: WildView */}
            <ProjectCard 
              title="WildView"
              tagline="Wildlife Sighting Tracker"
              tech={["React", "Node.js", "MongoDB", "Figma"]}
              description="Senior Capstone project. Interactive map for locating wildlife and interest-based communities built with an Agile team."
              liveLink="https://wildview.vercel.app/"
              repoLink="#"
              icon={<ExternalLink className="text-teal-500" size={32} />}
            />

             {/* Project 9: Chrome Extension */}
             <ProjectCard 
              title="YouTube Note Taker"
              tagline="Chrome Extension"
              tech={["JavaScript", "Chrome Storage API"]}
              description="Eliminates manual documentation needs. Gained 20+ installs and positive feedback on the Chrome Web Store."
              liveLink="https://chromewebstore.google.com/detail/my-yt-notes/oniiihfbmhjghddmcmoblfalcmlkmhhj"
              repoLink="#"
              icon={<ExternalLink className="text-red-500" size={32} />}
            />

          </div>
        </div>
      </section>

    </div>
  );
}

/* --- HELPER COMPONENTS --- */

function ExperienceCard({ title, company, period, tech, description, isCurrent }: any) {
  return (
    <div className="relative pl-8 md:pl-12 group">
      {/* Timeline Dot */}
      <div className={`absolute -left-[5px] top-2 w-3 h-3 rounded-full border-2 ${isCurrent ? 'bg-orange-500 border-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.6)]' : 'bg-neutral-950 border-neutral-600'}`}></div>
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
        <h3 className="text-xl font-bold text-neutral-100 group-hover:text-orange-400 transition-colors">{title}</h3>
        <span className="text-xs font-mono text-neutral-500 bg-neutral-900 px-2 py-1 rounded border border-neutral-800">{period}</span>
      </div>
      
      <p className="text-lg text-neutral-300 font-medium mb-3">{company}</p>
      
      <ul className="list-disc list-outside ml-4 space-y-2 text-neutral-400 mb-4 text-sm leading-relaxed">
        {description.map((item: string, i: number) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2">
        {tech.map((t: string) => (
          <span key={t} className="text-xs font-medium text-neutral-500 bg-neutral-900/50 px-2 py-1 rounded border border-neutral-800/50">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ title, tagline, tech, description, liveLink, repoLink, icon }: any) {
  return (
    <div className="group relative bg-neutral-900/40 border border-neutral-800 hover:border-orange-500/50 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-900/10 flex flex-col h-full">
      
      <div className="flex justify-between items-start mb-4">
        <div className="p-3 bg-neutral-800/50 rounded-lg border border-neutral-700/50 group-hover:bg-neutral-800 transition-colors">
          {icon}
        </div>
        <div className="flex gap-2">
          {liveLink !== '#' && (
            <a href={liveLink} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-orange-400 transition-colors p-1" aria-label="Live Demo">
              <ExternalLink size={18} />
            </a>
          )}
          {repoLink !== '#' && (
            <a href={repoLink} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-colors p-1" aria-label="View Code">
              <Github size={18} />
            </a>
          )}
        </div>
      </div>

      <h3 className="text-xl font-bold text-neutral-100 mb-1">{title}</h3>
      <p className="text-xs font-mono text-orange-500 mb-3 uppercase tracking-wider">{tagline}</p>
      
      <p className="text-neutral-400 text-sm leading-relaxed mb-6 flex-grow">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-neutral-800/50">
        {tech.map((t: string) => (
          <span key={t} className="text-[10px] font-semibold text-neutral-300 bg-neutral-800 px-2 py-1 rounded-md">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}