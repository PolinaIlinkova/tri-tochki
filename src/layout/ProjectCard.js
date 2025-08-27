import { motion } from "framer-motion";
import styles from "./ProjectCard.module.css";
import { Link } from "react-router-dom";

export default function ProjectCard({ id, title, area, image }) {
  return (
    <motion.div
      key={id}
      className={styles.card}
      initial={{ opacity: 0, y: 100 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true, amount: 0.2 }} 
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Link to={`/projects/${id}`} className={styles.card}>
        <img src={image} alt={title} className={styles.image} />
        <div className={styles.info}>
          <h3>{title}</h3>
          <p>Площадь: {area}</p>
        </div>
      </Link>
    </motion.div>
  );
}
