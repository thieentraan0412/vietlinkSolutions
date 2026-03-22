import { useTranslation } from "react-i18next";
import "./css/Company.css";
import { motion } from "framer-motion";

const Tabs2 = () => {
  const { t, i18n } = useTranslation();
  //                    {t("company.tab2.t1_1")}
  // className=" text-[20px] tracking-[0.15px] text-center leading-[28px] font-bold "
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }} // Vị trí và độ mờ ban đầu
      animate={{ opacity: 1, x: 0 }} // Vị trí và độ mờ khi animation kết thúc
      transition={{ duration: 0.5, ease: "easeInOut" }} // Thời gian animation
    >
      <div >
        <div className="py-10 ">
          <div className="bg_tab2 flex items-center justify-center h-[620px]">
            <div className="max-w-[752px] flex flex-col ">
              <p className="text-white lg:text-[20px] tracking-[0.15px] text-center lg:leading-[28px] text-[16px] leading-[22px] font-semibold lg:font-bold pb-3">
                {t("company.tab2.t1_1")}
              </p>
              <p className="text-white lg:text-[48px] lg:tracking-[0.15px] text-center lg:leading-[58.09px] font-bold text-[34px] leading-[41.15px] tracking-[0.25px] pb-6">
                {t("company.tab2.t1_2")}
              </p>
              <p className="text-white lg:text-[20px] lg:leading-[28px] lg:font-normal text-[16px] leading-[22.4px] font- text-center">
                {t("company.tab2.t1_3")}
              </p>
            </div>
          </div>
        </div>
        <div className="py-20">
          <div>
            <p className="lg:pb-12 pb-6 text-[20px] tracking-[0.15px] text-center leading-[28px] font-bold ">
              {t("company.tab2.t2_1")}
            </p>
            <div>
              <div className="grid grid-cols-1 md:grid-cols-4">
                <div className="col-span-1 pl-3">
                  <p className="font-semibold tablet_max:text-sm tablet_max:font-bold">
                    {t("company.tab2.t2_2")}
                  </p>
                </div>
                <div className="col-span-3 pl-3">
                  <p className="font-normal tracking-[0.44px] tablet_max:text-sm tablet_max:leading-5 tablet_max:tracking-[0.25px]">
                    {t("company.tab2.t2_3")}
                  </p>
                </div>
              </div>
              <div className="my-4 h-[1px] w-full border-t border-t-darkGrey-shade-4"></div>

              <div className="grid grid-cols-1 md:grid-cols-4">
                <div className="col-span-1 pl-3">
                  <p className="font-semibold tablet_max:text-sm tablet_max:font-bold">
                    {t("company.tab2.t2_4")}
                  </p>
                </div>
                <div className="col-span-3 pl-3">
                  <p className="font-normal tracking-[0.44px] tablet_max:text-sm tablet_max:leading-5 tablet_max:tracking-[0.25px]">
                    {t("company.tab2.t2_5")}
                  </p>
                </div>
              </div>

              <div className="my-4 h-[1px] w-full border-t border-t-darkGrey-shade-4"></div>
              <div className="grid grid-cols-1 md:grid-cols-4">
                <div className="col-span-1 pl-3">
                  <p className="font-semibold tablet_max:text-sm tablet_max:font-bold">
                    {t("company.tab2.t2_6")}
                  </p>
                </div>
                <div className="col-span-3 pl-3">
                  <p className="lg:text-[14px] font-bold tablet_max:text-[13px] tablet_max:leading-4 tablet_max:tracking-[0.4px]">
                    {t("company.tab2.t2_7")}
                  </p>
                  <p className="pt-1 font-normal tracking-[0.44px] tablet_max:text-sm tablet_max:leading-5 tablet_max:tracking-[0.25px]">
                    {t("company.tab2.t2_8")}
                  </p>
                  <p className="lg:text-[14px] pt-6 font-bold tablet_max:text-[13px] tablet_max:leading-4 tablet_max:tracking-[0.4px]">
                    {t("company.tab2.t2_9")}
                  </p>
                  <p className="lg:text-[14px] py-1 font-bold tablet_max:text-[13px] tablet_max:leading-4 tablet_max:tracking-[0.4px]">
                    {t("company.tab2.t2_10")}
                  </p>
                  <p className="font-normal tracking-[0.44px] tablet_max:text-sm tablet_max:leading-5 tablet_max:tracking-[0.25px]">
                    {t("company.tab2.t2_11")}
                  </p>
                  <p className="lg:text-[14px]  pt-6 font-bold tablet_max:text-[13px] tablet_max:leading-4 tablet_max:tracking-[0.4px]">
                    {t("company.tab2.t2_12")}
                  </p>
                  <p className="font-normal tracking-[0.44px] tablet_max:text-sm tablet_max:leading-5 tablet_max:tracking-[0.25px]">
                    {t("company.tab2.t2_13")}
                  </p>
                </div>
              </div>

              <div className="my-4 h-[1px] w-full border-t border-t-darkGrey-shade-4"></div>
              <div className="grid grid-cols-1 md:grid-cols-4">
                <div className="col-span-1 pl-3">
                  <p className="font-semibold tablet_max:text-sm tablet_max:font-bold">
                    {t("company.tab2.t2_14")}
                  </p>
                </div>
                <div className="col-span-3 pl-3">
                  <p className="font-normal tracking-[0.44px] tablet_max:text-sm tablet_max:leading-5 tablet_max:tracking-[0.25px]">
                    {t("company.tab2.t2_15")}
                  </p>
                  <p className="lg:text-[14px] pt-2 font-bold tracking-[0.44px] tablet_max:text-sm tablet_max:leading-5 tablet_max:tracking-[0.25px]">
                    {t("company.tab2.t2_16")}
                  </p>
                  <p className=" pt-1 font-normal tracking-[0.44px] tablet_max:text-sm tablet_max:leading-5 tablet_max:tracking-[0.25px]">
                    {t("company.tab2.t2_17")}
                  </p>
                  <p className="lg:text-[14px] pt-2 font-bold tracking-[0.44px] tablet_max:text-sm tablet_max:leading-5 tablet_max:tracking-[0.25px]">
                    {t("company.tab2.t2_18")}
                  </p>
                  <p className="text-[16px] pt-1 font-normal tracking-[0.44px] tablet_max:text-sm tablet_max:leading-5 tablet_max:tracking-[0.25px]">
                    {t("company.tab2.t2_19")}
                  </p>
                  <p className="lg:text-[14px] pt-2 font-bold tracking-[0.44px] tablet_max:text-sm tablet_max:leading-5 tablet_max:tracking-[0.25px]">
                    {t("company.tab2.t2_20")}
                  </p>
                  <p className="font-normal tracking-[0.44px] tablet_max:text-sm tablet_max:leading-5 tablet_max:tracking-[0.25px] pt-1">
                    {t("company.tab2.t2_21")}a
                  </p>
                </div>
              </div>
              <div className="my-3 h-[1px] w-full border-t border-t-darkGrey-shade-4"></div>
              <div className="grid grid-cols-1 md:grid-cols-4">
                <div className="col-span-1 pl-3">
                  <p className="font-semibold tablet_max:text-sm tablet_max:font-bold">
                    {t("company.tab2.t2_22")}
                  </p>
                </div>
                <div className="col-span-3 pl-3">
                  <p className="font-normal tracking-[0.44px] tablet_max:text-sm tablet_max:leading-5 tablet_max:tracking-[0.25px]">
                    {t("company.tab2.t2_23")}
                  </p>
                </div>
              </div>
              <div className="my-4 h-[1px] w-full border-t border-t-darkGrey-shade-4"></div>
              <div className="grid grid-cols-1 md:grid-cols-4">
                <div className="col-span-1 pl-3">
                  <p className="font-semibold tablet_max:text-sm tablet_max:font-bold">
                    {t("company.tab2.t2_24")}
                  </p>
                </div>
                <div className="col-span-3 pl-3">
                  <p className="font-normal tracking-[0.44px] tablet_max:text-sm tablet_max:leading-5 tablet_max:tracking-[0.25px]">
                    {t("company.tab2.t2_25")}
                  </p>
                </div>
              </div>
              <div className="my-4 h-[1px] w-full border-t border-t-darkGrey-shade-4"></div>
              <div className="grid grid-cols-1 md:grid-cols-4">
                <div className="col-span-1 pl-3">
                  <p className="font-semibold tablet_max:text-sm tablet_max:font-bold">
                    {t("company.tab2.t2_26")}
                  </p>
                </div>
                <div className="col-span-3 pl-3">
                  <p className="font-normal tracking-[0.44px] tablet_max:text-sm tablet_max:leading-5 tablet_max:tracking-[0.25px]">
                    {t("company.tab2.t2_27")}
                  </p>
                </div>
              </div>
              <div className="my-4 h-[1px] w-full border-t border-t-darkGrey-shade-4"></div>
              <div className="grid grid-cols-1 md:grid-cols-4">
                <div className="col-span-1 pl-3">
                  <p className="font-semibold tablet_max:text-sm tablet_max:font-bold">
                    {t("company.tab2.t2_28")}
                  </p>
                </div>
                <div className="col-span-3 pl-3">
                  <p className="font-normal tracking-[0.44px] tablet_max:text-sm tablet_max:leading-5 tablet_max:tracking-[0.25px]">
                    {t("company.tab2.t2_29")}
                  </p>
                </div>
              </div>
              <div className="my-4 h-[1px] w-full border-t border-t-darkGrey-shade-4"></div>
            </div>
          </div>
        </div>
        <div className="lg:py-[60px] py-10">
          <div className="max-w-[1012px] mx-auto ">
            {i18n.language === "en" ? (
              <div className="pb-12 flex flex-col gap-3">
                <p className="lg:text-[20px] lg:tracking-[0.15px] lg:leading-[28px] lg:font-bold text-[16px] tracking-[0.25px] leading-[22px] font-semibold text-center">
                  {t("company.tab2.t3_1")}
                </p>
                <p className="text-[34px] leading-[41.15px] lg:tracking-[0px] tracking-[0.25px]  lg:text-[48px] text-center lg:leading-[58.09px] font-bold ">
                  {t("company.tab2.t3_2")}
                </p>
              </div>
            ) : (
              <p className="pb-12 text-[34px] leading-[41.15px] lg:tracking-[0px] tracking-[0.25px] lg:text-[48px] text-center lg:leading-[58.09px] font-bold ">
                {t("company.tab2.t3_1")}
              </p>
            )}
            <div className="lg:grid lg:grid-cols-2 grid-cols-1 gap-[64px]">
              <img
                className="lg:block hidden"
                src="./img/tab2/anh2.png"
                alt=""
              />
              <div className="py-2">
                <ul>
                  <li className="flex gap-3 justify-center items-center">
                    <div className="listtab2 min-w-[62px] text-[24px] tracking-[0.15px] leading-[28px] font-normal">
                      2023
                    </div>
                    <div className="min-w-4 min-h-4 rounded-[50%] bg-vietlink-logoI"></div>
                    <div className="flex-1 text-[14px] leading-[19.6px] tracking-[0.25px] font-normal">
                      {t("company.tab2.t3_3")}
                    </div>
                  </li>
                  <li className="pl-[82px] ">
                    <div className="border-l-2 border-dashed border-darkGrey-shade-10 h-12"></div>
                  </li>
                  <li className="flex gap-3 justify-center items-center">
                    <div className="listtab2 min-w-[62px] text-[24px] tracking-[0.15px] leading-[28px] font-normal">
                      2019
                    </div>
                    <div className="min-w-4 min-h-4 rounded-[50%] bg-black"></div>
                    <div className="flex-1 text-[14px] leading-[19.6px] tracking-[0.25px] font-normal">
                      {t("company.tab2.t3_4")}
                    </div>
                  </li>
                  <li className="pl-[82px] ">
                    <div className="border-l-2 border-dashed border-darkGrey-shade-10 h-12"></div>
                  </li>
                  <li className="flex gap-3 justify-center items-center">
                    <div className="listtab2 min-w-[62px] text-[24px] tracking-[0.15px] leading-[28px] font-normal">
                      2017
                    </div>
                    <div className="min-w-4 min-h-4 rounded-[50%] bg-black"></div>
                    <div className="flex-1 text-[14px] leading-[19.6px] tracking-[0.25px] font-normal">
                      {t("company.tab2.t3_5")}
                    </div>
                  </li>
                  <li className="pl-[82px] ">
                    <div className="border-l-2 border-dashed border-darkGrey-shade-10 h-12"></div>
                  </li>
                  <li className="flex gap-3 justify-center items-center">
                    <div className="listtab2 min-w-[62px] text-[24px] tracking-[0.15px] leading-[28px] font-normal">
                      2016
                    </div>
                    <div className="min-w-4 min-h-4 rounded-[50%] bg-black"></div>
                    <div className="flex-1 text-[14px] leading-[19.6px] tracking-[0.25px] font-normal">
                      {t("company.tab2.t3_6")}
                    </div>
                  </li>
                  <li className="pl-[82px] ">
                    <div className="border-l-2 border-dashed border-darkGrey-shade-10 h-[52px]"></div>
                  </li>
                  <li className="flex gap-3 justify-center items-center">
                    <div className="listtab2 min-w-[62px] text-[24px] tracking-[0.15px] leading-[28px] font-normal">
                      2015
                    </div>
                    <div className="min-w-4 min-h-4 rounded-[50%] bg-black"></div>
                    <div className="flex-1 text-[14px] leading-[19.6px] tracking-[0.25px] font-normal">
                      {t("company.tab2.t3_7")}
                    </div>
                  </li>
                  <li className="pl-[82px] ">
                    <div className="border-l-2 border-dashed border-darkGrey-shade-10 h-[52px]"></div>
                  </li>
                  <li className="flex gap-3 justify-center items-center">
                    <div className="listtab2 min-w-[62px] text-[24px] tracking-[0.15px] leading-[28px] font-normal">
                      2014
                    </div>
                    <div className="min-w-4 min-h-4 rounded-[50%] bg-black"></div>
                    <div className="flex-1 text-[14px] leading-[19.6px] tracking-[0.25px] font-normal">
                      {t("company.tab2.t3_8")}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default Tabs2;
