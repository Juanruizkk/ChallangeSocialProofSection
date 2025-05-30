import ReviewCard from "./ReviewCard";

import imgColton from '../../assets/images/image-colton.jpg'
import imgAnne from '../../assets/images/image-anne.jpg'
import imgIrene from '../../assets/images/image-irene.jpg'
const ReviewContainer = () => {
  const reviews = [
    {
      name: "Colton Smith",
      status: "Verified Buyer",
      review:
        "We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!",
    imageUrl: imgColton
    },
    {
      name: "Irene Roberts",
      status: "Verified Buyer",
      review:
        "Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.",
        imageUrl:imgAnne
    },
    {
      name: "Anne Wallace",
      status: "Verified Buyer",
      review:
        "Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!",
        imageUrl: imgIrene
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-4 xl:flex-row border-2 border-red-400
      xl:h-[226px]">
      {reviews.map((review,idx)=>{
        return (
            <ReviewCard key={idx} review={review}/>
        )
      })}
      </div>
    </>
  );
};

export default ReviewContainer;
