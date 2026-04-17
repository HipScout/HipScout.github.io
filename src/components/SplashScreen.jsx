import React, { useState, useEffect, useRef } from 'react';

const SplashScreen = ({ onBootComplete }) => {
    const [terminalLines, setTerminalLines] = useState([]);
    const [showCursor, setShowCursor] = useState(true);
    const [phase, setPhase] = useState('booting');
    const [progress, setProgress] = useState(0);
    const [bootDone, setBootDone] = useState(false);
    const terminalRef = useRef(null);

    const bootLines = [
        { text: '██████╗  ███████╗██████╗      ██╗██╗   ██╗ ██████╗ ████████╗██╗', type: 'ascii' },
        { text: '██╔══██╗ ██╔════╝██╔══██╗     ██║╚██╗ ██╔╝██╔═══██╗╚══██╔══╝██║', type: 'ascii' },
        { text: '██║  ██║ █████╗  ██████╔╝     ██║ ╚████╔╝ ██║   ██║   ██║   ██║', type: 'ascii' },
        { text: '██║  ██║ ██╔══╝  ██╔══██╗██   ██║  ╚██╔╝  ██║   ██║   ██║   ██║', type: 'ascii' },
        { text: '██████╔╝ ███████╗██████╔╝╚█████╔╝   ██║   ╚██████╔╝   ██║   ██║', type: 'ascii' },
        { text: '╚═════╝  ╚══════╝╚═════╝  ╚════╝    ╚═╝    ╚═════╝    ╚═╝   ╚═╝', type: 'ascii' },
        { text: '', type: 'blank' },
        { text: '═══════════════════════════════════════════════════════', type: 'divider' },
        { text: '  PORTFOLIO SYSTEM v2.0 — BOOT SEQUENCE INITIATED', type: 'header' },
        { text: '═══════════════════════════════════════════════════════', type: 'divider' },
        { text: '', type: 'blank' },
        { text: '[SYS]  Initializing kernel modules...', type: 'system' },
        { text: '[OK]   Kernel modules loaded', type: 'success' },
        { text: '[SYS]  Mounting filesystem...', type: 'system' },
        { text: '[OK]   /dev/portfolio mounted', type: 'success' },
        { text: '[SYS]  Loading neural network cores...', type: 'system' },
        { text: '       ████████████████████████████████████ 100%', type: 'progress' },
        { text: '[OK]   4 cores activated', type: 'success' },
        { text: '', type: 'blank' },
        { text: '── HARDWARE DIAGNOSTICS ──────────────────────────────', type: 'section' },
        { text: '[CHK]  CPU: Creativity Engine .............. ONLINE', type: 'check' },
        { text: '[CHK]  GPU: Visual Rendering Matrix ....... ONLINE', type: 'check' },
        { text: '[CHK]  RAM: Knowledge Buffer (16 EB) ...... ONLINE', type: 'check' },
        { text: '[CHK]  NET: Portfolio Network Adapter ...... ONLINE', type: 'check' },
        { text: '[CHK]  I/O: User Interface Driver ......... ONLINE', type: 'check' },
        { text: '', type: 'blank' },
        { text: '── IDENTITY MODULE ──────────────────────────────────', type: 'section' },
        { text: '[USR]  Name: Debjyoti Das', type: 'identity' },
        { text: '[USR]  Role: Full Stack Developer', type: 'identity' },
        { text: '[USR]  Stack: React / Node.js / JavaScript', type: 'identity' },
        { text: '[USR]  Status: Ready to build amazing things', type: 'identity' },
        { text: '', type: 'blank' },
        { text: '── LOADING MODULES ─────────────────────────────────', type: 'section' },
        { text: '[MOD]  hero.jsx ..................... ✓ loaded', type: 'module' },
        { text: '[MOD]  projects.jsx ................. ✓ loaded', type: 'module' },
        { text: '[MOD]  blog.jsx .................... ✓ loaded', type: 'module' },
        { text: '[MOD]  about.jsx ................... ✓ loaded', type: 'module' },
        { text: '[MOD]  contact.jsx ................. ✓ loaded', type: 'module' },
        { text: '[MOD]  particles.jsx ............... ✓ loaded', type: 'module' },
        { text: '', type: 'blank' },
        { text: '── SECURITY SCAN ───────────────────────────────────', type: 'section' },
        { text: '[SEC]  Scanning for vulnerabilities...', type: 'system' },
        { text: '       ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ scanning...', type: 'scanning' },
        { text: '       ████████████████████████████████ complete', type: 'progress' },
        { text: '[OK]   No threats detected — system secure', type: 'success' },
        { text: '', type: 'blank' },
        { text: '═══════════════════════════════════════════════════════', type: 'divider' },
        { text: '  ✓ ALL SYSTEMS OPERATIONAL', type: 'final' },
        { text: '  ✓ PORTFOLIO READY', type: 'final' },
        { text: '  > LAUNCHING USER INTERFACE...', type: 'launch' },
        { text: '═══════════════════════════════════════════════════════', type: 'divider' },
    ];

    // Lock body scroll while splash screen is active
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    // Cursor blink
    useEffect(() => {
        const interval = setInterval(() => setShowCursor(prev => !prev), 530);
        return () => clearInterval(interval);
    }, []);

    // Auto-scroll terminal
    useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    }, [terminalLines]);

    // Boot sequence
    useEffect(() => {
        let lineIndex = 0;
        const totalLines = bootLines.length;

        const addLine = () => {
            if (lineIndex < totalLines) {
                const line = bootLines[lineIndex];
                setTerminalLines(prev => [...prev, line]);
                setProgress(Math.round(((lineIndex + 1) / totalLines) * 100));

                if (lineIndex > 25) setPhase('scanning');
                if (lineIndex > totalLines - 6) setPhase('ready');

                lineIndex++;

                const delay = line.type === 'blank' ? 40
                    : line.type === 'ascii' ? 50
                        : line.type === 'divider' ? 60
                            : line.type === 'scanning' ? 600
                                : line.type === 'progress' ? 400
                                    : line.type === 'final' || line.type === 'launch' ? 300
                                        : 100;

                setTimeout(addLine, delay);
            } else {
                // Boot is complete — signal parent to scroll to hero
                setBootDone(true);
                document.body.style.overflow = 'unset';
                setTimeout(() => {
                    if (onBootComplete) onBootComplete();
                }, 800);
            }
        };

        const startTimer = setTimeout(addLine, 300);
        return () => clearTimeout(startTimer);
    }, []);

    const getLineClass = (type) => {
        const map = {
            ascii: 'line-ascii', divider: 'line-divider', header: 'line-header',
            system: 'line-system', success: 'line-success', check: 'line-check',
            identity: 'line-identity', module: 'line-module', section: 'line-section',
            progress: 'line-progress', scanning: 'line-scanning', final: 'line-final',
            launch: 'line-launch', blank: 'line-blank',
        };
        return map[type] || '';
    };

    return (
        <section className={`splash-screen ${bootDone ? 'splash-exit' : ''}`} id="splash">
            <div className="splash-scanlines" />
            <div className="splash-grid" />

            <div className="splash-container">
                {/* Top bar */}
                <div className="splash-topbar">
                    <div className="topbar-left">
                        <span className="topbar-dot red" />
                        <span className="topbar-dot yellow" />
                        <span className="topbar-dot green" />
                        <span className="topbar-label">portfolio.sys — boot terminal</span>
                    </div>
                    <div className="topbar-right">
                        {phase === 'ready' ? '● READY' : phase === 'scanning' ? '◉ SCANNING' : '○ BOOTING'}
                    </div>
                </div>

                {/* Terminal content */}
                <div className="splash-terminal-scroll" ref={terminalRef}>
                    {terminalLines.map((line, i) => (
                        <div key={i} className={`terminal-line ${getLineClass(line.type)} line-animate`}>
                            {line.text}
                        </div>
                    ))}
                    <div className="terminal-line line-cursor">
                        <span className={`terminal-cursor ${showCursor ? 'visible' : ''}`}>█</span>
                    </div>
                </div>

                {/* Bottom progress bar */}
                <div className="splash-bottom">
                    <div className="splash-progress">
                        <div className="progress-track">
                            <div className="progress-fill" style={{ width: `${progress}%` }} />
                        </div>
                        <span className="progress-percent">{progress}%</span>
                    </div>
                    <div className="splash-status">
                        {phase === 'ready' ? 'LAUNCH READY' : phase === 'scanning' ? 'SCANNING SYSTEMS...' : 'BOOTING UP...'}
                    </div>
                </div>
            </div>

            {/* Corner HUD UI elements */}
            <div className="splash-corner top-left" />
            <div className="splash-corner top-right" />
            <div className="splash-corner bottom-left" />
            <div className="splash-corner bottom-right" />

            {/* Scroll indicator shown after boot is finished */}
            {bootDone && (
                <div className="splash-scroll-hint">
                    <span>↓ SCROLL DOWN TO ENTER ↓</span>
                </div>
            )}
        </section>
    );
};

export default SplashScreen;
