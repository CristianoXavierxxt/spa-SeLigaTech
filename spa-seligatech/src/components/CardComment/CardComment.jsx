import { CommentContainer, CommentBody } from "./CardCommentStyled.jsx"

export function CardComment({ idPublication, idComment, userId, commentBody, createdAt }){

    return (
        <>
            <CommentContainer>

                <CommentBody>

                    <div>
                        <h2>{commentBody}</h2>
                        <p>{createdAt}</p>
                    </div>

                    <i className="bi bi-trash"></i>
                    
                </CommentBody>

            </CommentContainer>
        </>
    )
}