
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skillGroups = [
  {
    title: "Frontend Development",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Bootstrap",
      "Responsive Design",
      "React Hooks",
      "REST API"
    ],
  },
  {
    title: "Backend & Database",
    items: [
      "PHP",
      "MySQL",
      "MongoDB",
      "CRUD Operations",
      "Node js(Basics)",
      "JSON"
    ],
  },
  {
    title: "Tools & Workflow",
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Vite",
      "GSAP",
      "CSS Animation",
      "Figma",
      "Vercel",
      "GitHub Pages"
    ],
  },
];

function Skills() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".skill-group", {
        opacity: 0,
        duration: 0.65,
        stagger: 0.14,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section skills-section"
      id="skills"
    >
      <div className="container">
        <div className="section-heading centered-heading">
          <p className="eyebrow">What I work with</p>

          <h2>
            Skills &amp; <span>tools</span>
          </h2>

          <p className="section-intro">
            The technologies and tools I use to build responsive,
            functional and engaging web experiences.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <article className="skill-group" key={group.title}>
              <div className="skill-group-number">
                0{index + 1}
              </div>

              <h3>{group.title}</h3>

              <div className="skill-tags">
                {group.items.map((item) => (
                  <span className="skill-tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
