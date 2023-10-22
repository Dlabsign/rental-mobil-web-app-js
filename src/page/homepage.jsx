import { WhyTrac, Promo } from "../../data";
import NavSlider from "../komponen/Slider";
import CardBanner from "../komponen/cardBanner";
import React, { useState } from "react";

import CarRental from "../komponen/homepage/tipe/carType";
import Shuttle from "../komponen/homepage/tipe/Shuttle";
import CardCarousel from "../komponen/homepage/carousel/carousel";
import FormWithMap from "../komponen/homepage/maps";

const HomePage = () => {
  const [selectedOption, setSelectedOption] = useState("pribadi"); // Nilai awal adalah 'pribadi'
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const [selectedMobil, setSelectedMobil] = useState("mobil"); // Nilai awal adalah 'pribadi'
  const handleMobilClick = (Mobil) => {
    setSelectedMobil(Mobil);
  };

  return (
    <body className="myhomepage  border h-full  w-full  ">
      {/*============ HEADER ============ */}

      <header className="h-[100%] max-h-full border border-black w-full sm:text-center text-left flex items-center  flex-col">
        <div className="xl:py-12 py-9 border border-black w-[95%]  sm:w-[70%] text-slate-900 sm:py-8 flex flex-col items-start sm:items-center sm:flex-col">
          <h2 className="xl:text-4xl font-basierB text-4xl">
            Mulai perjalanan Anda Bersama TRAC Sekarang
          </h2>
          <p className="w-3/4 inline-block xl:text-base text-slate-600 sm:text-xs py-5 font-normal ">
            TRAC menawarkan beragam layanan dan jenis kendaraan yang dapat
            disesuaikan dengan kebutuhan Anda, mulai dari sewa kendaraan jangka
            pendek dan panjang untuk keperluan operasional bisnis hingga sewa
            mobil harian dengan pengemudi maupun lepas kunci untuk kebutuhan
            pribadi.
          </p>
          <div className="border border-black lg:w-[full] sm:w-[full] md:w-[full] flex justify-center ">
            <a href="">
              <img
                src="https://www.trac.astra.co.id/images/app-store.svg"
                alt=""
                className="w-[128px] sm:w-[120px] mr-2"
              />
            </a>
            <a href="">
              <img
                src="https://www.trac.astra.co.id/images/google-play.svg"
                alt=""
                className="w-[128px] sm:w-[120px]"
              />
            </a>
          </div>
        </div>
        <div className="banner  bg-black w-[100%] h-[500px]  ">
          <img src="../interior.jpg" alt="" />
        </div>
      </header>

      {/*============ CARD ============ */}

      <div className="home-card w-full  flex-col px-4 sm:px-8 md:px-16 lg:px-24 xl:px-28 justify-center items-center flex  py-[15vh] ">
        <div className="text-base font-medium uppercase flex justify-center items-center py-10">
          <NavSlider
            selectedOption={selectedOption}
            option="pribadi"
            onClick={handleOptionClick}
          />
          <NavSlider
            selectedOption={selectedOption}
            option="bisnis"
            onClick={handleOptionClick}
          />
        </div>

        <div className="w-[100%] sm:w-[78%] mt-5 overflow-auto flex justify-between">
          {selectedOption === "pribadi" && (
            <div className="flex">
              <CardCarousel
                heading="Download Aplikasi Sekarang (Pribadi)"
                paragraf="Layanan rental mobil online terpercaya dan tidak terpercaya kenapa? tidak tau"
                gambar="https://omnispace.blob.core.windows.net/strapi-prod/2022-09-05/Mobile_f8f5d7256a.svg"
              />
              <CardCarousel
                heading="Download Aplikasi Sekarang (Pribadi)"
                paragraf="Layanan rental mobil online terpercaya dan tidak terpercaya kenapa? tidak tau"
                gambar="https://omnispace.blob.core.windows.net/strapi-prod/2022-09-09/TRAC_Personal_Leasing_7fa804e3f7.svg"
              />
              <CardCarousel
                heading="Download Aplikasi Sekarang (Pribadi)"
                paragraf="Layanan rental mobil online terpercaya dan tidak terpercaya kenapa? tidak tau"
                gambar="https://omnispace.blob.core.windows.net/strapi-prod/2022-09-09/TRAC_Personal_Leasing_7fa804e3f7.svg"
              />
              <CardCarousel
                heading="Download Aplikasi Sekarang (Pribadi)"
                paragraf="Layanan rental mobil online terpercaya dan tidak terpercaya kenapa? tidak tau"
                gambar="https://omnispace.blob.core.windows.net/strapi-prod/2022-09-05/Mobile_f8f5d7256a.svg"
              />
            </div>
          )}
          {selectedOption === "bisnis" && (
            <div className="flex">
              <CardCarousel
                heading="Download Aplikasi Sekarang (Pribadi)"
                paragraf="Layanan rental mobil online terpercaya dan tidak terpercaya kenapa? tidak tau"
                gambar="https://omnispace.blob.core.windows.net/strapi-prod/2022-09-05/Mobile_f8f5d7256a.svg"
              />
              <CardCarousel
                heading="Download Aplikasi Sekarang (Pribadi)"
                paragraf="Layanan rental mobil online terpercaya dan tidak terpercaya kenapa? tidak tau"
                gambar="https://omnispace.blob.core.windows.net/strapi-prod/2022-09-05/Mobile_f8f5d7256a.svg"
              />
              <CardCarousel
                heading="Download Aplikasi Sekarang (Pribadi)"
                paragraf="Layanan rental mobil online terpercaya dan tidak terpercaya kenapa? tidak tau"
                gambar="https://omnispace.blob.core.windows.net/strapi-prod/2022-09-05/Mobile_f8f5d7256a.svg"
              />
            </div>
          )}
        </div>
      </div>

      {/*============ PROMO ============ */}

      <div className="promo w-full  flex flex-col justify-center items-end  px-4 sm:px-8 md:px-16 lg:px-24 xl:px-28 py-[10vh] ">
        <div className="pb-12 w-full text-slate-900  flex-col justify-center text-center items-center flex">
          <h2 className="xl:text-4xl text-3xl font-basierB sm:text-3xl">
            Promo Spesial Untuk Anda
          </h2>
          <p className="w-3/4 inline-block xl:text-base text-slate-600 sm:text-xs py-5 font-normal ">
            Tertarik dengan penawaran kami? Dapatkan lebih banyak lagi
            keuntungan dari berbagai promo spesial untuk memulai perjalanan Anda
            bersama TRAC.
          </p>
          <a
            href=""
            className="w-[150px] px-2 py-2 mt-4 bg-orange-500 text-white  text-sm  font-medium"
          >
            Lihat Semua Promo
          </a>
        </div>

        {Promo.map((item) => (
          <div
            key={item.id}
            className="card-banner flex w-[100%] mt-5 mb-3 overflow-auto  "
          >
            {item.banner.map((desc, index) => (
              <div key={index}>
                <CardBanner
                  bannerTitle={desc.bannerTitle}
                  bannerImg={desc.bannerImg}
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      {/*============ BANNER ============ */}
      <section className="border  border-black bg-orange-500 px-4 sm:px-8 md:px-14 lg:px-24 xl:px-28 h-[full] md:h-[full] lg:h-[70vhh] sm:h-[full] my-[15vh] flex flex-col-reverse lg:flex-row overflow-hidden">
        <div className="img-banner border border-black sm:w-[200px] md:w-full lg:w-[500px] pt-5  ">
          <img
            src="https://www.trac.astra.co.id/_next/image?url=https%3A%2F%2Fomnispace.blob.core.windows.net%2Fstrapi-prod%2F2022-11-23%2FGroup_71_38e0e0b98a.png&w=1920&q=75"
            alt=""
          />
        </div>
        <div className="text-white flex justify-center items-start flex-col   border border-black  w-[100%] lg:w-[60%] ">
          <h2 className="text-4xl md:text-4xl lg:text-4xl font-basierB">
            Download Aplikasi TRACtoGo untuk Kemudahan Perjalanan Kapan Saja di
            Mana Saja
          </h2>
          <p className="md:text-base text-sm sm:text-base py-5 font-normal w-[80%] lg:w-[470px] ">
            Melalui Aplikasi TRACtoGo, Anda dapat melakukan reservasi berbagai
            layanan kendaraan dengan mudah, mulai dari rental mobil harian, sewa
            bus, airport transfer, hingga paket wisata dengan Experience
          </p>
          <p className=" text-base mb-2 mt-3">Download Sekarang</p>
          <div className="flex justify-start w-full ">
            <a href="">
              <img
                src="https://www.trac.astra.co.id/images/app-store.svg"
                alt=""
                className="w-[120px] mr-2"
              />
            </a>
            <a href="">
              <img
                src="https://www.trac.astra.co.id/images/google-play.svg"
                alt=""
                className="w-[120px]"
              />
            </a>
          </div>
        </div>
      </section>

      <section className="banner-2 ">
        <div className="py-10 sm:py-28 px-5 sm:px-24 w-full text-slate-900  text-left sm:text-center flex-col justify-center items-center flex">
          <h2 className=" text-2xl font-basierB sm:text-3xl">Mengapa TRAC?</h2>
          <p className="inline-block w-3/4 xl:text-base text-slate-600 sm:text-xs py-5  ">
            Sebagai bagian dari Grup ASTRA, TRAC menawarkan berbagai solusi
            transportasi termasuk rental mobil yang aman dan nyaman dengan
            pilihan kendaraan yang lengkap, reservasi yang mudah, pengelolaan
            armada yang efisien, asuransi yang komprehensif, serta layanan
            pelanggan yang andal.
          </p>
          <a
            href=""
            className="w-[150px] px-2 py-2 mt-4 bg-orange-500 text-white  text-sm  font-medium"
          >
            Tentang Kami
          </a>
        </div>

        <div className=" lg:flex items-center justify-center w-full border border-black">
          <div className=" why-trac flex items-center justify-center   overflow-auto rounded-r-lg  w-[100%] h-[200px] md:w-[100%] lg:w-[50%] md:h-[50vh] lg:h-[100%] ">
            <img
              className="bg-cover w-full"
              src="https://www.trac.astra.co.id/_next/image?url=https%3A%2F%2Fomnispace.blob.core.windows.net%2Fstrapi-prod%2F2022-08-22%2Fmasthead_1_daf85b9a08_415a01d689.webp&w=640&q=75"
              alt=""
            />
          </div>
          <div className=" w-[100%] lg:w-[50%] sm:px-4 pl-0  border border-black flex-wrap sm:flex">
            {WhyTrac.map((item) => (
              <div key={item.id} className="sm:w-[50%] w-[100%]  px-5">
                <div className="w-[full] my-5">
                  <img src={item.icon} alt="" />
                </div>
                <div className="border border-black ">
                  <h2 className=" text-lg font-bold sm:text-1xl text-blue-700">
                    {item.heading}
                  </h2>
                  <p className="inline-block xl:text-base text-slate-600 sm:text-xs pt-5 font-normal ">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="my-16 relative px-5 sm:px-24 flex flex-col items-center justify-start ">
        <div className="absolute bg-slate-900 py-5 top-0 w-full  mt-16  flex items-start justify-center">
          <div className="shadow-lg h-[45px]  w-[350px] sm:w-[65%] overflow-auto mx-2   bg-white rounded text-base font-medium flex justify-start  items-start ">
            <NavSlider
              selectedOption={selectedMobil}
              iconop="https://www.bluebirdgroup.com/storage/armadaservicetype/626902e92204c.png"
              option="mobil"
              onClick={handleMobilClick}
            />
            <NavSlider
              selectedOption={selectedMobil}
              iconop="https://www.bluebirdgroup.com/storage/armadaservicetype/626902e92204c.png"
              option="taxi service"
              onClick={handleMobilClick}
            />
            <NavSlider
              selectedOption={selectedMobil}
              iconop="https://www.bluebirdgroup.com/storage/armadaservicetype/626902e92204c.png"
              option="logistic"
              onClick={handleMobilClick}
            />
            <NavSlider
              selectedOption={selectedMobil}
              option="shuttle"
              iconop="https://www.bluebirdgroup.com/storage/armadaservicetype/62baa4896b805.png"
              onClick={handleMobilClick}
            />
          </div>
        </div>
        <div className="sm:mt-[15rem] mt-[10.5rem] ">
          {selectedMobil === "mobil" && <CarRental />}
          {selectedMobil === "shuttle" && <Shuttle />}
        </div>
      </section>

      <section className="py-10 sm:py-2  w-full ">
        <h2 className=" text-2xl font-basierB sm:text-3xl text-slate-900 text-center py-12">
          Lokasi Kami
        </h2>
        <div className=" OrderBanner w-full  flex justify-center items-center h-full py-5 sm:py-10 bg-orange-500">
          {/* <img src="../interior.jpg" alt="" /> */}
          <FormWithMap />
          {/* <div className="w-[100%] h-full py-5 sm:py-10 bg-orange-500 "> */}
          {/* <div className="mb-2 flex-col flex w-[100%] sm:w-[42%]">
                <label htmlFor="" className="font-basierR">
                  Pilih Kota anda
                </label>
                <select
                  name=""
                  className="bg-white rounded border-none text-slate-600 "
                  id=""
                >
                  {Cityop.map((item) => (
                    <option
                      key={item.id}
                      className="font-basierB border-t-4 border-indigo-500"
                      value=""
                    >
                      {item.kota}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-2 flex-col flex w-[100%] sm:w-[42%] ">
                <label htmlFor="" className="font-basierR">
                  Pilih Kota anda
                </label>
                <select
                  name=""
                  className="bg-white rounded border-none text-slate-600 "
                  id=""
                >
                  {Cityop.map((item) => (
                    <option
                      key={item.id}
                      className="font-basierM border-t-4 border-indigo-500"
                      value=""
                    >
                      {item.kota}
                    </option>
                  ))}
                </select>
              </div> */}
          {/* </div> */}
        </div>
      </section>
    </body>
  );
};
export default HomePage;
