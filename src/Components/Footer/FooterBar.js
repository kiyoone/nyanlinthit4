'use client'

import React from 'react'
import { useState } from "react";

import { Typography } from '@mui/material';
// import { DisplayTheme } from "../Context/context";
import NLT from "@/assets/NLTA-DarkIcon.png";
import Image from "next/image";
import { useForm } from "react-hook-form";
import {
  FacebookOutlined,
  ExpandLess,
  Instagram,
  Telegram,
  Twitter,
} from "@mui/icons-material";

const backgroundImage = {
  backgroundColor:  "#193967",
  backgroundSize: "cover",
};



const FooterBar = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [subscriber, setSubscriber] = useState({
    name: "",
    email: "",
  });

  const scrollToTop = () =>
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });


  return (
    <footer style={backgroundImage} className='max-container h-96 bg-blue-500 p-6'>
        {/* flex container */}
        <div className='  flex flex-row justify-between item-center w-full h-full px-6 '>
          
          {/* Left Section */}
          {/* Left Container */}
          <div className='w-auto flex flex-col justify-end items-start  text-white text-3xl '>
          {/* Left Content */}
          <div className="text-2xl sm:text-3xl sm:text-start text-center font-medium mb-2">
            <Typography variant="p">
              <a href="mailto:info.nyanlynnthit@gmail.com">Contact Us</a>
            </Typography>
          </div>
          <div className="text-xl sm:text-2xl sm:text-start text-center font-light mb-2">
            <Typography variant="p">
              <a href="mailto:info.nyanlynnthit@gmail.com">
                info.nyanlynnthit@gmail.com
              </a>
            </Typography>
          </div>

          <div className="mt-4">
            <div className="text-3xl sm:text-start text-center font-medium">
              <Typography variant="p">
                Subscribe to Newsletter, Updates & Events
              </Typography>
            </div>
            {/* onSubmit={handleSubmit(onSubmit)} */}
            <form className="" >
              <div className="my-2 sm:my-4 w-full">
                <input
                  type="mail"
                  className={`w-full text-black border ${
                    errors.mail ? "border-red-600" : "border-theme"
                  } rounded-3xl py-1 indent-3`}
                  {...register("mail", { required: true })}
                  aria-invalid={errors.mail ? "true" : "false"}
                  placeholder="Email"
                  value={subscriber.email}
                  onChange={(e) =>
                    setSubscriber((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }))
                  }
                />
                {errors.mail?.type === "required" && (
                  <p role="alert">Email is required</p>
                )}
              </div>
              <div className="flex flex-col sm:flex-row gap-2 w-full">
                <div className="w-full sm:w-2/3">
                  <input
                    className={`border text-black ${
                      errors.name ? "border-red-600" : "border-theme"
                    } rounded-3xl w-full py-1 indent-3`}
                    {...register("name", { required: true })}
                    aria-invalid={errors.name ? "true" : "false"}
                    placeholder="Name"
                    value={subscriber.name}
                    onChange={(e) =>
                      setSubscriber((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
                  />
                  {errors.name?.type === "required" && (
                    <p role="alert">Name is required</p>
                  )}
                </div>
                <div className="w-full sm:w-1/3">
                  <input
                    className="w-full border border-white py-1 px-2 rounded-3xl cursor-pointer"
                    type="submit"
                  />
                </div>
              </div>
            </form>
          </div>
          </div>

          {/* Right Section           */}
                    {/* Right Section */}
        <div className="w-auto flex flex-col justify-center items-center">
          <div className="pt-6 w-1/2 h-40 ">
            <Image src={NLT} width={150} height={150} alt="Logo" />
          </div>
          <div className="flex gap-5 sm:hidden md:flex justify-between  pt-6 sm:pb-6 text-2xl  w-full sm:w-fit text-white">
            <a
              href="https://www.facebook.com/nyanlynnthitanalytica/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl "
            >
              <FacebookOutlined sx={{ fontSize: 40 }} />
            </a>
            <a
              href="https://t.me/nltasince2017"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Telegram sx={{ fontSize: 40 }} />
            </a>
            <a
              href="https://www.instagram.com/nyanlynnthit_analytica/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram sx={{ fontSize: 40 }} />
            </a>
            <a
              href="https://twitter.com/NyanLynnThit"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter sx={{ fontSize: 40 }} />
            </a>
          </div>
          <div className="w-full justify-end pt-6 pb-6 hidden sm:flex">
            <div
              onClick={scrollToTop}
              className="cursor-pointer flex justify-center items-center p-2 font-bold text-black bg-white rounded-full"
            >
              <ExpandLess />
            </div>
          </div>
        </div>



        </div>

    </footer>
  )
}

export default FooterBar