import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

  const form = useRef();
  const { t, i18n } = useTranslation();
  const [data, setData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const Submit = (e) => {
    e.preventDefault();
    const formdata = {
      from_name: data.name,
      from_company: data.company,
      from_email: data.email,
      from_phone: data.phone,
      message: data.message,
    };
    emailjs
      .send("service_7xebahl", "template_n7srtk3", formdata,"2DQJ6Q844tm2iT0WG")
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success('Message sent successfully!');
          setData({
            name: "",
            company: "",
            email: "",
            phone: "",
            message: "",
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.success("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="contact_bg relative bg-[#f8f8f8]">
      <div className="lg:pb-[70px] lg:pt-0 py-10 relative z-[2]">
        <div className="container">
          <ToastContainer/>
          <div className="lg:flex">
            <div className="text-white lg:w-[33%] mt-[284px] hidden lg:block">
              <div className=" font-bold text-[24px] leading-[29px] pb-[4px] max-w-[262px] ">
                {t("home.contact.contact1")}
              </div>
              <div className="text-[14px] font-normal pb-[26px] ">
                <p className="text-[14px] font-normal leading-[19.6px] tracking-[0.25px] ">
                  {t("home.contact.contact2")}
                </p>
              </div>
              <div className="flex pb-[14px]">
                {" "}
                <img src="./img/mail.png" alt="" className="pr-[10px]" />{" "}
                <p className="text-[14px] font-normal leading-[19.6px] tracking-[0.25px]">
                  info@vietlinkads.com
                </p>
              </div>
              <div className="flex">
                <img
                  src="./img/call.png"
                  alt=""
                  className="pr-[8px] text-[14px] leading-[19.6px] tracking-[0.25px]"
                />{" "}
                <p className="text-[14px] font-normal leading-[19.6px] tracking-[0.25px] mt-1">
                  +84 28 3821 1734​
                </p>
              </div>
            </div>
            <div className="lg:w-[67%] lg:relative pb-[125px]">
              <div className="grid mx-auto lg:mt-[90px] lg:ml-[46px]">
                <div className="">
                  <p className="lg:font-bold lg:text-[20px] lg:leading-[28px] text-[16px] leading-[22px] font-semibold tracking-[0.15px] lg:text-vietlink-logo text-vietlink-secondary ">
                    {t("home.contact.contact3")}
                  </p>
                </div>
                <div className="lg:font-bold lg:text-[48px] lg:leading-[58.09px] lg:pt-[12px] font-semibold text-[34px] leading-[41px] pt-2 lg:text-vietlink-logo text-vietlink-secondary  ">
                  {t("home.contact.contact4")}
                </div>
              </div>
              <div className="lg:px-8">
                <form
                  ref={form}
                  className="lg:mt-[54px] lg:ml-[16px] lg:grid lg:grid-cols-2 lg:gap-7 mt-6"
                >
                  <label className="flex flex-col gap-1 lg:pb-0 pb-6">
                    <span className="lg:text-vietlink-logo text-vietlink-secondary text-[16px] leading-[22px] font-semibold">
                      {t("home.contact.contact5")}
                    </span>
                    <input
                      className="h-[64px] bg-white p-5 focus:border-b-2 focus:border-vietlink-logoI focus:outline-none"
                      type="text"
                      placeholder="Nguyen van t"
                      name="name"
                      value={data.name}
                      onChange={handleChange}
                    />
                  </label>
                  <label className="flex flex-col gap-1 lg:pb-0 pb-6">
                    <span className="lg:text-vietlink-logo text-vietlink-secondary text-[16px] leading-[22px] font-semibold">
                      {t("home.contact.contact6")}
                    </span>
                    <input
                      className="h-[64px] bg-white p-5 focus:border-b-2 focus:border-vietlink-logoI focus:outline-none"
                      type="text"
                      placeholder="Công ty ABC"
                      name="company"
                      value={data.company}
                      onChange={handleChange}
                    />
                  </label>
                  <label className="flex flex-col gap-1 lg:pb-0 pb-6">
                    <span className="lg:text-vietlink-logo text-vietlink-secondary text-[16px] leading-[22px] font-semibold">
                      {t("home.contact.contact7")}
                    </span>
                    <input
                      className="h-[64px] bg-white p-5 focus:border-b-2 focus:border-vietlink-logoI focus:outline-none"
                      type="email"
                      placeholder="abc@gmail.com"
                      name="email"
                      value={data.email}
                      onChange={handleChange}
                    />
                  </label>
                  <label className="flex flex-col gap-1 lg:pb-0 pb-6">
                    <span className="lg:text-vietlink-logo text-vietlink-secondary text-[16px] leading-[22px] font-semibold">
                      {t("home.contact.contact8")}
                    </span>
                    <input
                      className="h-[64px] bg-white p-5 focus:border-b-2 focus:border-vietlink-logoI focus:outline-none"
                      type="text"
                      placeholder="012345678"
                      name="phone"
                      value={data.phone}
                      onChange={handleChange}
                    />
                  </label>
                  <label className="flex flex-col col-span-2 mt-1 lg:pb-0 pb-6">
                    <p className="lg:text-vietlink-logo text-vietlink-secondary text-[16px] leading-[22px] font-semibold">
                      {t("home.contact.contact9")}
                    </p>
                    <textarea
                      type="text"
                      className="h-[164px] p-5 focus:border-2 focus:border-vietlink-logoI focus:outline-none"
                      name="message"
                      value={data.message}
                      onChange={handleChange}
                    />
                  </label>
                </form>

                <div className="lg:block hidden">
                  <button
                    onClick={(e) => Submit(e)}
                    className=" absolute bottom-0 right-8 pb-2 pl-[16px] pr-[8px] py-[9px] h-[60px] flex items-center bg-vietlink-logoI gap-5"
                  >
                    <div className="text-center ml-[8px]">
                      <p className=" lg:min-w-[82px] text-[16px] leading-[22px] text-center font-semibold text-vietlink-secondary ">
                        {t("home.contact.contact10")}
                      </p>
                    </div>
                    <div className="lg:w-[24px] h-[24px] flex items-center">
                      {" "}
                      <img className="" src="./img/Vector.png" alt="" />
                    </div>
                  </button>
                </div>
                <div className="lg:hidden block w-full">
                  <button
                    onClick={(e) => Submit(e)}
                    className="w-full  px-8 py-6 bg-vietlink-logoI flex justify-center items-center gap-[10px]"
                  >
                    <p className="text-vietlink-secondary font-semibold text-4 leading-[22px] text-center ">
                      {t("home.contact.contact10")}
                    </p>
                    <div className="items-center ">
                      <img src="./img/Vector.png" alt="" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
