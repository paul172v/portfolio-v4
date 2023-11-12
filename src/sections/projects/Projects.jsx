import classes from "./Projects.module.scss";

import ProjectCard from "../../components/project-card/ProjectCard";

const Projects = () => {
  return (
    <section className={classes["section-projects"]}>
      <div className={classes["projects-wrapper"]}>
        <h2 className={classes["projects-heading"]}>Projects</h2>
        <div className={classes["u-row"]}>
          <ProjectCard
            image="/kayleigh-parks-art.png"
            title="Kayleigh Parks Art"
            liveSite="https://kayleigh-parks-art.netlify.app/"
            frontEndCode="https://github.com/paul172v/kayleigh-parks-art"
            features={["React.js", "React-Scroll", "Modal Gallery", "SASS"]}
            description="This is a basic one page brochure website that uses a real-world design. It's not very complicated but it is responsive, uses simple components and props. It uses a library called react-scroll to scroll to anchors and there is a hand coded modal gallery."
          />
          <ProjectCard
            image="/view-menus.png"
            title="The View Menus"
            liveSite="https://172v-view-online-menus.netlify.app/"
            frontEndCode="https://github.com/paul172v/view_menus"
            backEndCode="https://github.com/paul172v/view-backend-server"
            features={[
              "Full Stack",
              "React.js",
              "Conditional Rendering",
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
            liveSite="https://github.com/paul172v/view-menu-interface-form"
            frontEndCode="https://172v-view-interface-form.netlify.app/"
            backEndCode="https://github.com/paul172v/view-backend-server"
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
