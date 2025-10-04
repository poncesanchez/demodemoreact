import { useState } from "react";

export const ListadoAlumnos = ({ listado }) => {
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
        onClick={() => setOnlineAlumno(!onlineAlumno)}
      >
        Presioname
      </button>
      {onlineAlumno ? "🟢" : "🔴"}
      {nombre} {edad}
    </li>
  );
};
