import Navbar from "../../components/Navbar/Navbar"
import Card from "../../components/Cards/Card.jsx"
import {publication} from "../../Datas.js" 
import { HomeBody } from "../Home/HomeStyled.jsx"

export default function home() {
    return(
        <>
            <Navbar/>
            <HomeBody>
                { 
                    publication.map( ( item, index )=> <Card key={index} publication={item}/> )
                }
            </HomeBody>
        </>
    ) 
}