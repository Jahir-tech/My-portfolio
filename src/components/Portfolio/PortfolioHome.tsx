"use client";

import { motion, useReducedMotion } from "motion/react";
import MatrixRain from "./MatrixRain";

const resumePath = "/Jahir_Williams_Web_Dev_Resume.pdf";
const githubPath = "https://github.com/Jahir-tech";

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
              <a className="button-secondary" href={githubPath} target="_blank" rel="noreferrer">
                GitHub profile <span aria-hidden="true">↗</span>
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
            <div className="hero-portrait-frame">
              <img
                className="hero-portrait"
                src="/images/about/jahir-williams-headshot.jpg"
                alt="Portrait of Jahir Williams standing outdoors with arms crossed"
              />
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
            <p className="section-intro">Four projects where I put new ideas into practice, from first HTML pages to full-stack builds.</p>
          </Reveal>

          <div className="project-grid">
            <Reveal className="project-card" delay={0.14}>
              <div className="project-topline"><span>PROJECT / 001</span><span className="project-state project-state-muted"><i /> PROTOTYPE</span></div>
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
                <div className="project-title-row"><h3>AI writing toolkit</h3><span>01</span></div>
                <p>A prototype exploring focused writing tools, simple input flows, and server-side content generation.</p>
                <div className="tag-row"><span>React</span><span>API routes</span><span>OpenAI</span></div>
              </div>
            </Reveal>

            <Reveal className="project-card" delay={0.22}>
              <div className="project-topline"><span>PROJECT / 002</span><span className="project-state"><i /> COMPLETED</span></div>
              <div className="project-art furniture-art" aria-hidden="true">
                <div className="furniture-preview">
                  <span className="furniture-kicker">ERAS / OUTDOOR LIVING</span>
                  <span className="furniture-headline">Room to<br />unwind.</span>
                  <span className="furniture-link">EXPLORE SERVICES <b>↘</b></span>
                </div>
                <span className="art-label">VIDEO HERO / IMAGE CARDS</span>
              </div>
              <div className="project-info">
                <div className="project-title-row"><h3>Furniture &amp; landscape</h3><span>02</span></div>
                <p>A responsive showcase built with semantic HTML and CSS, featuring a looping video hero, image-led service cards, smooth scrolling, and JavaScript reveal effects.</p>
                <div className="tag-row"><span>HTML</span><span>CSS</span><span>JavaScript</span></div>
                <a className="text-link" href="/furniture-website/index.html" target="_blank" rel="noreferrer">Open project <span aria-hidden="true">↗</span></a>
              </div>
            </Reveal>

            <Reveal className="project-card" delay={0.3}>
              <div className="project-topline"><span>PROJECT / 003</span><span className="project-state"><i /> COMPLETED</span></div>
              <div className="project-art barbershop-art" aria-hidden="true">
                <span className="barbershop-stamp">VINTAGE<br />BARBERSHOP</span>
                <span className="art-label">SERVICE MENU / APPOINTMENT CALENDAR</span>
              </div>
              <div className="project-info">
                <div className="project-title-row"><h3>Barbershop website</h3><span>03</span></div>
                <p>A vintage-inspired shop site with JavaScript-rendered services, service detail modals, and an interactive appointment calendar with date and time selection.</p>
                <div className="tag-row"><span>HTML</span><span>CSS</span><span>JavaScript</span></div>
                <a className="text-link" href="/barbershop-website/index.html" target="_blank" rel="noreferrer">Open project <span aria-hidden="true">↗</span></a>
              </div>
            </Reveal>

            <Reveal className="project-card" delay={0.38}>
              <div className="project-topline"><span>PROJECT / 004</span><span className="project-state"><i /> COMPLETED</span></div>
              <div className="project-art beans-art" aria-hidden="true">
                <span className="beans-mark">THE BEANS<br />PLACE</span>
                <span className="art-label">SINGLE-ORIGIN / COFFEE</span>
              </div>
              <div className="project-info">
                <div className="project-title-row"><h3>The Beans Place</h3><span>04</span></div>
                <p>A polished React coffee storefront with an animated hero, curated single-origin product catalog, and dedicated story and contact sections.</p>
                <div className="tag-row"><span>React</span><span>Vite</span><span>Framer Motion</span></div>
                <a className="text-link" href="/beans-place/index.html" target="_blank" rel="noreferrer">Open project <span aria-hidden="true">↗</span></a>
              </div>
            </Reveal>
          </div>
          <p className="project-note"><span>*</span> Each project reflects a different step in my learning journey. More will appear here as they’re ready to share.</p>
        </div>
      </section>

      <section className="about-section section-pad" id="about" aria-labelledby="about-title">
        <div className="content-width about-layout">
          <Reveal className="about-copy">
            <p className="section-index">02 / A LITTLE ABOUT ME</p>
            <h2 id="about-title">Curiosity is the<br /><span>starting point.</span></h2>
            <p className="about-lead">My path into development started in trucking. I’m bringing that same focus, patience, and problem-solving mindset to building software.</p>
            <p className="about-body">I’m building my foundation one project at a time: learning how the pieces fit together, practicing clean interfaces, and getting more comfortable connecting frontends to real application logic.</p>
            <a className="text-link" href={resumePath} target="_blank" rel="noreferrer">Read my resume <span aria-hidden="true">↗</span></a>
          </Reveal>
          <Reveal className="about-film" delay={0.1}>
            <video
              controls
              autoPlay={!reduceMotion}
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="An animated truck travels through a city before a computer opens to code."
            >
              <source src="/videos/trucking-to-computing.mp4" type="video/mp4" />
              Your browser does not support embedded video.
            </video>
            <p className="about-film-caption">FROM THE OPEN ROAD TO OPENING A CODE EDITOR</p>
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