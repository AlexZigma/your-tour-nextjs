import { useEffect, useRef } from "react";

import FieldWrapper from "./FieldWrapper";
import styles from "./Form.module.scss";

export default function DateInput({ id, label, minDate, value, onChange }) {
  const datePicker = useRef(null);

  useEffect(() => {
    datePicker.current.min = minDate;
  }, [minDate]);

  const dateToPoints = (date) => {
    if (!date) return "";
    const [yyyy, mm, dd] = date.split("-");
    return `${dd}.${mm}.${yyyy}`;
  };

  return (
    <FieldWrapper id={id} label={label}>
      <div className={styles.field__container}>
        <input
          className={`${styles.field__input} p-normal`}
          type="text"
          id={`${id}-text`}
          name={`${id}-text`}
          placeholder="ДД.ММ.ГГГГ"
          readOnly
          value={dateToPoints(value)}
          onClick={() => datePicker.current.showPicker()}
        />
        <input
          id={id}
          name={id}
          ref={datePicker}
          className={`${styles.field__input} ${styles["field__input--date"]} p-normal`}
          type="date"
          value={value}
          onChange={onChange}
          required
        />
      </div>
    </FieldWrapper>
  );
}
