import React from 'react';
import { EDUCATION, CERTIFICATIONS } from '../data/portfolioData';
import { GraduationCap, Award, ExternalLink, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 scroll-mt-20 relative bg-dark-900/50 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-mono font-medium mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMICS & CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Education & Verified Certifications
          </h2>
          <p className="mt-3 text-slate-400 text-base leading-relaxed">
            Academic milestones and verified technical certifications directly linked to official credentials.
          </p>
        </div>

        {/* Two-column layout: Education on Left, Certifications on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Education Column */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2.5 mb-6">
              <GraduationCap className="w-5 h-5 text-cyan-400" />
              <span>Academic Background</span>
            </h3>

            <div className="space-y-6">
              {EDUCATION.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-dark-850/90 border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono text-cyan-400 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {edu.timeline}
                    </span>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 font-mono text-xs font-semibold self-start sm:self-auto">
                      <span>{edu.scoreType}:</span>
                      <span className="text-white font-bold">{edu.score}</span>
                    </div>
                  </div>

                  <h4 className="text-lg font-bold text-white mb-1">
                    {edu.degree}
                  </h4>
                  <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-400 mb-4">
                    <span className="text-slate-200 font-medium">{edu.institution}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      {edu.location}
                    </span>
                  </div>

                  {edu.highlights && (
                    <ul className="space-y-2 pt-3 border-t border-slate-800/80">
                      {edu.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2.5 mb-6">
              <Award className="w-5 h-5 text-blue-400" />
              <span>Verified Certifications</span>
            </h3>

            <div className="space-y-4">
              {CERTIFICATIONS.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-dark-850/90 border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:shadow-lg flex flex-col justify-between group"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-medium bg-blue-950/70 text-blue-300 border border-blue-500/30">
                      {cert.badgeText}
                    </span>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-800 transition-colors"
                      title="View Verified Certificate"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  <h4 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors mb-1">
                    {cert.title}
                  </h4>
                  <span className="text-xs text-slate-400 font-mono mb-3 block">
                    Issuer: {cert.issuer}
                  </span>

                  <p className="text-xs text-slate-300 bg-slate-900/60 p-3 rounded-xl border border-slate-800/80 mb-4 leading-relaxed">
                    <span className="font-semibold text-slate-200">Core Focus: </span>
                    {cert.focus}
                  </p>

                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 py-2 px-3 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-slate-700/80 transition-colors w-full"
                  >
                    <span>Inspect Credential</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              ))}
            </div>

            {/* Credential integrity guarantee */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 leading-relaxed">
              <span className="text-cyan-400 font-semibold font-mono block mb-1">Source of Truth Integrity</span>
              All credentials, percentages, and project timelines are directly verified against Harsh Kamboj's official academic transcripts and internship certificates.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
