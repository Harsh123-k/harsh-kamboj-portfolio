import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Download, 
  ArrowRight, 
  Mail, 
  Github, 
  Linkedin, 
  GraduationCap, 
  CheckCircle2, 
  Sparkles,
  ShieldCheck,
  Terminal,
  Cpu
} from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden bg-grid-pattern"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-radial from-cyan-500/10 via-blue-600/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-gradient-radial from-blue-500/15 via-indigo-600/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Introduction & Details */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Introductory Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wider uppercase font-mono shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-cyan-400"></span>
              {PERSONAL_INFO.heroLabel}
            </div>

            {/* Main Heading & Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
                  {PERSONAL_INFO.name}
                </span>
                .
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-200 tracking-tight">
                {PERSONAL_INFO.subheading}
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl font-normal">
              {PERSONAL_INFO.bio}
            </p>

            {/* Compact Academic Badge */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-200 text-sm backdrop-blur-sm shadow-sm hover:border-slate-700 transition-colors">
                <GraduationCap className="w-4 h-4 text-cyan-400" />
                <span className="font-semibold text-white">CGPA: {PERSONAL_INFO.cgpa}</span>
                <span className="text-slate-500">|</span>
                <span className="text-slate-300 text-xs font-medium">{PERSONAL_INFO.university}</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Security & Responsible AI Focused</span>
              </div>
            </div>

            {/* Three Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2 w-full sm:w-auto">
              {/* Button 1: Explore My Work */}
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-semibold text-sm transition-all duration-200 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Button 2: Download Resume */}
              <a
                href={PERSONAL_INFO.resumePath}
                download="Harsh_Kamboj_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white font-medium text-sm border border-slate-700/80 hover:border-cyan-500/40 transition-all duration-200 shadow-sm hover:-translate-y-0.5 active:translate-y-0 group"
              >
                <Download className="w-4 h-4 text-cyan-400 group-hover:-translate-y-0.5 transition-transform" />
                <span>Download Resume</span>
              </a>

              {/* Button 3: Contact Me */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-950/80 hover:bg-slate-900 text-slate-300 hover:text-white font-medium text-sm border border-slate-800 hover:border-slate-700 transition-all duration-200"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Icons Strip */}
            <div className="flex items-center gap-4 pt-3 border-t border-slate-800/80 w-full max-w-md">
              <span className="text-xs text-slate-400 uppercase tracking-wider font-mono">Connect</span>
              <div className="flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-slate-900/90 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 transition-all duration-200 shadow-sm"
                  aria-label="GitHub Profile"
                  title="GitHub: Harsh123-k"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-slate-900/90 text-slate-300 hover:text-cyan-400 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 transition-all duration-200 shadow-sm"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn: Harsh Kamboj"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-2.5 rounded-lg bg-slate-900/90 text-slate-300 hover:text-sky-400 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 transition-all duration-200 shadow-sm"
                  aria-label="Email Harsh"
                  title="Email Harsh Kamboj"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Profile Photograph in Elegant Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] group">
              
              {/* Ambient Backlight Behind Portrait */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-blue-600/25 to-indigo-600/15 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition duration-500"></div>

              {/* Fine Tech Grid Backdrop Behind Frame */}
              <div className="absolute -inset-2 rounded-2xl bg-slate-900/40 border border-slate-800/80 -rotate-1 pointer-events-none"></div>

              {/* Main Portrait Card Frame */}
              <div className="relative rounded-2xl p-[2px] bg-gradient-to-b from-cyan-400/50 via-blue-500/30 to-slate-800/60 shadow-2xl shadow-cyan-950/40 backdrop-blur-sm transition-transform duration-300 group-hover:-translate-y-1">
                
                <div className="relative rounded-[14px] overflow-hidden bg-dark-900 flex flex-col">
                  
                  {/* Portrait Image (Using Harsh's Real Uploaded Photograph) */}
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-slate-950">
                    <img
                      src={PERSONAL_INFO.profileImage}
                      alt="Harsh Kamboj - Software Engineer"
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      loading="eager"
                    />
                    
                    {/* Subtle Gradient Overlay at bottom for clean text contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent opacity-60 pointer-events-none" />

                    {/* Verified Identity Badge */}
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-dark-950/80 backdrop-blur-md border border-cyan-500/30 text-[11px] font-mono text-cyan-300 flex items-center gap-1.5 shadow-md">
                      <Sparkles className="w-3 h-3 text-cyan-400" />
                      <span>Verified Profile</span>
                    </div>

                    {/* Bottom Status Pill on Image */}
                    <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-dark-950/85 backdrop-blur-md border border-slate-800 flex items-center justify-between shadow-lg">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                        <div className="flex flex-col">
                          <span className="text-xs font-semibold text-white leading-tight">Harsh Kamboj</span>
                          <span className="text-[10px] text-slate-400 font-mono">Full-Stack & AI Systems</span>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/20">
                        UPES '27
                      </span>
                    </div>
                  </div>

                  {/* Minimal Sub-Panel below portrait with core tech tags */}
                  <div className="p-3.5 bg-dark-900 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                    <div className="flex items-center gap-1.5 font-mono text-[11px] text-slate-300">
                      <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Node.js • Python • RAG</span>
                    </div>
                    <span className="text-[10px] text-slate-400 font-mono">
                      Xebia & Ultimez Alum
                    </span>
                  </div>

                </div>
              </div>

              {/* Floating Decorative Badge Top Left */}
              <div className="absolute -top-3 -left-3 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-dark-900/90 border border-slate-700/80 text-xs font-mono text-slate-300 shadow-xl backdrop-blur-md">
                <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                <span>Backend Architecture</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
