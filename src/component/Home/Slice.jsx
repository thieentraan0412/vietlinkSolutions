import { useTranslation } from "react-i18next";
import "./CSS/home.css";
const Slice = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="carousel-image">
      <div className="container">
        <div className="lg:pt-[128px] max-w-[852px] pt-[200px]">
          <div>
            <p className="font-bold text-vietlink-secondary ml-[1px] lg:text-[20px] lg:leading-[28px] lg:tracking-[0.15px] text-[16px] leading-[22px]">
              {t("home.slice.slice1")}
            </p>
          </div>
          <div>
            <p className="text-[20px] leading-[28px] tracking-[0.15px] mt-[8px] gap-[24px] lg:text-[60px] font-bold lg:leading-[72.61px] text-vietlink-secondary lg:mt-[12px]">
              {t("home.slice.slice2")}
            </p>
          </div>
          <button className=" px-[16px] py-[9px] w-[176px] h-[60px] gap-[10px] mt-[40px] lg:w-[224px] lg:h-[60px] lg:mt-[64px] lg:gap-[10px] lg:px-[16px] lg:py-[9px] bg-vietlink-logoI text-vietlink-secondary flex items-center justify-center text-center">
            <div className="text-center">
              <p className="lg:mr-2 text-white lg:leading-[22px] text-center font-semibold text-[16px]">
                {t("home.slice.slice3")}
              </p>
            </div>
            <img src="./img/Vector.png" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slice;
