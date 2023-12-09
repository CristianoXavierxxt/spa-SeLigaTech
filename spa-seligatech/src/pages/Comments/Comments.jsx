import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { findByIdPublication } from "../../services/publicationServices.js"
import { CardPubliComment } from "../../components/CardPubliComment/CardPubliComment.jsx"
import { ContainerResult, SearchPubli, CreateComment } from "../Comments/CommentsStyled.jsx"
import { Button } from "../../components/Button/Button.jsx"

export function Comments() {

    const { id } =  useParams()

    const [publication, setPublication] = useState({})

    async function findPublicationId() {
        try {
            const response = await findByIdPublication(id)
            setPublication(response.data)
        } catch (error) {
            console.log(error)
            setPublication({})
        }
    }

    useEffect( () =>{
        findPublicationId()
    },[] )
    
    return (
        <>
        
            <ContainerResult>

                <SearchPubli>
                    { 
                        publication.id && 
                        publication.title && 
                        publication.text && 
                        publication.avatar && 
                        publication.likes &&
                        publication.comments &&
                        publication.username &&
                        publication.date &&
                        (
                            <CardPubliComment 
                                key = {publication.id}
                                id = {publication.id}
                                title = {publication.title}
                                text = {publication.text}
                                image = {publication.avatar}
                                likes = {publication.likes}
                                comments = {publication.comments}
                                username = {publication.username}
                                date = {publication.date}
                            /> 
                        )
                            
                    }
                </SearchPubli>

            </ContainerResult>
            <CreateComment>
                    <form>
                        <div>
                            <textarea placeholder="Escreva aqui seu comentario" rows="6" cols="100">
                            </textarea>
                        </div>
                        <Button type="submit" text="Responder"></Button>
                    </form>
            </CreateComment>

        </>
    )
}