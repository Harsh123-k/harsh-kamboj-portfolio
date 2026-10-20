import React from 'react';
import { PERSONAL_INFO, FOCUS_AREAS } from '../data/portfolioData';
import { 
  Code2, 
  BrainCircuit, 
  Workflow, 
  Layers, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  ArrowUpRight 
} from 'lucide-react';

export const About: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers':
        return <Layers className="w-6 h-6 text-cyan-400" />;
      case 'BrainCircuit':
        return <BrainCircuit className="w-6 h-6 text-blue-400" />;
      case 'Workflow':
        return <Workflow className="w-6 h-6 text-teal-400" />;
      default:
        return <Code2 className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="about" className="py-24 scroll-mt-20 relative bg-dark-900/50 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/80 text-cyan-400 text-xs font-mono font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Engineering reliable systems with a security-first perspective.
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed">
            I'm a Computer Science & Engineering student at UPES, Dehradun, passionate about backend architecture, full-stack systems, and AI-driven automation. I enjoy diving into complex requirements, designing clean database schemas, and translating business processes into maintainable digital products.
          </p>
        </div>

        {/* Narrative & Key Capabilities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Main Story Narrative */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 leading-relaxed text-sm sm:text-base">
            <div className="p-6 rounded-2xl bg-dark-850/80 border border-slate-800 backdrop-blur-sm space-y-4">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <Code2 className="w-5 h-5 text-cyan-400" />
                <span>Hands-on Engineering & Growth Mindset</span>
              </h3>
              <p className="text-slate-300">
                During my software engineering internships at <strong className="text-white font-medium">Xebia</strong> and <strong className="text-white font-medium">Ultimez Technology</strong>, I worked directly with production backend stacks—building scalable RESTful APIs with Node.js and Express, designing MongoDB schemas, implementing JWT authentication, and structuring Role-Based Access Control (RBAC).
              </p>
              <p className="text-slate-300">
                Beyond conventional web development, I am deeply intrigued by the practical integration of Generative AI into enterprise workflows. In projects like the <strong className="text-cyan-300 font-medium">HR Resume & LinkedIn Shortlisting Agent</strong>, I implemented end-to-end RAG pipelines and prioritized critical safeguards: protecting systems against prompt injection and ensuring sensitive PII is automatically redacted before language model evaluation.
              </p>
              <p className="text-slate-400 text-sm">
                I believe that good software engineering isn't just about writing code; it's about asking the right questions, communicating clearly across stakeholders, writing thorough documentation, and designing workflows that remain resilient over time.
              </p>
            </div>
          </div>

          {/* Quick Metrics / Highlights Card */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            
            <div className="p-5 rounded-xl bg-dark-850 border border-slate-800/80 flex flex-col justify-between">
              <span className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-mono">
                8.24
              </span>
              <div className="mt-2">
                <span className="text-xs font-semibold text-white block">Undergrad CGPA</span>
                <span className="text-[11px] text-slate-400 font-mono">UPES Dehradun ('27)</span>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-dark-850 border border-slate-800/80 flex flex-col justify-between">
              <span className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 font-mono">
                2
              </span>
              <div className="mt-2">
                <span className="text-xs font-semibold text-white block">Tech Internships</span>
                <span className="text-[11px] text-slate-400 font-mono">Xebia & Ultimez</span>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-dark-850 border border-slate-800/80 flex flex-col justify-between">
              <span className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400 font-mono">
                100%
              </span>
              <div className="mt-2">
                <span className="text-xs font-semibold text-white block">Verified Credentials</span>
                <span className="text-[11px] text-slate-400 font-mono">AWS, B.U.I.L.D, Gen-AI</span>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-dark-850 border border-slate-800/80 flex flex-col justify-between">
              <span className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 font-mono">
                92%
              </span>
              <div className="mt-2">
                <span className="text-xs font-semibold text-white block">Class X ICSE</span>
                <span className="text-[11px] text-slate-400 font-mono">Distinction Honor</span>
              </div>
            </div>

            {/* Security banner */}
            <div className="col-span-2 p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/20 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0" />
              <p className="text-xs text-slate-300">
                Committed to writing secure, documented, and testable code with zero hardcoded secrets and robust access limits.
              </p>
            </div>

          </div>

        </div>

        {/* Three Visually Distinct Focus Areas */}
        <div className="mt-8">
          <div className="text-center sm:text-left mb-8">
            <h3 className="text-xl font-bold text-white tracking-tight">Core Areas of Focus</h3>
            <p className="text-sm text-slate-400">Where I invest my technical curiosity and development effort.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FOCUS_AREAS.map((area, idx) => (
              <div
                key={idx}
                className="group relative p-6 rounded-2xl bg-dark-850/90 border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between shadow-lg"
              >
                {/* Subtle top accent gradient */}
                <div className={`absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r ${area.gradient}`} />
                
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                    {getIcon(area.icon)}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {area.title}
                  </h4>
                  <p className="text-sm text-slate-400 leading-relaxed mb-5">
                    {area.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80">
                  <span className="text-[11px] text-slate-500 uppercase tracking-wider font-mono block mb-2">Technologies</span>
                  <div className="flex flex-wrap gap-1.5">
                    {area.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[11px] rounded bg-slate-900 text-slate-300 border border-slate-800 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
