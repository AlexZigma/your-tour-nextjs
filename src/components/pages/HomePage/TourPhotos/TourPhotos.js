import Section from "@/components/commons/Section/Section";
import styles from './TourPhoto.module.scss'

function Photo({ src, className = '' }) {
    return (
        <img
            className={styles['photo-grid__img']}
            src={src}
            alt=""
            loading="lazy"
        />
    )
}

export default function TourPhotos() {
    const sectionInfo = {
        id: '',
        title: 'Фотографии путешествий',
        subtitle: 'Идейные соображения высшего порядка,\nа также рамки и место обучения кадров',
    }

    const photos = [
        [
            {src: 'images/travel-photo-1.png'},
            {src: 'images/travel-photo-2.png'},
            {src: 'images/travel-photo-3.png'},
            {src: 'images/travel-photo-4.png'},
        ],
        [
            {src: 'images/travel-photo-5.png'},
            {src: 'images/travel-photo-6.png'},
            {src: 'images/travel-photo-7.jpg'},
            {src: 'images/travel-photo-8.png'},
            {src: 'images/travel-photo-9.png'},
        ],
        [
            {src: 'images/travel-photo-10.png'},
            {src: 'images/travel-photo-11.jpg'},
            {src: 'images/travel-photo-12.jpg'},
            {src: 'images/travel-photo-13.jpg'},
        ],
        
    ]
    return (
        <Section {...sectionInfo} wide>
            <div className={styles['photo-grid']}>
                {photos.map((item, rowIndex) => 
                    <div className={styles['photo-grid__row']} key={rowIndex}>
                        {item.map((photo, index) => 
                            <Photo src={photo.src} key={index}/>
                        )}
                    </div>
                )}
            </div>
        </Section>

    )
}