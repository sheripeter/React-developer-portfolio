import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-content > *, .about-highlight", {
        y: 28,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 78%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section about-section" id="about">
      <div className="container about-layout">
        <div className="section-heading">
          <p className="eyebrow">A little introduction</p>
          <h2>About <span>me</span></h2>
          <p className="section-intro">
A little about my journey, the skills I bring for digital experiences</p>
        </div>
        <div className="about-content">
          <p className="about-lead">
            I’m a frontend developer who enjoys turning ideas into clear,
            engaging and accessible digital experiences.
          </p>
          <p>
            My current focus is building with React, strengthening my
            JavaScript skills and creating responsive interfaces that feel
            great to use on every screen. I enjoy learning by making real
            projects, solving problems and refining the details that make a
            product feel polished.
          </p>
          <div className="about-social-links">
            <a
              href="www.linkedin.com/in/sheri-peter-7b9323243"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn 
            </a>

            <a
              href="https://github.com/sheripeter"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub 
            </a>
          </div>
          <div className="about-highlight">
            <span className="highlight-icon">✦</span>
            <div><strong>Curious by nature. Focused on progress.</strong><span>Always exploring better ways to build for the web.</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
