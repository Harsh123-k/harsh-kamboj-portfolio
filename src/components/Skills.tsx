import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { 
  Code2, 
  Server, 
  BrainCircuit, 
  Database, 
  Wrench, 
  BarChart3, 
  Check, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';

export const Skills: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Programming Languages':
        return <Code2 className="w-5 h-5 text-cyan-400" />;
      case 'Backend & Systems':
        return <Server className="w-5 h-5 text-blue-400" />;
      case 'AI, Gen-AI & Data Intelligence':
        return <BrainCircuit className="w-5 h-5 text-purple-400" />;
      case 'Databases & Storage':
        return <Database className="w-5 h-5 text-emerald-400" />;
      case 'Testing, Tools & DevOps':
        return <Wrench className="w-5 h-5 text-amber-400" />;
      case 'Data & Product Tools':
        return <BarChart3 className="w-5 h-5 text-teal-400" />;
      default:
        return <Code2 className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 scroll-mt-20 relative bg-dark-950 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-mono font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TECHNICAL EXPERTISE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Categorized Technical Competencies
          </h2>
          <p className="mt-3 text-slate-400 text-base leading-relaxed">
            Curated skills backed by practical hands-on implementation across full-stack backend development, security protocols, and generative AI systems.
          </p>
        </div>

        {/* Skills Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-dark-850/90 border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                    {getCategoryIcon(cat.category)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white leading-tight">
                      {cat.category}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                  {cat.description}
                </p>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                        skill.highlight
                          ? 'bg-cyan-950/40 text-cyan-200 border border-cyan-500/30'
                          : 'bg-dark-900 text-slate-300 border border-slate-800'
                      }`}
                    >
                      {skill.highlight && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />}
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sub-note */}
              <div className="mt-6 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>{cat.skills.length} core competencies</span>
                <span className="text-cyan-400/80">Verified</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
