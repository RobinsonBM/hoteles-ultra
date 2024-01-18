import '../../styles/components/admin/HotelsManage.scss';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from '@nextui-org/react';

const columns = [
    {
        key: 'nombre',
        label: 'Hoteles',
    },
    {
        key: 'acciones',
        label: 'Acciones',
    },
];

export const HotelsManage = () => {
    return (
        <div className='hotels-manage'>
            <div className=' header-manage d-flex justify-content-between align-items-center'>
                <h3>Gestionar Hoteles</h3>
                <button className='btn btn-secondary'>Nuevo Hotel</button>
            </div>
            <Table aria-label='Example static collection table'>
                <TableHeader columns={columns}>
                    {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
                </TableHeader>
                <TableBody>
                    <TableRow key='1'>
                        <TableCell>Tony Reichert</TableCell>
                        <TableCell>CEO</TableCell>
                    </TableRow>
                    <TableRow key='2'>
                        <TableCell>Zoey Lang</TableCell>
                        <TableCell>Technical Lead</TableCell>
                    </TableRow>
                    <TableRow key='3'>
                        <TableCell>Jane Fisher</TableCell>
                        <TableCell>Senior Developer</TableCell>
                    </TableRow>
                    <TableRow key='4'>
                        <TableCell>William Howard</TableCell>
                        <TableCell>Community Manager</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
};
