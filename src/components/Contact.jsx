import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-panel > *", {
        y: 24, opacity: 0, duration: 0.7, stagger: 0.12, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section contact-section" id="contact">
      <div className="container">
        <div className="contact-panel">
          <p className="eyebrow">Have a project in mind?</p>
          <h2>Let’s create something <span>great.</span></h2>
          <p>I’m open to junior frontend opportunities, collaborations and interesting projects.</p>
          <a className="button button-light" href="mailto:sheripeter89@gmail.com">
            Get in touch <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
