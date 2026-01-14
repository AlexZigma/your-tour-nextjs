import FieldWrapper from "./FieldWrapper";
import styles from "./Form.module.scss";

export default function TextArea({ id, label, value, onChange }) {
  return (
    <FieldWrapper id={id} label={label}>
      <textarea
        className={`${styles.field__input} ${styles["field__input--area"]}`}
        name={id}
        id={id}
        value={value}
        onChange={onChange}
      />
    </FieldWrapper>
  );
}
