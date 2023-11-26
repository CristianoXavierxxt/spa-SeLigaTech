import { Link, Outlet, useNavigate } from "react-router-dom"
import logo from "../../images/novoLogo.jpeg"
import { Button, Nav, ImagemLogo, InputSpace, ErrorSpan } from "../Navbar/NavbarStyled.jsx"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"



const searchSchemma = z.object({
    title: z.string()
    .nonempty( { message:"A pesquisa não pode ser vazia" } )
    .refine( value => !/^\s*$/.test(value), 
    { message:"A pesquisa não ter apenas espaço" })
})

export default function Navbar() {

    const { register, handleSubmit, reset, formState: {errors} } = useForm({
        resolver: zodResolver(searchSchemma)
    })

    const navigate = useNavigate()

    function onSearch(data){
        const { title } = data
        navigate(`/search/${title}`)
        reset()
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

                <Button>Entrar</Button>

            </Nav>

            { errors.title && <ErrorSpan>{ errors.title.message }</ErrorSpan> }

            <Outlet/>
        </>
    )
}