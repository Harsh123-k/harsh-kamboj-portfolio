import React, { useState, useRef, useEffect } from 'react';
import { PERSONAL_INFO, PROJECTS, EXPERIENCES, SKILL_CATEGORIES, EDUCATION, CERTIFICATIONS } from '../data/portfolioData';
import { Terminal as TerminalIcon, CornerDownLeft, Sparkles, Copy, Check } from 'lucide-react';

interface CommandOutput {
  command: string;
  output: React.ReactNode;
}

export const Terminal: React.FC = () => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: 'welcome',
      output: (
        <div className="space-y-1 text-slate-300">
          <p className="text-cyan-400 font-bold">Harsh Kamboj — Interactive Developer Shell v2.4.0</p>
          <p className="text-slate-400 text-xs">Type <span className="text-cyan-300 font-semibold">'help'</span> to see available commands or click the shortcut buttons below.</p>
        </div>
      )
    }
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const terminalContainerRef = useRef<HTMLDivElement>(null);
  const isFirstMount = useRef(true);

  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }
    if (terminalContainerRef.current) {
      terminalContainerRef.current.scrollTop = terminalContainerRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    setCommandHistory(prev => [...prev, cmd]);
    setHistoryIndex(-1);

    let result: React.ReactNode;

    switch (trimmed) {
      case 'help':
        result = (
          <div className="space-y-1.5 text-xs text-slate-300">
            <p className="text-cyan-400 font-semibold mb-1">Available Commands:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 font-mono">
              <div><span className="text-cyan-300 font-bold">about</span> - Background & engineering summary</div>
              <div><span className="text-cyan-300 font-bold">projects</span> - Flagship systems & live links</div>
              <div><span className="text-cyan-300 font-bold">skills</span> - Technical competencies matrix</div>
              <div><span className="text-cyan-300 font-bold">experience</span> - Internships at Xebia & Ultimez</div>
              <div><span className="text-cyan-300 font-bold">education</span> - UPES Dehradun & schooling</div>
              <div><span className="text-cyan-300 font-bold">certifications</span> - AWS, B.U.I.L.D, Gen-AI certs</div>
              <div><span className="text-cyan-300 font-bold">contact</span> - Email, LinkedIn, GitHub</div>
              <div><span className="text-cyan-300 font-bold">resume</span> - Download official resume PDF</div>
              <div><span className="text-cyan-300 font-bold">clear</span> - Clear terminal screen</div>
              <div><span className="text-cyan-300 font-bold">whoami</span> - Current session user identity</div>
            </div>
          </div>
        );
        break;

      case 'about':
        result = (
          <div className="space-y-2 text-xs sm:text-sm text-slate-300">
            <p className="text-white font-semibold">{PERSONAL_INFO.name} — {PERSONAL_INFO.title}</p>
            <p className="text-slate-400">{PERSONAL_INFO.bio}</p>
            <p className="text-slate-400">{PERSONAL_INFO.extendedBio}</p>
            <p className="text-cyan-400 font-mono">Location: {PERSONAL_INFO.location}</p>
          </div>
        );
        break;

      case 'projects':
        result = (
          <div className="space-y-3 text-xs sm:text-sm text-slate-300">
            <p className="text-cyan-400 font-semibold">Flagship Projects:</p>
            {PROJECTS.map((p, i) => (
              <div key={p.id} className="p-2.5 rounded bg-dark-900 border border-slate-800 space-y-1 font-mono">
                <div className="flex items-center justify-between">
                  <span className="text-white font-bold">{i+1}. {p.title}</span>
                  <span className="text-[10px] text-cyan-400">{p.categoryLabel}</span>
                </div>
                <p className="text-slate-400 text-xs">{p.overview}</p>
                <div className="text-[11px] text-slate-500">Stack: {p.technologies.join(', ')}</div>
                <div>
                  <a href={p.link} target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline hover:text-cyan-300 text-xs">
                    {p.link}
                  </a>
                </div>
              </div>
            ))}
          </div>
        );
        break;

      case 'skills':
        result = (
          <div className="space-y-2 text-xs text-slate-300 font-mono">
            <p className="text-cyan-400 font-semibold">Technical Skills Inventory:</p>
            {SKILL_CATEGORIES.map(cat => (
              <div key={cat.category} className="space-y-0.5">
                <span className="text-slate-200 font-bold">{cat.category}: </span>
                <span className="text-slate-400">{cat.skills.map(s => s.name).join(', ')}</span>
              </div>
            ))}
          </div>
        );
        break;

      case 'experience':
        result = (
          <div className="space-y-2 text-xs text-slate-300">
            <p className="text-cyan-400 font-semibold font-mono">Industry Internships:</p>
            {EXPERIENCES.map(e => (
              <div key={e.id} className="p-2 rounded bg-dark-900 border border-slate-800 space-y-1">
                <div className="flex justify-between font-mono">
                  <span className="text-white font-bold">{e.role} @ {e.company}</span>
                  <span className="text-cyan-400 text-[11px]">{e.timeline}</span>
                </div>
                <div className="text-slate-400 text-xs">Location: {e.location}</div>
                <div className="text-[11px] text-slate-500 font-mono">Stack: {e.techStack.join(', ')}</div>
              </div>
            ))}
          </div>
        );
        break;

      case 'education':
        result = (
          <div className="space-y-2 text-xs text-slate-300 font-mono">
            <p className="text-cyan-400 font-semibold">Academic Credentials:</p>
            {EDUCATION.map((edu, idx) => (
              <div key={idx} className="p-2 rounded bg-dark-900 border border-slate-800 space-y-0.5">
                <div className="text-white font-bold">{edu.degree}</div>
                <div className="text-slate-400">{edu.institution} • {edu.scoreType}: {edu.score}</div>
                <div className="text-slate-500 text-[11px]">{edu.timeline}</div>
              </div>
            ))}
          </div>
        );
        break;

      case 'certifications':
        result = (
          <div className="space-y-2 text-xs text-slate-300 font-mono">
            <p className="text-cyan-400 font-semibold">Verified Credentials:</p>
            {CERTIFICATIONS.map((c, i) => (
              <div key={i} className="p-2 rounded bg-dark-900 border border-slate-800">
                <div className="text-white font-bold">{c.title} ({c.issuer})</div>
                <div className="text-slate-400 text-xs">Focus: {c.focus}</div>
                <a href={c.link} target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline text-[11px]">
                  {c.link}
                </a>
              </div>
            ))}
          </div>
        );
        break;

      case 'contact':
        result = (
          <div className="space-y-1.5 text-xs text-slate-300 font-mono">
            <p className="text-cyan-400 font-semibold">Direct Communication Channels:</p>
            <div>Email: <a href={`mailto:${PERSONAL_INFO.email}`} className="text-cyan-300 underline">{PERSONAL_INFO.email}</a></div>
            <div>GitHub: <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-cyan-300 underline">{PERSONAL_INFO.github}</a></div>
            <div>LinkedIn: <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-cyan-300 underline">{PERSONAL_INFO.linkedin}</a></div>
            <div>Location: {PERSONAL_INFO.location}</div>
          </div>
        );
        break;

      case 'resume':
        result = (
          <div className="text-xs text-slate-300 font-mono space-y-1">
            <p className="text-emerald-400">Initiating resume download...</p>
            <p className="text-slate-400">If download does not trigger automatically, click below:</p>
            <a
              href={PERSONAL_INFO.resumePath}
              download="Harsh_Kamboj_Resume.pdf"
              className="inline-block mt-1 px-3 py-1 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-900 transition-colors"
            >
              Download Harsh_Kamboj_Resume.pdf
            </a>
          </div>
        );
        // Trigger download programmatically
        const link = document.createElement('a');
        link.href = PERSONAL_INFO.resumePath;
        link.download = 'Harsh_Kamboj_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      case 'whoami':
        result = (
          <div className="text-xs text-slate-300 font-mono">
            <span className="text-cyan-300 font-bold">guest@harsh-portfolio</span>
            <p className="text-slate-400 mt-1">
              You are exploring the personal portfolio of Harsh Kamboj—a software engineer and full-stack developer dedicated to clean code, secure architectures, and intelligent workflows.
            </p>
          </div>
        );
        break;

      case 'sudo':
        result = (
          <div className="text-xs text-amber-300 font-mono">
            Permission denied: Harsh is already root of this repository. Nice try!
          </div>
        );
        break;

      default:
        result = (
          <div className="text-xs text-rose-400 font-mono">
            Command not recognized: '{trimmed}'. Type <span className="text-cyan-300 font-semibold">'help'</span> for a list of available commands.
          </div>
        );
    }

    setHistory(prev => [...prev, { command: cmd, output: result }]);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(nextIndex);
        setInputVal(commandHistory[nextIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const nextIndex = historyIndex + 1;
        if (nextIndex < commandHistory.length) {
          setHistoryIndex(nextIndex);
          setInputVal(commandHistory[nextIndex]);
        } else {
          setHistoryIndex(-1);
          setInputVal('');
        }
      }
    }
  };

  const commandPills = ['help', 'about', 'projects', 'skills', 'experience', 'resume', 'contact', 'clear'];

  return (
    <section id="terminal" className="py-24 scroll-mt-20 relative bg-dark-950 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-mono font-medium mb-3">
            <TerminalIcon className="w-3.5 h-3.5" />
            <span>DEVELOPER CLI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Interactive Engineering Terminal
          </h2>
          <p className="mt-3 text-slate-400 text-base leading-relaxed">
            Prefer the command line? Query my background, review project architectures, inspect skills, or trigger a resume download directly from this emulator.
          </p>
        </div>

        {/* Terminal Window Container */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-dark-900 border border-slate-800 shadow-2xl overflow-hidden font-mono text-sm">
          
          {/* Terminal Titlebar */}
          <div className="flex items-center justify-between px-4 py-3 bg-dark-850 border-b border-slate-800/80 select-none">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
              <span className="ml-2 text-xs text-slate-400">harsh@workstation:~</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span>bash</span>
              <span>•</span>
              <span className="text-cyan-400/80">utf-8</span>
            </div>
          </div>

          {/* Quick Command Suggestion Pills */}
          <div className="px-4 py-2.5 bg-dark-950/60 border-b border-slate-800/60 flex items-center gap-2 overflow-x-auto text-xs">
            <span className="text-slate-500 shrink-0">Quick run:</span>
            {commandPills.map(cmd => (
              <button
                key={cmd}
                onClick={() => handleCommand(cmd)}
                className="px-2.5 py-0.5 rounded bg-slate-900 hover:bg-slate-800 text-cyan-400 hover:text-cyan-300 border border-slate-800 hover:border-cyan-500/40 transition-colors shrink-0"
              >
                {cmd}
              </button>
            ))}
          </div>

          {/* Terminal Output Area */}
          <div ref={terminalContainerRef} className="p-4 sm:p-6 space-y-4 max-h-[420px] overflow-y-auto bg-dark-950/90 text-slate-200">
            {history.map((item, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex items-center gap-2 text-slate-400">
                  <span className="text-cyan-400 font-bold">harsh@portfolio:~$</span>
                  <span className="text-white font-medium">{item.command}</span>
                </div>
                <div className="pl-4 border-l border-slate-800 py-0.5">
                  {item.output}
                </div>
              </div>
            ))}
          </div>

          {/* Terminal Input Line */}
          <div className="flex items-center gap-2 px-4 py-3 bg-dark-900 border-t border-slate-800">
            <span className="text-cyan-400 font-bold shrink-0">harsh@portfolio:~$</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type 'help' or command..."
              className="flex-1 bg-transparent text-white placeholder-slate-600 focus:outline-none font-mono text-xs sm:text-sm"
              autoFocus={false}
            />
            <button
              onClick={() => handleCommand(inputVal)}
              className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs flex items-center gap-1 transition-colors"
              title="Execute"
            >
              <span>Run</span>
              <CornerDownLeft className="w-3 h-3 text-cyan-400" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
