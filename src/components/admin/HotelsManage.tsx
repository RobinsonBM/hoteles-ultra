import "../../styles/components/admin/HotelsManage.scss";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/react";
import { useHotelsContext } from "../../context/HotelsProvider";
import { HotelModel } from "../../types";

const columns = [
  {
    key: "name",
    label: "Hoteles",
  },
  {
    key: "destiny",
    label: "Acciones",
  },
  {
    key: "email",
    label: "Acciones",
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
              {(columnKey) => (
                <>
                  <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                  <TableCell>{item.id}</TableCell>
                </>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};
