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
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <ListadoAlumnos listado={listadoAlumnos} />
    </div>
  );
}

const ListadoAlumnos = ({ listado }) => {
  return (
    <ul>
      {listado.map((alumno) => (
        <Alumno {...alumno} />
      ))}
    </ul>
  );
};

const Alumno = ({ nombre, edad, online }) => {
  const [onlineAlumno, setOnlineAlumno] = useState(online);

  return (
    <li className="flex gap-4 mb-4">
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
