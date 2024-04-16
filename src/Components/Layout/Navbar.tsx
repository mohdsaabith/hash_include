import { Button } from "antd";
import React from "react";
import { useRouter } from "next/router";
import { MenuOutlined } from "@ant-design/icons/lib/icons";
import { Link } from "react-scroll";

import { CiSearch } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import { HiOutlineShoppingBag } from "react-icons/hi2";

import Image from "next/image";

export default function Navbar() {
  const router = useRouter();
  const [colorChange, setColorchange] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", changeNavbarColor);
    }
  }, []);
  const changeNavbarColor = () => {
    if (window.scrollY >= 100) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  const handleOpen = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="">
      <div
        className={`bg-white h-[4rem] fixed w-full lg:py-4 py-2 z-[50] md:px-[5rem] sm:px-[2rem] px-[1rem]  transition-colors flex justify-between items-center  duration-300 scroll-smooth ${
          colorChange && "shadow-lg"
        }`}
      >
        <div className="flex justify-between items-center w-full">
          <div className="w-[20%]">
            <div className="text-xl font-bold">CYLEN.</div>
          </div>
          <div className="w-[60%]">
            <ul className="lg:flex lg:gap-10 justify-end  items-center hidden pr-[7rem]">
              <li>
                <div className="font-semibold">Home</div>
              </li>

              <li>
                <div className="font-semibold">Offers</div>
              </li>

              <li>
                <div className="font-semibold text-base flex justify-center items-center">
                  Products <MdKeyboardArrowDown />
                </div>
              </li>

              <li>
                <div className="font-semibold">New Arrivals</div>
              </li>

              <li>
                <div className="font-semibold">Sales</div>
              </li>
            </ul>
          </div>
          <div className="w-[20%] flex justify-center items-center gap-[1rem]">
            <div className="font-semibold flex justify-center items-center gap-1">
              <CiSearch />
              Search
            </div>
            <div className="border-r border-black h-[1rem]"></div>
            <div className="font-semibold flex justify-center items-center gap-1">
              Carts <HiOutlineShoppingBag />
            </div>
            <div className="font-semibold">
              <Button className="border-2 border-black font-semibold rounded-full flex justify-center items-center">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
        {/* <div className="lg:flex lg:gap-10  items-center hidden">
          <Button
            type="primary"
            className="bg-[#1bbc9d] transition  hover:-translate-y-1 "
          >
            Try it Free
          </Button>
        </div> */}
        <div className="md:hidden">
          <MenuOutlined
            className={`text-black text-xl hover:cursor-pointer hover:text-[#99ccff]`}
            onClick={handleOpen}
          />
        </div>
      </div>

      {open && (
        <div className="bg-white fixed pt-[2rem] z-40 text-[#98a0aa]  w-full h-[100vh] left-0 ease-in duration-700 transition-all lg:hidden">
          <div className="px-4 py-10 ">
            <div className="mb-5">
              <Link
                to={"home"}
                spy={true}
                smooth={true}
                duration={500}
                onClick={() => {
                  handleClose();
                  (router.pathname === "/aboutUs" ||
                    router.pathname === "/services") &&
                    router?.push("/#home");
                }}
              >
                <p className="">Home</p>
              </Link>
            </div>

            <div className="mb-5">
              <Link
                to={""}
                spy={true}
                smooth={true}
                duration={500}
                onClick={() => {
                  handleClose();
                  router?.push("/services");
                }}
              >
                <p className="">Services</p>
              </Link>
            </div>

            <div className="mb-5">
              <Link
                to={"clients"}
                spy={true}
                smooth={true}
                duration={500}
                onClick={() => {
                  handleClose();
                  (router.pathname === "/aboutUs" ||
                    router.pathname === "/services") &&
                    router?.push("/#clients");
                }}
              >
                <p className="">Clients</p>
              </Link>
            </div>

            <div className="mb-5">
              <Link
                to={""}
                spy={true}
                smooth={true}
                duration={500}
                onClick={() => {
                  handleClose();
                  router?.push("/aboutUs");
                }}
              >
                <p className="">About Us</p>
              </Link>
            </div>

            <div className="mb-5">
              <Link
                to={"contact"}
                spy={true}
                smooth={true}
                duration={500}
                onClick={() => {
                  handleClose();
                  (router.pathname === "/aboutUs" ||
                    router.pathname === "/services") &&
                    router?.push("/#contact");
                }}
              >
                <p className="">Contact Us</p>
              </Link>
            </div>
            {/* <a href="#" onClick={handleClose}>
              <Button
                type="primary"
                className="bg-[#1bbc9d] transition hover:-translate-y-1"
              >
                Try it Free
              </Button>
            </a> */}
          </div>
        </div>
      )}
    </div>
  );
}
