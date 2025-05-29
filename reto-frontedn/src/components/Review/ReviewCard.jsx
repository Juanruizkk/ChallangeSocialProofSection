const ReviewCard = ({review}) => {
    return ( 
        <>
        <div>
            <div>
                <img src={review.imageUrl} alt="" />
                <div>
                    <p>{review.name}</p>
                    <p>{review.status}</p>
                </div>
            </div>
            <p>{review.review}</p>
        </div>
        </>
     );
}
 
export default ReviewCard;