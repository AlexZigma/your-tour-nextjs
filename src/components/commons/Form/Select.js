import FieldWrapper from "./FieldWrapper";
import styles from "./Form.module.scss";

export default function Select({
  id,
  label,
  options,
  defaultValue,
  value,
  onChange,
}) {
  return (
    <FieldWrapper id={id} label={label}>
      <select
        id={id}
        name={id}
        className={`${styles.field__input} ${styles["field__input--select"]}`}
        value={value}
        onChange={onChange}
      >
        <option disabled hidden value="">
          {defaultValue.label}
        </option>
        {options.map((option) => (
          <option
            value={option.value}
            key={option.value}
            className={styles["field__input-option"]}
          >
            {option.label}
          </option>
        ))}
      </select>
    </FieldWrapper>
  );
}
