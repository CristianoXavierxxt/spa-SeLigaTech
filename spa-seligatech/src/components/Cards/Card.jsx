import { CardContainer, CardBody, CardFooter } from "../Cards/CardStyled.jsx"
import { TextLimit } from "../TextLimit/TextLimit.jsx"

export default function Card( { title, text, avatar, likes, comments } ) {
    
    return (
        <>
            <CardContainer>

                <CardBody>
                    <div>
                        <h2>{title}</h2>
                        <TextLimit text={text} limit={150} />
                    </div>
                    <img src={avatar} alt="imagem" />
                </CardBody>

                <CardFooter>
                    <div>
                        <i className="bi bi-hand-thumbs-up"></i>
                        <samp>{likes}</samp>
                    </div>
                    <div>
                        <i className="bi bi-chat"></i>
                        <samp>{comments}</samp>
                    </div>
                    
                </CardFooter>

            </CardContainer>
        </>
    )
} 