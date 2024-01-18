import "../../styles/components/admin/HotelsManage.scss";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import { useHotelsContext } from "../../context/HotelsProvider";
import { HotelModel } from "../../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const columns = [
  {
    key: "name",
    label: "Hoteles",
  },
  {
    key: "destiny",
    label: "Destino",
  },
  {
    key: "email",
    label: "Correo Electronico",
  },
  {
    key: "telephone",
    label: "Telefono",
  },
  {
    key: "actions",
    label: "Acciones",
  },
];

export const HotelsManage = () => {
  const { hotels } = useHotelsContext();

  return (
    <div className="hotels-manage">
      <div className=" header-manage d-flex justify-content-between align-items-center">
        <h3>Gestionar Hoteles</h3>
        <button className="btn btn-secondary">Nuevo Hotel</button>
      </div>
      <Table aria-label="Example static collection table" className="my-4">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody items={hotels}>
          {(item: HotelModel) => (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.destiny}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.telephone}</TableCell>
              <TableCell>
                <FontAwesomeIcon icon={faEdit} className='icon-action' onClick={() => console.log('Edit'+ item.id)} />
                <FontAwesomeIcon icon={faTrash} className='icon-action' onClick={() => console.log('Delete'+ item.id)} />
              </TableCell>

              {/* {(columnKey) => (
                <TableCell>{getKeyValue(item, columnKey)}</TableCell>
              )} */}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};
