
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    number: "01",
    title: "BrightHome Services",
    category: "React Business Landing Page",
    description:
      "A modern and responsive home services website designed to showcase services, build customer trust and encourage visitors to get in touch.",
    image: "/projects/brighthome.png",
    tech: ["React", "JavaScript", "CSS", "Vite"],
    github: "https://github.com/sheripeter/BrightHome-React-Landing-Page",
    live: "https://sheripeter.github.io/BrightHome-React-Landing-Page/",
  },          
  {
    number: "02",
    title: "Weatherly",
    category: "React Weather Application",
    description:
      "A modern weather dashboard featuring city search, current weather conditions, a five-day forecast, loading and error states, and recent search history.",
    image: "/projects/weatherly.png",
    tech: ["React", "JavaScript", "Vite", "Weather API", "CSS"],
    github: "https://github.com/sheripeter/Weatherly",
    live: "https://sheripeter.github.io/Weatherly/",
  },
  {
    number: "03",
    title: "Inventory Management Dashboard",
    category: "React Dashboard · In Progress",
    description:
      "A modern inventory management application featuring product management, stock tracking, inventory statistics, filtering and low-stock alerts.",
    image: "/projects/stockwise.png",
    tech: ["React", "JavaScript", "CSS", "Vite"],
    github: "https://github.com/sheripeter/StockWise",
  },
];

function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".project-card", {
        opacity: 0,
        duration: 0.7,
        stagger: 0.16,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".projects-grid",
          start: "top 82%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section projects-section"
      id="projects"
    >
      <div className="container">
        <div className="projects-heading-row">
          <div className="section-heading">
            <p className="eyebrow">Selected work</p>
            <h2>
              Featured <span>projects</span>
            </h2>
            <p className="projects-heading-note">
              A few things I’ve worked on and learned from.
            </p>
          </div>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-image-wrap">
                <img
                  className="project-img"
                  src={project.image}
                  alt={`${project.title} project preview`}
                  loading="lazy"
                />
                <span className="project-number">{project.number}</span>
              </div>

              <div className="project-content">
                <div className="project-meta">
                  <span>{project.category}</span>
                  <span className="project-arrow">↗</span>
                </div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub ↗
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo ↗
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
