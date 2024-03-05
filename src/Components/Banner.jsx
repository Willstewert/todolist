const Banner = () => {
  return (
    <>
      <div className=" bg-slate-600 w-full py-[100px] ">
        {" "}
        <div className="max-w-[1240px] my-[100px] mx-auto text-center font-bold ">
          <div className="text-xl md:text-3xl md:my-10"> 
         <span className="text-rose-600">Hello ,</span> I am 
          </div>
          <h2 className="text-white text-3xl md:text-[80px] md:my-10">
            Web Developer
          </h2>
          <div className="text-[50px] text-white">Learn</div>
        </div>
      </div>
    </>
  );
};

export default Banner;
