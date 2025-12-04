import './Button.module.scss'

export default function Button({ children, variant, ...props}) {
    const className = `button button--${variant}`
    return (
        <button className={className} props>
            children
        </button>
    )
}