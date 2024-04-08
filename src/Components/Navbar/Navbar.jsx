import { useState } from "react";
import { IoSunny, IoClose, IoMoon } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import useDarkMode from "../../useDarkMode";

const Navbar = (props) => {
  const { isMobile } = props;

  const [isOpen, setIsOpen] = useState(false);
  const translateX = !isOpen ? "translate-x-[100%] opacity-0 " : "";
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  return (
    <>
      <nav className="flex items-center ">
        <div className="flex items-center ">
          <div className="text-20 font-bold mr-2">NerdCard</div>
          {isDarkMode ? (
            <IoSunny
              size={"24px"}
              color="#e9c46a"
              className="cursor-pointer"
              onClick={() => toggleDarkMode(!isDarkMode)}
            />
          ) : (
            <IoMoon
              size={"24px"}
              color="#e9c46a"
              className="cursor-pointer"
              onClick={() => toggleDarkMode(!isDarkMode)}
            />
          )}
        </div>
        <ul className="flex gap-10 ml-auto text-16 font-semibold">
          {isMobile ? (
            <RxHamburgerMenu
              size={"24px"}
              className="cursor-pointer"
              onClick={handleOpen}
            />
          ) : (
            <ul className="flex gap-10 ml-auto text-16 font-semibold">
              <li className="btn-hover">Features</li>
              <li className="btn-hover">Menu</li>
              <li className="btn-hover">Our story</li>
              <li className="btn-hover">Contact</li>
            </ul>
          )}
        </ul>
      </nav>
      <div
        className={`overflow-hidden  px-4 py-8 bg-gradient-to-b from-purple-900 to-purple-700 text-white  w-[100%] h-[100%] z-10 fixed top-0 right-0 ${translateX} transition-all duration-300`}
      >
        <div className="flex items-center pb-[32px] border-b-2 border-white">
          <div className="flex items-center">
            <div className="text-36 font-bold mr-2">NerdCard</div>
            <IoSunny size={"24px"} color="#e9c46a" className="cursor-pointer" />
          </div>
          <div className="flex ml-auto">
            <IoClose
              size={"36px"}
              className="cursor-pointer"
              onClick={handleOpen}
            />
          </div>
        </div>

        <div className="overflow-hidden py-[32px] text-start text-20 border-b-2 border-white">
          <p className="btn-hover">Features</p>
          <p className="btn-hover">Menu</p>
          <p className="btn-hover">Our story</p>
          <p className="btn-hover">Contact</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
