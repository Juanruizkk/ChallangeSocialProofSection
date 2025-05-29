import RatingCard from "./RatingCard";
const RatingContainer = () => {
    const rating = [
        'Rated 5 Stars in Reviews',
        'Rated 5 Stars in Report Guru',
        'Rated 5 Stars in BestTech'
    ]
    return ( 
        <>
            {rating.map((r,idx)=>{
                return (
                <RatingCard  key={idx} text={r}/>
                )
            })}
        </>
     );
}
 
export default RatingContainer;