import { useEffect, useRef } from "react";
import gsap from "gsap";

function Hero() {
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-eyebrow, .hero-title, .hero-role, .hero-description, .hero-actions, .hero-note", {
        y: 24,
        opacity: 0,
        duration: 0.75,
        stagger: 0.12,
        ease: "power3.out",
        delay: 0.12,
      });
    }, contentRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="hero section" id="home">
      <div className="container hero-layout" ref={contentRef}>
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow"><span className="status-dot" /> Available for opportunities</p>
          <p className="hero-kicker">Hello, I'm</p>
          <h1 className="hero-title">Sheri <span>Peter.</span></h1>
          <h2 className="hero-role">React Developer <span> &amp; </span> UI Enthusiast</h2>
          <p className="hero-description">
            I build thoughtful, responsive web experiences with React,
            JavaScript and modern CSS — bringing ideas to life through clean
            interfaces and purposeful interactions.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Explore my work <span aria-hidden="true">↗</span></a>
            <a className="button button-secondary" href="#contact">Let's connect</a>
          </div>
          <p className="hero-note">Currently learning, building and growing every day.</p>
        </div>

        <div className="hero-visual" aria-label="Abstract developer illustration">
          <div className="visual-orbit orbit-one" />
          <div className="visual-orbit orbit-two" />
          <div className="visual-card">
            <div className="visual-card-top"><span /><span /><span /></div>
            <div className="code-line muted">const <b>developer</b> = {"{"}</div>
            <div className="code-line indent"><i>name</i>: <em>"Sheri Peter"</em>,</div>
            <div className="code-line indent"><i>focus</i>: <em>"React"</em>,</div>
            <div className="code-line indent"><i>creative</i>: <strong>true</strong>,</div>
            <div className="code-line muted">{"}"};</div>
            <div className="visual-terminal"><span>✦</span> Building something meaningful</div>
          </div>
          <span className="floating-chip chip-react">⚛ React</span>
          <span className="floating-chip chip-code">{"</>"} Clean code</span>
          <span className="visual-spark spark-one">✳</span>
          <span className="visual-spark spark-two">✦</span>
        </div>
      </div>
      <div className="hero-bottom container"><span>SCROLL TO EXPLORE</span><span className="scroll-line" /></div>
    </section>
  );
}

export default Hero;
