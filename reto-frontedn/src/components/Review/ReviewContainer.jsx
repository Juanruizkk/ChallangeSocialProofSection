import ReviewCard from "./ReviewCard";
const ReviewContainer = () => {
  const reviews = [
    {
      name: "Colton Smith",
      status: "Verified Buyer",
      review:
        "We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!",
    },
    {
      name: "Irene Roberts",
      status: "Verified Buyer",
      review:
        "Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.",
    },
    {
      name: "Anne Wallace",
      status: "Verified Buyer",
      review:
        "Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!",
    },
  ];

  return (
    <>
      <div>ReviewContainer</div>
      {reviews.map((review,idx)=>{
        return (
            <ReviewCard key={idx} review={review}/>
        )
      })}
    </>
  );
};

export default ReviewContainer;
