import SearchNotFound from "../../assets/search-not-found-icon.svg";

const NotFound = () => {
  return (
    <div className="w-full h-full bg-white flex flex-col items-center justify-center rounded-md gap-4">
      <SearchNotFound />
      <h1 className="text-[2.375rem] font-bold">Página não encontrada</h1>
    </div>
  );
};

export default NotFound;
