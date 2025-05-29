import RatingCard from "./RatingCard";
const RatingContainer = () => {
    const rating = [
        'Rated 5 Stars in Reviews',
        'Rated 5 Stars in Report Guru',
        'Rated 5 Stars in BestTech'
    ]
    return ( 
        <div className="flex flex-col gap-4">
            {rating.map((r,idx)=>{
                return (
                <RatingCard  key={idx} text={r}/>
                )
            })}
            </div>
        
     );
}
 
export default RatingContainer;