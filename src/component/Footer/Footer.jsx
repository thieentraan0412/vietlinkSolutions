import { useTranslation } from "react-i18next";
const Footer = () => {
  const { t, i18n } = useTranslation();
  return (
    <footer className="bg-vietlink-logo py-16 ">
      <div className="container">
        <div className="flex lg:flex-row flex-col lg:gap-0 gap-5 lg:relative">
          <div className="text-white pt-[5px] gap-8">
            <div className="h-[48px]">
              <img className="" src="./img/footer.png" alt="" />
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="flex gap-2">
                <div className="w-[18.3px]">
                  <img className="w-[18.3px]" src="/img/call.png" alt="" />
                </div>
                <div className="grid grid-cols-1 gap-[8px] pl-1">
                  <div className="font-normal leading-[20px] tracking-[0.25px]">
                    <p className=" font-normal leading-[20px] tracking-[0.25px] text-[14px]">
                      +84 28 3821 1734​
                    </p>
                  </div>
                  <div className="flex flex-col gap-[4px]">
                    <div className="font-bold text-[14px] leading-[22px]">
                    {t("footer.footer1")}
                    </div>
                    <div className="font-normal leading-[20px] tracking-[0.25px]">
                      <p className=" font-normal leading-[20px] tracking-[0.25px] text-[14px]">
                        +84 94 8712 033
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[4px]">
                    <div className="font-bold text-[14px] leading-[22px]">
                    {t("footer.footer2")}
                    </div>
                    <div className="font-normal leading-[20px] tracking-[0.25px]">
                      <p className="font-normal leading-[20px] tracking-[0.25px] text-[14px]">
                        +84 94 4211 033
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <div>
                  <img src="./img/mail.png" alt="" />
                </div>
                <div className="font-normal leading-[20px] tracking-[0.25px] text-[14px]">
                  info@vietlinkads.com
                </div>
              </div>
              <div className="flex gap-2 mt-1">
                <div>
                  <img src="./img/location.png" alt="" />
                </div>
                <div className="gap-[4px]">
                  <div className="font-bold text-[14px] leading-[22px] ">
                  {t("footer.footer4")}
                  </div>
                  <div className="font-normal leading-[20px] tracking-[0.25px] text-[12px] mt-1 max-w-[296px]">
                  {t("footer.footer5")}
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <div>
                  <img src="./img/location.png" alt="" />
                </div>
                <div className="gap-[4px]">
                  <div className="font-bold text-[14px] leading-[22px] lg:text-[16px] ">
                  {t("footer.footer6")}
                  </div>
                  <div className="font-normal leading-[20px] tracking-[0.25px] text-[12px] mt-1 max-w-[296px]">
                  {t("footer.footer7")}
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <div>
                  <img src="./img/location.png" alt="" />
                </div>
                <div className="gap-[4px]">
                  <div className="font-bold text-[14px] leading-[22px] lg:text-[16px]">
                  {t("footer.footer8")}
                  </div>
                  <div className="font-normal leading-[20px] tracking-[0.25px] text-[12px] mt-1 max-w-[296px]">
                  {t("footer.footer9")}
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:block hidden">
              <div className="flex w-[33px] gap-[22px] mt-8 mb-[22px]">
                <img src="./img/facebook.png" alt=""></img>
                <img src="./img/instagram.png" alt=""></img>
              </div>
            </div>
          </div>
          <div className="lg:pl-[60px] text-white">
            <div className="pb-[28px] ">
              <p className="font-semibold tracking-[0.75px] leading-[16.94px] text-[14px] ">
              {t("footer.footer10")}
              </p>
            </div>
            <div className="leading-[40px] font-normal text-[14px] opacity-80 ">
              <span>{t("footer.footer11")} </span> <br />
              <span>{t("footer.footer12")} </span> <br />
              <span>{t("footer.footer13")}</span>
            </div>
            <div className="lg:block hidden">
              <div className=" flex gap-8 mt-[48px]">
                <img src="./img/anh1.png" alt="" />
                <img src="./img/anh2.png" alt="" />
              </div>
            </div>
          </div>
          <div className="lg:pl-[88px] text-white lg:">
            <div className="font-semibold text-[14px] leading-[16.94px] tracking-[0.75px] pb-[28px] ">
            {t("footer.footer14")}
            </div>
            <div className="w-[85px] leading-[40px] text-[14px] font-normal opacity-80">
              <ul>
                <li>
                  <a href="#">{t("footer.footer15")}</a>{" "}
                </li>
                <li>
                  <a href="">{t("footer.footer16")}</a>
                </li>
                <li>
                  <a href="">{t("footer.footer17")}</a>
                </li>
                <li>
                  <a href="">{t("footer.footer18")}</a>
                </li>
                <li>
                  <a href="">{t("footer.footer19")}</a>
                </li>
                <li>
                  <a href="">{t("footer.footer20")}</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:pl-[113px] text-white">
            <div className="text-[14px] font-semibold tracking-[0.75px] leading-[16.94px] pb-[26px] ">
            {t("footer.footer21")}
            </div>
            <div className="font-normal text-[14px] leading-[40px] tracking-[0.25px] opacity-80  ">
              <span>{t("footer.footer22")}</span> <br />
              <span>{t("footer.footer23")}</span>
            </div>
          </div>
          <div className="absolute bottom-[20px] right-[-2px] lg:block hidden">
            <p className="text-white leading-[34px] opacity-80 text-[14px] font-normal ">
              © 2024 Vietlink​. All rights reserved.
            </p>
          </div>
          <div className="lg:hidden block"> 
            <div className=" flex gap-8 mt-[48px]">
              <img src="./img/anh1.png" alt="" />
              <img src="./img/anh2.png" alt="" />
            </div>
          </div>
          <div className="lg:hidden block w-full">
            <div className="flex justify-between items-center">
              <div className="flex w-[33px] gap-[22px]">
                <img src="./img/facebook.png" alt=""></img>
                <img src="./img/instagram.png" alt=""></img>
              </div>
              <div className="">
                <p className="text-white leading-[34px] opacity-80 text-[14px] font-normal ">
                  © 2024 Vietlink​. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
