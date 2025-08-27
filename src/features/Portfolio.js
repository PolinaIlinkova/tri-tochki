import styles from "./Portfolio.module.css";
import ProjectCard from "../layout/ProjectCard";
import MainContainer from "../layout/MainContainer";
import projectData from "../components/UI/ProjectData";



export default function Portfolio() {
  return (
    <section className={styles.portfolioSection} id="portfolio">
      <MainContainer>
        <div className={styles.headingSection}>
          <span className={styles.dot_line}></span>
          <h2 className={styles.title}>Портфолио</h2>
        </div>
        <div className={styles.grid}>
          {projectData.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </MainContainer>
    </section>
  );
}
