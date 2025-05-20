const Startup = () => {
  return (
    <div>
      <div className="bg-img h-screen relative">
        <div className="overlay"></div>
        <div className="absolute top-[40px] left-[20px] md:left-[40px] max-w-[803px]">
          <h1 className="text-[16px] font-light text-[#fff] uppercase mb-[15px]">
            Posted on <b className="font-bold">startup</b>
          </h1>
          <p className="text-[30px] md:text-[56px] font-bold text-[#fff] mb-[15px]">
            Step-by-step guide to choosing great font pairs
          </p>
          <p className="text-[16px] font-light text-[#fff] mb-[15px] ">
            By <b className="text-[#FFD050]">James West </b>| May 23, 2022
          </p>
          <p className="text-[14px] md:text-[16px] font-light text-[#fff] mb-[15px]">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident.
          </p>
          <button className="bg-[#FFD050] px-6 py-2 ">Read More </button>
        </div>
      </div>
    </div>
  );
};

export default Startup;
