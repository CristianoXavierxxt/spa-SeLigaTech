import { CardContainer, CardBody, CardFooter } from "../Cards/CardStyled.jsx"

export default function Card({publication}) {
    return (
        <>
            <CardContainer>

                <CardBody>
                    <div>
                        <h2>{publication.title}</h2>
                        <p>{publication.text}</p>
                    </div>
                    <img src={publication.image} alt="imagem" />
                </CardBody>

                <CardFooter>
                    <div>
                        <i className="bi bi-hand-thumbs-up"></i>
                        <samp>{publication.likes}</samp>
                    </div>
                    <div>
                        <i className="bi bi-chat"></i>
                        <samp>{publication.comments}</samp>
                    </div>
                    
                </CardFooter>

            </CardContainer>
        </>
    )
} 