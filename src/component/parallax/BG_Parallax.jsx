import { useTranslation } from "react-i18next";
import "../service/service.css"
const Bg_Parallax = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="bg-service">
      <div className="lg:py-20 py-10 bg-[#E4E4E4] bg-opacity-20">
        <div className="container">
          <p className="lg:text-[48px] lg:leading-[58.09px] lg:tracking-[0px] text-[34px] leading-[41.15px] tracking-[0.25px] font-bold  text-center pb-6">
            {t("service.t7_1")}
          </p>
          <p className="mx-auto max-w-[840px] lg:text-[16px] lg:leading-[22.4px] lg:tracking-[0.44px] text-[14px] leading-[19.6px] tracking-[0.25px] font-normal text-center pb-10">
            {t("service.t7_2")}
          </p>
          <div className="">
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
          </div>
        </div>
      </div>
    </div>
  );
};
export default Bg_Parallax;
