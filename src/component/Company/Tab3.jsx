import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import ThumnailTab3 from "./ThumnailTab3";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./css/tab3.css";

// import required modules
import { Pagination } from "swiper/modules";
import { useTranslation } from "react-i18next";

const Tabs3 = () => {
  const { t, i18n } = useTranslation();
  const data = [
    {
      url: "./img/tab3/anh3.png",
      info1: t("company.tab3.t1_1"),
      info2: t("company.tab3.t1_2"),
      info3: t("company.tab3.t1_3"),
      info4: t("company.tab3.t1_4"),
      map: "1",
    },
    {
      url: "./img/tab3/anh2.png",
      info1: t("company.tab3.t2_1"),
      info2: t("company.tab3.t2_2"),
      info3: t("company.tab3.t2_3"),
      info4: t("company.tab3.t2_4"),
      map: "2",
    },
    {
      url: "./img/tab3/anh3.png",
      info1: t("company.tab3.t3_1"),
      info2: t("company.tab3.t3_2"),
      info3: t("company.tab3.t3_3"),
      phone: t("company.tab3.t3_4"),
      info4: t("company.tab3.t3_5"),
      map: "3",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }} // Vị trí và độ mờ ban đầu
      animate={{ opacity: 1, x: 0 }} // Vị trí và độ mờ khi animation kết thúc
      transition={{ duration: 0.5, ease: "easeOut" }} // Thời gian animation
    >
      <div className="pt-10 pb-[120px]">
        <Swiper
          slidesPerView={"auto"}
          centeredSlides={true}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper4"
        >
          <SwiperSlide>
            <ThumnailTab3 data={data[0]} />
          </SwiperSlide>
          <SwiperSlide>
            <ThumnailTab3 data={data[1]} />
          </SwiperSlide>
          <SwiperSlide>
            <ThumnailTab3 data={data[2]} />
          </SwiperSlide>
        </Swiper>
      </div>
    </motion.div>
  );
};
export default Tabs3;
