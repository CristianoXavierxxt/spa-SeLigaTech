import Navbar from "../../components/Navbar/Navbar"
import Card from "../../components/Cards/Card.jsx"
import { HomeBody } from "../Home/HomeStyled.jsx"
import { getAllPublications } from "../../services/publicationServices.js"
import { useState, useEffect } from "react"

export default function home() {
    let [publication, setNews] = useState([])

    async function findAllPublications() {
        const response = await getAllPublications()
        setNews(response.data.results)
    }

    useEffect( ()=> {
        findAllPublications()
    }, [] )
    console.log(publication)
    return(
        <>
            <Navbar/>
            <HomeBody>
                { 
                    publication.map( ( item )=> <Card 
                        key = {item.id}
                        title = {item.title}
                        text = {item.text}
                        image = {item.avatar}
                        likes = {item.likes ? item.likes.length : 0}
                        comments = {item.comments? item.comments.length : 0}
                    /> )
                }
            </HomeBody>
        </>
    ) 
}