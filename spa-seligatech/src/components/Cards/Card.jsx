import { useEffect, useState } from "react"
import { addRemoveLike } from "../../services/publicationServices.js"
import { CardContainer, CardBody, CardFooter, CardHeader, Section } from "../Cards/CardStyled.jsx"
import { TextLimit } from "../TextLimit/TextLimit.jsx"
import { useNavigate } from "react-router-dom"

export default function Card( { id, title, text, image, likes, comments, username, date, top } ) {

    const [reloadPage, setReloadPage] = useState(false);
    const navigate = useNavigate()

    function onReply() {
        navigate(`/comment/${id}`)
    }

    async function addLike(){
        try {
            await addRemoveLike(id)
            setReloadPage(true);
            
        } catch (error) {
            console.log(error)
        }
    }

    function handleLikeClick() {
        addLike();
    }

    useEffect(() => {
        if (reloadPage) {
          window.location.reload();
        }
      }, [reloadPage]);

    return (
        <>
            <CardContainer>

                <CardBody>
                    <div>

                        <CardHeader top={top?.toString()} >
                            <h2>{title}</h2>
                            <TextLimit text={text} limit={30} />
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

                        <div>
                            <p onClick={handleLikeClick}>Like</p>
                            
                            <p onClick={onReply}>Responder</p>
                            
                            
                        </div>
                    
                    </div>

                    <Section>
                        
                        <img src={image} alt="imagem" />
                        <p>{username}</p>
                        <p>{date}</p>

                    </Section>

                </CardBody>

            </CardContainer>
        </>
    )
} 