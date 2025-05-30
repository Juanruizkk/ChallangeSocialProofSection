const ReviewCard = ({review}) => {
    return ( 
        <>
        <div 
        className="bg-Very-Dark-Magenta rounded-lg text-Light-Grayish-Magenta
        px-8 pt-10 pb-8 xl:w-350px">
            <div className="flex gap-6 mb-6">
                <img src={review.imageUrl} alt="" />
                <div className="text-[1.0625rem]/[1.2rem">
                    <p className="font-bold">{review.name}</p>
                    <p className="text-Soft-Pink">{review.status}</p>
                </div>
            </div>
            <p className="font-medium">{review.review}</p>
        </div>
        </>
     );
}
 
export default ReviewCard;