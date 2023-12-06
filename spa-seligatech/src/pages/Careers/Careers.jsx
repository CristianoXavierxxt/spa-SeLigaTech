import CardCareer from "../../components/CardsCareers/CardCareer"
import { publication } from "../../Datas.js"
import { CareerBody } from "./CareersStyled.jsx"
import { Button } from "../../components/Button/Button.jsx"
import { Link } from "react-router-dom"

export default function Careers() {

    return (
        <> 
            <CareerBody >
                <div>
                    { 
                        publication.map( ( item )=> {
                            return (
                                <CardCareer 
                                    key = {item.id}
                                    title = {item.title}
                                    text = {item.text}
                                /> 
                            )
                        })
                    }

                    <Link to="/career1">

                        <Button type="button" text="Acessar"></Button>

                    </Link>
                </div>
            </CareerBody>
        </>
    )
}