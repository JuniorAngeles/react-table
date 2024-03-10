import xlsx, { IContent, IJsonSheet } from 'json-as-xlsx';
import data from './MOCK_DATA.json';

export async function downloadToExcelInventori(data: IContent[]) {
  const columns: IJsonSheet[] = [
    {
      sheet: 'Inventori',
      columns: [
        { label: 'ID', value: 'id' },
        { label: 'first_name', value: 'Nombre' },
        { label: 'last_name', value: 'Apellido' },
        { label: 'email', value: 'Email' },
        { label: 'gender', value: 'Genero' },
        { label: 'ip_address', value: 'Ip Address' },
      ],
      content: data,
    },
  ];

  const settings = {
    fileName: 'inventori Excel',
  };

  xlsx(columns, settings);
}
