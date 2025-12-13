import Section from "@/components/commons/Section/Section"
import Form from "@/components/commons/Form/Form"

export default function CreateTour() {
    return (
        <Section
            id={'tour-create'}
            title={'Собери свой тур'}
            subtitle={'Идейные соображения высшего порядка,\nа также рамки и место обучения кадров'}
        >
            <Form/>
        </Section>
    )
}