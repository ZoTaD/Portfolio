import React, { ReactNode } from "react";
import Title from "./Title";
import { FaDocker } from "react-icons/fa";
import Glamm from "../public/img/Glamm.png";
import Image from "next/image";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <div className="wrapper">
      <Title text="Proyectos" icon={<FaDocker />} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        <ProjectsCard
          img={Glamm}
          title="Glamm Estetica"
          link="https://glammestetica.web.app/"
        />
        {/* <ProjectsCard
        img={Glamm}
        title='Glamm Estetica'
        link='https://glammestetica.web.app/'
        /> */}
      </div>
    </div>
  );
};

export default Projects;
