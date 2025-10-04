"use client";
import Image from "next/image";
import { use, useState } from "react";

export default function Home() {
  const listadoAlumnos = [
    { nombre: "Alumno 1", edad: 20, online: false },
    { nombre: "Alumno 2", edad: 22, online: true },
    { nombre: "Alumno 3", edad: 19, online: true },
  ];

  return (
    <div className="p-8 max-h-screen">
      <div>
        <Alumno nombre={"Luis"} edad="34" online="true" />
      </div>
      <ListadoAlumnos listado={listadoAlumnos} />
    </div>
  );
}

const ListadoAlumnos = ({ listado }) => {
  return (
    <div>
      {listado.map((alumno) => (
        <Alumno {...alumno} />
      ))}
    </div>
  );
};

const Alumno = ({ nombre, edad, online }) => {
  const [onlineAlumno, setOnlineAlumno] = useState(online);

  return (
    <li className="flex gap-4 mb-4 border border-white rounded p-4 shadow-sm">
      <button
        className="bg-white rounded p-2 text-black"
        onClick={() => setOnlineAlumno(true)}
      >
        Presioname
      </button>
      {onlineAlumno ? "🟢" : "🔴"}
      {nombre} {edad}
    </li>
  );
};
