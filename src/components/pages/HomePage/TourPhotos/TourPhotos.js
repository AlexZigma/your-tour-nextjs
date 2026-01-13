import Section from "@/components/commons/Section/Section";
import styles from "./TourPhoto.module.scss";
import Picture from "@/components/commons/Picture/Picture";
import { tour_photos } from "@/data/tourPhotos";

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
                src={photo.src}
                key={photo.src}
                className={styles["photo-grid__img"]}
              />
            ))}
          </div>
        ))}
      </div>
    </Section>
  );
}
