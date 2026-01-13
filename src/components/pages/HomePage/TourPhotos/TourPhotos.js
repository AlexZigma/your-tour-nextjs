import Picture from "@/components/commons/Picture/Picture";
import Section from "@/components/commons/Section/Section";
import { tour_photos } from "@/data/tourPhotos";

import styles from "./TourPhoto.module.scss";

export default function TourPhotos({ id }) {
  const sectionInfo = {
    id: id,
    title: "Фотографии путешествий",
    subtitle:
      "Идейные соображения высшего порядка,\nа также рамки и место обучения кадров",
  };

  return (
    <Section {...sectionInfo} wide>
      <div className={styles["photo-grid"]}>
        {tour_photos.map((item, rowIndex) => (
          <div className={styles["photo-grid__row"]} key={rowIndex}>
            {item.map((photo) => (
              <Picture
                key={photo.src}
                src={photo.src}
                alt={photo.alt}
                className={styles["photo-grid__img"]}
              />
            ))}
          </div>
        ))}
      </div>
    </Section>
  );
}
