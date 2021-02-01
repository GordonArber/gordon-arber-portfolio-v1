import { IconType } from "react-icons";
import { AiFillGithub } from "react-icons/ai";
import { RoundButton } from "../RoundButton/RoundButton";
import "./styles/card.css";

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
      <div className="card__Bottom">
        <div className="card__technologies">
          {techIconArray.map((techIcon) => (
            <div className="card__technologyItem" key={techIcon.id}>
              <techIcon.Component color={techIcon.color} size="30" />
            </div>
          ))}
        </div>

        <div className="card__git">
          <RoundButton
            Icon={AiFillGithub}
            target="_blank"
            url="https://github.com/GordonArber/chat-app"
          />
        </div>
      </div>
    </div>
  );
}
