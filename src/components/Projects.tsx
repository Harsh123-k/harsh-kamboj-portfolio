import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { 
  FolderGit2, 
  ExternalLink, 
  ShieldCheck, 
  Sparkles, 
  Activity, 
  ArrowRight
} from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'full-stack' | 'backend' | 'ai'>('all');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filteredProjects = selectedCategory === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === selectedCategory);

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'full-stack', label: 'Full-Stack' },
    { id: 'backend', label: 'Backend Systems' },
    { id: 'ai', label: 'AI & Gen-AI' },
  ];

  const renderProjectVisual = (project: Project) => {
    switch (project.id) {
      case 'clinic-mgmt':
        return (
          <div className="h-48 w-full bg-dark-950 p-4 font-mono text-[11px] flex flex-col justify-between border-b border-slate-800">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800/80 text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                <span className="text-slate-300 ml-1">clinic-api-gateway</span>
              </div>
              <span className="text-[10px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                200 OK
              </span>
            </div>
            <div className="space-y-1.5 text-slate-300 py-2">
              <div className="flex items-center gap-2 text-cyan-400">
                <span className="text-slate-500">&gt;</span>
                <span>POST /api/appointments/schedule</span>
              </div>
              <div className="text-slate-400 pl-3">
                <span>{"{"} patientId: "P-9842", doctor: "DR-04", slot: "10:30 AM" {"}"}</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-400">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>JWT Authentication & RBAC Authorized</span>
              </div>
              <div className="text-slate-500 pl-3">
                <span>Database: MongoDB Atlas • Atomic Transaction Executed</span>
              </div>
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-slate-800/80 text-[10px] text-slate-400">
              <span>Swagger UI: Interactive Docs Live</span>
              <span className="text-cyan-400">Postman Verified</span>
            </div>
          </div>
        );

      case 'hr-shortlisting-agent':
        return (
          <div className="h-48 w-full bg-dark-950 p-4 font-mono text-[11px] flex flex-col justify-between border-b border-slate-800">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800/80 text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                <span className="text-slate-300 ml-1">rag-recruiter-agent.py</span>
              </div>
              <span className="text-[10px] text-purple-400 bg-purple-950/60 px-2 py-0.5 rounded border border-purple-500/30">
                Claude API
              </span>
            </div>
            <div className="space-y-1.5 text-slate-300 py-2">
              <div className="flex items-center gap-2 text-amber-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>PII Masking: 100% Redacted (Name, Phone, Aadhaar)</span>
              </div>
              <div className="flex items-center gap-2 text-cyan-300">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Prompt-Injection Defense: Sanitization active</span>
              </div>
              <div className="text-slate-300 pl-3">
                <span>RAG Retrieval: Cosine Sim 0.89 vs JD Requirements</span>
              </div>
              <div className="text-emerald-400 pl-3">
                <span>Status: Candidate Evaluated • Match Score: 92%</span>
              </div>
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-slate-800/80 text-[10px] text-slate-400">
              <span>LangChain & LangGraph Orchestration</span>
              <span className="text-purple-300">Streamlit UI</span>
            </div>
          </div>
        );

      case 'workforce-ai':
        return (
          <div className="h-48 w-full bg-dark-950 p-4 font-mono text-[11px] flex flex-col justify-between border-b border-slate-800">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800/80 text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                <span className="text-slate-300 ml-1">xebia-workforce-ai</span>
              </div>
              <span className="text-[10px] text-sky-400 bg-sky-950/60 px-2 py-0.5 rounded border border-sky-500/30">
                Enterprise Prod
              </span>
            </div>
            <div className="space-y-1.5 text-slate-300 py-2">
              <div className="flex items-center gap-2 text-cyan-300">
                <Activity className="w-3.5 h-3.5 text-cyan-400" />
                <span>Backend Workflow Automation Engine</span>
              </div>
              <div className="text-slate-400 pl-3">
                <span>Stack: Node.js • Express • MongoDB • Tableau</span>
              </div>
              <div className="text-slate-300 pl-3">
                <span>Intern Role: Scalable REST APIs & Data Pipelines</span>
              </div>
              <div className="text-emerald-400 pl-3">
                <span>Tableau BI: Operational Visualizations Integrated</span>
              </div>
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-slate-800/80 text-[10px] text-slate-400">
              <span>Xebia Internship Project</span>
              <span className="text-sky-400">Figma & Tableau</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-24 scroll-mt-20 relative bg-dark-950 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-mono font-medium mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>FEATURED WORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Production-Grade Projects & Systems
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
              Real applications reflecting backend engineering, security practices, LLM orchestration, and enterprise workflows.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center p-1.5 rounded-xl bg-dark-900 border border-slate-800 self-start md:self-auto overflow-x-auto max-w-full">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id as any)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 whitespace-nowrap ${
                  selectedCategory === tab.id
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50 border border-transparent'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-dark-850/90 border border-slate-800 hover:border-slate-700 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-cyan-950/30"
            >
              <div>
                {/* Custom Tech Visual Mockup */}
                {renderProjectVisual(project)}

                {/* Card Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-medium bg-slate-900 text-cyan-400 border border-slate-800">
                      {project.categoryLabel}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">{project.timeline}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-2">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 line-clamp-3">
                    {project.overview}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-1.5 mb-5 text-xs text-slate-400">
                    {project.highlights.slice(0, 2).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="text-cyan-400 font-mono mt-0.5">›</span>
                        <span className="line-clamp-2">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[10px] rounded bg-slate-900/90 text-slate-300 border border-slate-800 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="px-1.5 py-0.5 text-[10px] rounded bg-slate-900 text-slate-400 font-mono">
                        +{project.technologies.length - 5}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 flex items-center justify-between gap-3">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="flex-1 py-2 px-3 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Deep Dive</span>
                  <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                </button>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-dark-900 hover:bg-slate-800 text-slate-400 hover:text-cyan-400 border border-slate-800 hover:border-cyan-500/30 transition-colors"
                  title="Verified Project Link"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Expandable Project Details Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
