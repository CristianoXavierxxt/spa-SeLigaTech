import { CardContainer, CardBody, CardFooter, CardHeader } from "../Cards/CardStyled.jsx"
import { TextLimit } from "../TextLimit/TextLimit.jsx"

export default function Card( { title, text, avatar, likes, comments, top } ) {
    
    return (
        <>
            <CardContainer>

                <CardBody>
                    <div>

                        <CardHeader top={top?.toString()} >
                            <h2>{title}</h2>
                            <TextLimit text={text} limit={150} />
                        </CardHeader>

                        <CardFooter>
                            <section>
                                <i className="bi bi-hand-thumbs-up"></i>
                                <samp>{likes?.length}</samp>
                            </section>
                            <section>
                                <i className="bi bi-chat"></i>
                                <samp>{comments?.length}</samp>
                            </section>
                    
                        </CardFooter>

                    </div>

                    <img src={avatar} alt="imagem" />
                </CardBody>

            </CardContainer>
        </>
    )
} 