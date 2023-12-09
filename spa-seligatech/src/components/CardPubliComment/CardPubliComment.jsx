import { CardContainer, CardBody, CardFooter, CardHeader, Section } from "../CardPubliComment/CardPubliCommentStyled.jsx"
import { useEffect, useState } from "react"
import { findByIdPublication } from "../../services/publicationServices.js"
import { addRemoveLike } from "../../services/publicationServices.js"
import { TextLimit } from "../TextLimit/TextLimit.jsx"
import { CardComment } from "../CardComment/CardComment.jsx"

export function CardPubliComment( { id, title, text, image, likes, comments, top } ) {
    
    const [allComments, setAllComments] = useState([])

    async function findPublicationId() {
        try {
            const response = await findByIdPublication(id)
            setAllComments(response.data.comments)
        } catch (error) {
            console.log(error)
            setAllComments([])
        }
    }

    useEffect( () =>{
        if( id && title && text && image && likes && comments ){
            findPublicationId()
        }
    },[] )
  

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

                    </div>


                    <Section>
                        <img src={image} alt="imagem" />
                        <p>username</p>
                        <p>Data</p>

                    </Section>

                </CardBody>


                <div>

                    {
                        allComments.length > 0 && 
                        (
                            allComments.map((item) => {
                                return (
                                    <CardComment
                                        key={item.idComment}
                                        idComemnt={item.idComemnt}
                                        userId={item.userId}
                                        commentBody={item.commentBody}
                                        createdAt={item.createdAt}
                                    />
                                )
                            })
                        )
                        
                    }

                </div>

            </CardContainer>
        </>
    )
}