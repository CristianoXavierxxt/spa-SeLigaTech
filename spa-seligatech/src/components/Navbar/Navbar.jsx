import { Link, Outlet, useNavigate } from "react-router-dom"
import logo from "../../images/Room.png"
import { Button } from "../Button/Button.jsx"
import { Nav, ImagemLogo, InputSpace, ErrorSpan } from "../Navbar/NavbarStyled.jsx"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { searchSchema } from "../../Schemas/SerachSchema.js"


export default function Navbar() {

    const { register, handleSubmit, reset, formState: {errors} } = useForm({
        resolver: zodResolver(searchSchema)
    })

    const navigate = useNavigate()

    function onSearch(data){
        const { title } = data
        navigate(`/search/${title}`)
        reset()
    }

    function goAuth(){
        navigate("/auth")
    }


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
                
                <Link to="/auth">

                    <Button type="button" text="Entrar"></Button>

                </Link>

            </Nav>

            { errors.title && <ErrorSpan>{ errors.title.message }</ErrorSpan> }

            <Outlet/>
        </>
    )
}