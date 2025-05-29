const ReviewCard = ({review}) => {
    return ( 
        <>
        <div>{review.name}</div>
        <div>{review.status}</div>
        <div>{review.review}</div>
        </>
     );
}
 
export default ReviewCard;