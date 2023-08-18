"use client"
import Link from 'next/link';
import React from 'react'
import Fade from "react-reveal/Fade";

const ProjectSection = () => {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto w-full h-full">
        <div className="text-center py-11 md:mt-32 mt-16 text-2xl uppercase font-bold">
          <Fade bottom>
            <h1>Projects</h1>
          </Fade>
        </div>
        <div className="grid items-center py-11 md:gap-8 gap-8 justify-between md:grid-cols-2">
          <div className="w-10/12 shadow-md hover:scale-105 ease-in duration-300 mx-auto md:h-96">
            <Fade left>
              <img src="/project1.png" alt="" />
            </Fade>
            <div className="text-center">
              <Link href="https://soumya63.netlify.app/">
                <button class="h-10 px-6 m-4 bg-blue-500 text-white font-bold uppercase rounded-md tracking-wider cursor-pointer">
                  Live Demo
                </button>
              </Link>
            </div>
          </div>

          <div className="w-10/12 shadow-md hover:scale-105 ease-in duration-300 mx-auto md:h-96">
            <Fade right>
              <img src="/project2.png" alt="" />
            </Fade>
            <div className="text-center">
              <Link href="https://soumyawebpage.netlify.app/">
                <button class="h-10 px-6 m-4 bg-blue-500 text-white font-bold uppercase rounded-md tracking-wider cursor-pointer">
                  Live Demo
                </button>
              </Link>
            </div>
          </div>

          <div className="w-10/12 shadow-md hover:scale-105 ease-in duration-300 mx-auto md:h-96">
            <Fade left>
              <img src="/project3.png" alt="" />
            </Fade>
            <div className="text-center">
              <Link href="https://hospiltalmanagement.netlify.app/">
                <button class="h-10 px-6 m-4 bg-blue-500 text-white font-bold uppercase rounded-md tracking-wider cursor-pointer">
                  Live Demo
                </button>
              </Link>
            </div>
          </div>

          <div className="md:w-10/12 mx-auto hover:scale-105 ease-in duration-300 shadow-md h-96">
            <Fade right>
              <img src="/project4.png" alt="" />
            </Fade>
            <div className="text-center">
              <Link href="https://soumya63.netlify.app/">
                <button class="h-10 px-6 m-4 bg-blue-500 text-white font-bold uppercase rounded-md tracking-wider cursor-pointer">
                  Live Demo
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectSection