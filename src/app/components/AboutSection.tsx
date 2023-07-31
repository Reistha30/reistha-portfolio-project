"use client"
import React from 'react'
import Image from 'next/image'

export default function AboutSection() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8" id='education'>
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">Educational Background</h2>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none shadow-around shadow-lg ">
          <div className="p-8 sm:p-10 lg:flex-auto ">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">Bali Public School</h3>
            <p className='text-gray-600 text-sm'> Jl.drupadi No.52 Renon Denpasar, Sumerta Kelod, Kec. Denpasar Timur, Kota Denpasar Prov. Bali </p>
            <div className="mt-1 flex items-center gap-x-4">
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.2741510564542!2d115.23192441478403!3d-8.665456693773539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2408a45fc4c73%3A0xd438b7fa67e231d6!2sTaman%20Kanak-Kanak%20Bali%20Public%20School%20Denpasar!5e0!3m2!1sid!2sid!4v1690349984865!5m2!1sid!2sid"  className='pt-10 sm:pb-5 md:pt-10 lg:pb-10 h-full w-full max-h-fit'  ></iframe>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0 sm:px-12 sm:py-12">
            <div className="rounded-2xl bg-gray-50 py-1 px-1 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-1 max-h-full max-w-full  ">
            <Image 
              src={'/BPS.png '}
              alt=''
              className='flex justify-center object-cover max-h-fit w-full rounded-2xl'
              width={200}
              height={200}
              ></Image>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none shadow-lg">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">SMPN 12 Denpasar</h3>
            <p className='text-gray-600 text-sm'>Jl. Dam Peraupan I, Peguyangan Kaja, Peguyangan, Kec. Denpasar Utara, Kota Denpasar Prov. Bali </p>
            <div className="mt-1 flex items-center gap-x-4">
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18951.52819564743!2d115.20534059966086!3d-8.595191998592206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23f1bb1f77695%3A0xdf857bbd7744655!2sSMP%20Negeri%2012%20Denpasar!5e0!3m2!1sid!2sid!4v1690423363294!5m2!1sid!2sid"  className='pt-10 sm:pb-5 md:pt-10 lg:pb-10 h-full w-full max-h-fit'  ></iframe>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0 sm:px-12 sm:py-12">
            <div className="rounded-2xl bg-gray-50 py-1 px-1 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-1 max-h-full max-w-full  ">
            <Image 
              src={'/SMP.png '}
              alt=''
              className='flex justify-center object-cover max-h-fit w-full rounded-2xl'
              width={200}
              height={200}
              ></Image>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none shadow-lg">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">SMK TI Bali Global Denpasar</h3>
            <p className='text-gray-600 text-sm'>Jl. Tukad Citarum No.44, Dauh Puri Klod, Denpasar Selatan, Kota Denpasar, Bali </p>
            <div className="mt-1 flex items-center gap-x-4">
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.084795374322!2d115.22891755179008!3d-8.683486366216215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2409b0e5e80db%3A0xad78f1ff66b638d2!2sSMK%20TI%20Bali%20Global%20Denpasar!5e0!3m2!1sid!2sid!4v1690424106643!5m2!1sid!2sid"  className='pt-10 sm:pb-5 md:pt-10 lg:pb-10 h-full w-full max-h-fit'  ></iframe>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0 sm:px-12 sm:py-12">
            <div className="rounded-2xl bg-gray-50 py-1 px-1 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-1 max-h-full max-w-full  ">
            <Image 
              src={'/SMK.png'}
              alt=''
              className='flex justify-center object-cover max-h-fit w-full rounded-2xl'
              width={200}
              height={200}
              ></Image> 
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
