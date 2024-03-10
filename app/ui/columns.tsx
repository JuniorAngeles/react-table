'use client';
import { ColumnDef } from '@tanstack/react-table';
import data from '@/app/lib/MOCK_DATA.json';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/app/ui/dropdown-menu';
import { Button } from './button';
import { ArrowUpDown, MoreHorizontal } from 'lucide-react';
import { Checkbox } from './checkbox';

export const columns: ColumnDef<typeof data>[] = [
  {
    id: 'select',
    header: ({ table }) => {
      return (
        <Checkbox
          checked={table.getIsAllPageRowsSelected()}
          onCheckedChange={(value: any) => {
            table.toggleAllPageRowsSelected(!!value);
          }}
        />
      );
    },
    cell: ({ row }) => {
      return (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value: any) => {
            row.toggleSelected(!!value);
          }}
        />
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => {
            column.toggleSorting(column.getIsSorted() === 'asc');
          }}
        >
          ID
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    accessorKey: 'id',
  },
  {
    accessorKey: 'first_name',
    header: 'Nombre',
  },
  {
    accessorKey: 'last_name',
    header: 'Apellido',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'gender',
    header: 'Genero',
  },
  {
    accessorKey: 'ip_address',
    header: 'IP Address',
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const person = row.original;

      return (
        <DropdownMenu>
          <Button variant='ghost' className='h-8 w-8 p-0' />
          <DropdownMenuContent>
            <DropdownMenuLabel>Acciones</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => {
                window.location.href = `/dashboard/inventori/edit/`;
              }}
            >
              editar
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                window.location.href = `/dashboard/inventori/delete/`;
              }}
            >
              Eliminar
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
