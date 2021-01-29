import "./round-button.css";
import { IconType } from "react-icons";

interface RoundButtonProps {
  Icon: IconType;
  url: string;
  target?: string;
}

export function RoundButton({ Icon, target, url }: RoundButtonProps) {
  return (
    <a href={url} rel="nofollow" target={target} className="button-wrapper">
      <Icon color="white" size="2em" />
    </a>
  );
}
