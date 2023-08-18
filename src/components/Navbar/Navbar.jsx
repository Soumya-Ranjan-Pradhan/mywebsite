"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  FaBars,
  FaTimes,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import DarkMode from "../DarkMode/DarkMode";

const Navbar = () => {
    const [navigate, setNavigate] = useState(false);
  const [pageScroll, setPageScroll] = useState(false);

  useEffect(() => {
    const sub = window.addEventListener("scroll", () =>
      setPageScroll(window.scrollY >= 90)
    );
    console.log(pageScroll);
    return sub;
  }, []);
  return (
    <div
      className={`w-full h-20 z-10  fixed duration-300 ease-in ${
        pageScroll && "bg-white shadow-lg text-gray-800"
      }`}
    >
      <div className="flex justify-between items-center w-full h-full max-w-screen-xl mx-auto p-4">
        <Link href="/">
          <h1 className="text-2xl lg:text-3xl font-bold uppercase underline underline-offset-2 tracking-wider cursor-pointer">
            soumya
          </h1>
        </Link>

        <div>
        
          <ul className="hidden md:flex">
          <DarkMode />
            <li className="ml-10 text-sm uppercase cursor-pointer duration-200 ease-out hover:scale-105 tracking-wide">
              <Link href="/">home</Link>
            </li>
            <li className="ml-10 text-sm uppercase cursor-pointer duration-200 ease-out hover:scale-105 tracking-wide">
              <Link href="/education">eduction</Link>
            </li>
            <li className="ml-10 text-sm uppercase cursor-pointer duration-200 ease-out hover:scale-105 tracking-wide">
              <Link href="/skill">skill</Link>
            </li>
            <li className="ml-10 text-sm uppercase cursor-pointer duration-200 ease-out hover:scale-105 tracking-wide">
              <Link href="/project">project</Link>
            </li>
            <li className="ml-10 text-sm uppercase cursor-pointer duration-200 ease-out hover:scale-105 tracking-wide">
              <Link href="/contact">contact</Link>
            </li>
          </ul>

          {/* Icons Start */}
          {!navigate && (
            <div
              className="md:hidden cursor-pointer"
              onClick={() => setNavigate(true)}
            >
              <FaBars size={30} />
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu Start */}
      <div
        className={
          navigate
            ? "md:hidden fixed left-0 top-0 w-full h-full bg-black/70 backdrop-blur"
            : ""
        }
      >
        <div
          className={
            navigate
              ? "fixed left-0 top-0 w-4/5 h-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-10 ease-in duration-500"
              : "fixed top-0 left-[-100%] p-10 h-full ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/" onClick={()=>setNavigate(false)}>
                <h1 className="text-3xl font-bold uppercase underline underline-offset-2 tracking-wider cursor-pointer">
                  soumya
                </h1>
              </Link>

              {/* Icons Start */}
              <div
                onClick={() => setNavigate(false)}
                className="p-3 cursor-pointer"
              >
                <FaTimes size={30} />
              </div>
            </div>
          </div>

          {/* NavbrLink start */}
          <div className="mt-20 flex flex-col gap-20">
            <ul className="uppercase">
              <li  className="py-3 text-1xl tracking-wider cursor-pointer">
                <Link href="/" onClick={()=>setNavigate(false)}>home</Link>
              </li>
              <li className="py-3 text-1xl tracking-wider cursor-pointer">
                <Link href="/education" onClick={()=>setNavigate(false)}>eduction</Link>
              </li>
              <li className="py-3 text-1xl tracking-wider cursor-pointer">
                <Link href="/skill" onClick={()=>setNavigate(false)}>skill</Link>
              </li>
              <li className="py-3 text-1xl tracking-wider cursor-pointer">
                <Link href="/project" onClick={()=>setNavigate(false)}>project</Link>
              </li>
              <li className="py-3 text-1xl tracking-wider cursor-pointer">
                <Link href="/contact" onClick={()=>setNavigate(false)}>contact</Link>
              </li>
            </ul>

            {/* Icons Start */}
            <div className="grid grid-cols-2 mx-auto w-4/5 gap-10">
              <div className="flex items-center justify-center rounded-full shadow-md shadow-white p-3 cursor-pointer">
                <FaLinkedin size={20} />
              </div>

              <div className="flex items-center justify-center rounded-full shadow-md shadow-white p-3 cursor-pointer">
                <FaInstagram size={20} />
              </div>

              <div className="flex items-center justify-center rounded-full shadow-md shadow-white p-3 cursor-pointer">
                <FaFacebook size={20} />
              </div>

              <div className="flex items-center justify-center rounded-full shadow-md shadow-white p-3 cursor-pointer">
                <FaGithub size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar