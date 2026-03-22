import { useTranslation } from "react-i18next";

const Info4 = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="lg:py-[80px] py-10">
      <div className="container">
        <div className="lg:w-[1012px] lg:mx-auto grid lg:grid-cols-2 grid-cols-1 lg:gap-[64px] gap-6">
          <div className="rounded-[12px] object-cover ">
            <img
              className="object-cover w-[100%] h-[100%] "
              src="./img/info4.png"
              alt=""
            />
          </div>
          <div className="">
            <div className="lg:pt-[40px] font-bold text-[16px] leading-[22px] lg:text-[20px] lg:leading-[28px] tracking-[0.15px] text-vietlink-logo ">
              <p>{t("home.info4.info4_1")}</p>
            </div>
            <div className="lg:pt-[12px] pt-2">
              <p className="font-bold text-vietlink-logo lg:text-[48px] lg:leading-[58.89px] text-[34px] leading-[41px]">
                {t("home.info4.info4_2")}
              </p>
            </div>
            <div className="mt-[22px] text-vietlink-logo font-normal lg:leading-[22.4px] tracking-[0.44px] lg:text-[16px]">
                <p className="text-vietlink-logo font-normal lg:leading-[22.4px] tracking-[0.44px] lg:text-[16px]">{t("home.info4.info4_3.info4_3_1")}</p> <br />
                <p className="text-vietlink-logo font-normal lg:leading-[22.4px] tracking-[0.44px] lg:text-[16px]">{t("home.info4.info4_3.info4_3_2")}</p>
            </div>
            <button className=" flex items-center gap-[10px] h-[60px] mt-[62px] bg-white px-[18px] py-[9px] rounded-sm text-vietlink-logoI border-2 border-vietlink-logoI ">
              <p className="ml-1 mb-[1px] font-semibold text-[16px] leading-[22px] text-center ">
                {t("home.info4.info4_4")}
              </p>
              <img className="z-10 ml-[1px]" src="./img/aaa.png" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Info4;
