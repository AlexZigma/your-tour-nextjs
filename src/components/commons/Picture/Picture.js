import styles from './Picture.module.scss'

export default function Picture() {
    return (
        <img
            className={styles.picture}
            src={img}
            alt=""
            loading="lazy"
        />
    )
}