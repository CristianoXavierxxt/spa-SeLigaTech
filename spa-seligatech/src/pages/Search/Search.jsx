import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { searchPublications } from "../../services/publicationServices.js"
import Card from "../../components/Cards/Card.jsx"
import { ContainerResults, SearchPubli, TextResult } from "../Search/SearchStyled.jsx"

export function Search() {

    const { title } = useParams()
    const [publications, setPublication] = useState([])

    async function searchPublicationsTitle(){

        try {
            const allPublication = await searchPublications(title)
            setPublication(allPublication.data.results)
        } catch (err) {
            console.log(err)
            setPublication([])
        }
    }

    useEffect( ()=> {
        searchPublicationsTitle()
    }, [title] )

    return (
        <>
            <ContainerResults>

                <TextResult>

                    <span>
                        {
                            publications.length ? `Encontramos ${publications.length} ${
                                publications.length > 1 ? "Resultados" : "Resultado"
                            } para:` 
                            : "Não encontramos nenhum resultado"
                        }
                    </span>
                    <h2>{title}</h2>

                </TextResult>

                <SearchPubli>
                    { 
                        publications.map( ( item )=> 
                            <Card 
                                key = {item.id}
                                id = {item.id}
                                title = {item.title}
                                text = {item.text}
                                image = {item.avatar}
                                likes = {item.likes}
                                comments = {item.comments}
                                username = {item.username}
                                date = {item.date}
                            /> 
                        )
                    }
                </SearchPubli>

            </ContainerResults>
        </>
    )
}