"use client";

import { motion, useReducedMotion } from "motion/react";
import MatrixRain from "./MatrixRain";

const resumePath = "/Jahir_Williams_Web_Dev_Resume.pdf";

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.58, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

const skills = [
  { group: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { group: "Backend", items: ["Node.js", "API routes", "REST fundamentals"] },
  { group: "Workflow", items: ["Git", "Responsive UI", "Accessibility"] },
];

export default function PortfolioHome() {
  const reduceMotion = useReducedMotion();

  return (
    <main id="top" className="portfolio-page">
      <section className="hero-section" aria-labelledby="hero-title">
        <div className="hero-grid" aria-hidden="true" />
        <div className="matrix-window"><MatrixRain /></div>
        <div className="content-width hero-layout">
          <motion.div
            className="hero-copy"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="eyebrow"><span className="eyebrow-dot" /> PORTFOLIO / 2026</p>
            <h1 id="hero-title">
              Jahir Williams<span className="title-period">.</span>
              <span className="hero-title-sub">Learning the stack.<br />Building the work.</span>
            </h1>
            <p className="hero-description">
              Entry-level full-stack developer completing certification coursework and turning new concepts into useful web experiences.
            </p>
            <div className="hero-actions">
              <a className="button-primary" href="#work">Explore my work <span aria-hidden="true">↓</span></a>
              <a className="button-secondary" href={resumePath} download>
                Download resume <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="hero-current">
              <span className="current-label">CURRENTLY</span>
              <span>Studying · Building · Improving</span>
            </div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="terminal-shell">
              <div className="terminal-bar">
                <span className="terminal-lights"><i /><i /><i /></span>
                <span>jahir@portfolio: ~/about</span>
                <span className="terminal-index">SYS.01</span>
              </div>
              <div className="terminal-content">
                <p><span className="terminal-prompt">$</span> whoami</p>
                <h2>Jahir Williams</h2>
                <p><span className="terminal-prompt">$</span> focus --now</p>
                <ul>
                  <li><span>01</span> Full-stack fundamentals</li>
                  <li><span>02</span> Certification coursework</li>
                  <li><span>03</span> Real-world practice</li>
                </ul>
                <div className="terminal-status"><span /> LEARNING MODE <span className="status-rule" /></div>
              </div>
            </div>
            <span className="visual-caption">A WORK IN PROGRESS, BY DESIGN</span>
          </motion.div>
        </div>
        <a className="hero-scroll" href="#work"><span /> SCROLL TO EXPLORE</a>
      </section>

      <section className="work-section section-pad" id="work" aria-labelledby="work-title">
        <div className="content-width">
          <Reveal className="section-heading-row">
            <div>
              <p className="section-index">01 / SELECTED WORK</p>
              <h2 id="work-title">Built while learning.<br /><span>Improved with every pass.</span></h2>
            </div>
            <p className="section-intro">A couple of active builds where I put new ideas into practice.</p>
          </Reveal>

          <div className="project-grid">
            <Reveal className="project-card project-card-featured" delay={0.06}>
              <div className="project-topline"><span>PROJECT / 001</span><span className="project-state"><i /> IN PROGRESS</span></div>
              <div className="project-art portfolio-art" aria-hidden="true">
                <div className="art-grid-lines" />
                <span className="art-monogram">JW<span>.</span></span>
                <span className="art-label">PERSONAL WEB / 2026</span>
                <span className="art-cursor" />
              </div>
              <div className="project-info">
                <div className="project-title-row"><h3>Personal portfolio</h3><span>01</span></div>
                <p>A home for my work, the skills I’m building, and the next steps in my developer journey.</p>
                <div className="tag-row"><span>Next.js</span><span>TypeScript</span><span>Motion</span></div>
              </div>
            </Reveal>

            <Reveal className="project-card" delay={0.14}>
              <div className="project-topline"><span>PROJECT / 002</span><span className="project-state project-state-muted"><i /> PROTOTYPE</span></div>
              <div className="project-art toolkit-art" aria-hidden="true">
                <div className="toolkit-window">
                  <div className="toolkit-window-bar"><span /><span /><span /></div>
                  <div className="toolkit-window-body">
                    <span className="toolkit-kicker">WRITE / REFINE / REPEAT</span>
                    <span className="toolkit-line toolkit-line-long" />
                    <span className="toolkit-line" />
                    <span className="toolkit-button">GENERATE <b>↗</b></span>
                  </div>
                </div>
                <span className="art-label">AI WRITING / EXPLORATION</span>
              </div>
              <div className="project-info">
                <div className="project-title-row"><h3>AI writing toolkit</h3><span>02</span></div>
                <p>A prototype exploring focused writing tools, simple input flows, and server-side content generation.</p>
                <div className="tag-row"><span>React</span><span>API routes</span><span>OpenAI</span></div>
              </div>
            </Reveal>
          </div>
          <p className="project-note"><span>*</span> Both builds are actively evolving. More projects will appear here as they’re ready to share.</p>
        </div>
      </section>

      <section className="about-section section-pad" id="about" aria-labelledby="about-title">
        <div className="content-width about-layout">
          <Reveal className="about-copy">
            <p className="section-index">02 / A LITTLE ABOUT ME</p>
            <h2 id="about-title">Curiosity is the<br /><span>starting point.</span></h2>
            <p className="about-lead">I’m an entry-level full-stack developer currently in classes to complete my certifications.</p>
            <p className="about-body">I’m building my foundation one project at a time: learning how the pieces fit together, practicing clean interfaces, and getting more comfortable connecting frontends to real application logic.</p>
            <a className="text-link" href={resumePath} target="_blank" rel="noreferrer">Read my resume <span aria-hidden="true">↗</span></a>
          </Reveal>
          <Reveal className="learning-panel" delay={0.1}>
            <div className="learning-panel-head"><span>NOW.EXE</span><span className="live-light" /> ACTIVE</div>
            <div className="learning-panel-main">
              <span className="learning-overline">DEVELOPMENT LOG</span>
              <p className="learning-quote">“Learn it.<br />Build it.<br /><em>Understand it.</em>”</p>
              <div className="learning-track"><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /></div>
              <div className="learning-panel-foot"><span>CERTIFICATION COURSEWORK</span><span>IN PROGRESS</span></div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="stack-section section-pad" id="stack" aria-labelledby="stack-title">
        <div className="content-width">
          <Reveal className="stack-heading">
            <p className="section-index">03 / TOOLS I’M USING</p>
            <h2 id="stack-title">My current <span>toolbox.</span></h2>
            <p>These are the technologies I’m working with through coursework and hands-on practice.</p>
          </Reveal>
          <div className="skill-groups">
            {skills.map((skill, index) => (
              <Reveal className="skill-group" key={skill.group} delay={index * 0.08}>
                <span className="skill-number">0{index + 1}</span>
                <h3>{skill.group}</h3>
                <div className="skill-list">
                  {skill.items.map((item) => <span key={item}>{item}</span>)}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <div className="contact-pattern" aria-hidden="true" />
        <div className="content-width contact-layout">
          <Reveal className="contact-copy">
            <p className="section-index">04 / NEXT CONNECTION</p>
            <h2 id="contact-title">Let’s make<br />something <span>click.</span></h2>
            <p>I’m growing my skills and looking forward to what comes next. My resume has the best way to reach me.</p>
            <a className="button-dark" href={resumePath} download>Download my resume <span aria-hidden="true">↗</span></a>
          </Reveal>
          <div className="contact-stamp" aria-hidden="true"><span>OPEN</span><span>TO</span><strong>WHAT’S<br />NEXT</strong><i>↗</i></div>
        </div>
      </section>
    </main>
  );
}