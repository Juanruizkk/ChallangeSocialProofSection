import RatingCard from "./RatingCard";
 const rating = [
        'Rated 5 Stars in Reviews',
        'Rated 5 Stars in Report Guru',
        'Rated 5 Stars in BestTech'
    ]
const RatingContainer = () => {
   const positionClases = [
    'xl:place-self-start',
    'xl:place-self-center',
    'xl:place-self-end'
   ]
    return ( 
        <div className="flex flex-col gap-4  xl:w-[33.75rem]
        xl:justify-center
        xl:items-start">
            {rating.map((r,idx)=>{
                return (
                <RatingCard  key={idx} text={r} className={positionClases[idx]}/>
                )
            })}
            </div>
        
     );
}
 
export default RatingContainer;