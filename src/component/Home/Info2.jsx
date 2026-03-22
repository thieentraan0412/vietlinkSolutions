import { useTranslation } from "react-i18next";

const Info2 = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="lg:py-20 py-10">
    <div className="container">
      <div className="flex flex-col items-center lg:gap-[45px] gap-[24px]">
      {/* <div className=" h-[58px] flex justify-center "> */}
      <div className="text-[34px] leading-[41px] font-bold lg:text-[48px] text-vielink-logo lg:leading-[58.09px] text-center">
      {/* {t("home.info2.info2_1")} */}
      {i18n.language == 'vi' ? (
                  <p>{t("home.info2.info2_1")}</p>
                ) : (
                  <div className="">
                    <p className="font-bold leading-[28px] text-center lg:text-[20px] text-[16px] tracking-[0.15px] text-5 pb-3">{t("home.info2.info2_11")}</p>
                    <p className="text-12 laeding-[58.09px] text-center font-bold">{t("home.info2.info2_12")}</p>
                  </div>
                )}
      </div>
      {/* </div> */}

      <div className="grid lg:grid-cols-4 md:gap-8 md:grid-cols-2 grid-cols-1 gap-6">
        <div>
          <div className="flex justify-center lg:pb-6 lg:pt-0 py-[50px]">
            <img src="./img/7+.png" alt="" />
          </div>
          <div className=" w-full text-center font-normal leading-[140%] lg:leading-[22.4px] text-vietlink-logo tracking-[0.44px] ">
            <p className="lg:text-[16px] text-[14px]">{t("home.info2.info2_2")}</p>
          </div>
        </div>
        <div>
          <div className="flex justify-center lg:pb-6 lg:pt-0 py-[50px]">
            <img src="./img/40+.jpg" alt="" />
          </div>
          <div className=" text-center font-normal leading-[140%] lg:leading-[22.4px] text-vietlink-logo tracking-[0.44px] ">
          <p className="lg:text-[16px] text-[14px]">{t("home.info2.info2_3")}</p>
          </div>
        </div>
        <div>
          <div className="flex justify-center  lg:pb-6 lg:pt-0 py-[50px]">
            <img src="./img/30+.png" alt="" />
          </div>
          <div className="text-center font-normal leading-[22.4px] text-vietlink-logo tracking-[0.44px]">
          <p className="lg:text-[16px] text-[14px]">{t("home.info2.info2_4")}</p>
          </div>
        </div>
        <div>
          <div className="flex justify-center lg:pb-6 lg:pt-0 py-[50px]">
            <img src="./img/30.png" alt="" />
          </div>
          <div className="text-center font-normal leading-[22.4px] text-vietlink-logo tracking-[0.44px]">
          <p className="lg:text-[16px] text-[14px]">{t("home.info2.info2_5")}</p>

          </div>
        </div>  
      </div>

      </div>
    </div>
    </div>
  );
};
export default Info2;
