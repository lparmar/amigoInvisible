'use client';

import BaseTable from '@/components/ui/BaseTable';

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

export default function TableSchedules({ data }) {
  return <BaseTable title="Usuarios" columns={columnas} data={data} />;
}
