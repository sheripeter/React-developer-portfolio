
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const experiences = [
  {
    id: 1,
    role: "Freelance Web Developer",
    company: "Freelance",
    period: "Aug 2026 – Present",
    project: "Confidential",
    type: "Freelance Experience",
    description:
      "Building responsive websites and applications using modern frontend technologies.",
    responsibilities: [
      "Developing responsive interfaces using HTML, CSS, JavaScript and React.",
      "Working with API integration and reusable React components.",
      "Improving website functionality, responsiveness and user experience.",
    ],
    technologies: ["React", "JavaScript", "HTML", "CSS","REST API"],
  },
  {
    id: 2,
    role: "Freelance Web Developer",
    company: "Freelance",
    period: "Mar 2021 – Mar 2024",
    project: "Static Websites",
    type: "Freelance Experience",
    description:
      "Worked on website development, customization and technical maintenance.",
    responsibilities: [
      "Developed and maintained responsive websites.",
      "Worked with PHP and MySQL for website customization.",
      "Handled debugging, troubleshooting and technical support.",
    ],
    technologies: ["HTML", "CSS", "JavaScript","Bootstrap","SASS","LESS"],
  },
  {
    id: 3,
    role: "Junior Software Developer",
    company: "Talentmap Technologies",
    period: "Feb 2020 – Feb 2021",
    project: "Hireclap Job Portal",
    type: "Professional Experience",
    description:
      "Contributed to the development of the Hireclap Job Portal, working on frontend interfaces and application functionality.",
    responsibilities: [
      "Developed web interfaces using HTML, CSS and JavaScript.",
      "Worked with PHP and MySQL for backend functionality and database integration.",
      "Contributed to testing, debugging and website maintenance.",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap","JQuery","PHP", "MySQL","AWS S3"],
  },
  {
    id: 4,
    role: "Web Developer Trainee",
    company: "Dotfix Technologies",
    period: "Jul 2019 – Dec 2019",
    project: "Live Projects",
    type: "Training Experience",
    description:
      "Gained practical experience in web development and application development.",
    responsibilities: [
      "Worked on PHP applications and responsive websites.",
      "Created and worked with HTML email templates.",
      "Assisted with application testing and debugging.",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "JQuery", "Bootstrap", "PHP", "MySQL",],
  },
];


function Experience() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".experience-item", {
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section experience-section"
      id="experience"
    >
      <div className="container">
        <div className="section-heading centered-heading">
          <p className="eyebrow">My journey</p>
          <h2>
            Professional <span>experience</span>
          </h2>
          <p className="section-intro">
            My journey in web development, the projects I've contributed
            to and the skills I've developed along the way.
          </p>
        </div>

        <div className="experience-timeline">
          {experiences.map((experience, index) => (
            <article className="experience-item" key={experience.id}>
              <div className="experience-marker">
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>

              <div className="experience-card">
                <div className="experience-card-header">
                  <div>
                    <p className="experience-type">{experience.type}</p>
                    <h3>{experience.role}</h3>
                    <h4>{experience.company}</h4>
                  </div>
                  <span className="experience-badge">
                    {experience.project}
                  </span>
                </div>

                <p className="experience-description">
                  {experience.description}
                </p>

                <ul className="experience-responsibilities">
                  {experience.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <div className="experience-tech">
                  {experience.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
