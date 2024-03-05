const Skills = () => {
  return (
    <>
      <div className=" w-20 mx-auto  ">
        <h1 className="border-b-2  border-orange-700 border-spacing-1 text-3xl font-bold mt-10">
          Skills
        </h1>
      </div>
      <div className="max-w-[1240px] mx-auto md:grid grid-cols-6 gap-10 my-20 text-center items-center">
        <div className=" p-5 ">
          <img
            className="mx-auto w-[50%] md:w-[100%]"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/1200px-React_Logo_SVG.svg.png"
            alt=""
          />
        </div>
        <div className=" p-5 ">
          <img
            className="mx-auto w-[50%] md:w-[100%]"
            src="https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png"
            alt=""
          />
        </div>
        <div className=" p-5 ">
          <img
            className="mx-auto w-[50%] md:w-[100%]"
            src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
            alt=""
          />
        </div>
        <div className=" p-5 ">
          <img
            className="mx-auto w-[50%] md:w-[100%]"
            src="https://everyday.codes/wp-content/uploads/2020/01/0-U2DmhXYumRyXH6X1.png"
            alt=""
          />
        </div>
        <div className=" p-5 ">
          <img
            className="mx-auto w-[50%] md:w-[100%]"
            src="https://www.pngitem.com/pimgs/m/198-1985012_transparent-css3-logo-png-css-logo-transparent-background.png"
            alt=""
          />
        </div>
        <div className=" p-5 ">
          <img
            className="mx-auto w-[50%] md:w-[100%]"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Devicon-html5-plain.svg/2048px-Devicon-html5-plain.svg.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Skills;
