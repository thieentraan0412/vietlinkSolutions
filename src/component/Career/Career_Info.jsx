import { useTranslation } from "react-i18next";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Career.css";
import Bg_Parallax from "../parallax/BG_Parallax";

// import required modules
const CareerInfo = () => {
  const { t, i18n } = useTranslation();

  //                {t("career.t2_1")}
  return (
    <div className="">
      <div className="lg:py-[100px] py-[24.5px]">
        <div className="container">
          <div className="max-w-[850px] mx-auto">
            <p className="lg:text-[48px] lg:leading-[58.09px] lg:tracking-[0px] text-[34px] leading-[41.15px] tracking-[0.25px] font-bold  text-center pb-6 text-[#000000]">
              {t("career.t1_1")}
            </p>
            <p className="text-center lg:text-[20px] lg:leading-[28px] lg:tracking-[0px] text-[16px] leading-[22.4px] tracking-[0.44px] font-normal  text-cente text-[#3B3A40]">
              {t("career.t1_2")}
            </p>
          </div>
        </div>
      </div>
      <div className="">
        <div className="container">
          <div className="bg-[#E4E4E4] bg-opacity-25  rounded-[24px]">
            <div className="max-w-[784px] mx-auto lg:pt-20 pt-10  pb-[24px]">
              <p className="lg:text-[20px] lg:leading-[28px] lg:tracking-[0px] text-[16px] leading-[22.4px] tracking-[0.44px] font-bold  text-center pb-[12px] ">
                {t("career.t2_1")}
              </p>
              <p className="lg:text-[48px] lg:leading-[58.09px] lg:tracking-[0px] text-[34px] leading-[41.15px] tracking-[0.25px] font-bold  text-center pb-6">
                {t("career.t2_2")}
              </p>
              <p className="lg:text-[20px] lg:leading-[28px] lg:tracking-[0px] text-[16px] leading-[22.4px] tracking-[0.44px] font-normal  text-center pb-[32px] ">
                {t("career.t2_3")}
              </p>
              <div className="flex justify-center items-center">
                <a href="/Contact">
                  <button
                    className="rounded-[10px] px-[56.5px] py-[20px] bg-vietlink-logoI flex justify-center items-center gap-[10px] mx-auto transition-all transform hover:scale-125 duration-750 ease-in-out
          hover:bg-orange-500
          "
                  >
                    <p className="text-[16px] leading-[22px] text-center font-semibold text-white">
                      {t("service.t7_3")}
                    </p>
                    <img src="./img/Vector.png" alt="" />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:py-20 py-10">
        <div className="container">
          <div className="max-w-[950px] mx-auto flex lg:gap-12 gap-6 flex-col">
            {i18n.language === "en" ? (
              <div>
                <p className="lg:text-[20px] lg:leading-[28px] lg:tracking-[0px] text-[16px] leading-[22.4px] tracking-[0.44px] font-bold  pb-3">
                  {t("career.t3_1")}
                </p>
                <p className="lg:text-[48px] lg:leading-[58.09px] lg:tracking-[0px] text-[34px] leading-[41.15px] tracking-[0.25px] font-bold">
                  {t("career.t3_2")}
                </p>
              </div>
            ) : (
              <div>
                <p className="lg:text-[48px] lg:leading-[58.09px] lg:tracking-[0px] text-[34px] leading-[41.15px] tracking-[0.25px] font-bold ">
                  {t("career.t3_1")}
                </p>
              </div>
            )}
            <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-x-[64px] lg:gap-y-[32px] gap-[24px]">
              <div className="flex lg:gap-8 lg:flex-row flex-col gap-4">
                <div className="w-[22%]">
                  <img src="./img/career/anh1.svg" alt="" />
                </div>
                <div className="flex-1">
                  <p className="lg:text-[24px] lg:leading-[29.05px] lg:tracking-[0px] text-[20px] leading-[28px] tracking-[0.15px] font-bold text-[#2D2B2C] pb-2">
                    {t("career.t3_3")}
                  </p>

                  <ul className="list-disc list-outside pl-[25px] space-y-2">
                    <li className="lg:text-[16px] lg:leading-[24px] tracking-[0.44px] text-[14px] leading-[20px]   font-normal text-[#2D2B2C]">
                      {t("career.t3_4")}
                    </li>
                    <li className="lg:text-[16px] lg:leading-[24px] tracking-[0.44px] text-[14px] leading-[20px]   font-normal text-[#2D2B2C]">
                      {t("career.t3_5")}
                    </li>
                    <li className="lg:text-[16px] lg:leading-[24px] tracking-[0.44px] text-[14px] leading-[20px]   font-normal text-[#2D2B2C]">
                      {t("career.t3_6")}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex lg:gap-8 lg:flex-row flex-col gap-4">
                <div className="w-[22%]">
                  <img src="./img/career/anh2.svg" alt="" />
                </div>
                <div className="flex-1">
                  <p className="lg:text-[24px] lg:leading-[29.05px] lg:tracking-[0px] text-[20px] leading-[28px] tracking-[0.15px] font-bold text-[#2D2B2C] pb-2">
                    {t("career.t3_7")}
                  </p>

                  <ul className="list-disc list-outside pl-[25px] space-y-2">
                    <li className="lg:text-[16px] lg:leading-[24px] tracking-[0.44px] text-[14px] leading-[20px]   font-normal text-[#2D2B2C]">
                      {t("career.t3_8")}
                    </li>
                    <li className="lg:text-[16px] lg:leading-[24px] tracking-[0.44px] text-[14px] leading-[20px]   font-normal text-[#2D2B2C]">
                      {t("career.t3_9")}
                    </li>
                    <li className="lg:text-[16px] lg:leading-[24px] tracking-[0.44px] text-[14px] leading-[20px]   font-normal text-[#2D2B2C]">
                      {t("career.t3_10")}
                    </li>
                    <li className="lg:text-[16px] lg:leading-[24px] tracking-[0.44px] text-[14px] leading-[20px]   font-normal text-[#2D2B2C]">
                      {t("career.t3_11")}
                    </li>
                    <li className="lg:text-[16px] lg:leading-[24px] tracking-[0.44px] text-[14px] leading-[20px]   font-normal text-[#2D2B2C]">
                      {t("career.t3_12")}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex lg:gap-8 lg:flex-row flex-col gap-4">
                <div className="w-[22%]">
                  <img src="./img/career/anh3.svg" alt="" />
                </div>
                <div className="flex-1">
                  <p className="lg:text-[24px] lg:leading-[29.05px] lg:tracking-[0px] text-[20px] leading-[28px] tracking-[0.15px] font-bold text-[#2D2B2C] pb-2">
                    {t("career.t3_13")}
                  </p>

                  <ul className="list-disc list-outside pl-[25px] space-y-2">
                    <li className="lg:text-[16px] lg:leading-[24px] tracking-[0.44px] text-[14px] leading-[20px]   font-normal text-[#2D2B2C]">
                      {t("career.t3_14")}
                    </li>
                    <li className="lg:text-[16px] lg:leading-[24px] tracking-[0.44px] text-[14px] leading-[20px]   font-normal text-[#2D2B2C]">
                      {t("career.t3_15")}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex lg:gap-8 lg:flex-row flex-col gap-4">
                <div className="w-[22%]">
                  <img src="./img/career/anh4.svg" alt="" />
                </div>
                <div className="flex-1">
                  <p className="lg:text-[24px] lg:leading-[29.05px] lg:tracking-[0px] text-[20px] leading-[28px] tracking-[0.15px] font-bold text-[#2D2B2C] pb-2">
                    {t("career.t3_16")}
                  </p>

                  <ul className="list-disc list-outside pl-[25px] space-y-2">
                    <li className="lg:text-[16px] lg:leading-[24px] tracking-[0.44px] text-[14px] leading-[20px]   font-normal text-[#2D2B2C]">
                      {t("career.t3_17")}
                    </li>
                    <li className="lg:text-[16px] lg:leading-[24px] tracking-[0.44px] text-[14px] leading-[20px]   font-normal text-[#2D2B2C]">
                      {t("career.t3_18")}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:pt-20 pt-10">
        <div className="container">
          <p className="lg:text-[20px] lg:leading-[28px] lg:tracking-[0px] text-[16px] leading-[22.4px] tracking-[0.44px] font-bold text-[#2D2B2C]">
            {t("career.t4_1")}
          </p>
          <p className="lg:text-[48px] lg:leading-[58.09px] lg:tracking-[0px] text-[34px] leading-[41.15px] tracking-[0.25px] font-bold text-[#2D2B2C] pb-[48px]">
            {t("career.t4_2")}
          </p>
        </div>
      </div>
      <div className="lg:pb-20 pb-10 lg:max-w-[1440px] mx-auto">
        <Swiper
          centeredSlides={true}
          grabCursor={true}
          navigation={true} // Enable navigation
          modules={[Navigation]}
          breakpoints={{
            // when window width is >= 768px
            320: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1250: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          className="mySwiper_Career1"
        >
          <SwiperSlide>
            <div>
              <img src="./img/career/slide1.jpg" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src="./img/career/slide2.jpg" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src="./img/career/slide3.jpg" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src="./img/career/slide4.jpg" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src="./img/career/slide5.jpg" alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="lg:pt-20 pt-10 pb-8">
        <div className="container">
          <div className="max-w-[748px] mx-auto">
            <p className="lg:text-[48px] lg:leading-[58.09px] lg:tracking-[0px] text-[34px] leading-[41.15px] tracking-[0.25px] font-bold  text-center text-[#2D2B2C] pb-6">
              {t("career.t5_1")}
            </p>
            <p className="lg:text-[20px] lg:leading-[28px] lg:tracking-[0px] text-[16px] leading-[22.4px] tracking-[0.44px] font-normal  text-center text-[#2D2B2C]">
              {t("career.t5_2")}
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto lg:pb-20 pb-10">
        <Swiper
          slidesPerView={"auto"}
          centeredSlides={true}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          className="mySwiper_Career3"
        >
          <SwiperSlide>
            <img src="./img/Career/slide21.jpg" className="" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./img/Career/slide21.jpg" className="" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./img/Career/slide23.jpg" className=" " alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      <Bg_Parallax />
    </div>
  );
};
export default CareerInfo;
