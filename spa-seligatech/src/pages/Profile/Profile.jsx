import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../Context/UserContext"
import { 
    ProfileContainer, 
    ProfileHeader, 
    ProfileIconEdit, 
    ProfileBackground,
    ProfileUser,
    ProfileAvatar,
    ProfileActions,
    ProfileInconAdd,
    ProfilePublication
} from "./ProfileStyled"
import { getAllPublicationsByUser } from "../../services/publicationServices"
import Card from "../../components/Cards/Card.jsx"

export function Profile() {
    const {user} = useContext(UserContext)

    const [publications, setPublication] = useState([])

    async function findAllPublicationsByUser() {
        const response = await getAllPublicationsByUser()
        setPublication(response.data.results)
    }

    useEffect( () => {
        findAllPublicationsByUser()
    },[] )

    return (
        <>
            <ProfileContainer>

                <ProfileHeader>

                    <ProfileIconEdit>
                        <i className="bi bi-pencil-square"></i>
                    </ProfileIconEdit>

                    <ProfileBackground src={user.avatar}/>

                    <ProfileUser>

                        <ProfileAvatar src={user.avatar} alt="Foto do usuario"/>

                        <h2>{user.name}</h2>
                        <h3>@{user.username}</h3>

                    </ProfileUser>

                    <ProfileActions>

                        <ProfileInconAdd>
                            <i className="bi bi-plus-circle"></i>
                        </ProfileInconAdd>

                    </ProfileActions>

                </ProfileHeader>

                <ProfilePublication>
                    { publications.length === 0 && <h2>Você ainda não criou nenhuma publicação...</h2> }
                    {
                        publications.map( (item) => {
                            return (
                                <Card
                                    key = {item.id}
                                    title = {item.title}
                                    text = {item.text}
                                    image = {item.avatar}
                                    likes = {item.likes}
                                    comments = {item.comments}
                                />
                            )
                        } )
                    }
                </ProfilePublication>

            </ProfileContainer>
        </>
    )
}