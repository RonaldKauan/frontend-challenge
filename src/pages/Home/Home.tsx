import React from "react";

import Welcome from "../../assets/welcome.svg";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-[2.375rem] font-bold">Home</h1>

      <div className="bg-white pt-6 px-7 shadow-[0px_1px_4px_#00000029] rounded-[5px]">
        <h2 className="text-[2rem] font-bold text-[#0D1931]">Olá Millena!</h2>
        <h3 className="text-[1.125rem] font-semibold text-[#0D1931]">
          22, Novembro 2024
        </h3>

        <div className="flex flex-col gap-4 mt-20 mb-30">
          <div className="self-center">
            <img src={Welcome} alt="Welcome Image" />
          </div>

          <div className="flex justify-center self-center py-5 border border-[#272846] border-solid rounded-[9px] w-[40%]">
            <p className="font-bold text-[1.75rem]">Bem-vindo ao WenLock!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
