import { Github, Linkedin, Mail, FileText} from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col-reverse md:flex-row items-center justify-center gap-12 px-6 md:px-20 overflow-hidden">
      {/* Background Blobs (Decoration) */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl -z-10" />

      {/* Left: Text Content */}
      <div className="flex-1 space-y-6 text-center md:text-left z-10">
        <div className="inline-block px-3 py-1 mb-2 text-xs font-semibold tracking-wide text-orange-400 uppercase bg-orange-500/10 rounded-full border border-orange-500/20">
          Available for Full-time Roles
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
            Labeeb
          </span>
          .
          <br />
          Full Stack Dev.
        </h1>

        <p className="text-lg text-neutral-400 max-w-lg mx-auto md:mx-0 leading-relaxed">
          I build AI-powered products and scalable web applications. Founder of
          <span className="text-neutral-200 font-semibold"> SkillsCoach</span>.
          Turning complex problems into clean UI and efficient logic.
        </p>

        {/* Social Links */}
        <div className="flex items-center justify-center md:justify-start gap-4 pt-4">
          <SocialButton
            href="https://github.com/labeeb-m"
            icon={<Github size={20} />}
            label="GitHub"
          />
          <SocialButton
            href="https://www.linkedin.com/in/labeeb-muntasir-53826b255/"
            icon={<Linkedin size={20} />}
            label="LinkedIn"
          />
          <SocialButton
            href="mailto:labeebmuntasir@gmail.com"
            icon={<Mail size={20} />}
            label="Email"
          />
          <SocialButton
            href="/resume.pdf"
            icon={<FileText size={20} />}
            label="Resume"
          />
        </div>
      </div>

      {/* Right: Picture Space */}
      <div className="flex-1 flex justify-center items-center relative z-10">
        <div className="relative w-72 h-72 md:w-[28rem] md:h-[28rem]">
          {/* Decorative Circle Border */}
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-neutral-700 animate-spin-slow"></div>

          {/* Image Container */}
          <div className="absolute inset-2 md:inset-4 rounded-full overflow-hidden border-4 border-neutral-800 shadow-2xl bg-neutral-900">
            {/* REPLACE '/profile-pic.jpg' with your actual image path in /public folder.
                  If no image is set, this div acts as a placeholder. 
                */}
            <div className="w-full h-full bg-neutral-800 flex items-center justify-center text-neutral-600">
              <span className="text-sm">Your Photo Here</span>
            </div>
            {/* Uncomment below when you have the image */}
            <Image
              src="/portfolio-pic.jpeg"
              alt="Labeeb Muntasir"
              fill
              className="object-cover"
            />
          </div>

          {/* Floating Badge Example */}
          <div className="absolute bottom-4 -left-4 md:bottom-10 md:-left-10 bg-neutral-900/80 backdrop-blur-md border border-neutral-700 p-4 rounded-xl shadow-xl">
            <p className="text-xs text-neutral-400 uppercase font-bold">
              Current Status
            </p>
            <div className="flex items-center gap-2 mt-1">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-semibold text-white">
                Graduated May 2026
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialButton({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="p-3 bg-neutral-800 hover:bg-neutral-700 hover:text-orange-500 rounded-full transition-all border border-neutral-700 group relative"
      aria-label={label}
    >
      {icon}
    </a>
  );
}