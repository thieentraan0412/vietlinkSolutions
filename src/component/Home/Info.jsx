import { useTranslation } from "react-i18next";

const Info = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="lg:py-[80px] py-10">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="flex justify-center items-center">
            <div>
              <div className="text-[34px] leading-[41px] lg:text-[48px] text-vietlink-logo text-center font-bold lg:leading-[58.09px]">
                {i18n.language == 'vi' ? (
                  <p>{t("home.info.info1")}</p>
                ) : (
                  <div className="">
                    <p className="font-bold leading-[28px] text-center lg:text-[20px] text-[16px] tracking-[0.15px] text-5 pb-3">{t("home.info.info1_1")}</p>
                    <p className="text-12 laeding-[58.09px] text-center font-bold">{t("home.info.info1_2")}</p>
                  </div>
                )}
              </div>
              <div className="text-4 leading-[22px] tracking-[0.44px] lg:text-[20px] pt-[24px] pb-[48px] text-center font-normal lg:leading-[28px]">
                <p className="text-4 leading-[22px] tracking-[0.44px] lg:text-[20px] text-center font-normal lg:leading-[28px]">
                  {t("home.info.info2")}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[32px]">
            <div className="background-info flex lg:flex-row flex-col rounded-[12px] gap-[32px] py-[24px] px-[24px] lg:px-[36px] ">
              <div className="mx-auto">
                <img
                  className="w-[100%] lg:object-contain"
                  src="./img/group132.png"
                  alt=""
                />
              </div>

              <div className="flex-col justify-center gap-[24px] h-[202px] lg:w-[312px]">
                <div className="font-bold text-[20px] lg:text-[24px] text-vietlink-logo leading-[29.05px] ">
                  <p>{t("home.info.info3.info3_1")}</p>
                </div>

                <div className="mt-[12px] ml-[2px]">
                  <ul className="list-disc ml-6 text-vietlink-logo text-[16px] leading-[22.4px] tracking-[0.44px] font-normal">
                    <li>
                      {" "}
                      <p className="text-[16px] leading-[22.4px] tracking-[0.44px] font-normal">
                        {t("home.info.info3.info3_2")}
                      </p>
                    </li>
                    <li>
                      {" "}
                      <p className="text-[16px] leading-[22.4px] tracking-[0.44px] font-normal">
                        {t("home.info.info3.info3_3")}
                      </p>
                    </li>
                    <li>
                      {" "}
                      <p className="text-[16px] leading-[22.4px] tracking-[0.44px] font-normal">
                        {t("home.info.info3.info3_4")}
                      </p>{" "}
                    </li>
                    <li>
                      {" "}
                      <p className="text-[16px] leading-[22.4px] tracking-[0.44px] font-normal">
                        {t("home.info.info3.info3_5")}
                      </p>{" "}
                    </li>
                    <li>
                      {" "}
                      <p className="text-[16px] leading-[22.4px] tracking-[0.44px] font-normal">
                        {t("home.info.info3.info3_6")}
                      </p>{" "}
                    </li>
                    <li>
                      {" "}
                      <p className="text-[16px] leading-[22.4px] tracking-[0.44px] font-normal">
                        {t("home.info.info3.info3_7")}
                      </p>{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="background-info flex lg:flex-row flex-col rounded-[12px] gap-[32px] py-[24px] px-[24px] lg:px-[36px] ">
              <div className="mx-auto">
                <img
                  className="w-[100%] lg:object-contain"
                  src="./img/group131.png"
                  alt=""
                />
              </div>

              <div className="flex-col justify-center gap-[24px] h-[202px] lg:w-[312px]">
                <div className="font-bold text-[20px] lg:text-[24px] text-vietlink-logo leading-[29.05px]">
                  <p>{t("home.info.info4.info4_1")}</p>
                </div>
                <div className="ml-[2px] text-base pt-[12px] leading-[22.4px] tracking-[0.44px] text-[16px]  ">
                  <ul className=" list-disc ml-6 text-vietlink-logo">
                    <li>
                      <p className="text-[16px] tracking-[0.44px] leading-[22.4px] font-normal ">
                        {t("home.info.info4.info4_2")}
                      </p>
                    </li>
                    <li>
                      <p className="text-[16px] tracking-[0.44px] leading-[22.4px] font-normal ">
                        {t("home.info.info4.info4_3")}
                      </p>
                    </li>
                    <li>
                      <p className="text-[16px] tracking-[0.44px] leading-[22.4px] font-normal ">
                        {t("home.info.info4.info4_4")}
                      </p>
                    </li>
                    <li>
                      <p className="text-[16px] tracking-[0.44px] leading-[22.4px] font-normal ">
                        {t("home.info.info4.info4_5")}
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Info;
