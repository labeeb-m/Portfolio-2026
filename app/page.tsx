// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
//         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
//           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
//             To get started, edit the page.tsx file.
//           </h1>
//           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
//             Looking for a starting point or more instructions? Head over to{" "}
//             <a
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Templates
//             </a>{" "}
//             or the{" "}
//             <a
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Learning
//             </a>{" "}
//             center.
//           </p>
//         </div>
//         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
//           <a
//             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={16}
//               height={16}
//             />
//             Deploy Now
//           </a>
//           <a
//             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Documentation
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }


import Link from 'next/link';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import ExperienceAndProjects from './components/ExperienceAndProjects';
import SkillsAndContact from './components/SkillsAndConnect';
import Image from 'next/image';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-orange-500 selection:text-white">
      
      {/* --- NAVBAR (Glassmorphism) --- */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center backdrop-blur-md bg-neutral-950/70 border-b border-neutral-800">
        <div className="text-xl font-bold tracking-tighter">
          <span className="text-orange-500">
            <Image 
              src="/signature.png"
              alt="LM"
              width={80}
              height={80}
            />
          </span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-neutral-400">
          <a href="#about" className="hover:text-orange-500 transition-colors">About</a>
          <a href="#projects" className="hover:text-orange-500 transition-colors">Projects</a>
          <a href="#experience" className="hover:text-orange-500 transition-colors">Experience</a>
          <a href="#skills" className="hover:text-orange-500 transition-colors">TechStack</a>
          <a href="#contact" className="hover:text-orange-500 transition-colors">Contact</a>
        </div>
        <Link 
          href="#contact" 
          className="px-5 py-2 text-sm font-semibold bg-orange-500 hover:bg-orange-600 text-black rounded-full transition-all"
        >
          Let's Talk
        </Link>
      </nav>

      <main className="pt-20">
        
        <Hero />
        <AboutMe />
        <ExperienceAndProjects />
        <SkillsAndContact />
      
      </main>
      
      {/* Footer Placeholder for now */}
      <footer className="py-8 text-center text-neutral-600 text-sm">
        <p className="mb-2">By <span className="text-orange-500 font-semibold">Labeeb Muntasir</span></p>
        <p>© {new Date().getFullYear()} All rights reserved.</p>
      </footer>
    </div>
  );
}
