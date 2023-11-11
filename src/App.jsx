import classes from "./App.module.scss";

import Header from "./components/header/Header";
import About from "./sections/about/About";
import Projects from "./sections/projects/Projects";

const App = () => {
  return (
    <div className={classes["page-wrapper"]}>
      <Header />
      <About />
      <Projects />
    </div>
  );
};

export default App;
