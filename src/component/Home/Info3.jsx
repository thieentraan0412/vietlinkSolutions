import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "./CSS/info3.css";
import { EffectCube, Pagination } from "swiper/modules";
import { useTranslation } from "react-i18next";

const Info3 = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="bg-vietlink-info bg-opacity-25 lg:py-20 py-10">
      <div className="container">
        <div className="pb-8">
          <div className="mb-[12px]">
            <p className="text-[16px] leading-[22px] font-semibold tracking-[0.15px] lg:font-bold lg:text-[20px] lg:leading-[28px] text-vietlink-logo ">
              {t("home.info3.info3_1")}
            </p>
          </div>
          <div className="">
            <p className="text-[20px] leading-[28px] lg:text-[34px] font-bold text-vietlink-logo lg:leading-[41.15px] tracking-[0.25px] lg:pr-[30px]">
              {t("home.info3.info3_2")}
            </p>
          </div>
        </div>

        <div className="lg:hidden pt-[32px] w-[362px] mx-auto">
          <Swiper
            effect={"cube"}
            grabCursor={true}
            cubeEffect={{
              shadow: false,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            pagination={true}
            modules={[EffectCube, Pagination]}
            className="mySwiper1"
          >
            <SwiperSlide>
              <div className="grid grid-cols-2 gap-7 ">
                <div>
                  <img src="./img/1.png" alt="" />
                </div>
                <div>
                  <img src="./img/2.png" alt="" />
                </div>
                <div>
                  <img src="./img/5.png" alt="" />
                </div>
                <div>
                  <img src="./img/6.png" alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="grid grid-cols-2 gap-7">
                <div>
                  <img src="./img/3.png" alt="" />
                </div>
                <div>
                  <img src="./img/4.png" alt="" />
                </div>
                <div>
                  <img src="./img/7.png" alt="" />
                </div>
                <div>
                  <img src="./img/8.png" alt="" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="mx-auto max-w-[736px] lg:block hidden">
          <div className="grid grid-cols-4 gap-[32px] pb-8">
            <div>
              <img src="./img/1.png" alt="" />
            </div>
            <div>
              <img src="./img/2.png" alt="" />
            </div>
            <div>
              <img src="./img/3.png" alt="" />
            </div>
            <div>
              <img src="./img/4.png" alt="" />
            </div>
          </div>
          <div className="max-w-[736px] mx-auto grid grid-cols-4 gap-8">
            <div>
              <img src="./img/5.png" alt="" />
            </div>
            <div>
              <img src="./img/6.png" alt="" />
            </div>
            <div>
              <img src="./img/7.png" alt="" />
            </div>
            <div>
              <img src="./img/8.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Info3;
