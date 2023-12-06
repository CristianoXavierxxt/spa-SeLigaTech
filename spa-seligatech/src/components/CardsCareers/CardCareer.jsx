import { CCContainer } from "./CardCareerStyled"


export default function CardCareer({ title, text }) {
    return (
        <>
            <CCContainer>
                <h2>{title}</h2>
                <p>{text}</p>
            </CCContainer>
        </>
    )
}