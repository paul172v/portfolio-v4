/* eslint-disable react/prop-types */
import classes from "./ProjectCard.module.scss";

const ProjectCard = (props) => {
  return (
    <div className={classes.wrapper}>
      <img className={classes.image} src={props.image} alt="preview image" />
      <h3 className={classes["project-title"]}>{props.title}</h3>
      <div className={classes["project-links-wrapper"]}>
        <a href={props.liveSite} className={classes["project-link"]}>
          Live Site
        </a>
        <a href={props.frontEndCode} className={classes["project-link"]}>
          GitHub Front End
        </a>
        <a href={props.backEndCode} className={classes["project-link"]}>
          GitHub Back End
        </a>
      </div>
      <h4 className={classes["project-sub-heading"]}>Key Features:</h4>
      <ul className={classes["project-features-ul"]}>
        {props.features.map((feature) => (
          <li className={classes.feature} key={feature}>
            {feature}
          </li>
        ))}
      </ul>
      <p className={classes["project-description"]}>{props.description}</p>
    </div>
  );
};

export default ProjectCard;
