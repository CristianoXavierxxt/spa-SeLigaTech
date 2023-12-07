import { CreateContainer, Section } from "./CreatePublicationStyled.jsx"
import { Input } from "../../components/Inputs/Input.jsx"
import { Button } from "../../components/Button/Button.jsx"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { createPubliSchema } from "../../Schemas/createPubliSchema.js"
import { ErrorSpan } from "../../components/Navbar/NavbarStyled.jsx"
import { createPublication } from "../../services/publicationServices.js"

export function CreatePublication(){

    const { 
        register: createPubli, 
        handleSubmit: handleSubmitCreatePubli, 
        formState: { errors: errorsCreatePubli } 
    } = 
    useForm(
        {
            resolver: zodResolver(createPubliSchema)
        }
    )

    async function HandleSubmit(data) {
        try {
            const response = await createPublication(data)
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <>
            <CreateContainer>

                <Section>
                    <h2>Criar uma nova publicação</h2>

                    <form onSubmit={handleSubmitCreatePubli(HandleSubmit)}>

                        <Input 
                            type="text"
                            placeholder="Titulo"
                            name="title"
                            register={createPubli}
                        />
                        { errorsCreatePubli.title && <ErrorSpan>{ errorsCreatePubli.title.message }</ErrorSpan> }
                        <Input 
                            type="text"
                            placeholder="Texto"
                            name="text"
                            register={createPubli}
                        />
                        { errorsCreatePubli.text && <ErrorSpan>{ errorsCreatePubli.text.message }</ErrorSpan> }
                        <Button type="submit" text="Criar"></Button>
                    </form>
                </Section>

            </CreateContainer>
        </>
    )
}