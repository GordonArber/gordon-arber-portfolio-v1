import { IconType } from "react-icons";
import "./card.css";

interface CardProps {
  cardName: string;
  icon1Color: string;
  icon2Color: string;
  icon3Color: string;
  TechIcon1: IconType;
  TechIcon2: IconType;
  TechIcon3: IconType;
  thumbnailUrl: string;
}

export function Card({
  cardName,
  icon1Color,
  icon2Color,
  icon3Color,
  TechIcon1,
  TechIcon2,
  TechIcon3,
  thumbnailUrl,
}: CardProps) {
  return (
    <div className="card">
      <div className="card__header">
        <h1>{cardName}</h1>
      </div>
      <img src={thumbnailUrl} alt="Project Thumbnail" />
      <p>Technologies:</p>
      <div className="card__technologies">
        <TechIcon1 color={icon1Color} />
        <TechIcon2 color={icon2Color} />
        <TechIcon3 color={icon3Color} />
      </div>
    </div>
  );
}
