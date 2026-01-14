import FieldWrapper from "./FieldWrapper";
import styles from "./Form.module.scss";

export default function PhoneInput({ id, label, value, onChange, ...rest }) {
  const mask = "+7 (999) 999-99-99";

  const handleChange = (e) => {
    const digits = e.target.value.replace(/[^0-9/+]/g, "");
    let j = 0;
    let i = 0;
    let formated = "";
    while (i < digits.length && j < mask.length) {
      if (mask.charAt(j) === "9" || mask.charAt(j) === digits.charAt(i)) {
        formated += digits.charAt(i++);
      } else {
        formated += mask.charAt(j);
      }
      j++;
    }
    onChange(formated);
  };
  return (
    <FieldWrapper id={id} label={label}>
      <input
        id={id}
        name={id}
        className={`${styles.field__input}`}
        type="tel"
        placeholder="+7 (___) ___-__-__"
        pattern="\+7 \([0-9]{3}\) [0-9]{3}-[0-9]{2}-[0-9]{2}"
        value={value}
        onChange={handleChange}
        {...rest}
      />
    </FieldWrapper>
  );
}
