import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { findByIdPublication } from "../../services/publicationServices.js"
import { CardPubliComment } from "../../components/CardPubliComment/CardPubliComment.jsx"
import { ContainerResult, SearchPubli } from "../Comments/CommentsStyled.jsx"

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
                        (
                            <CardPubliComment 
                                key = {publication.id}
                                id = {publication.id}
                                title = {publication.title}
                                text = {publication.text}
                                image = {publication.avatar}
                                likes = {publication.likes}
                                comments = {publication.comments}
                            /> 
                        )
                            
                    }
                </SearchPubli>

            </ContainerResult>

        </>
    )
}