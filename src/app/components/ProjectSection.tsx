import React from 'react';
import { CheckIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import intersectionObserver from '@/app/components/SlideUp'

export default function AboutSection() {
  return (
    <div className="bg-white w-full">
      <div className="mx-auto" id="language">
        <div className="mx-auto sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
            Language
          </h2>
          <p className='text-gray-400 text-center mt-6'>
          The programming language that I recently learned.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-20 py-6 px-4 md:px-12 lg:px-56 max-w-full mt-5 sm:pl-10 ">
            {/* Image 1 */}
            <a href='https://en.wikipedia.org/wiki/HTML' target='blank'>
              <div className="rounded-2xl bg-gray-50 py-1 px-4 text-center ring-1 ring-inset ring-gray-900/5">
              <Image
                src={'/html.png'}
                alt=""
                width={500}
                height={500}
                className="flex justify-center items-center object-cover w-full p-8"
              />
            </div>
            </a>
            
            {/* Image 2 */}
            <a href='https://en.wikipedia.org/wiki/CSS' target='blank'>
              <div className="rounded-2xl bg-gray-50 py-1 px-4 text-center ring-1 ring-inset ring-gray-900/5">
              <Image
                src={'/CSS.png'}
                alt=""
                width={500}
                height={500}
                className="flex justify-center items-center object-cover w-full p-8"
              />
            </div>
            </a>
            
            {/* Image 3 */}
            <a href='https://en.wikipedia.org/wiki/JavaScript' target='blank'>
              <div className="rounded-2xl bg-gray-50 py-1 px-4 text-center ring-1 ring-inset ring-gray-900/5">
              <Image
                src={'/js.png'}
                alt=""
                width={500}
                height={500}
                className="flex justify-center items-center object-cover w-full p-8"
              />
            </div>
            </a>
            
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-20 py-6 px-4 md:px-12 lg:px-56 max-w-full mt-16 sm:pl-10">
            {/* Image 4 */}
            <a href='https://getbootstrap.com/' target='blank'>
              <div className="rounded-2xl bg-gray-50 py-1 px-4 text-center ring-1 ring-inset h-full ring-gray-900/5">
              <Image
                src={'/bootstraps.png'}
                alt=""
                width={500}
                height={500}
                className="flex justify-center items-center object-cover w-full p-8 lg:pt-16"
              />
            </div>
            </a>
            
            {/* Image 5 */}
            <a href='https://tailwindcss.com/' target='blank'>
              <div className="rounded-2xl bg-gray-50 py-1 px-4 text-center ring-1 ring-inset h-full ring-gray-900/5">
              <Image
                src={'/tailwind.png'}
                alt=""
                width={500}
                height={500}
                className="flex justify-center items-center object-cover w-full  p-8 pt-24"
              />
            </div>
            </a>
            
            {/* Image 6 */}
             <a href='https://www.cplusplus.com/' target='blank'>
              <div className="rounded-2xl bg-gray-50 py-1 px-4 text-center ring-1 ring-inset ring-gray-900/5">
              <Image
                src={'/C++.png'}
                alt=""
                width={500}
                height={500}
                className="flex justify-center items-center object-cover w-full p-8"
              />
            </div>
             </a>
            
          </div>
        </div>
      </div>
    </div>
  );
}
