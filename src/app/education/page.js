"use client"
import React from 'react'
import { FaGraduationCap } from "react-icons/fa";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

const Education = () => {
  return (
    <div className="max-w-screen-xl mx-auto w-full h-full">
      <div className="text-center py-11 md:mt-32 mt-16 text-2xl uppercase font-bold">
        <Fade bottom>
          <h1>Education</h1>
        </Fade>
      </div>

      <div className="grid md:grid-cols-2">
        <div className="md:w-80 w-72 h-72 mx-auto">
          <img src="/pngegg.png" alt="" />
        </div>
        <div className="grid gap-5 md:grid-rows-3">
          <div className="flex gap-8  items-center">
            <FaGraduationCap
              size={40}
              className="bg-black text-white rounded-full p-2"
            />
            <div className="grid md:row-span-2">
              <Slide right>
                <p className="text-base font-bold">2021-2023</p>
                <h3 className="text-xl font-bold">
                  Master Of Computer Application
                </h3>
              </Slide>
            </div>
          </div>

          <div className="flex gap-8 items-center">
            <FaGraduationCap
              size={40}
              className="bg-black text-white rounded-full p-2"
            />
            <div className="grid md:row-span-2">
              <Slide right>
                <p className="text-base font-bold">2018-2021</p>
                <h3 className="text-xl font-bold">
                  Bachelor Of Computer Application
                </h3>
              </Slide>
            </div>
          </div>

          <div className="flex gap-8 items-center">
            <FaGraduationCap
              size={40}
              className="bg-black text-white rounded-full p-2"
            />
            <div className="grid md:row-span-2">
              <Slide right>
                <p className="text-base font-bold">2016-2018</p>
                <h3 className="text-xl font-bold">
                  Board Of Secondary Education
                </h3>
              </Slide>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education