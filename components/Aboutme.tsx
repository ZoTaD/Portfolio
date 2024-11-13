import React from "react";
import Title from "./Title";
import { IoInformationCircle } from "react-icons/io5";

const Aboutme = () => {
  return (
    <div className="wrapper">
      <Title text="Sobre mi" icon={<IoInformationCircle />} />
      <div className="text-lg tracking-wide flex flex-col gap-6">
        <p>
          Soy desarrollador con experiencia en JavaScript, jQuery y SQL, y un
          gran interés por la ciberseguridad y el desarrollo de aplicaciones
          eficientes y seguras. Disfruto resolver problemas complejos y crear
          soluciones prácticas que mejoren la experiencia del usuario.
        </p>
        <p>
          Mi objetivo es seguir creciendo en el mundo de la tecnología,
          explorando nuevas herramientas y frameworks, y contribuir a proyectos
          significativos en un entorno de trabajo dinámico.
        </p>
      </div>
    </div>
  );
};

export default Aboutme;
