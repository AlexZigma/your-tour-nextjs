import styles from './Button.module.scss'

export default function Button({ children, variant, ...rest}) {
    const variantClass = `button--${variant}`
    const className = `${styles.button} ${styles[variantClass]}`
    return (
        <button className={className} {...rest}>
            {children}
        </button>
    )
}