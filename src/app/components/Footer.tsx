import React from "react"
import {
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineWhatsApp,
} from "react-icons/ai"

import { BiLogoTiktok } from "react-icons/bi"


const Footer = () => {
  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0"></hr>
      <div className="mx-auto  p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between">
        <div className="flex flex-row items-center justify-center space-x-1 text-neutral-500">
          © 2023 RMP<a href="/" className="hover:underline"></a>
        </div>
        <div className="flex flex-row items-center justify-center space-x-2 mb-1">
          <a href="" rel="noreferrer" target="_blank">
            <AiOutlineGithub
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 hover:text-black "
              size={30}
            />
          </a>
          <a
            href="https://www.instagram.com/wreistha/"
            rel="noreferrer"
            target="_blank"
            className=""
          >
            <AiOutlineInstagram
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 hover:bg-gradient-to-r from-[#f09433] via-[#cc2366]  to-[#8a3ab9] rounded-md hover:text-white"
              size={30}
              
            />
          </a>

          <a
            href="https://api.whatsapp.com/send?phone=6285943123385&text=Hallo!"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineWhatsApp
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 hover:bg-green-400 hover:text-white rounded-full "
              size={30}
            />
          </a>
          <a
            href="https://www.tiktok.com/@whrxhn"
            rel="noreferrer"
            target="_blank"
          >
            <BiLogoTiktok
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 hover:bg-black hover:text-white rounded-full"
              size={30}
            />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
