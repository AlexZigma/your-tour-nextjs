import styles from "./Form.module.scss";

export default function FieldWrapper({ id, label, children }) {
  return (
    <div className={styles.field}>
      <label className={styles.field__label} htmlFor={id}>
        {label}
      </label>
      {children}
    </div>
  );
}
