"use client"
import React from 'react'
import Fade from "react-reveal/Fade";
const SkillSection = () => {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto px-10 py-16 text-center md:text-left">
        <div className="text-center py-11 mt-4 text-2xl uppercase font-bold">
          <Fade bottom>
            <h1>My Skills</h1>
          </Fade>
          <div className="grid py-9 lg:grid-cols-3 gap-8">
            <div
              className="flex flex-col lg:flex-row gap-10 lg:gap-0 items-center justify-between p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300
              odd:shadow-rose-400 even:shadow-blue-400"
            >
              <div className="w-14 h-14">
                <Fade top>
                  <img src="/HTML5.webp" alt="" />
                </Fade>
              </div>
            </div>

            <div
              className="flex flex-col lg:flex-row gap-10 lg:gap-0 items-center justify-between p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300
              odd:shadow-rose-400 even:shadow-blue-400"
            >
              <div className="w-11 h-14">
                <Fade top>
                  <img src="/css.png" alt="" />
                </Fade>
              </div>
            </div>

            <div
              className="flex flex-col lg:flex-row gap-10 lg:gap-0 items-center justify-between p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300
              odd:shadow-rose-400 even:shadow-blue-400"
            >
              <div className="w-14 h-14">
                <Fade top>
                  <img src="/js.png" alt="" />
                </Fade>
              </div>
            </div>

            <div
              className="flex flex-col lg:flex-row gap-10 lg:gap-0 items-center justify-between p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300
              odd:shadow-rose-400 even:shadow-blue-400"
            >
              <div className="w-24 h-14">
                <Fade top>
                  <img src="/react.svg" alt="" />
                </Fade>
              </div>
            </div>

            <div
              className="flex flex-col lg:flex-row gap-10 lg:gap-0 items-center justify-between p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300
              odd:shadow-rose-400 even:shadow-blue-400"
            >
              <div className="w-28 h-14">
                <Fade top>
                  <img src="/tailwindcss.svg" alt="" />
                </Fade>
              </div>
            </div>

            <div
              className="flex flex-col lg:flex-row gap-10 lg:gap-0 items-center justify-between p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300
              odd:shadow-rose-400 even:shadow-blue-400"
            >
              <div className="w-28 h-14">
                <Fade top>
                  <img src="/nextjs.svg" alt="" />
                </Fade>
              </div>
            </div>

            <div
              className="flex flex-col lg:flex-row gap-10 lg:gap-0 items-center justify-between p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300
              odd:shadow-rose-400 even:shadow-blue-400"
            >
              <div className="w-24 h-14">
                <Fade top>
                  <img src="/nodejs.svg" alt="" />
                </Fade>
              </div>
            </div>

            <div
              className="flex flex-col lg:flex-row gap-10 lg:gap-0 items-center justify-between p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300
              odd:shadow-rose-400 even:shadow-blue-400"
            >
              <div className="w-24 h-14">
                <Fade top>
                  <img src="/express.png" alt="" />
                </Fade>
              </div>
            </div>

            <div
              className="flex flex-col lg:flex-row gap-10 lg:gap-0 items-center justify-between p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300
              odd:shadow-rose-400 even:shadow-blue-400"
            >
              <div className="w-32 h-14">
                <Fade top>
                  <img src="/mongodb.svg" alt="" />
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkillSection