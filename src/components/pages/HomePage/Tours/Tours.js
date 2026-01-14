import TourCard from "@/components/commons/Card/TourCard";
import Section from "@/components/commons/Section/Section";
import { filterList, tours } from "@/data/tours";

import styles from "./tours.module.scss";

export default function Tours({ id }) {
  return (
    <Section id={id} title="Выбери свой тур" filterList={filterList}>
      <ul className={styles["tour-grid"]}>
        {tours.map((item) => (
          <li key={item.id}>
            <TourCard {...item} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
