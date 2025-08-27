import styles from './MainContainer.module.css';

const MainContainer = ({ children, className = '' }) => {
  return (
    <div className={`${styles.container} ${className}`}>
      {children}
    </div>
  );
};

export default MainContainer;