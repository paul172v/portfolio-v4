import classes from "./Projects.module.scss";

import ProjectCard from "../../components/project-card/ProjectCard";

const Projects = () => {
  return (
    <section className={classes["section-projects"]}>
      <div className={classes["projects-wrapper"]}>
        <h2 className={classes["projects-heading"]}>Projects</h2>
        <div className={classes["u-row"]}>
          <ProjectCard
            image="/view-menus.png"
            title="The View Menus"
            features={[
              "Full Stack",
              "React.js",
              "Node.js",
              "Responsive",
              "Filter",
              "SASS",
            ]}
            description="This is an online menu for a restaurant, based on a real menu from a real restaurant. It gets all of the different menus as arrays from a backend and database shared with 'The View Interface' meaning the menu can be updated elsewhere. Once it gets the menu arrays the site will automatically generate itself based on the information it has thanks to conditional rendering and good use of components. This project is light on hooks but I have coded a filter that will only show menu items that meet selected dietary requirements."
          />
          <ProjectCard
            image="/view-interface.png"
            title="The View Interface"
            features={[
              "Full Stack",
              "React.js",
              "Hooks & Props",
              "Conditional Rendering",
              "Node.js",
              "Express",
              "Mongoose",
              "CRUD Operations",
            ]}
            description="This is the sister site of The View Online Menus. It is basically a giant form that will allow users to update the menu arrays on a database. This project made frequent use of useState, useReducer, useEffect, useRef, useContext and the usePortal hooks. As well as good use of components and props. The backend uses Express and Mongoose, does basic CRUD operations and also has some error handling and a handler factory to make the CRUD operations more streamlined. It uses over 20 models and the routes and controllers are divided between the main, kids and drinks menus. This is my first time making a 'proper' fullstack application but I am pleased with the results. This is also mobile friendly."
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
