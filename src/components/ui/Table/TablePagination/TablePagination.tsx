import FirstPageIcon from "../../../../assets/first-page-icon.svg";
import LastPageIcon from "../../../../assets/last-page-icon.svg";
import LeftArrowIcon from "../../../../assets/left-arrow-icon.svg";
import RightArrowIcon from "../../../../assets/right-arrow-icon.svg";

interface TablePaginationProps {
  totalItems: number;
  itemsByPage: number;
  currentPage: number;
}

const TablePagination: React.FC<TablePaginationProps> = ({
  totalItems,
  itemsByPage,
  currentPage,
}) => {
  const leftPages = Math.ceil(totalItems / itemsByPage);

  return (
    <div className="w-full flex justify-between items-center">
      <p className="text-[#0B2B25] text-[14px] font-medium">
        Total de itens: <b>{totalItems ?? "-"}</b>
      </p>

      <div className="flex items-center">
        <p className="text-[#0B2B25] text-[14px] font-medium">
          Itens por página <b>{itemsByPage}</b>
        </p>

        <div className="flex gap-1 items-center ml-6 mr-3">
          <button className="h-11 w-8 flex items-center justify-center">
            <FirstPageIcon />
          </button>
          <button className="h-11 w-8 flex items-center justify-center">
            <LeftArrowIcon height={12} width={12} />
          </button>
          <div className="bg-[#0290A4] rounded-[5px] px-5 py-3.5 text-[14px] text-white font-bold">
            {currentPage}
          </div>
          <button className="h-11 w-8 flex items-center justify-center">
            <RightArrowIcon height={12} width={12} className="rotate-180" />
          </button>
          <button className="h-11 w-8 flex items-center justify-center">
            <LastPageIcon />
          </button>
        </div>

        <p className="text-[#0B2B25] text-[14px] font-medium">de {leftPages}</p>
      </div>
    </div>
  );
};

export default TablePagination;
