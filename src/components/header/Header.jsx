import { BsLinkedin, BsGithub, BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

import classes from "./Header.module.scss";

const Header = () => {
  return (
    <header>
      <div className={classes["text-wrapper"]}>
        <h1>Paul Harris</h1>
        <h1>Front-End Developer</h1>
        <h1>MERN Stack</h1>
        <p className={classes["header-text"]}>Based in Scotland</p>
        <p className={classes["header-text"]}>Available for work</p>
        <div className={classes["links-wrapper"]}>
          <a
            className={classes["links"]}
            href="https://github.com/paul172v"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub className={classes.icon} /> GitHub
          </a>
          <a
            className={classes["links"]}
            href="https://www.linkedin.com/in/paul-harris-86677b1ba/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin className={classes.icon} /> LinkedIn
          </a>
          <a className={classes["links"]} href="mailto:paul172v@aol.com">
            <MdEmail className={classes.icon} /> paul172v@aol.com
          </a>
          <a className={classes["links"]} href="tel:+447375384303">
            <BsFillTelephoneFill className={classes.icon} /> 07375 384 303
          </a>
        </div>
      </div>
      <img className={classes.photo} src="photo.jpg" alt="photograph" />
    </header>
  );
};

export default Header;
