'use client';
import DataTable from 'react-data-table-component';

const columnas = [
  {
    name: 'Nombre',
    selector: row => row.nombre,
    sortable: true,
  },
  {
    name: 'Edad',
    selector: row => row.edad,
    sortable: true,
  },
];

const datos = [
  { id: 1, nombre: 'Carlos', edad: 28 },
  { id: 2, nombre: 'Lucía', edad: 34 },
];

export default function MiTabla() {
  return (
    <DataTable
      title="Usuarios"
      columns={columnas}
      data={datos}
      pagination
      highlightOnHover
      responsive
    />
  );
}
