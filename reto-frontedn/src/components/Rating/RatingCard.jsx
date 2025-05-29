import StarImg from "../../assets/images/icon-star.svg";

const RatingCard = ({ text }) => {
  return (
    <div>
      <div>
        <img src={StarImg} alt="icono de una estrella" />
        <img src={StarImg} alt="icono de una estrella" />
        <img src={StarImg} alt="icono de una estrella" />
        <img src={StarImg} alt="icono de una estrella" />
        <img src={StarImg} alt="icono de una estrella" />
      </div>
      <div>{text}</div>
    </div>
  );
};

export default RatingCard;
