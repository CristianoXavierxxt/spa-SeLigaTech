

export function CardComment({ idComment, userId, commentBody, createdAt }){

    return (
        <>
            <h2>{commentBody}</h2>
            <p>{createdAt}</p>
        </>
    )
}