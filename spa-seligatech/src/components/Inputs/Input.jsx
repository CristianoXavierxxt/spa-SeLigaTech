import { InputSpace } from "../Inputs/InputStyled.jsx"

export function Input( { type, placeholder, name, register } ){

    return (
        <>
            <InputSpace type={type} placeholder={placeholder} { ...register(name) }></InputSpace>
        </>
    )
}