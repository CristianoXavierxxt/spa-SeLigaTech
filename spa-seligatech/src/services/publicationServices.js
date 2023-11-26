import axios from "axios";

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