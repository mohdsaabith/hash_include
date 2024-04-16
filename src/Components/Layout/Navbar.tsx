import { Button } from "antd";
import React from "react";
import { useRouter } from "next/router";
import { MenuOutlined } from "@ant-design/icons/lib/icons";
import { Link } from "react-scroll";
import manafeLogo from "../../public/images/manafe.svg";
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
        className={`bg-white h-[4rem] fixed w-full lg:py-4 py-2 z-[50] md:px-[10rem] sm:px-[2rem] px-[1rem]  transition-colors flex justify-between items-center  duration-300 scroll-smooth ${
          colorChange && "shadow-lg"
        }`}
      >
        <div className="flex justify-between items-center w-full">
          <div className="w-[20%]">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              onClick={() => {
                (router.pathname === "/aboutUs" ||
                  router.pathname === "/services") &&
                  router?.push("/#home");
              }}
            >
              <Image
                src={manafeLogo}
                className="w-[6rem] mr-[2rem] cursor-pointer"
                alt=""
              />
            </Link>
          </div>
          <div className="w-[80%]">
            <ul className="lg:flex lg:gap-10 justify-end  items-center hidden pr-[7rem]">
              <li>
                <Link
                  to={"home"}
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={() => {
                    (router.pathname === "/aboutUs" ||
                      router.pathname === "/services") &&
                      router?.push("/#home");
                  }}
                  activeClass="text-[#1bbc9d]"
                  className="cursor-pointer active:text-[#1bbc9d]  hover:text-[#1bbc9d] font-semibold focus:cursor-auto"
                >
                  <p>Home</p>
                </Link>
              </li>

              <li>
                <Link
                  activeClass="text-[#1bbc9d]"
                  to={""}
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={() => {
                    router?.push("/services");
                  }}
                  className={
                    router.pathname == "/services"
                      ? "text-[#1bbc9d] font-semibold cursor-pointer"
                      : "cursor-pointer font-semibold hover:text-[#1bbc9d]"
                  }
                >
                  <p> Services</p>
                </Link>
              </li>

              <li>
                <Link
                  to={"clients"}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-30}
                  onClick={() => {
                    (router.pathname === "/aboutUs" ||
                      router.pathname === "/services") &&
                      router?.push("/#clients");
                  }}
                  activeClass="text-[#1bbc9d]"
                  className="cursor-pointer active:text-[#1bbc9d] font-semibold hover:text-[#1bbc9d]"
                >
                  <p>Clients</p>
                </Link>
              </li>

              <li>
                <Link
                  to={""}
                  spy={true}
                  smooth={true}
                  duration={500}
                  className={
                    router.pathname == "/aboutUs"
                      ? "text-[#1bbc9d] font-semibold cursor-pointer"
                      : "cursor-pointer font-semibold hover:text-[#1bbc9d]"
                  }
                  activeClass="text-[#1bbc9d]"
                  onClick={() => router?.push("/aboutUs")}
                >
                  <p> About Us</p>
                </Link>
              </li>

              <li>
                <Link
                  to={"contact"}
                  spy={true}
                  smooth={true}
                  offset={-30}
                  duration={500}
                  onClick={() => {
                    (router.pathname === "/aboutUs" ||
                      router.pathname === "/services") &&
                      router?.push("/#contact");
                  }}
                  activeClass="text-[#1bbc9d]"
                  className=" active:text-[#1bbc9d] cursor-pointer hover:text-[#1bbc9d] font-semibold "
                >
                  <p> Contact Us</p>
                </Link>
              </li>
            </ul>
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
