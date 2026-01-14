import Link from "next/link";
import { useState } from "react";

import Button from "@/components/commons/Button/Button";
import { getTodayIso } from "@/utils/getTodayIso";

import Checkbox from "./Checkbox";
import DateInput from "./DateInput";
import styles from "./Form.module.scss";
import Input from "./Input";
import PhoneInput from "./PhoneInput";
import RadioGroup from "./RadioGroup";
import Select from "./Select";
import TextArea from "./TextArea";

const initialFormState = {
  name: "",
  direction: "",
  email: "",
  phone: "",
  dateStart: "",
  dateEnd: "",
  comment: "",
  age: "",
  license: false,
};

export default function Form() {
  const todayIso = getTodayIso();

  const [formState, setFormState] = useState(initialFormState);
  const setStateElement = (key) => (value) => {
    setFormState((prev) => ({ ...prev, [key]: value }));
  };

  const handleChange = (key) => (e) => {
    setStateElement(key)(
      e.target.type === "checkbox" ? e.target.checked : e.target.value
    );
  };

  const handleReset = () => {
    setFormState(initialFormState);
  };

  return (
    <form className={styles.form} id="form">
      <div className={styles.form__grid}>
        <Input
          id="name"
          label={"Имя"}
          type="text"
          value={formState.name}
          onChange={handleChange("name")}
          placeholder="Введите Ваше имя"
          autoComplete="name"
          required
        />
        <Select
          id="direction"
          label={"Направление"}
          defaultValue={{ value: "", label: "Куда хотите ехать" }}
          options={[
            { value: "opt1", label: "Горы" },
            { value: "opt2", label: "Реки" },
            { value: "opt3", label: "Моря" },
          ]}
          value={formState.direction}
          onChange={handleChange("direction")}
        />

        <Input
          id="email"
          label={"Email"}
          type="email"
          value={formState.email}
          onChange={handleChange("email")}
          placeholder="example@mail.com"
          autoComplete="email"
          required
        />

        <PhoneInput
          id="phone"
          label={"Телефон"}
          value={formState.phone}
          onChange={setStateElement("phone")}
          autoComplete="tel"
          required
        />
        <DateInput
          id={"dateStart"}
          label={"Дата от"}
          value={formState.dateStart}
          onChange={handleChange("dateStart")}
          minDate={todayIso}
        />
        <DateInput
          id={"dateEnd"}
          label={"Дата до"}
          value={formState.dateEnd}
          onChange={handleChange("dateEnd")}
          minDate={formState.dateStart || todayIso}
        />
        <TextArea
          id={"comment"}
          label={"Комментарий"}
          value={formState.comment}
          onChange={handleChange("comment")}
        />
      </div>
      <RadioGroup
        id={"age"}
        label={"Вам есть 18 лет?"}
        options={[
          { id: "yes", label: "Да" },
          { id: "no", label: "Нет" },
        ]}
        value={formState.age}
        onChange={handleChange("age")}
      />
      <Checkbox
        id="license"
        value={formState.license}
        onChange={handleChange("license")}
      >
        Нажимая кнопку, я принимаю условия{" "}
        <Link className={styles["checkbox__link"]} href="">
          Лицензионного договора
        </Link>
      </Checkbox>
      <div className={styles.form__buttons}>
        <Button variant="submit" type="submit">
          Найти тур
        </Button>
        <Button variant="reset" type="button" onClick={handleReset}>
          Сбросить
        </Button>
      </div>
    </form>
  );
}
