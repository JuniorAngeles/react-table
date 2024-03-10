import Image from 'next/image';
import { columns } from './ui/columns';
import data from '@/app/lib/MOCK_DATA.json';
import { DataTable } from './ui/dataTable';
export default function page() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <DataTable columns={columns} data={data} />
    </main>
  );
}
