"use client";
import { useState } from "react";
import DataTable from "react-data-table-component";
import { EyeIcon } from "@heroicons/react/24/solid";
import Link from "next/link"; 

const diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

function generarCalendario(mes, año) {
  const primerDia = new Date(año, mes, 1);
  const ultimoDia = new Date(año, mes + 1, 0);
  const diasEnMes = ultimoDia.getDate();
  const primerDiaSemana = (primerDia.getDay() + 6) % 7;

  const semanas = [];
  let diaActual = 1 - primerDiaSemana;

  for (let i = 0; i < 5; i++) {
    const semana = { id: i + 1 };
    diasSemana.forEach((dia, index) => {
      semana[dia] = diaActual > 0 && diaActual <= diasEnMes ? diaActual : null;
      diaActual++;
    });
    semanas.push(semana);
  }

  return semanas;
}

const Schedule = () => {
  const [mes, setMes] = useState(6); // julio (0-indexed)
  const [anio, setAnio] = useState(2025);

  const data = generarCalendario(mes, anio);

  const columns = [
  ...diasSemana.map((dia) => ({
    name: dia,
    selector: row => row[dia],
    center: true,
    cell: row =>
      row[dia] ? (
        <div className="text-center">{row[dia]}</div>
      ) : (
        ""
      ),
    })),
    {
      name: "Acciones",
      center: true,
      cell: (row, index) => (
        <div className="flex justify-center">
          <Link href={`/schedules/${index + 1}`}>
            <EyeIcon className="w-5 h-5 text-orange-500 cursor-pointer hover:scale-110 transition-transform" />
          </Link>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen flex justify-center p-6 bg-gray-100 font-[family-name:var(--font-geist-sans)]">
      <div className="w-full bg-white p-6 rounded-2xl shadow-lg flex flex-col">
        <h2 className="text-2xl font-bold mb-4">
          Calendario: {anio} - {mes + 1}
        </h2>
        <DataTable
          columns={columns}
          data={data}
          highlightOnHover
          striped
          responsive
          fixedHeader
          customStyles={{
            cells: {
              style: {
                minHeight: "6rem",
              },
            },
          }}
        />
      </div>
    </div>
  );
}

export default Schedule;