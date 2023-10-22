import React, { useState, useEffect } from "react";
import { CarShuttle } from "../../../../data";

export default function Shuttle() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide < CarShuttle[0].CarDesc.length - 1 ? prevSlide + 1 : 0
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 2000); // Geser slide setiap 3 detik

    return () => {
      clearInterval(interval); // Membersihkan interval saat komponen tidak ter-render
    };
  }, [currentSlide]);

  return (
    <div className="">
      <div className="py-10 sm:py-0 px-5 sm:px-24 w-full text-slate-900  text-center flex-col justify-center flex">
        <h2 className=" text-2xl pb-10  font-basierS sm:text-3xl">
          Rental Shuttle
        </h2>
        <div className="w-full flex items-center justify-center font-basierM ">
          <a
            href=""
            className="w-[140px] py-4  text-base text-orange-500  flex justify-center items-center mr-5"
          >
            Kontak
          </a>
          <a
            href=""
            className="w-[140px] py-4  text-base text-orange-500  flex justify-center items-center"
          >
            Booking
          </a>
        </div>
      </div>

      {CarShuttle.map((container) => (
        <div
          key={container.id}
          className="my-10   px-25 lg:px-24 md:px-24 sm:px-1   flex items-center justify-start w-full   "
        >
          <div className=" rounded-l-lg sm:h-[350px] h-[330px] py-10 overflow-auto sm:w-[50%] w-[100%] md:w-[50%] lg:w-[100%] bg-slate-100 px-5 sm:px-14 md:px-10 lg:px-14 ">
            <div className="h-[250px]  overflow-auto   ">
              <h2 className=" text-2xl font-basierS sm:text-1xl text-blue-700">
                {container.title}
              </h2>
              <p className="inline-block lg:text-base text-slate-600 sm:text-sm pt-5  ">
                {container.descTitle}
              </p>
              <a
                href=""
                className="font-basierM block px-2 py-2 mt-4 bg-orange-500 text-white  text-sm  "
                type="button"
              >
                Booking Sekarang
              </a>
            </div>
          </div>

          {/* Car Card */}
          <div className=" flex items-start justify-center border border-red-500 w-[50%] ">
            <div className="sm:h-[350px] h-[330px]  car-banner-pop bg-gray-900  overflow-hidden border border-black rounded-r-lg  sm:w-[100%] w-[100%]   flex flex-col  items-center justify-start ">
              {container.CarDesc.map((desc, index) => (
                <a
                  key={index}
                  className="text-white duration-700 sm:ease-in-out flex flex-col items-center justify-center  rounded-[1.5rem] sm:w-[160px] md:w-[320px] lg:w-[370px] w-[200px] sm:mt-10 mt-5 my-6 "
                  style={{
                    transform: `translateY(-${currentSlide * 108}%)`,
                  }}
                >
                  <div className="w-[180px]  sm:w-[200px]">
                    <img className="w-[100%]" src={desc.img} alt="" />
                  </div>
                  <h2 className="text-center flex flex-wrap w-[100px] text-1xl font-normal  mb-4">
                    {desc.carType}
                  </h2>

                  <div className=" flex flex-wrap justify-center  w-[80%]">
                    {desc.descItems.map((item, index) => (
                      <div
                        key={index}
                        className="font-medium py-[2px] lg:text-base text-xs  flex items-start mx-2 w-[200px] px-2 "
                      >
                        <img
                          src={item.icon}
                          className="w-[1.8rem] bg-slate-100 rounded-full p-1"
                        />
                        <h2 className=" ml-4 ">{item.text}</h2>
                      </div>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
