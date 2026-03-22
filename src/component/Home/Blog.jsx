import Thumnail from "./Thumnail";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./CSS/blog.css";

// import required modules
import { Pagination } from "swiper/modules";
import { useTranslation } from "react-i18next";

const Blog = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="py-20">
      <div className="container ">
        <div className="mb-[3rem]">
          <div className="lg:font-bold lg:text-[20px] text-center lg:leading-[28px] text-[20px] leading-[22px] font-semibold ">
          <p>{t("home.blog.blog_tiltle1")}</p>

          </div>
          <div className="font-bold lg:text-[48px] text-center lg:leading-[58.09px] text-[34px] leading-[41px] lg:mt-3">
          {t("home.blog.blog_tiltle2")}
          </div>
        </div>
        <div className="md:hidden block w-full">
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper2"
          >
            <SwiperSlide>
              <Thumnail
                img={"./img/blog1.png"}
                title={"What is Agile Software Development?"}
                info={"VnExpress"}
                descriptions_img={"Agile Development"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Thumnail
                img={"./img/blog4.png"}
                title={"Apple's iPhone 14 is probably launching soon"}
                info={"Lisa Eadicicco"}
                descriptions_img={"Technology"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Thumnail
                img={"./img/blog2.png"}
                title={"Software Testing Training Summary"}
                info={"VnExpress"}
                descriptions_img={"QA / Software Testing"}
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Thumnail
                img={"./img/blog5.png"}
                title={
                  "Robinhood to cut 23% of its workforce, revenue sinks 44%"
                }
                info={"VnExpress"}
                descriptions_img={"Technology"}
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Thumnail
                img={"./img/blog3.png"}
                title={"“Outsourcing’ and ‘Offshoring’ are the same thing"}
                info={"thescalers.com"}
                descriptions_img={"Offshore Development"}
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Thumnail
                img={"./img/blog6.png"}
                title={"What is an example of Agile development?"}
                info={"unsplash.com/"}
                descriptions_img={"Agile Development"}
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="lg:columns-3 lg:gap-8 hidden md:columns-2 md:gap-8 md:block">
          <Thumnail
            img={"./img/blog1.png"}
            title={"What is Agile Software Development?"}
            info={"VnExpress"}
            descriptions_img={"Agile Development"}
          />
          <Thumnail
            img={"./img/blog4.png"}
            title={"Apple's iPhone 14 is probably launching soon"}
            info={"Lisa Eadicicco"}
            descriptions_img={"Technology"}
          />
          <Thumnail
            img={"./img/blog2.png"}
            title={"Software Testing Training Summary"}
            info={"VnExpress"}
            descriptions_img={"QA / Software Testing"}
          />
          <Thumnail
            img={"./img/blog5.png"}
            title={"Robinhood to cut 23% of its workforce, revenue sinks 44%"}
            info={"VnExpress"}
            descriptions_img={"Technology"}
          />
          <Thumnail
            img={"./img/blog3.png"}
            title={"“Outsourcing’ and ‘Offshoring’ are the same thing"}
            info={"thescalers.com"}
            descriptions_img={"Offshore Development"}
          />
          <Thumnail
            img={"./img/blog6.png"}
            title={"What is an example of Agile development?"}
            info={"unsplash.com/"}
            descriptions_img={"Agile Development"}
          />
        </div>
      </div>
    </div>
  );
};
export default Blog;
