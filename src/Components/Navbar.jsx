import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="bg-[#000000] p-4 fixed left-0 right-0">

      <div className="max-w-[1240px] text-white items-center border-black mx-auto flex justify-between">
        <div className=" font-bold">Portfolio</div>
        <ul
          className={
            toggle
              ? ` pl-5 pb-5 w-full fixed top-[50px] left-0 bg-black `
              : `hidden md:flex text-wrap gap-5`
          }
        >
          <li>Home</li>
          <li>About</li>
          <li>Service</li>
          <li>Contact</li>
        </ul>
        {/* <ul
          className={`duration-300 w-full md:hidden bg-black fixed top-[50px] 
        ${toggle ? `left-0` : `left-[-100%]`}
        `}
        >
          <li className="p-3">Home</li>
          <li className="p-3">About</li>
          <li className="p-3">Service</li>
          <li className="p-3">Contact</li>
        </ul> */}
        <div className="md:hidden block flex">
          {toggle ? (
            <AiOutlineClose onClick={() => setToggle(!toggle)} />
          ) : (
            <AiOutlineMenu onClick={() => setToggle(!toggle)} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
