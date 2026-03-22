import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Tabs1 from "./Tab1";
import Tabs2 from "./Tab2";
import Tabs3 from "./Tab3";

const CompanyInfo = () => {
  const { t, i18n } = useTranslation();
  const [clicktab, setclicktab] = useState(1);
  const [active, setActive] = useState(1);

  return (
    <div className="bg-white ">
      <motion.div
        initial={{ opacity: 0, y: 20 }} // Vị trí và độ mờ ban đầu
        animate={{ opacity: 1, y: 0 }} // Vị trí và độ mờ khi animation kết thúc
        transition={{ duration: 0.5, ease: "easeOut" }} // Thời gian animation
      >
        <div className="container mx-auto text-[#2D2B2C]">
          <div className="py-[100px]">
            <div className="pb-6">
              <p className="font-bold lg:text-[48px] lg:leading-[58.09px] text-[34px] leading-[41.15px] tracking-[0.25px] text-center">
                {t("company.company_info1")}
              </p>
            </div>
            <div className="max-w-[816px] mx-auto">
              <p className="lg:text-[20px] lg:leading-[28px] lg:tracking-[0] text-center lg:font-normal text-[16px] leading-[22.4px] tracking-[0.44px] font-normal text-[#3B3A40]">
                {t("company.company_info2")}
              </p>
            </div>
          </div>
        </div>

        <div className="relative overflow-x-hidden">
          <div className="container mx-auto">
            <div className="text-[#2D2B2C] overflow-x-auto outer-wrapper pb-5">
              <div className="flex flex-row gap-[38px] mx-auto pt-[10px] max-w-[425px] mb-[-1px] relative z-[2]">
                <div
                  onClick={() => setclicktab(1)}
                  className="hover:cursor-pointer"
                >
                  <div
                    className={` ${
                      clicktab === 1
                        ? ""
                        : "text-[#808191] border-transparent"
                    } relative pb-[20px]  hover:cursor-pointer font-bold text-[14px] leading-[21px] text-center whitespace-nowrap`}
                  >
                    {t("company.company_buttion1")}
                    {clicktab === 1 && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-black"
                        layoutId="border"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                  </div>
                </div>
                <div
                  onClick={() => setclicktab(2)}
                  className="hover:cursor-pointer "
                >
                  <div
                    className={` ${
                      clicktab === 2
                        ? ""
                        : "text-[#808191] border-transparent"
                    } relative pb-[20px]  hover:cursor-pointer text-[14px] font-bold leading-[21px] text-center whitespace-nowrap`}
                  >
                    {t("company.company_buttion2")}
                    {clicktab === 2 && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-black"
                        layoutId="border"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                  </div>
                </div>
                <div
                  onClick={() => setclicktab(3)}
                  className="hover:cursor-pointer "
                >
                  <div
                    className={` ${
                      clicktab === 3
                        ? " "
                        : "text-[#808191] border-transparent"
                    } relative pb-[20px] hover:cursor-pointer font-bold text-[14px] leading-[21px] text-center whitespace-nowrap`}
                  >
                    {t("company.company_buttion3")}
                    {clicktab === 3 && (
                      <motion.div
                        className="absolute bottom-[0px] left-0 right-0 h-[2px] bg-black"
                        layoutId="border"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="container mx-auto text-[#2D2B2C]">
        {clicktab === 1 ? <Tabs1 /> : clicktab === 2 ? <Tabs2 /> : <Tabs3 />}
      </div>
    </div>
  );
};
export default CompanyInfo;
