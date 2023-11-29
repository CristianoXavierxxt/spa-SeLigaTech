import axios from "axios";

const baseUrl = "http://localhost:3000"

export function signup(data) {
    delete data.confirmPassword
    const body = {...data, 
        username: generateUserName(data.name), 
        avatar: "https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp"}
    const response = axios.post(`${baseUrl}/user/createUser`, body)
    return response
}

function generateUserName(name) {
    const username = name.replace(/\s/g, "").toLowerCase()
    const randomNumber = Math.floor(Math.random() * 1000)
    return `${username}-${randomNumber}`
}