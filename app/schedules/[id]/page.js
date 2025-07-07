"use client";
import { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { CalendarDaysIcon } from "@heroicons/react/24/solid";

const columnas = [
  {
    name: <div className="text-center w-full">Día</div>,
    selector: (row) => row.dia,
    cell: (row) => (
      <div className="flex items-center gap-2 w-1/2 m-auto">
        <CalendarDaysIcon className="w-5 h-5 text-orange-500 cursor-pointer" />
        <span>{row.dia}</span>
      </div>
    ),
    sortable: true,
  },
  {
    name: "Hora de entrada",
    selector: (row) => row.entrada,
    center: true,
  },
  {
    name: "Hora de salida",
    selector: (row) => row.salida,
    center: true,
  },
  {
    name: "Horas trabajadas",
    selector: (row) => row.horas,
    center: true,
  },
];

const datos = [
  { id: 1, dia: "Lunes", entrada: "08:00", salida: "16:00", horas: 8 },
  { id: 2, dia: "Martes", entrada: "08:00", salida: "16:00", horas: 8 },
  { id: 3, dia: "Miércoles", entrada: "08:00", salida: "15:30", horas: 7.5 },
  { id: 4, dia: "Jueves", entrada: "08:30", salida: "16:30", horas: 8 },
  { id: 5, dia: "Viernes", entrada: "09:00", salida: "15:00", horas: 6 },
  { id: 6, dia: "Sabado", entrada: "08:30", salida: "16:30", horas: 8 },
  { id: 7, dia: "Domingo", entrada: "09:00", salida: "15:00", horas: 6 },
];

const ScheduleShow = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen flex justify-center p-6 bg-gray-100 font-[family-name:var(--font-geist-sans)]">
      <div className="w-full bg-white p-6 rounded-2xl shadow-lg flex flex-col">
        <h2 className="text-2xl font-bold mb-4">Horarios</h2>
        <DataTable
          className="h-full"
          columns={columnas}
          data={datos}
          pagination
          highlightOnHover
          striped
          responsive
          fixedHeader
          customStyles={{
            cells: {
              style: {
                minHeight: "3.5rem",
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default ScheduleShow;
