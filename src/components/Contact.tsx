import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Mail, 
  Linkedin, 
  Github, 
  MapPin, 
  Copy, 
  Check, 
  Send, 
  Sparkles, 
  ExternalLink,
  Phone
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [formStatus, setFormStatus] = useState<string | null>(null);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setFormStatus('Please complete all required fields.');
      return;
    }

    // Direct mailto formulation
    const emailSubject = encodeURIComponent(subject || `Portfolio Inquiry from ${name}`);
    const emailBody = encodeURIComponent(
      `Hello Harsh,\n\n${message}\n\nFrom:\n${name}\nEmail: ${email}`
    );

    setFormStatus('Opening your default email client...');
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${emailSubject}&body=${emailBody}`;
    
    setTimeout(() => {
      setFormStatus('Email draft prepared in your email client. If it did not open, you can email harshkamboj413@gmail.com directly.');
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 scroll-mt-20 relative bg-dark-900/60 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-mono font-medium mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Let's Discuss Opportunities & Collaboration
          </h2>
          <p className="mt-3 text-slate-400 text-base leading-relaxed">
            I'm currently seeking Software Engineering, Full-Stack, and Backend opportunities where I can apply my skills in system architecture, API development, and intelligent automation.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Direct Communication Channels */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card with 1-click Copy */}
            <div className="p-6 rounded-2xl bg-dark-850 border border-slate-800 hover:border-slate-700 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Email Address</span>
                <button
                  onClick={copyEmail}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 text-slate-300 hover:text-white border border-slate-800 text-xs transition-colors"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-mono">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span className="font-mono">Copy</span>
                    </>
                  )}
                </button>
              </div>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-base sm:text-lg font-bold text-white hover:text-cyan-400 transition-colors block break-all font-mono"
              >
                {PERSONAL_INFO.email}
              </a>
              <span className="text-xs text-slate-500 mt-1 block">Replies typically within 24 hours.</span>
            </div>

            {/* LinkedIn Card */}
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-dark-850 border border-slate-800 hover:border-cyan-500/30 transition-all flex items-center justify-between group block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors">
                    LinkedIn Profile
                  </h3>
                  <span className="text-xs text-slate-400 font-mono">linkedin.com/in/hkamboj</span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
            </a>

            {/* GitHub Card */}
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-dark-850 border border-slate-800 hover:border-cyan-500/30 transition-all flex items-center justify-between group block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-200 group-hover:scale-105 transition-transform">
                  <Github className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors">
                    GitHub Code Repository
                  </h3>
                  <span className="text-xs text-slate-400 font-mono">github.com/Harsh123-k</span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
            </a>

            {/* Location Card */}
            <div className="p-5 rounded-2xl bg-dark-850/60 border border-slate-800/80 flex items-center gap-3 text-slate-400 text-xs sm:text-sm">
              <MapPin className="w-5 h-5 text-cyan-400 shrink-0" />
              <div>
                <span className="font-semibold text-white block">Current Location</span>
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>

          </div>

          {/* Direct Email Compose Form (Zero fake submit, real mail client launch) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-dark-850 border border-slate-800 shadow-xl">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white">Send a Direct Message</h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Draft your inquiry below to trigger a pre-filled email directly to Harsh.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/60 transition-colors text-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Your Email *</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="jane@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/60 transition-colors text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300">Subject</label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Software Engineering Role / Project Discussion"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/60 transition-colors text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300">Message *</label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Hi Harsh, I reviewed your work on the Clinic Management and HR Shortlisting Agent projects..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/60 transition-colors text-sm resize-none"
                  />
                </div>

                {formStatus && (
                  <div className="p-3 rounded-lg bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs">
                    {formStatus}
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-cyan-500/25 cursor-pointer"
                >
                  <span>Compose in Email Client</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
