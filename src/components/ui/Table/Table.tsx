import type { IUser } from "../../../types/User";

import { Link } from "react-router";

import styled from "./Table.module.css";

import ViewIcon from "../../../assets/view-icon.svg";
import EditIcon from "../../../assets/edit-icon.svg";
import DeleteIcon from "../../../assets/delete-icon.svg";

interface TableColumn {
  name: string;
  width?: string;
}

interface TableProps {
  columns: TableColumn[];
  rows: IUser[];
}

const Table: React.FC<TableProps> = ({ columns, rows }) => {
  return (
    <table className={styled.table}>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <td width={column.width} key={index}>
              {column.name}
            </td>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.id}>
            <td>{row.name}</td>
            <td className={styled.actionsContainer}>
              <button className={styled.button}>
                <ViewIcon />
              </button>
              <Link to={`${row.id}/edit`}>
                <button className={styled.button}>
                  <EditIcon />
                </button>
              </Link>
              <button className={styled.button}>
                <DeleteIcon />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
