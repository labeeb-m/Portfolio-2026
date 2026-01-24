import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="py-20 px-6 md:px-20 bg-neutral-900/30 border-y border-neutral-800/50"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        {/* Title Column */}
        <div className="md:w-1/3">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-orange-500 rounded-full mb-6"></div>
          <p className="text-neutral-400">
            Senior Computer Science student at <br />
            <span className="text-white font-medium">
              Texas Tech University
            </span>
            .
          </p>
        </div>

        {/* Content Column */}
        <div className="md:w-2/3 space-y-6 text-neutral-300 leading-relaxed">
          <p>
            I am a Full Stack Developer with a passion for building AI native
            applications. My journey involves everything from low level{" "}
            <strong>C programming</strong> to shipping modern web apps with
            <strong> Next.js, FastAPI, and TypeScript</strong>.
          </p>
          <p>
            I recently launched <strong>SkillsCoach</strong>, an AI-powered
            platform helping students practice interviews, and Product
            Engineering questions and built <strong>DevsMerge</strong> to
            connect developers for collaboration.
          </p>
          <p>
            When I'm not coding, I'm involved in community responsibilities
            having helped the TTU MSA raise
            <strong> $11k in funding</strong> through custom web solutions.
          </p>

          <div className="pt-4">
            <Link
              href="#experience"
              className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-semibold transition-colors"
            >
              View my experience <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
