import Link from 'next/link';
import styles from '../ideas/ideas.module.css'
export default function Idea({data}) {
    const {id, title, description} = data;
    return (
        <div className={styles.idea} key={id}>
              <div className={styles["idea-title"]}>{title}</div>
              <div className={styles["idea-description"]}>
                {description}
                <Link href={`/ideas/${id}`} className={styles.lnk}>show details</Link>
              </div>
            </div>
    ) 
} 