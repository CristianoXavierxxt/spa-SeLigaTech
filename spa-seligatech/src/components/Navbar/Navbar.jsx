import { Link, Outlet, useNavigate } from "react-router-dom"
import logo from "../../images/Room.png"
import { Button } from "../Button/Button.jsx"
import { Nav, ImagemLogo, InputSpace, ErrorSpan, UserLoggedSpace } from "../Navbar/NavbarStyled.jsx"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { searchSchema } from "../../Schemas/SerachSchema.js"
import { userLogged } from "../../services/userServices.js"
import { useContext, useEffect } from "react"
import Cookies from "js-cookie"
import { UserContext } from "../../Context/UserContext.jsx"


export default function Navbar() {

    const { register, handleSubmit, reset, formState: {errors} } = useForm({
        resolver: zodResolver(searchSchema)
    })

    const navigate = useNavigate()
    const {user, setUser} = useContext(UserContext)

    function onSearch(data){
        const { title } = data
        navigate(`/search/${title}`)
        reset()
    }

    async function findUserLoged() {
        try {
            const response = await userLogged()
            setUser(response.data)
            
        } catch (err) {
            console.log(err)
        }
    }

    function signout() {
        Cookies.remove("token")
        setUser(undefined)
        navigate("/")
    }

    useEffect( () => {
       if(Cookies.get("token")) findUserLoged()
    }, [] )

    return (
        <>
            <Nav>

                <form onSubmit={handleSubmit(onSearch)}>

                    <InputSpace className="input-search-space">

                        <button type="submit">

                            <i className="bi bi-search"></i>

                        </button>

                        <input {...register("title")} type="text" placeholder="Pesquise por um titulo"/>

                    </InputSpace>

                </form>

                <Link to="/">

                    <ImagemLogo src={logo} alt="Logo do SeLigaTech" />

                </Link>
                <div>
                    <Link to="/career">

                        <Button type="button" text="Carreiras"></Button>

                    </Link>

                    {user ? 
                        (
                            <UserLoggedSpace>
                                <Link to="/profile" style={ { textDecoration: "none" } }>
                                    <h2>{user.name}</h2>
                                </Link>
                                <i className="bi bi-box-arrow-right" onClick={signout}></i>
                            </UserLoggedSpace>
                        ) :
                        (
                            <Link to="/auth">

                                <Button type="button" text="Entrar"></Button>

                            </Link>
                        ) 
                    }
                </div>
                

            </Nav>

            { errors.title && <ErrorSpan>{ errors.title.message }</ErrorSpan> }

            <Outlet/>
        </>
    )
}