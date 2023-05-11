import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTwitter, FaInstagram, FaYoutube, FaTwitch } from "react-icons/fa";
import { RiAccountCircleLine, RiLogoutBoxRLine } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../components/logo.png";
import { UserAuth } from "../context/AuthContext";

function Navbar() {
  const { user, logOut } = UserAuth();
  // console.log(user.email)

  const [nav, setNav] = useState(false);

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <nav className=" bg-[#1a1a1a] bg-gradient-to-r from-black flex justify-between  text-white items-center">
        <GiHamburgerMenu
          onClick={() => setNav(!nav)}
          className="w-min-[50px] translate-x-4 cursor-pointer lg:hidden"
          size={30}
        />

        {/* OVERLAY */}
        {nav ? (
          <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
        ) : (
          ""
        )}

        {/* SIDE MENU  */}
        <div
          className={
            nav
              ? "fixed top-0 left-0 w-[300px] h-screen bg-black/70 z-10 duration-700 ease-in border-r "
              : "fixed top-0 left-[-100%] w-[300px] h-screen bg-black/70 z-10 duration-700 ease-in "
          }
        >
          <AiOutlineClose
            onClick={() => setNav(!nav)}
            className="absolute right-4 top-4 cursor-pointer text-white hover:text-gray-500"
            size={25}
          />

          <h2 className="text-3xl text-center py-11 border-b border-white text-white">
            Menu
          </h2>

          {user?.email ? (
            <div className="text-center flex translate-y-[50px]">
              <ul className="text-xl w-full h-[300px]  ">
                <li className="hover:text-blue-500  p-3">
                  <Link to="/">Home</Link>
                </li>
                <li className="hover:text-blue-500  p-3">
                  <Link to="/movies">Movies</Link>
                </li>
                <li className="hover:text-blue-500 p-3">
                  <Link to="/shows">TV Shows</Link>
                </li>
                <li className="hover:text-blue-500 p-3">
                  <Link to="/upcoming">Upcoming</Link>
                </li>

                <li className="text-center w-full  hover:text-gray-300 p-3">
                  <Link to="/signin">
                    Account
                    <RiAccountCircleLine
                      className="absolute right-20 translate-x-[-15px] translate-y-[-26px]"
                      size={25}
                    />
                  </Link>
                </li>
                <li
                  onClick={handleLogout}
                  className=" p-2 cursor-pointer hover:text-blue-500 "
                >
                  Logout
                  <RiLogoutBoxRLine
                    className="absolute right-20 translate-x-[-15px] translate-y-[-23px]"
                    size={20}
                  />
                </li>
              </ul>
            </div>
          ) : (
            <div className="">
              <ul className="text-xl w-full h-[500px] flex flex-col justify-center  items-center text-center ">
                <li className="hover:text-blue-500  p-3">
                  <Link to="/">Home</Link>
                </li>
                <li className="hover:text-blue-500 p-3">
                  <Link to="/movies">Movies</Link>
                </li>
                <li className="hover:text-blue-500 p-3">
                  <Link to="/shows">TV Shows</Link>
                </li>
                <li className="hover:text-blue-500 p-3">
                  <Link to="/upcoming">Upcoming</Link>
                </li>

                <li className="hover:text-blue-500 p-3">
                  <Link to="/signin">Sign In</Link>
                </li>
                <li className="hover:text-blue-500 p-3">
                  <Link to="/signup">Sign Up</Link>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* MAIN NAVBAR MENU */}

        <div className="">
          <Link className=" sm:visible text-5xl font-bold" to="/">
            <img className="w-[100px]" src={logo} alt="logo" />
          </Link>
        </div>

        {user?.email ? (
          <div>
            <ul className=" hidden lg:flex gap-4 items-center text-lg translate-x-[40px]">
              <li className="hover:text-blue-500">
                <Link to="/movies">Movies</Link>
              </li>
              <li className="hover:text-blue-500">
                <Link to="/shows">TV Shows</Link>
              </li>
              <li className="hover:text-blue-500">
                <Link to="/upcoming">Upcoming</Link>
              </li>

              <li className="relative border rounded-xl bg-green-600/70 w-[100px] h-[50px] p-2 hover:text-gray-300">
                <Link to="/signin">
                  Account
                  <RiAccountCircleLine
                    className="translate-x-[60px] translate-y-[-26px]"
                    size={25}
                  />
                </Link>
              </li>
              <li
                onClick={handleLogout}
                className=" w-[100px] h-[50px] p-2 cursor-pointer hover:text-blue-500"
              >
                Logout
                <RiLogoutBoxRLine
                  className="translate-x-[50px] translate-y-[-26px]"
                  size={25}
                />
              </li>
            </ul>
          </div>
        ) : (
          <div>
            <ul className=" hidden lg:flex gap-4 items-center text-lg translate-x-[40px]">
              <li className="hover:text-blue-500">
                <Link to="/movies">Movies</Link>
              </li>
              <li className="hover:text-blue-500">
                <Link to="/shows">TV Shows</Link>
              </li>
              <li className="hover:text-blue-500">
                <Link to="/upcoming">Upcoming</Link>
              </li>

              <li className="hover:text-blue-500">
                <Link to="/signin">Sign In</Link>
              </li>
              <li className="hover:text-blue-500">
                <Link to="/signup">Sign Up</Link>
              </li>
            </ul>
          </div>
        )}

        <ul className="flex gap-5 pr-7">
          <li>
            <FaTwitter
              className="cursor-pointer hover:text-blue-500"
              size={25}
            />
          </li>
          <li>
            <FaInstagram
              className="cursor-pointer hover:text-orange-300"
              size={25}
            />
          </li>
          <li>
            <FaYoutube
              className="cursor-pointer hover:text-red-700"
              size={25}
            />
          </li>
          <li>
            <FaTwitch
              className="cursor-pointer hover:text-purple-600"
              size={25}
            />
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
