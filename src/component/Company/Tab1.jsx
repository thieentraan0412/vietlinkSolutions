import { useTranslation } from "react-i18next";
import ThumnailTab1 from "./ThumnailTab1";
import React, { useRef, useState } from "react";
import { Pagination } from "swiper/modules";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./css/tab1.css";

const Tabs1 = () => {
  const { t, i18n } = useTranslation();
  //                     {t("company.tab1.t2_1")}
  const data1 = {
    url_img: "./img/tab1/anh7.png",
    info1: t("company.tab1.t8_3"),
    info2: t("company.tab1.t8_4"),
    url_img2: "./img/tab1/anh10.png",
    info3: "Shingo Niori",
    info4: "mediba’s CEO",
  };
  const data2 = {
    url_img: "./img/tab1/anh8.png",
    info1: t("company.tab1.t8_5"),
    info2: t("company.tab1.t8_6"),
    url_img2: "./img/tab1/anh11.png",
    info3: "Thanh Nguyen",
    info4: "Mekong’s Founder & Deputy Director",
  };
  const data3 = {
    url_img: "./img/tab1/anh9.png",
    info1: t("company.tab1.t8_7"),
    info2: t("company.tab1.t8_8"),
    url_img2: "./img/tab1/anh12.png",
    info3: "Masaya Taguchi",
    info4: "General Director, KDDI Vietnam",
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }} // Vị trí và độ mờ ban đầu
      animate={{ opacity: 1, x: 0 }} // Vị trí và độ mờ khi animation kết thúc
      transition={{ duration: 0.5, ease: "easeOut" }} // Thời gian animation
    >
      <div>
        <div className="lg:pt-10 lg:pb-20 pt-6 pb-10">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 lg:gap-[64px] gap-[10px] mx-auto max-w-[1012px]">
            <div className="">
              <img
                src="./img/tab1/anh1.png"
                className="w-full h-full object-fill"
                alt=""
              />
            </div>
            <div className="flex flex-col lg:gap-[12px] gap-[8px] justify-center">
              <div>
                <p className="lg:font-bold lg:text-[20px] lg:leading-[28px] lg:tracking-[0.15px] text-[16px] leading-[22px] font-semibold">
                  {t("company.tab1.t1_1")}
                </p>
              </div>
              <div className="lg:pb-4 pb-6">
                <p className="font-bold lg:text-[48px] lg:leading-[58.09px] lg:tracking-[0px] text-[34px] tracking-[0.25px] leading-[41.15px]  ">
                  {t("company.tab1.t1_2")}
                </p>
              </div>
              <div>
                <p className="font-normal lg:text-[16px] lg:leading-[22.4px] lg:tracking-[0.44px] text-[14px] leading-[19.6px] tracking-[0.25px] text-[#2D2B2C]">
                  {t("company.tab1.t1_3")}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:py-20 py-10">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-[64px] mx-auto max-w-[1012px]">
            <div className="lg:order-2">
              <img
                src="./img/tab1/anh2.png"
                className="w-full h-full object-fill"
                alt=""
              />
            </div>
            <div className="flex flex-col lg:gap-3 gap-[8px]  justify-center lg:order-1">
              <div>
                <p className="lg:font-bold font-semibold lg:text-[20px] lg:leading-[28px] lg:tracking-[0.15px] text-[16px] leading-[22px]">
                  {t("company.tab1.t2_1")}
                </p>
              </div>
              <div className="flex flex-col gap-8 ">
                <div className="flex flex-col gap-2">
                  <p className="font-normal text-[16px] leading-[22.4px] tracking-[0.44px]  text-[#2D2B2C]">
                    {t("company.tab1.t2_2")}
                  </p>
                  <p className="font-bold lg:text-[24px] lg:leading-[29.05px] lg:tracking-[0] tracking-[0.15px] text-[20px] leading-[28px] text-[#2D2B2C]">
                    {t("company.tab1.t2_3")}
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-normal text-[16px] leading-[22.4px] tracking-[0.44px] text-[#2D2B2C]">
                    {t("company.tab1.t2_4")}
                  </p>
                  <p className="font-bold lg:text-[24px] lg:leading-[29.05px] lg:tracking-[0] tracking-[0.15px] text-[20px] leading-[28px] text-[#2D2B2C]">
                    {t("company.tab1.t2_5")}
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-normal text-[16px] leading-[22.4px] tracking-[0.44px] text-[#2D2B2C]">
                    {t("company.tab1.t2_6")}
                  </p>
                  <p className="font-bold lg:text-[24px] lg:leading-[29.05px] lg:tracking-[0] tracking-[0.15px] text-[20px] leading-[28px] text-[#2D2B2C]">
                    {t("company.tab1.t2_7")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-20">
          <div className="max-w-[556px] mx-auto pb-12">
            <p className="text-[48px] leading-[58.09px] text-center font-bold">
              {t("company.tab1.t4_1")}
            </p>
          </div>
          <div className="grid lg:grid-cols-3 grid-cols-1  lg:gap-8 gap-6">
            <div>
              <div className="flex flex-col gap-6 lg:pb-10 pb-6">
                <div>
                  <img
                    src="./img/tab1/anh4.png"
                    className="w-full h-full object-fill"
                    alt=""
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-[16px] font-semibold leading-[22px] lg:text-[24px] lg:text-right lg:leading-[29.05px] lg:font-bold">
                    NGUYEN TRUNG THANH
                  </p>
                  <p className="text-[20px] lg:text-right leading-[28px] font-normal">
                    Chủ tịch
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <p className="lg:text-[24px] lg:font-bold lg:leading-[29.05px] text-[20px] font-bold leading-[28px] tracking-[0.15px] lg:tracking-[0]">
                  {t("company.tab1.t4_3")}
                </p>
                <p className="text-[14px] font-normal leading-[19.06px] tracking-[0.25px] lg:text-[20px] lg:font-normal lg:leading-[28px] lg:tracking-[0] text-[#2D2B2C]">
                  {t("company.tab1.t4_4")}
                </p>
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-6 lg:pb-10 pb-6">
                <div>
                  <img
                    src="./img/tab1/anh5.png"
                    className="w-full h-full object-fill"
                    alt=""
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-[16px] font-semibold leading-[22px] lg:text-[24px] lg:text-right lg:leading-[29.05px] lg:font-bold">
                    Yutaka Horie
                  </p>
                  <p className="text-[20px] lg:text-right leading-[28px] font-normal">
                    CEO
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <p className="lg:text-[24px] lg:font-bold lg:leading-[29.05px] text-[20px] font-bold leading-[28px] tracking-[0.15px] lg:tracking-[0] lg:h-[232px]">
                  {t("company.tab1.t4_6")}
                </p>
                <p className="text-[14px] font-normal leading-[19.06px] tracking-[0.25px] lg:text-[20px] lg:font-normal lg:leading-[28px] lg:tracking-[0] text-[#2D2B2C]  ">
                  {t("company.tab1.t4_7")}
                </p>
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-6 lg:pb-10 pb-6">
                <div>
                  <img
                    src="./img/tab1/anh6.png"
                    className="w-full h-full object-fill"
                    alt=""
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-[16px] font-semibold leading-[22px] lg:text-[24px] lg:text-right lg:leading-[29.05px] lg:font-bold">
                    Kouta Miyakawa
                  </p>
                  <p className="text-[20px] lg:text-right leading-[28px] font-normal">
                    General Manager
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <p className="lg:text-[24px] lg:font-bold lg:leading-[29.05px] text-[20px] font-bold leading-[28px] tracking-[0.15px] lg:tracking-[0] lg:h-[232px] ">
                  {t("company.tab1.t4_8")}
                </p>
                <p className="text-[14px] font-normal leading-[19.06px] tracking-[0.25px] lg:text-[20px] lg:font-normal lg:leading-[28px] lg:tracking-[0] text-[#2D2B2C]  ">
                  {t("company.tab1.t4_9")}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="py-20">
          <div className="pb-6">
            <p className="pb-3 text-[20px] leading-[28px] tracking-[0.15px] font-bold">
              {t("company.tab1.t8_1")}
            </p>
            <p className="text-[34px] leading-[41.15px] tracking-[0.15px] lg:tracking-[0px] lg:text-[48px] lg:leading-[58.09px] font-bold">
              {t("company.tab1.t8_2")}
            </p>
          </div>
          <div className="md:block hidden">
            <div className="grid grid-cols-3 gap-8 pb-10">
              <div>
                <img className="pb-3" src={data1.url_img} alt="" />
                <p className="font-bold text-[20px] leading-[28px] tracking-[0.15px]">
                  {data1.info1}
                </p>
              </div>
              <div>
                <img className="pb-3" src={data2.url_img} alt="" />
                <p className="font-bold text-[20px] leading-[28px] tracking-[0.15px]">
                  {data2.info1}
                </p>
              </div>
              <div>
                <img className="pb-3" src={data3.url_img} alt="" />
                <p className="font-bold text-[20px] leading-[28px] tracking-[0.15px]">
                  {data3.info1}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-8 ">
              <div>
                <div className="pb-3 font-normal leading-[22.4px] tracking-[0.44px] text-[16px] min-h-[228px]">
                  {data1.info2}
                </div>
                <div className="flex flex-col gap-3 px-6">
                  <div className="flex justify-end">
                    <img className="h-20 w-20" src={data1.url_img2} alt="" />
                  </div>
                  <div>
                    <p className="font-bold leading-[28px] tracking-[0.15px] text-[20px] text-right  pb-1">
                      {data1.info3}
                    </p>
                    <p className="font-normal leading-[19.6px] tracking-[0.25px] text-[14px] text-right">
                      {data1.info4}
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="pb-3 font-normal leading-[22.4px] tracking-[0.44px] text-[16px] min-h-[228px]">
                  {data2.info2}
                </div>
                <div className="flex flex-col gap-3 px-6">
                  <div className="flex justify-end">
                    <img className="h-20 w-20" src={data2.url_img2} alt="" />
                  </div>
                  <div>
                    <p className="font-bold leading-[28px] tracking-[0.15px] text-[20px] text-right  pb-1">
                      {data2.info3}
                    </p>
                    <p className="font-normal leading-[19.6px] tracking-[0.25px] text-[14px] text-right">
                      {data2.info4}
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="pb-3 font-normal leading-[22.4px] tracking-[0.44px] text-[16px] min-h-[228px]">
                  {data3.info2}
                </div>
                <div className="flex flex-col gap-3 px-6">
                  <div className="flex justify-end">
                    <img className="h-20 w-20" src={data3.url_img2} alt="" />
                  </div>
                  <div>
                    <p className="font-bold leading-[28px] tracking-[0.15px] text-[20px] text-right  pb-1">
                      {data3.info3}
                    </p>
                    <p className="font-normal leading-[19.6px] tracking-[0.25px] text-[14px] text-right">
                      {data3.info4}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:hidden block">
            <Swiper
              slidesPerView={"auto"}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper3"
            >
              <SwiperSlide>
                <ThumnailTab1 data={data1} />
              </SwiperSlide>
              <SwiperSlide>
                <ThumnailTab1 data={data2} />
              </SwiperSlide>
              <SwiperSlide>
                <ThumnailTab1 data={data3} />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default Tabs1;
