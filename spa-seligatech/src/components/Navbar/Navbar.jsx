import { Outlet } from "react-router-dom"
import logo from "../../images/novoLogo.jpeg"
import { Button, Nav, ImagemLogo, InputSpace } from "../Navbar/NavbarStyled.jsx"

export default function Navbar() {

    return (
        <>
            <Nav>
                <InputSpace className="input-search-space">
                    <i className="bi bi-search"></i>
                    <input type="text" placeholder="Pesquise por um titulo"/>
                </InputSpace>

                <ImagemLogo src={logo} alt="Logo do SeLigaTech" />

                <Button>Entrar</Button>
            </Nav>
            <Outlet/>
        </>
    )
}