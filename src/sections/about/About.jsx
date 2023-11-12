import { IoMdHand } from "react-icons/io";
import { BsTools } from "react-icons/bs";
import { RiPlantFill } from "react-icons/ri";
import { BiWorld } from "react-icons/bi";
import { FaHandshake } from "react-icons/fa";

import classes from "./About.module.scss";

const About = () => {
  return (
    <section className={classes["section-about"]}>
      <div className={classes["about-wrapper"]}>
        <h2 className={classes["about-heading"]}>About Me</h2>

        <p>
          <IoMdHand className={classes.icon} /> Hello there! I&rsquo;m Paul, a
          passionate and self-taught web developer with three years of hands-on
          experience. I have a deep-rooted love for coding and am skilled in a
          range of technologies that span both front-end and back-end
          development.
        </p>

        <h3>
          <BsTools className={classes.icon} /> Skills & Technologies
        </h3>
        <ul>
          <li>Front-end: HTML, CSS, JavaScript, SASS, React.js</li>
          <li>Back-end: Node.js, Express, Mongoose, Postman</li>
          <li>
            Full Stack Applications: Proficient in building end-to-end web
            solutions
          </li>
        </ul>

        <h3>
          <RiPlantFill className={classes.icon} /> Continuous Learning
        </h3>
        <p>
          I believe in lifelong learning and have recently expanded my skill set
          to include Node.js. I&rsquo;m currently honing my abilities by
          creating full-stack applications that solve real-world problems.
        </p>

        <h3>
          <BiWorld className={classes.icon} /> Availability & Flexibility
        </h3>
        <p>
          I&rsquo;m actively seeking my first role in the industry and am
          available to start immediately. Open to both remote work and
          relocation, I&rsquo;m flexible and willing to adapt to different work
          environments.
        </p>

        <h3>
          <FaHandshake className={classes.icon} /> Let&rsquo;s Connect!
        </h3>
        <p>
          I&rsquo;m eager to bring my dedication and technical skills to a
          dynamic team. If you&rsquo;re interested in collaborating or have any
          opportunities, feel free to contact me.
        </p>
      </div>
    </section>
  );
};

export default About;
