import { ButtonSpace } from "../Button/ButtonStyled.jsx"

export function Button( { type, text } ){
    return <ButtonSpace type={type}>{text}</ButtonSpace>
}