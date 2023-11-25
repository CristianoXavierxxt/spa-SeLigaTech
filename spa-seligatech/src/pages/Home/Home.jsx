import Navbar from "../../components/Navbar/Navbar"
import Card from "../../components/Cards/Card.jsx"
import { HomeBody, HomeHeader } from "../Home/HomeStyled.jsx"
import { getAllPublications, getTopPublication } from "../../services/publicationServices.js"
import { useState, useEffect } from "react"

export default function home() {
    const [publications, setPublication] = useState([])
    const [topPublication, setTopPublication] = useState({})

    async function findAllPublications() {
        const allPublication = await getAllPublications()
        setPublication(allPublication.data.results)

        const top = await getTopPublication()
        setTopPublication(top.data.publication)
    }


    useEffect( ()=> {
        findAllPublications()
    }, [] )
    
    return(
        <>
            <Navbar/>
            <HomeHeader>
                { 
                    <Card
                        top = {true} 
                        key = {topPublication.id}
                        title = {topPublication.title}
                        text = {topPublication.text}
                        image = {topPublication.avatar}
                        likes = {topPublication.likes }
                        comments = {topPublication.comments }
                    /> 
                }
            </HomeHeader>   
            <HomeBody>
                { 
                    publications.map( ( item )=> <Card 
                        key = {item.id}
                        title = {item.title}
                        text = {item.text}
                        image = {item.avatar}
                        likes = {item.likes}
                        comments = {item.comments}
                    /> )
                }
            </HomeBody>
        </>
    ) 
}