import StarImg from "../../assets/images/icon-star.svg";

const RatingCard = ({ text }) => {
  return (
    <div className="bg-Light-Grayish-Magenta rounded-lg p-4">
      <div className="flex gap-2 place-content-center mb-4">
        <img src={StarImg} alt="icono de una estrella" className="size-4"/>
        <img src={StarImg} alt="icono de una estrella" className="size-4"/>
        <img src={StarImg} alt="icono de una estrella" className="size-4"/>
        <img src={StarImg} alt="icono de una estrella" className="size-4"/>
        <img src={StarImg} alt="icono de una estrella" className="size-4"/>
      </div>
      <p className="text-center text-[1.0625rem] text-Very-Dark-Magenta font-bold">{text}</p>
    </div>
  );
};

export default RatingCard;
