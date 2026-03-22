import { useTranslation } from "react-i18next";
import "./service.css";
import Bg_Parallax from "../parallax/BG_Parallax";
const Service_Info = () => {
  const { t, i18n } = useTranslation();
  //                {t("service.t2_1")}

  const class_textlg =
    "lg:text-[48px] lg:leading-[58.09px] lg:tracking-[0px] text-[34px] leading-[41.15px] tracking-[0.25px] font-bold  text-center pb-6";
  const class_text =
    "lg:text-[20px] lg:leading-[28px] lg:tracking-[0px] text-[16px] leading-[22.4px] tracking-[0.44px] font-normal  text-center";
  return (
    <div className="text-[#2D2B2C] wow animate__animated animate__fadeIn">
      <div className="lg:pt-[110px] lg:pb-[90px] pt-[67.5px] pb-[47.5px]">
        <div className="container mx-auto">
          <div className="max-w-[748px] mx-auto flex-col gap-6">
            <p className={`${class_textlg}`}>{t("service.t1_1")}</p>
            <p className={`${class_text} `}>{t("service.t1_2")}</p>
          </div>
        </div>
      </div>
      <div className="lg:pb-20 pb-10">
        <div className="container mx-auto">
          <div className="max-w-[1010px] mx-auto flex md:flex-row flex-col lg:gap-[64px] gap-[24px] lg:pb-[64px] pb-[40px] ">
            <div className="md:w-[39%]">
              <img 

                src="./img/service/anh1.png"
                alt=" "
                className="w-full h-full object-fill md:object-none md:w-auto md:h-auto transition-transform transform hover:scale-[105%] duration-750 ease-in-out"
              />
            </div>
            <div className="flex-1">
              <p className="md:text-[34px] md:leading-[41.15px] md:tracking-[0.25px] text-[24px] leading-[29.05px] font-bold md:pb-6 pb-4">
                {t("service.t2_1")}
              </p>
              <div className="md:pb-4 pb-2">
                <p className="md:text-[16px] md:leading-[22.4px] md:tracking-[0.44px] text-[14px] leading-[19.6px] tracking-[0.25px] font-normal">
                  {t("service.t2_2")}
                </p>
                <br />
                <p className="md:text-[16px] md:leading-[22.4px] md:tracking-[0.44px] text-[14px] leading-[19.6px] tracking-[0.25px] font-normal">
                  {t("service.t2_3")}
                </p>
              </div>
              <ul className="list-inside list-disc">
                <li className="text-[14px] leading-[24px] tracking-[0.25px] font-normal">
                  {t("service.t2_4")}
                </li>
                <li className="text-[14px] leading-[24px] tracking-[0.25px] font-normal">
                  {t("service.t2_5")}
                </li>
                <li className="text-[14px] leading-[24px] tracking-[0.25px] font-normal">
                  {t("service.t2_6")}
                </li>
                <li className="text-[14px] leading-[24px] tracking-[0.25px] font-normal">
                  {t("service.t2_7")}
                </li>
                <li className="text-[14px] leading-[24px] tracking-[0.25px] font-normal">
                  {t("service.t2_8")}
                </li>
                <li className="text-[14px] leading-[24px] tracking-[0.25px] font-normal">
                  {t("service.t2_9")}
                </li>
              </ul>
            </div>
          </div>
          <div className="max-w-[1010px] mx-auto flex md:flex-row flex-col lg:gap-[64px] gap-[24px] ">
            <div className="md:w-[39%]">
              <img
                src="./img/service/anh2.png"
                alt=" "
                className="w-full h-full object-fill md:object-none md:w-auto md:h-auto transition-transform transform hover:scale-[105%] duration-750 ease-in-out"
              />
            </div>
            <div className="flex-1">
              <p className="md:text-[34px] md:leading-[41.15px] md:tracking-[0.25px] text-[24px] leading-[29.05px] font-bold md:pb-6 pb-4">
                {t("service.t3_1")}
              </p>

              <div className="md:pb-4 pb-2">
                {i18n.language === "en" ? (
                  <div>
                    <p className="md:text-[16px] md:leading-[22.4px] md:tracking-[0.44px] text-[14px] leading-[19.6px] tracking-[0.25px] font-normal">
                      {t("service.t3_2")}
                    </p>
                    <br />
                    <p className="md:text-[16px] md:leading-[22.4px] md:tracking-[0.44px] text-[14px] leading-[19.6px] tracking-[0.25px] font-normal">
                      {t("service.t3_3")}
                    </p>
                    <br />
                    <p className="md:text-[16px] md:leading-[22.4px] md:tracking-[0.44px] text-[14px] leading-[19.6px] tracking-[0.25px] font-normal">
                      {t("service.t3_4")}
                    </p>
                  </div>
                ) : (
                  <div>
                    <p className="md:text-[16px] md:leading-[22.4px] md:tracking-[0.44px] text-[14px] leading-[19.6px] tracking-[0.25px] font-normal">
                      {t("service.t3_2")}
                    </p>
                    <br />
                    <p className="md:text-[16px] md:leading-[22.4px] md:tracking-[0.44px] text-[14px] leading-[19.6px] tracking-[0.25px] font-normal">
                      {t("service.t3_3")}
                    </p>
                  </div>
                )}
              </div>

              <ul className="list-inside list-disc">
                <li className="text-[14px] leading-[24px] tracking-[0.25px] font-normal">
                  {t("service.t3_5")}
                </li>
                <li className="text-[14px] leading-[24px] tracking-[0.25px] font-normal">
                  {t("service.t3_6")}
                </li>
                <li className="text-[14px] leading-[24px] tracking-[0.25px] font-normal">
                  {t("service.t3_7")}
                </li>
                <li className="text-[14px] leading-[24px] tracking-[0.25px] font-normal">
                  {t("service.t3_8")}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:py-20 py-10">
        <div className="container mx-auto">
          <div className=" mx-auto">
            <p className="lg:text-[48px] lg:leading-[58.09px] lg:tracking-[0px] text-[34px] leading-[41.15px] tracking-[0.25px] font-bold  text-center pb-6 ">
              {t("service.t4_1")}
            </p>
            <p className="max-w-[947px] mx-auto lg:text-[20px] lg:leading-[28px] lg:tracking-[0px] text-[16px] leading-[22.4px] tracking-[0.44px] font-normal  text-center lg:pb-12 pb-10">
              {t("service.t4_2")}
            </p>
            <ul className="flex md:flex-row flex-wrap flex-col md:gap-y-10 mx-auto md:justify-center md:items-center">
              <li className="md:w-[118px] py-[20.5px] px-[12px] rounded-[12px] border-[1px] border-gray-300 transition-transform transform hover:scale-[105%] duration-750 ease-in-out hover:rotate-div ">
                <div className="pb-[12px]">
                <img
                  src="./img/service/anh5.svg"
                  alt=""
                  className="mx-auto rotate-image"
                />
                </div>
                <p className="text-[13px] leading-[16px] tracking-[0.4px] font-bold text-center md:h-8">
                  {t("service.t4_3")}
                </p>
              </li>
              <li className="flex justify-center items-center">
                <div className="h-5 w-5 service_img">
                  <svg
                    width="8"
                    height="14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto"
                  >
                    <path
                      d="M1.375 13.15.15 11.925l4.95-4.95-4.95-4.95L1.375.8 7.55 6.975 1.375 13.15Z"
                      fill="#2D2B2C"
                    ></path>
                  </svg>
                </div>
              </li>
              <li className="md:w-[118px] py-[20.5px] px-[12px] rounded-[12px] border-[1px] border-gray-300 transition-transform transform hover:scale-[105%] duration-750 ease-in-out hover:rotate-div ">
                <div className="pb-[12px]">
                <img
                  src="./img/service/anh6.svg"
                  alt=""
                  className="mx-auto rotate-image"
                />
                </div>
                <p className="text-[13px] leading-[16px] tracking-[0.4px] font-bold text-center md:h-8">
                  {t("service.t4_4")}
                </p>
              </li>
              <li className="flex justify-center items-center">
                <div className="h-5 w-5 service_img">
                  <svg
                    width="8"
                    height="14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto"
                  >
                    <path
                      d="M1.375 13.15.15 11.925l4.95-4.95-4.95-4.95L1.375.8 7.55 6.975 1.375 13.15Z"
                      fill="#2D2B2C"
                    ></path>
                  </svg>
                </div>
              </li>
              <li className="md:w-[118px] py-[20.5px] px-[12px] rounded-[12px] border-[1px] border-gray-300 transition-transform transform hover:scale-[105%] duration-750 ease-in-out hover:rotate-div ">
                <div className="pb-[12px]">
                <img
                  src="./img/service/anh7.svg"
                  alt=""
                  className="mx-auto rotate-image"
                />
                </div>
                <p className="text-[13px] leading-[16px] tracking-[0.4px] font-bold text-center md:h-8">
                  {t("service.t4_5")}
                </p>
              </li>
              <li className="flex justify-center items-center">
                <div className="h-5 w-5 service_img">
                  <svg
                    width="8"
                    height="14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto"
                  >
                    <path
                      d="M1.375 13.15.15 11.925l4.95-4.95-4.95-4.95L1.375.8 7.55 6.975 1.375 13.15Z"
                      fill="#2D2B2C"
                    ></path>
                  </svg>
                </div>
              </li>
              <li className="md:w-[118px] py-[20.5px] px-[12px] rounded-[12px] border-[1px] border-gray-300 transition-transform transform hover:scale-[105%] duration-750 ease-in-out hover:rotate-div ">
                <div className="pb-[12px]">
                <img
                  src="./img/service/anh8.svg"
                  alt=""
                  className="mx-auto rotate-image"
                />
                </div>
                <p className="text-[13px] leading-[16px] tracking-[0.4px] font-bold text-center md:h-8">
                  {t("service.t4_6")}
                </p>
              </li>
              <li className="flex justify-center items-center">
                <div className="h-5 w-5 service_img">
                  <svg
                    width="8"
                    height="14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto"
                  >
                    <path
                      d="M1.375 13.15.15 11.925l4.95-4.95-4.95-4.95L1.375.8 7.55 6.975 1.375 13.15Z"
                      fill="#2D2B2C"
                    ></path>
                  </svg>
                </div>
              </li>
              <li className="md:w-[118px] py-[20.5px] px-[12px] rounded-[12px] border-[1px] border-gray-300 transition-transform transform hover:scale-[105%] duration-750 ease-in-out hover:rotate-div ">
                <div className="pb-[12px]">
                <img
                  src="./img/service/anh9.svg"
                  alt=""
                  className="mx-auto rotate-image"
                />
                </div>
                <p className="text-[13px] leading-[16px] tracking-[0.4px] font-bold text-center md:h-8">
                  {t("service.t4_7")}
                </p>
              </li>
              <li className="flex justify-center items-center">
                <div className="h-5 w-5 service_img">
                  <svg
                    width="8"
                    height="14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto"
                  >
                    <path
                      d="M1.375 13.15.15 11.925l4.95-4.95-4.95-4.95L1.375.8 7.55 6.975 1.375 13.15Z"
                      fill="#2D2B2C"
                    ></path>
                  </svg>
                </div>
              </li>
              <li className="md:w-[118px] py-[20.5px] px-[12px] rounded-[12px] border-[1px] border-gray-300 transition-transform transform hover:scale-[105%] duration-750 ease-in-out hover:rotate-div ">
                <div className="pb-[12px]">
                <img
                  src="./img/service/anh10.svg"
                  alt=""
                  className="mx-auto rotate-image"
                />
                </div>
                <p className="text-[13px] leading-[16px] tracking-[0.4px] font-bold text-center md:h-8">
                  {t("service.t4_8")}
                </p>
              </li>
              <li className="flex justify-center items-center">
                <div className="h-5 w-5 service_img">
                  <svg
                    width="8"
                    height="14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto"
                  >
                    <path
                      d="M1.375 13.15.15 11.925l4.95-4.95-4.95-4.95L1.375.8 7.55 6.975 1.375 13.15Z"
                      fill="#2D2B2C"
                    ></path>
                  </svg>
                </div>
              </li>
              <li className="md:w-[118px] py-[20.5px] px-[12px] rounded-[12px] border-[1px] border-gray-300 transition-transform transform hover:scale-[105%] duration-750 ease-in-out hover:rotate-div ">
                <div className="pb-[12px]">
                <img
                  src="./img/service/anh11.svg"
                  alt=""
                  className="mx-auto rotate-image"
                />
                </div>
                <p className="text-[13px] leading-[16px] tracking-[0.4px] font-bold text-center md:h-8">
                  {t("service.t4_9")}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="lg:py-20 py-10">
        <div className="container">
          <div className="flex flex-col gap-12">
            <div>
              <p className="lg:text-[48px] lg:leading-[58.09px] lg:tracking-[0px] text-[34px] leading-[41.15px] tracking-[0.25px] font-bold  text-center pb-6">
                {t("service.t5_1")}
              </p>
              <p className="lg:text-[20px] lg:leading-[28px] lg:tracking-[0px] text-[16px] leading-[22.4px] tracking-[0.44px] font-normal text-center">
                {t("service.t5_2")}
              </p>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 md:gap-8 gap-4">
              <div className="rounded-3 bg-[#E4E4E4] bg-opacity-25 p-6 transition-transform transform hover:scale-[105%] duration-750 ease-in-out">
                <p className="text-[24px] leading-[29.05px] text-center font-bold pb-8">
                  Waterfall
                </p>
                <div className="">
                  <img
                    className="mx-auto"
                    src="./img/service/anh3.svg"
                    alt=""
                  />
                </div>
              </div>
              <div className="bg-[#E4E4E4] bg-opacity-25 p-6 rounded-3 transition-transform transform hover:scale-[105%] duration-750 ease-in-out">
                <p className="text-[24px] leading-[29.05px] text-center font-bold pb-8">
                  Agile
                </p>
                <div className="">
                  <img
                    className="mx-auto"
                    src="./img/service/anh4.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:py-20 py-10">
        <div className="container">
          <p className="lg:text-[48px] lg:leading-[58.09px] lg:tracking-[0px] text-[34px] leading-[41.15px] tracking-[0.25px] font-bold  text-center pb-12">
            {t("service.t6_1")}
          </p>
          <div className="flex md:flex-row md:flex-wrap flex-col md:gap-8 gap-[12px] md:justify-center items-center">
            <div className="min-h-[203px] p-6 md:w-[335px] lg:w-[360px] w-[360px] bg-[#E2F1FF] rounded-[12px]">
              <div className="pb-[10px]">
                <svg
                  width="24"
                  height="14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-.075 13.075v-1.4c0-.683.358-1.23 1.075-1.638.717-.408 1.633-.612 2.75-.612.183 0 .358.004.525.013.167.008.325.02.475.037-.133.3-.233.604-.3.912-.067.309-.1.638-.1.988v1.7H-.075Zm6 0v-1.7c0-1.1.563-1.992 1.688-2.675C8.738 8.017 10.2 7.675 12 7.675c1.817 0 3.283.342 4.4 1.025 1.117.683 1.675 1.575 1.675 2.675v1.7H5.925Zm13.725 0v-1.7c0-.35-.03-.68-.087-.988a4.13 4.13 0 0 0-.288-.912 10.018 10.018 0 0 1 .975-.05c1.15 0 2.075.204 2.775.612.7.409 1.05.955 1.05 1.638v1.4H19.65ZM12 9.3c-1.267 0-2.304.188-3.112.563-.809.375-1.23.862-1.263 1.462v.125h8.75v-.15c-.033-.583-.45-1.063-1.25-1.437-.8-.375-1.842-.563-3.125-.563Zm-8.25-.6c-.5 0-.925-.175-1.275-.525A1.736 1.736 0 0 1 1.95 6.9c0-.5.175-.925.525-1.275.35-.35.775-.525 1.275-.525.5 0 .925.175 1.275.525.35.35.525.775.525 1.275 0 .5-.175.925-.525 1.275-.35.35-.775.525-1.275.525Zm16.5 0c-.5 0-.925-.175-1.275-.525A1.736 1.736 0 0 1 18.45 6.9c0-.5.175-.925.525-1.275.35-.35.775-.525 1.275-.525.5 0 .925.175 1.275.525.35.35.525.775.525 1.275 0 .5-.175.925-.525 1.275-.35.35-.775.525-1.275.525ZM12 6.925c-.85 0-1.575-.296-2.175-.887-.6-.592-.9-1.321-.9-2.188 0-.867.3-1.592.9-2.175C10.425 1.092 11.15.8 12 .8c.867 0 1.596.292 2.188.875.591.583.887 1.308.887 2.175 0 .867-.296 1.596-.887 2.188-.592.591-1.321.887-2.188.887ZM12 2.4c-.4 0-.742.138-1.025.413-.283.275-.425.62-.425 1.037 0 .417.137.767.412 1.05.276.283.621.425 1.038.425.417 0 .762-.142 1.037-.425.275-.283.413-.633.413-1.05 0-.417-.137-.762-.412-1.037-.276-.275-.621-.413-1.038-.413Z"
                    fill="#2D2B2C"
                  ></path>
                </svg>
              </div>
              <p className="lg:text-[20px] lg:leading-[28px] lg:tracking-[0px] text-[16px] leading-[22.4px] tracking-[0.44px] font-bold pb-2 ">
                {t("service.t6_2")}
              </p>
              <p className="lg:text-[16px] lg:leading-[22.4px] lg:tracking-[0.44px] text-[14px] leading-[19.06px] tracking-[0.25px] font-normal ">
                {t("service.t6_3")}
              </p>
            </div>
            <div className="min-h-[203px] p-6 md:w-[335px] lg:w-[360px] w-[360px] bg-[#FFF7DF] rounded-[12px] ">
              <div className="pb-[10px]">
                <svg
                  width="22"
                  height="20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 19.1.925 7 3.95.925h14.1L21.075 7 11 19.1ZM8.2 6.25h5.6l-1.85-3.675h-1.9L8.2 6.25Zm2.05 9.425V7.75H3.675l6.575 7.925Zm1.5 0 6.575-7.925H11.75v7.925Zm3.725-9.425H18.8l-1.85-3.675h-3.3l1.825 3.675ZM3.2 6.25h3.325L8.35 2.575h-3.3L3.2 6.25Z"
                    fill="#2D2B2C"
                  ></path>
                </svg>
              </div>
              <p className="lg:text-[20px] lg:leading-[28px] lg:tracking-[0px] text-[16px] leading-[22.4px] tracking-[0.44px] font-bold pb-2">
                {t("service.t6_4")}
              </p>
              <p className="lg:text-[16px] lg:leading-[22.4px] lg:tracking-[0.44px] text-[14px] leading-[19.06px] tracking-[0.25px] font-normal ">
                {t("service.t6_5")}
              </p>
            </div>
            <div className="min-h-[203px] p-6 md:w-[335px] lg:w-[360px] w-[360px] bg-[#FFEAEA] rounded-[12px] ">
              <div className="pb-[10px]">
                <svg
                  width="22"
                  height="22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.55 21.15c-.45 0-.846-.17-1.187-.512C1.02 20.296.85 19.9.85 19.45V15.2h1.7v4.25H6.8v1.7H2.55ZM.85 6.8V2.55c0-.467.17-.867.513-1.2.341-.333.737-.5 1.187-.5H6.8v1.7H2.55V6.8H.85ZM15.2 21.15v-1.7h4.25V15.2h1.7v4.25c0 .45-.167.846-.5 1.188a1.617 1.617 0 0 1-1.2.512H15.2ZM19.45 6.8V2.55H15.2V.85h4.25c.467 0 .867.167 1.2.5.333.333.5.733.5 1.2V6.8h-1.7ZM11 11c-.85 0-1.57-.292-2.162-.875-.592-.583-.888-1.308-.888-2.175 0-.833.296-1.55.888-2.15.591-.6 1.312-.9 2.162-.9.85 0 1.57.3 2.163.9.591.6.887 1.317.887 2.15 0 .867-.296 1.592-.887 2.175C12.57 10.708 11.85 11 11 11Zm0-1.6c.4 0 .742-.138 1.025-.413.283-.275.425-.62.425-1.037 0-.4-.137-.742-.412-1.025A1.385 1.385 0 0 0 11 6.5c-.417 0-.762.142-1.037.425a1.449 1.449 0 0 0-.413 1.05c0 .4.138.737.413 1.012.275.275.62.413 1.037.413Zm-6.05 7.65V15.1c0-.467.15-.87.45-1.213.3-.341.658-.629 1.075-.862.7-.367 1.43-.638 2.188-.813A10.362 10.362 0 0 1 11 11.95c.8 0 1.58.088 2.338.263a9.113 9.113 0 0 1 2.187.812c.417.233.775.52 1.075.862.3.342.45.746.45 1.213v1.95H4.95Zm6.05-3.5a8.283 8.283 0 0 0-4.3 1.2v.7h8.6v-.7a8.283 8.283 0 0 0-4.3-1.2Zm0 1.9h4.3-8.6H11Z"
                    fill="#2D2B2C"
                  ></path>
                </svg>
              </div>
              <p className="lg:text-[20px] lg:leading-[28px] lg:tracking-[0px] text-[16px] leading-[22.4px] tracking-[0.44px] font-bold pb-2 ">
                {t("service.t6_6")}
              </p>
              <p className="lg:text-[16px] lg:leading-[22.4px] lg:tracking-[0.44px] text-[14px] leading-[19.06px] tracking-[0.25px] font-normal ">
                {t("service.t6_7")}
              </p>
            </div>
            <div className="min-h-[203px] p-6 md:w-[335px] lg:w-[360px] w-[360px] bg-[#E4FFE9] rounded-[12px] ">
              <div className="pb-[10px]">
                <svg
                  width="24"
                  height="22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m8.6 21.7-1.95-3.325L2.8 17.6l.45-3.75L.8 11l2.45-2.825-.45-3.75 3.85-.775L8.6.3 12 1.875 15.425.3l1.95 3.35 3.825.775-.45 3.75L23.2 11l-2.45 2.85.45 3.75-3.825.775-1.95 3.325L12 20.125 8.6 21.7Zm.75-2.25L12 18.325l2.725 1.125 1.675-2.475 2.9-.75-.3-2.95L21 11l-2-2.325.3-2.95-2.9-.7-1.725-2.475L12 3.65l-2.725-1.1L7.6 5.025l-2.875.7L5 8.675 3 11l2 2.275-.275 3 2.875.7 1.75 2.475Zm1.575-5.075L16.65 8.7l-1.175-1.075-4.55 4.5L8.55 9.65l-1.2 1.175 3.575 3.55Z"
                    fill="#2D2B2C"
                  ></path>
                </svg>
              </div>
              <p className="lg:text-[20px] lg:leading-[28px] lg:tracking-[0px] text-[16px] leading-[22.4px] tracking-[0.44px] font-bold pb-2">
                {t("service.t6_8")}
              </p>
              <p className="lg:text-[16px] lg:leading-[22.4px] lg:tracking-[0.44px] text-[14px] leading-[19.06px] tracking-[0.25px] font-normal ">
                {t("service.t6_9")}
              </p>
            </div>
            <div className="min-h-[203px] p-6 md:w-[335px] lg:w-[360px] w-[360px] bg-[#E8FBFF] rounded-[12px] ">
              <div className="pb-[10px]">
                <svg
                  width="18"
                  height="23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.55 12.775 7.475 9.8 5 7.9h3.025L9 4.8l.95 3.1H13l-2.475 1.9.9 2.975L9 10.925l-2.45 1.85ZM3.025 22.15v-7.625c-.767-.8-1.32-1.683-1.662-2.65a8.654 8.654 0 0 1-.513-2.9c0-2.317.783-4.254 2.35-5.813C4.767 1.604 6.7.825 9 .825s4.233.78 5.8 2.337c1.567 1.559 2.35 3.496 2.35 5.813 0 .967-.17 1.933-.512 2.9-.342.967-.896 1.85-1.663 2.65v7.625L9 20.15l-5.975 2ZM9 15.425c1.8 0 3.325-.625 4.575-1.875s1.875-2.775 1.875-4.575c0-1.8-.625-3.325-1.875-4.575S10.8 2.525 9 2.525c-1.8 0-3.325.625-4.575 1.875S2.55 7.175 2.55 8.975c0 1.8.625 3.325 1.875 4.575S7.2 15.425 9 15.425Zm-4.4 4.55 4.4-1.4 4.4 1.4v-4.2a7.09 7.09 0 0 1-2.15 1.025 8.255 8.255 0 0 1-2.25.325 8.254 8.254 0 0 1-2.25-.325 7.09 7.09 0 0 1-2.15-1.025v4.2Z"
                    fill="#2D2B2C"
                  ></path>
                </svg>
              </div>
              <p className="lg:text-[20px] lg:leading-[28px] lg:tracking-[0px] text-[16px] leading-[22.4px] tracking-[0.44px] font-bold pb-2">
                {t("service.t6_10")}
              </p>
              <p className="lg:text-[16px] lg:leading-[22.4px] lg:tracking-[0.44px] text-[14px] leading-[19.06px] tracking-[0.25px] font-normal ">
                {t("service.t6_11")}
              </p>
            </div>
          </div>

        </div>
      </div>
        <Bg_Parallax/>
    </div>
  );
};
export default Service_Info;
