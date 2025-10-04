"use client";
import Image from "next/image";
import { use, useState } from "react";
import { ListadoAlumnos } from "./ListadoAlunos";

export default function Home() {
  const listadoAlumnos = [
    { nombre: "Alumno 1", edad: 20, online: false },
    { nombre: "Alumno 2", edad: 22, online: true },
    { nombre: "Alumno 3", edad: 19, online: true },
  ];

  return (
    <div className="p-8 max-h-screen bg-teal-800">
      <div className="flex gap-4">
        <ListadoAlumnos listado={listadoAlumnos} />

        <ListadoAlumnos listado={listadoAlumnos} />

        <ListadoAlumnos listado={listadoAlumnos} />
      </div>
    </div>
  );
}
