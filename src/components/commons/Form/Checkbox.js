import styles from "./Form.module.scss";

export default function Checkbox({ id, children, value, onChange }) {
  return (
    <div className={styles.checkbox}>
      <input
        className={styles.checkbox__button}
        type="checkbox"
        id={id}
        name={id}
        checked={value}
        onChange={onChange}
        required
      />
      <label className={`p-small ${styles.checkbox__label}`} htmlFor={id}>
        {children}
      </label>
    </div>
  );
}
