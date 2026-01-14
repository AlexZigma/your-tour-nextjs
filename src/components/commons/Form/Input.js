import FieldWrapper from "./FieldWrapper";
import styles from "./Form.module.scss";

export default function Input({ id, label, type = "text", value, onChange, ...rest }) {
  return (
    <FieldWrapper id={id} label={label}>
      <input
        id={id}
        name={id}
        type={type}
        className={`${styles.field__input}`}
        value={value}
        onChange={onChange}
        {...rest}
      />
    </FieldWrapper>
  );
}
