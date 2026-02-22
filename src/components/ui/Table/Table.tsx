import type { IUser } from "../../../types/User";

import styled from "./Table.module.css";

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
          <tr>
            <td>{row.name}</td>
            <td>ACTIONS</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
