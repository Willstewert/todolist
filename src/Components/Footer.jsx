import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { FaTwitterSquare } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
const Footer = () => {
  return (
    <>
      <div className="py-5 bg-slate-800 px-28">
        <div className="grid md:grid-cols-4 ">
          <div className="">
            {" "}
            <div className="text-white flex  items-center text-2xl ">
              <AiOutlineInstagram />
              <span>Instagram</span>
            </div>
            <div className="text-white flex  items-center text-2xl ">
              <AiFillFacebook />
              <span>Facebook</span>
            </div>
            <div className="text-white flex  items-center text-2xl ">
              <FaTwitterSquare />
              <span>Facebook</span>
            </div>
            <div className="text-white flex  items-center text-2xl ">
              <AiFillLinkedin />
              <span>Facebook</span>
            </div>
          </div>
          <div className="">
            <input
              type="text"
              className="border-slate-950 outline-none rounded-sm "
              placeholder="enter"
            />
            <button className="bg-slate-950 text-white px-4 rounded-sm">
              Email
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
