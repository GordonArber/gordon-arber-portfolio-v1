import "./App.css";
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
      <div className="page-wrapper">
        <div className="content-wrapper">
          <h1>Hi, I'm Gordon</h1>
          <p className="se-text">Full Stack Software Engineer</p>
          <div className="buttons-wrapper">
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
        <div className="projects">
          <h1>Projects:</h1>
          <div className="projects__cards">
            <a
              href="https://chat-app-a8200.web.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card
                cardName="WhatsApp Clone"
                thumbnailUrl="./chatapp_ss.jpg"
                TechIcon1={FaReact}
                TechIcon2={SiTypescript}
                TechIcon3={SiFirebase}
                icon1Color="#57D3F5"
                icon2Color="#0076C6"
                icon3Color="#F7C62F"
              />
            </a>
          </div>
        </div>

        <div className="foot-content">
          <div className="footer-bottom">
            <a
              href="https://github.com/GordonArber/gordon-arber-portfolio-v1"
              rel="noopener noreferrer nofollow"
              target="_blank"
            >
              <div className="copyright">
                &copy; <span className="year">2021</span> Built by Gordon Arber
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
