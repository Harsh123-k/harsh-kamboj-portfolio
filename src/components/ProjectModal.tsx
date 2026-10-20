import React from 'react';
import type { Project } from '../data/portfolioData';
import { X, ExternalLink, ShieldCheck, CheckCircle2, Layers, Cpu, Server } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl rounded-2xl bg-dark-900 border border-slate-700/80 shadow-2xl shadow-cyan-950/50 overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-200">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800 bg-dark-850/60">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-medium bg-cyan-950/70 text-cyan-300 border border-cyan-500/30">
                {project.categoryLabel}
              </span>
              <span className="text-xs text-slate-400 font-mono">{project.timeline}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 space-y-6 overflow-y-auto text-sm sm:text-base text-slate-300">
          
          {/* Subtitle & Overview */}
          <div>
            <h4 className="text-sm font-semibold text-cyan-400 font-mono uppercase tracking-wider mb-2">Project Overview</h4>
            <p className="text-slate-200 leading-relaxed bg-slate-950/50 p-4 rounded-xl border border-slate-800/80">
              {project.overview}
            </p>
          </div>

          {/* Problem Statement */}
          <div>
            <h4 className="text-sm font-semibold text-slate-200 font-mono uppercase tracking-wider mb-2 flex items-center gap-2">
              <Server className="w-4 h-4 text-cyan-400" />
              <span>Problem Statement & Context</span>
            </h4>
            <p className="text-slate-300 leading-relaxed text-sm bg-dark-850 p-4 rounded-xl border border-slate-800">
              {project.architectureDetails.problemStatement}
            </p>
          </div>

          {/* System Design & Architecture */}
          <div>
            <h4 className="text-sm font-semibold text-slate-200 font-mono uppercase tracking-wider mb-2 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-blue-400" />
              <span>Architecture & System Design</span>
            </h4>
            <p className="text-slate-300 leading-relaxed text-sm bg-dark-850 p-4 rounded-xl border border-slate-800">
              {project.architectureDetails.systemDesign}
            </p>
          </div>

          {/* Security & Safeguards */}
          <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/25">
            <h4 className="text-sm font-semibold text-cyan-300 font-mono uppercase tracking-wider mb-2 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>Security & Responsible Engineering Safeguards</span>
            </h4>
            <p className="text-slate-300 leading-relaxed text-sm">
              {project.architectureDetails.securityAndSafeguards}
            </p>
          </div>

          {/* Endpoints or Pipeline Stages */}
          {project.architectureDetails.endpointsOrComponents && (
            <div>
              <h4 className="text-sm font-semibold text-slate-200 font-mono uppercase tracking-wider mb-2 flex items-center gap-2">
                <Layers className="w-4 h-4 text-teal-400" />
                <span>Key Workflows / API Endpoints</span>
              </h4>
              <div className="grid grid-cols-1 gap-2 font-mono text-xs">
                {project.architectureDetails.endpointsOrComponents.map((item, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-dark-950 border border-slate-800 text-slate-300 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Achievements */}
          <div>
            <h4 className="text-sm font-semibold text-slate-200 font-mono uppercase tracking-wider mb-2">Technical Highlights & Impact</h4>
            <ul className="space-y-2">
              {project.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Used */}
          <div>
            <h4 className="text-sm font-semibold text-slate-200 font-mono uppercase tracking-wider mb-2">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs rounded-md bg-slate-800/80 text-cyan-300 border border-slate-700/80 font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between p-6 border-t border-slate-800 bg-dark-850/60">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
          >
            Close Details
          </button>
          
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2 text-xs font-semibold rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 shadow-md transition-all"
          >
            <span>{project.linkText}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </div>
  );
};
