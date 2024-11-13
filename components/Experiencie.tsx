import React from "react";
import Tittle from "./Title";
import { MdWork } from "react-icons/md";
import ExperienceCard from "./ExperienceCard";
import { SiBurgerking } from "react-icons/si";
import { GiCargoShip } from "react-icons/gi";
import { IoLogoJavascript } from "react-icons/io";

const Experience = () => {
  return (
    <div className="wrapper">
      <Tittle text="Experiencia" icon={<MdWork />} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ExperienceCard 
        title="Burger King"
        subTitle="2019 - 2021 / Atencion al cliente - Marketing - Cocina - Control de stock"
        icon={<SiBurgerking />}
        />
         <ExperienceCard 
        title="Desarrollador Freelance"
        subTitle="2024 - Actualidad / Desarrollo de paginas web y aplicaciones moviles"
        icon={<IoLogoJavascript />}
        />
        <ExperienceCard 
        title="MMCS"
        subTitle="2022 - 2024 / Sistema Translog - Jquery - JavaScript - SQL - NodeJS"
        icon={<GiCargoShip />}
        />
       
      </div>
    </div>
  );
};

export default Experience;
