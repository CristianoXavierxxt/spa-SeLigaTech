import axios from "axios";
import Cookies from "js-cookie";

const baseUrl = "http://localhost:3000"

export function getAllPublications() {

    const response = axios.get( `${baseUrl}/publication/getAll` )
    return response
}

export function getTopPublication() {
    const response = axios.get( `${baseUrl}/publication/top` )
    return response
}

export function searchPublications(title) {
    const response = axios.get( `${baseUrl}/publication/search?title=${title}` )
    return response
}

export function getAllPublicationsByUser() {
    const response = axios.get( `${baseUrl}/publication/publicationByUser`, {
        headers: {
            Authorization: `Bearer ${Cookies.get("token")}`
        }
    } )
    return response
}

export function createPublication(data){
    const body = {...data}
    const response = axios.post(`${baseUrl}/publication/create`, body, { 
        headers: {
            Authorization: `Bearer ${Cookies.get("token")}`
        }
    })

    return response
}