import Card from "../../components/Cards/Card.jsx"
import { HomeBody, HomeHeader } from "../Home/HomeStyled.jsx"
import { getAllPublications, getTopPublication } from "../../services/publicationServices.js"
import { useState, useEffect } from "react"

export default function Home() {
    
    const [publications, setPublication] = useState([])
    const [topPublication, setTopPublication] = useState({})

    async function findAllPublications() {
        try {
            const allPublication = await getAllPublications()
            setPublication(allPublication.data.results)

        } catch (err) {
            console.log(err)
            setPublication([])
        }
    }

    async function findTopPublication() {
        try {
            const top = await getTopPublication()
            setTopPublication(top.data.publication)
            
        } catch (err) {
            console.log(err)
            setTopPublication({})
        }
    }


    useEffect( ()=> {
        findAllPublications()
        findTopPublication()
    }, [] )
    
    return(
        <>
            <HomeHeader>
                { 
                    <Card
                        top = {true} 
                        key = {topPublication.id}
                        id= {topPublication.id}
                        title = {topPublication.title}
                        text = {topPublication.text}
                        image = {topPublication.avatar}
                        likes = {topPublication.likes }
                        comments = {topPublication.comments }
                        username = {topPublication.username}
                        date = {topPublication.date}
                    /> 
                }
            </HomeHeader>   
            <HomeBody>
                { 
                    publications.map( ( item )=> {
                        return (
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
                    })
                }
            </HomeBody>
        </>
    ) 
}