"use client";
import Image from "next/image";
import Logo from "./assets/images/logo.svg";
import { Clapperboard, House, Tickets } from "lucide-react";
import { useEffect } from "react";
import LanguageModal from "../components/LanguageModal";

const Home = () => {
  const toggleModal = (modalId: string) => {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.toggle("hidden");
    }
  };

  useEffect(() => {
    const hideButtons = document.querySelectorAll("[data-modal-hide]");
    hideButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const target = button.getAttribute("data-modal-hide");
        // const modal = document.getElementById(target);
        // if (modal) {
        //   modal.classList.add("hidden");
        // }
      });
    });
  }, []);

  return (
    <>
      <header className="md:px-3 lg:px-5 flex items-center justify-between h-14 sticky top-0 z-[999] w-full">
        <Image src={Logo} alt="logo" width={153} height={31} />
        <ul className="flex items-center gap-x-2">
          <li className="px-3">
            <a
              href="#!"
              className="text-white hover:text-[#FCC434] capitalize text-sm flex items-center gap-x-1 transition delay-150 duration-300 ease-in-out"
            >
              <House /> home
            </a>
          </li>
          <li className="px-3">
            <a
              href="#!"
              className="text-white hover:text-[#FCC434] capitalize text-sm flex items-center gap-x-1 transition delay-150 duration-300 ease-in-out"
            >
              <Tickets /> tickets
            </a>
          </li>
          <li className="px-3">
            <a
              href="#!"
              className="text-white hover:text-[#FCC434] capitalize text-sm flex items-center gap-x-1 transition delay-150 duration-300 ease-in-out"
            >
              <Clapperboard /> movies
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-x-5">
          <button
            type="button"
            className="flex items-center gap-x-2 text-xs leading-[18px] h-9 rounded-full border px-3"
            onClick={() => toggleModal("language-modal")}
          >
            English
          </button>
          <div className="w-full max-w-sm min-w-[180px]">
            <div className="relative">
              <select className="w-full bg-transparent placeholder:text-white-400 text-white-700 text-sm border border-slate-200 rounded pl-10 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer">
                <option value="brazil">Brazil</option>
                <option value="bucharest">Bucharest</option>
                <option value="london">London</option>
                <option value="washington">Washington</option>
              </select>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.2"
                stroke="currentColor"
                className="h-5 w-5 ml-1 absolute top-2.5 right-2.5 text-white-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                />
              </svg>
            </div>
          </div>
        </div>
      </header>

      <section></section>

      <LanguageModal />
    </>
  );
};

export default Home;
