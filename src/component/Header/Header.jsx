import { useEffect, useRef, useState, useContext } from "react";
import { useTranslation } from "react-i18next";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [click, setClick] = useState(0);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);
  const [isScrolled, setIsScrolled] = useState(true);
  const language = sessionStorage.getItem("language") || "vi";
  const page = sessionStorage.getItem("page") || "0";
  useEffect(() => {
    i18n.changeLanguage(language);
    if (language === "vi") {
      sessionStorage.setItem("language", "vi");
    } else {
      sessionStorage.setItem("language", "en");
    }
  }, []);

  const ChangePage = (page) => {
    sessionStorage.setItem("page", page);
  };
  const ChangClick = () => {
    if (click === 0) {
      document.body.classList.add("my-custom-class");
    } else {
      document.body.classList.remove("my-custom-class");
    }
    setClick(click === 0 ? 1 : 0);
  };
  const ChangeLangue = (data) => {
    setIsScrolled(false);
    sessionStorage.setItem("language", data);
    i18n.changeLanguage(data);
    setClick(0);
    document.body.classList.remove("my-custom-class");
  };
  useEffect(() => {
    if (!isScrolled) {
      setIsScrolled(true);
      return;
    }
    if (click === 1) {
      return;
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY >= lastScrollY && currentScrollY >= 80) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled, lastScrollY, click]);
  return (
    <header className={``}>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: showHeader ? 0 : -100 }} // Adjust -100 to hide the header completely
        transition={{ duration: 0.5 }}
        style={{}}
        className={` ${
          page === 0
            ? window.scrollY === 0
              ? "bg-transparent lg:bg-white"
              : "bg-white"
            : "bg-white"
        } ${
          window.scrollY !== 0 ? "shadow-lg shadow-gray-400/20" : ""
        } "h-20 lg:bg-white fixed z-[9999] left-0 right-0 top-0 lg:gap-[142px]"`}
      >
        <div className={"container"}>
          {/* <div className="grid grid-cols-3 items-center "> */}
          <div className="flex justify-between items-center h-[80px]">
            <div
              className={
                " text-vietlink-logo text-4xl font-bold hover:cursor-pointer"
              }
              onClick={() => {
                ChangePage("0");
                navigate("/");
              }}
            >
              {/* vietl<span className="text-vietlink-logoI">i</span>nk */}
              <img
                className={`lg:block ${
                  lastScrollY === 0
                    ? "lg:block hidden"
                    : showHeader === true
                    ? "visible opacity-100"
                    : ""
                }`}
                src="./img/Frame.png"
                alt=""
              />
            </div>

            <div className={click === 1 ? `block` : "lg:block hidden"}>
              <div
                className={`flex lg:flex-row flex-col lg:justify-normal lg:text-vietlink-logo text-white justify-center lg:static lg:bg-white lg:pl-0 pl-5 gap-10 fixed top-0 right-0 bottom-0 w-full bg-vietlink-logo clickfunc`}
              >
                <ul className="flex lg:flex-row lg:gap-[46px] gap-4 flex-col">
                  <li
                    onClick={() => {
                      ChangePage("1");
                    }}
                    className={` ${
                      page == "1"
                        ? "text-vietlink-logoI font-bold underline underline-offset-4"
                        : "font-semibold"
                    }   opacity-80  lg:font-normal text-[24px] lg:text-[14px] leading-[19.6px] tracking-[0.25px] hover:text-vietlink-logoI transition-colors ease-in-out duration-300 `}
                  >
                    <a href="./Company">{t("header.tiltle1")}</a>
                  </li>
                  <li 
                  onClick={() => {
                      ChangePage("2");
                    }} className={` ${
                      page == "2"
                        ? "text-vietlink-logoI font-bold underline underline-offset-4"
                        : "font-semibold"
                    }   opacity-80  lg:font-normal text-[24px] lg:text-[14px] leading-[19.6px] tracking-[0.25px] hover:text-vietlink-logoI transition-colors ease-in-out duration-300 `}>
                    <a href="./Service">{t("header.tiltle2")}</a>
                  </li>
                  <li className="opacity-80  lg:font-normal text-[24px] font-semibold lg:text-[14px] leading-[19.6px] tracking-[0.25px] hover:text-vietlink-logoI transition-colors ease-in-out duration-300">
                    <a href="">{t("header.tiltle3")}</a>
                  </li>
                  <li className="opacity-80  lg:font-normal text-[24px] font-semibold lg:text-[14px] leading-[19.6px] tracking-[0.25px] hover:text-vietlink-logoI transition-colors ease-in-out duration-300">
                    <a href="">{t("header.tiltle4")}</a>
                  </li>
                  <li
                    onClick={() => {
                      ChangePage("5");
                    }}
                    className={` ${
                      page == "5"
                        ? "text-vietlink-logoI font-bold underline underline-offset-4"
                        : "font-semibold"
                    }   opacity-80  lg:font-normal text-[24px] lg:text-[14px] leading-[19.6px] tracking-[0.25px] hover:text-vietlink-logoI transition-colors ease-in-out duration-300 `}
                  >
                    <a href="./Career">{t("header.tiltle5")}</a>
                  </li>
                  <li className="lg:hidden block opacity-80  lg:font-normal text-[24px] font-semibold lg:text-[14px] leading-[19.6px] tracking-[0.25px] hover:text-vietlink-logoI transition-colors ease-in-out duration-300">
                    <a href="">{t("header.tiltle6")}</a>
                  </li>
                </ul>
                <div className="lg:hidden block">
                  <div className=" flex items-center gap-[6px] justify-center">
                    <div
                      onClick={() => ChangeLangue("en")}
                      className={`${
                        i18n.language === "en"
                          ? "text-vietlink-logoI underline underline-offset-4"
                          : ""
                      } hover:cursor-pointer font-normal text-[14px] leading-[19.6px] tracking-[0.25px] `}
                    >
                      <span>EN</span>
                    </div>
                    <div>
                      <div> |</div>
                    </div>
                    <div className="hover:cursor-pointer font-normal text-[14px] leading-[19.6px] tracking-[0.25px]">
                      <div>JP</div>
                    </div>
                    <div>
                      <div> |</div>
                    </div>
                    <div
                      onClick={() => ChangeLangue("vi")}
                      className={`${
                        i18n.language === "vi"
                          ? "text-vietlink-logoI underline underline-offset-4"
                          : ""
                      } hover:cursor-pointer  font-normal text-[14px] leading-[19.6px] tracking-[0.25px]`}
                    >
                      <span>VN</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:block hidden ">
              <div className="flex gap-[32px] h-[38px] mr-1 ">
                <div>
                  <button className="bg-vietlink-logoI px-8 py-[10px] rounded-md gap-10 hover:scale-125 transition-transform duration-500">
                    <p className="text-vietlink-secondary opacity-80 font-semibold text-[14px] leading-[16.94px] tracking-[0.75px] text-center ">
                      {t("header.tiltle6")}
                    </p>
                  </button>
                </div>
                <div className=" flex items-center gap-[6px]">
                  <div
                    onClick={() => ChangeLangue("en")}
                    className={`${
                      i18n.language === "en"
                        ? "text-vietlink-logoI underline underline-offset-4"
                        : ""
                    } hover:cursor-pointer font-normal text-[14px] leading-[19.6px] tracking-[0.25px] `}
                  >
                    <span>EN</span>
                  </div>
                  <div>
                    <div> |</div>
                  </div>
                  <div className="hover:cursor-pointer font-normal text-[14px] leading-[19.6px] tracking-[0.25px]">
                    <div>JP</div>
                  </div>
                  <div>
                    <div> |</div>
                  </div>
                  <div
                    onClick={() => ChangeLangue("vi")}
                    className={`${
                      i18n.language === "vi"
                        ? "text-vietlink-logoI underline underline-offset-4"
                        : ""
                    } hover:cursor-pointer  font-normal text-[14px] leading-[19.6px] tracking-[0.25px]`}
                  >
                    <span>VN</span>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`lg:hidden block relative z-[9999] ${
                showHeader === true ? "visible" : "hidden"
              } `}
            >
              <button
                onClick={ChangClick}
                type="button"
                className="flex h-8 w-8 items-center justify-center lg:hidden"
              >
                <span className="sr-only">Open navigation</span>
                {click === 0 ? (
                  <svg viewBox="0 0 24 24" className="h-6 w-6 stroke-slate-900">
                    <path
                      d="M3.75 12h16.5M3.75 6.75h16.5M3.75 17.25h16.5"
                      fill="none"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6 text-white stroke-current stroke-2"
                  >
                    <path
                      d="M6 18L18 6M6 6l12 12"
                      fill="none"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </header>
  );
};
export default Header;
