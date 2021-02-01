import "./app.css";
import { RoundButton } from "./component/RoundButton";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaReact,
  FaRegFilePdf,
  FaTwitter,
} from "react-icons/fa";
import { SiFirebase, SiTypescript } from "react-icons/si";
import { Card } from "./component/Card";

export function App() {
  return (
    <>
      <div className="app">
        <div className="app__Wrapper">
          <h1>Hi, I'm Gordon</h1>
          <p>Full Stack Software Engineer</p>
          <div className="app__buttonsWrapper">
            <RoundButton
              target="_blank"
              url="https://twitter.com/GordonArber"
              Icon={FaTwitter}
            />
            <RoundButton
              target="_blank"
              url="https://github.com/GordonArber"
              Icon={FaGithub}
            />
            <RoundButton
              target="_blank"
              url="https://www.linkedin.com/in/gordonarber/"
              Icon={FaLinkedinIn}
            />
            <RoundButton
              target="_blank"
              url="Gordon_Arber_Resume_1_30_21.pdf"
              Icon={FaRegFilePdf}
            />
            <RoundButton
              target="_blank"
              url="mailto:gordon.arber@gmail.com"
              Icon={FaEnvelope}
            />
          </div>
        </div>
        <div className="app__projects">
          <h2>Projects</h2>
          <div className="app__projectsCards">
            <a
              href="https://chat-app-a8200.web.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card
                cardName="WhatsApp Clone"
                thumbnailUrl="./chatapp.png"
                techIconArray={[
                  { id: "1", Component: FaReact, color: "#57D3F5" },
                  { id: "2", Component: SiTypescript, color: "#0076C6" },
                  { id: "3", Component: SiFirebase, color: "#F7C62F" },
                ]}
              />
            </a>
          </div>
        </div>

        <div className="app__footContent">
          <div className="app__footerBottom">
            <a
              href="https://github.com/GordonArber/gordon-arber-portfolio-v1"
              rel="noopener noreferrer nofollow"
              target="_blank"
            >
              <div className="copyright">
                &copy; <span className="year">2021</span> Designed & Built by
                Gordon Arber
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
