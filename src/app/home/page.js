"use client"
import React from 'react'
import { TypeAnimation } from "react-type-animation";
import Fade from "react-reveal/Fade";
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="h-screen w-full text-center">
      <div className="max-w-screen-xl mx-auto w-full h-full p-10 flex flex-col justify-around items-center">
        <div className="md:mt-5">
          <Fade top>
            <h2 className="font-bold p-4 text-lg">Hello I am</h2>
            <h1 className="font-bold p-1 text-2xl">
              Soumya Ranjan Pradhan
            </h1>
          </Fade>
          <div>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Front-End Developer",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Full Stack Developer",
                1000,
                "MERN Developer",
                1000,
              ]}
              color="black"
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
        </div>
        <div className="w-72 md:mb-4 mb-14 h-64 mx-auto ">
          <img src="/photo.jpeg" alt="me" />
          <Link href="/project">
            <button class="h-10 px-6 m-4 bg-blue-500 text-white font-bold uppercase rounded-md tracking-wider cursor-pointer">
              know me
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero