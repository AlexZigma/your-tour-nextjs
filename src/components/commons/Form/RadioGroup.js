import styles from "./Form.module.scss";

export default function RadioGroup({ id, label, options, value, onChange }) {
  return (
    <fieldset className={styles.radio}>
      <legend>{label}</legend>
      <div className={styles.radio__list}>
        {options.map((item) => (
          <label className={styles.radio__item} htmlFor={item.id} key={item.id}>
            <input
              className={styles.radio__button}
              type="radio"
              name={id}
              id={item.id}
              checked={value === item.id}
              value={item.id}
              onChange={onChange}
              required
            />
            <span>{item.label}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
