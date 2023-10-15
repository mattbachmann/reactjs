import styles from "./styles.module.css";

// export function Card(props) {
export function Card({title, subTitle = 'Default Text', link}) {
    return (
        <a
            href={link}
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
        >
            <h2>
                {title} <span>-&gt;</span>
            </h2>
            <p>{subTitle}</p>
        </a>
    )
}