import styles from '../ideas/ideas.module.css'
export default function Idea({data}) {
    const {id, title, description} = data;
    return (
        <div className={styles.idea} key={id}>
              <div className={styles["idea-title"]}>{title}</div>
              <div className={styles["idea-description"]}>
                {description}
              </div>
            </div>
    ) 
} 