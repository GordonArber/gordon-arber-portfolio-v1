import { IconType } from "react-icons";
import "./card.css";

interface CardProps {
  cardName: string;
  thumbnailUrl: string;
  techIconArray: {
    id: string;
    Component: IconType;
    color: string;
  }[];
}

export function Card({ cardName, techIconArray, thumbnailUrl }: CardProps) {
  return (
    <div className="card">
      <div className="card__header">
        <h1>{cardName}</h1>
      </div>
      <img src={thumbnailUrl} alt="Project Thumbnail" />
      <p>Technologies:</p>
      <div className="card__technologies">
        {techIconArray.map((techIcon) => (
          <div key={techIcon.id}>
            {<techIcon.Component color={techIcon.color} size="30" />}
          </div>
        ))}
      </div>
    </div>
  );
}
