import { useState } from "react";

import styles from "./filter.module.scss";
import FilterButton from "./FilterButton";

export default function FilterList({ filterList, className = "" }) {
  const [activeId, setActiveId] = useState(filterList[0]?.id);

  return (
    <ul className={`${styles["filter-list"]} ${className}`}>
      {filterList.map((item) => (
        <li key={item.id}>
          <FilterButton
            isActive={activeId === item.id}
            onClick={() => setActiveId(item.id)}
          >
            {item.label}
          </FilterButton>
        </li>
      ))}
    </ul>
  );
}
