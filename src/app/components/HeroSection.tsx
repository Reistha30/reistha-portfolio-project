"use client"
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Link } from 'react-scroll/modules';
import { HiArrowDown } from 'react-icons/hi';
import Image from 'next/image';

const HeroSection = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className='h-screen w-full'>
    <div className="bg-white w-full mx-auto">
      <header className="absolute inset-x-0 top-0 z-50">
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
        </Dialog>
      </header>
      <div className="relative isolate px-6 pt-14 lg:px-8 ">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div
            className="relative center-[calc(70%-120rem)] aspect-[1155/778] w-[39.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(70%-30rem)] sm:w-[120.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 107.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 37.6% 96.8%, 76.1% 97.7%, 74.1% 44.1%, 28% 53.3% )',
            }}
          />
        </div>
        <section id="home">
          <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 sm:pt-11 md:flex-row md:space-x-2 md:text-left ">
            <div className="md:mt-2 md:w-1/2 flex justify-center ">
              <Image
                src={"/yeye1.png"}
                alt=""
                width={325}
                height={225}
                className="mx-none rounded-3xl "/>
            </div>
            <div className="md:mt-2 md:w-1/2" > 
              <h1 className=" lg:text-7xl sm:text-4xl font-bold mt-8 md:mt-0 md:text-7xl text-purple-700 whitespace-nowrap font-sans">Hello,<br/> I'm Reistha</h1>
              <p className="text-sm sm:text-md mt-4 mb-12 md:text-2xl text-black pb-10">
               I am student from{' '}
                <span className="font-semibold text-blue-700 bg-transparent whitespace-nowrap">
                  SMK TI Bali Global Denpasar.{' '}
                </span>
                I am a web developer with 1 year of experience, and I have been learning programming since I entered high school. I have a strong interest in this field because I am fascinated by anything related to the online world
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
  );
};

export default HeroSection;
