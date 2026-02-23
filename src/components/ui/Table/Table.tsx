import { useState } from "react";

import type { IUser } from "../../../types/User";

import { Link } from "react-router";

import styled from "./Table.module.css";

import ViewIcon from "../../../assets/view-icon.svg";
import ViewHoverIcon from "../../../assets/view-hover-icon.svg";

import EditIcon from "../../../assets/edit-icon.svg";
import EditHoverIcon from "../../../assets/edit-hover-icon.svg";

import DeleteIcon from "../../../assets/delete-icon.svg";
import DeleteHoverIcon from "../../../assets/delete-hover-icon.svg";

import SearchNotFoundIcon from "../../../assets/search-not-found-icon.svg";

interface TableColumn {
  name: string;
  width?: string;
}

interface TableProps {
  columns: TableColumn[];
  rows: IUser[];
  handleDeleteUser: (userId: number) => void;
  searchValue: string;
}

const Table: React.FC<TableProps> = ({
  columns,
  rows,
  searchValue,
  handleDeleteUser,
}) => {
  const showSearchNotFound = searchValue.length > 0 && rows.length === 0;

  const [isViewHover, setIsViewHover] = useState<boolean>(false);
  const [isEditHover, setIsEditHover] = useState<boolean>(false);
  const [isDeleteHover, setisDeleteHover] = useState<boolean>(false);

  return (
    <div className="h-full">
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

        {showSearchNotFound === false && (
          <tbody>
            {rows.map((row) => (
              <tr key={row.id}>
                <td>{row.name}</td>
                <td className={styled.actionsContainer}>
                  <button
                    onMouseEnter={() => setIsViewHover(true)}
                    onMouseLeave={() => setIsViewHover(false)}
                    className={styled.button}
                  >
                    {isViewHover ? <ViewHoverIcon /> : <ViewIcon />}
                  </button>
                  <Link to={`${row.id}/edit`}>
                    <button
                      onMouseEnter={() => setIsEditHover(true)}
                      onMouseLeave={() => setIsEditHover(false)}
                      className={styled.button}
                    >
                      {isEditHover ? <EditHoverIcon /> : <EditIcon />}
                    </button>
                  </Link>
                  <button
                    className={styled.button}
                    onMouseEnter={() => setisDeleteHover(true)}
                    onMouseLeave={() => setisDeleteHover(false)}
                    onClick={() => handleDeleteUser(row.id)}
                  >
                    {isDeleteHover ? <DeleteHoverIcon /> : <DeleteIcon />}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </table>

      {showSearchNotFound && (
        <div className="h-[80%] bg-white shadow-[0px_1px_4px_#00000029] rounded-[5px] flex flex-col justify-center items-center w-full">
          <SearchNotFoundIcon />

          <p className="mt-2 text-[#0B2B25] text-[1.5rem] font-bold">
            Nenhum Resultado Encontrado
          </p>
          <p className="text-[#0B2B25] text-[18px] font-medium opacity-[0.89] text-center">
            Não foi possível achar nenhum resultado para sua busca.
          </p>
          <p className="text-[#0B2B25] text-[18px] font-medium opacity-[0.89] text-center">
            Tente refazer a pesquisa para encontrar o que busca.
          </p>
        </div>
      )}
    </div>
  );
};

export default Table;
