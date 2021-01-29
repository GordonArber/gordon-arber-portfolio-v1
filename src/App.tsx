import "./App.css";
import { RoundButton } from "./component/RoundButton";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaRegFilePdf,
  FaTwitter,
} from "react-icons/fa";

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
            <RoundButton target="_blank" url="Resume.pdf" Icon={FaRegFilePdf} />
            <RoundButton
              target="_blank"
              url="mailto:gordon.arber@gmail.com"
              Icon={FaEnvelope}
            />
          </div>
        </div>
        <div className="foot-content">
          <div className="footer-bottom">
            <a
              href="https://github.com/GordonArber"
              rel="nofollow"
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
