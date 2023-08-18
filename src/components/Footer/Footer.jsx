"use client";
import React from "react";
import Link from "next/link";
import { BsLinkedin, BsFacebook, BsGithub, BsInstagram } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto w-full h-full">
        <footer class="rounded-lg shadow dark:bg-gray-900 m-4">
          <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div class="sm:flex sm:items-center sm:justify-between">
              <Link href="/">
                <h1 className="text-2xl lg:text-3xl font-bold uppercase underline underline-offset-2 tracking-wider cursor-pointer">
                  soumya
                </h1>
              </Link>
              <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                  <a href="#" class="mr-4 hover:underline md:mr-6 ">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" class="mr-4 hover:underline md:mr-6">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" class="mr-4 hover:underline md:mr-6 ">
                    Education
                  </a>
                </li>
                <li>
                  <a href="#" class="mr-4 hover:underline">
                    Skill
                  </a>
                </li>
                <li>
                  <a href="#" class="mr-4 hover:underline">
                    Project
                  </a>
                </li>
                <li>
                  <a href="#" class="mr-4 hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <hr class="border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{" "}
              <Link href="/" class="hover:underline">
                Soumya™
              </Link>
              . All Rights Reserved.
            </span>
            <div className="flex items-center md:justify-end md:gap-6 gap-2">
              <Link href={"https://www.linkedin.com/in/soumya-ranjan-pradhan8018/"} target="_blank">
                <BsLinkedin size={20} className="text-blue-700" />
              </Link>
              <Link href={"https://www.facebook.com/soumyaranjan.pradhan.9210256"} target="_blank">
                <BsFacebook size={20} />
              </Link>
              <Link href={"https://github.com/Soumya-Ranjan-Pradhan"} target="_blank">
                <BsGithub size={20} />
              </Link>
              <Link href={"https://www.instagram.com/soumya_pradhan63/"} target="_blank">
                <BsInstagram size={20} className="text-pink-500" />
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
