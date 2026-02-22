import React, { useState } from "react";

import TablePagination from "../../components/ui/Table/TablePagination/TablePagination";
import Search from "../../components/ui/Search/Search";
import Button from "../../components/ui/Button/Button";

import PlusIcon from "../../assets/plus-icon.svg";
import DisabledPlusIcon from "../../assets/disabled-plus-icon.svg";

import type { IUser } from "../../types/User";
import Table from "../../components/ui/Table/Table";

const Users: React.FC = () => {
  const [users] = useState<IUser[]>([
    { name: "Raimundo Neto Abreu Teixeira" },
    { name: "Ronald Kauan da Mota Paz" },
  ]);

  const [search, setSearch] = useState<string>("");

  const showTable = users.length > 0;

  const disabledButton = false;

  const handleSearch = (newValue: string) => {
    setSearch(newValue);
  };

  return (
    <div className="h-full flex flex-col gap-4">
      <h1 className="text-[2.375rem] font-bold">Usuários</h1>

      <div className="flex justify-between">
        <Search value={search} handleValue={handleSearch} />

        <Button disabled={disabledButton}>
          {disabledButton ? <DisabledPlusIcon /> : <PlusIcon />}
          Cadastrar Usuário
        </Button>
      </div>

      {showTable}

      {showTable === true ? (
        <div className="h-[70%] w-full">
          <Table
            columns={[
              { name: "Nome", width: "85%" },
              { name: "Ações", width: "15%" },
            ]}
            rows={users}
          />
        </div>
      ) : (
        <div className="h-[80%] bg-white shadow-[0px_1px_4px_#00000029] rounded-[5px] flex flex-col justify-center items-center">
          <p className="text-[#0B2B25] text-[1.5rem] font-bold">
            Nenhum Usuário Registrado
          </p>
          <p className="text-[#0B2B25] text-[18px] font-medium opacity-[0.89]">
            Clique em “Cadastrar Usuário” para começar a cadastrar.
          </p>
        </div>
      )}

      <TablePagination currentPage={1} itemsByPage={15} totalItems={250} />
    </div>
  );
};

export default Users;
