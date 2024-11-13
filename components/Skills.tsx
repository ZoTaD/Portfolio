import React from "react";
import Tittle from "./Title";
import { FaConnectdevelop } from "react-icons/fa";
import SKillInput from "./SkillInput";


const Skills = () => {
  return (
    <div className="wrapper">
      <Tittle text="Habilidades" icon={<FaConnectdevelop />} />
      <div className="flex gap-4 flex-wrap">
        <SKillInput title={"JavaScript"} />
        <SKillInput title={"Jquery"} />
        <SKillInput title={"MySQL"} />
        <SKillInput title={"React"} />
        <SKillInput title={"Angular"} />
        <SKillInput title={"Nodejs"} />
        <SKillInput title={"Docker"} />
      </div>
    </div>
  );
};

export default Skills;
