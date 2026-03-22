import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
const Contact = () => {
  const { t } = useTranslation();
  const [isFocused, setIsFocused] = useState(0);
  const [formData, setFormData] = useState({
    username: "",
    position: "",
    phone: "",
    email: "",
    link: "",
    file: null,
    message: "",
  });

  const [dragging, setDragging] = useState(false);
  const [error, setError] = useState(false);
  // Hàm xử lý thay đổi các input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);

    if (e.dataTransfer.files[0]) {
      // Kiểm tra định dạng file
      if (e.dataTransfer.files[0].type !== "application/pdf") {
        setError(true);
        return;
      }
      setError(false);
    }

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setError(false);

      setFormData((prevState) => ({
        ...prevState,
        file: e.dataTransfer.files[0], // Lấy file đầu tiên được chọn
      }));
    }
  };
  //   const ensurePdfExtension = (fileName) => {
  //     const regex = /\.pdf$/i;
  //     if (!regex.test(fileName)) {
  //       return `${fileName}.pdf`;
  //     }
  //     return fileName;
  //   };

  const handleChange = (e) => {
    if (!e.target.files[0]) return;
    if (e.target.files[0].type !== "application/pdf") {
      setError(true);
      return;
    }
    setError(false);
    if (e.target.files && e.target.files[0]) {
      setError(false);
      setFormData((prevState) => ({
        ...prevState,
        file: e.target.files[0], // Lấy file đầu tiên được chọn
      }));
    }
  };
  const submitdata = () => {
console.log(formData)
    emailjs.send("service_ppharq8", "template_yckh45l", formData,"2DQJ6Q844tm2iT0WG")
    .then(
      () => {
        console.log("SUCCESS!");
        toast.success('Message sent successfully!');
        setFormData({
            username: "",
            position: "",
            phone: "",
            email: "",
            link: "",
            file: null,
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
    <div className="pt-20 bg-white">
      <div className="lg:pt-[44px] lg:pb-20 pb-10">
        <div className="container">
          <div className="max-w-[750px] mx-auto">
            <div className="pb-6 flex ">
              <p className="text-[14px] my-auto leading-[19.6px] tracking-[0.25px] font-normal text-[#808191]">
                Career
              </p>
              <div className="flex justify-center items-center">
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="[&amp;>path]:fill-darkGrey-shade-5"
                >
                  <path
                    d="m6.25 12.1-.817-.816 3.3-3.3-3.3-3.3.817-.817 4.117 4.117L6.25 12.1Z"
                    fill="#808191"
                  ></path>
                </svg>
              </div>
              <p className="text-[14px] my-auto leading-[19.6px] tracking-[0.25px] font-normal text-[#2D2B2C]">
                Apply job
              </p>
            </div>
            <div>
              <div className="pb-8">
                <p className="lg:text-[48px] lg:leading-[58.09px] lg:tracking-[0px] text-[34px] leading-[41.15px] tracking-[0.25px] font-bold  text-[#2D2B2C]">
                  {" "}
                  {t("career.A1_1")}
                </p>
                <p className="text-[14px] leading-[22.4px]  font-bold  text-[#2D2B2C]">
                  {" "}
                  {t("career.A1_2")}
                </p>
              </div>
              <div>
                <div className="max-w-[556px] mx-auto">
                <ToastContainer/>
                  <div className="">
                    <div className="lg:pb-8 pb-4">
                      <div className="relative flex flex-col gap-1 ">
                        <label
                          className="lg:text-[16px] lg:leading-[24px] tracking-[0.44px] text-[14px] leading-[20px] font-semibold text-[#2D2B2C]"
                          htmlFor="username"
                        >
                          {t("career.A1_3")}
                        </label>

                        <input
                          onFocus={() => setIsFocused(1)}
                          onBlur={() => setIsFocused(0)}
                          className="border-b-2 py-5 px-3 outline-none relative z-[10]"
                          type="text"
                          id="username"
                          name="username"
                          value={formData.username}
                          onChange={handleInputChange}
                          required
                          placeholder={t("career.A1_4")}
                        />

                        {/* Border Animation */}
                        <motion.div
                          className="absolute bottom-0 left-0 h-[2px] bg-vietlink-logoI  z-[100]"
                          initial={{ width: "0%", left: "50%" }}
                          animate={{
                            width: isFocused === 1 ? "100%" : "0%",
                            left: isFocused === 1 ? "0%" : "50%",
                          }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        />
                      </div>
                    </div>
                    <div className="lg:pb-8 pb-4">
                      <div className="relative flex flex-col gap-1 ">
                        <label
                          className="lg:text-[16px] lg:leading-[24px] tracking-[0.44px] text-[14px] leading-[20px] font-semibold text-[#2D2B2C]"
                          htmlFor="username"
                        >
                          {t("career.A1_5")}
                        </label>

                        <input
                          onFocus={() => setIsFocused(2)}
                          onBlur={() => setIsFocused(0)}
                          className="border-b-2 py-5 px-3 outline-none relative z-[10]"
                          type="text"
                          id="position"
                          name="position"
                          required
                          value={formData.position}
                          onChange={handleInputChange}
                          placeholder={t("career.A1_6")}
                        />

                        {/* Border Animation */}
                        <motion.div
                          className="absolute bottom-0 left-0 bg-vietlink-logoI h-[2px] z-[100]"
                          initial={{ width: "0%", left: "50%" }}
                          animate={{
                            width: isFocused === 2 ? "100%" : "0%",
                            left: isFocused === 2 ? "0%" : "50%",
                          }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        />
                      </div>
                    </div>
                    <div className="lg:pb-8 pb-4">
                      <div className="relative flex flex-col gap-1 ">
                        <label
                          className="lg:text-[16px] lg:leading-[24px] tracking-[0.44px] text-[14px] leading-[20px] font-semibold text-[#2D2B2C]"
                          htmlFor="username"
                        >
                          {t("career.A1_7")}
                        </label>

                        <input
                          onFocus={() => setIsFocused(3)}
                          onBlur={() => setIsFocused(0)}
                          className="border-b-2 py-5 px-3 outline-none relative z-[10]"
                          type="text"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder={t("career.A1_7")}
                        />

                        {/* Border Animation */}
                        <motion.div
                          className="absolute bottom-0 left-0 bg-vietlink-logoI h-[2px] z-[100]"
                          initial={{ width: "0%", left: "50%" }}
                          animate={{
                            width: isFocused === 3 ? "100%" : "0%",
                            left: isFocused === 3 ? "0%" : "50%",
                          }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        />
                      </div>
                    </div>
                    <div className="lg:pb-8 pb-4">
                      <div className="relative flex flex-col gap-1 ">
                        <label
                          className="lg:text-[16px] lg:leading-[24px] tracking-[0.44px] text-[14px] leading-[20px] font-semibold text-[#2D2B2C]"
                          htmlFor="username"
                        >
                          {t("career.A1_9")}
                        </label>

                        <input
                          onFocus={() => setIsFocused(4)}
                          onBlur={() => setIsFocused(0)}
                          className="border-b-2 py-5 px-3 outline-none relative z-[10]"
                          type="text"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder={t("career.A1_10")}
                        />

                        {/* Border Animation */}
                        <motion.div
                          className="absolute bottom-0 left-0 bg-vietlink-logoI h-[2px] z-[100]"
                          initial={{ width: "0%", left: "50%" }}
                          animate={{
                            width: isFocused === 4 ? "100%" : "0%",
                            left: isFocused === 4 ? "0%" : "50%",
                          }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        />
                      </div>
                    </div>
                    <div className="lg:pb-8 pb-4">
                      <div className="relative flex flex-col gap-1 ">
                        <label
                          className="lg:text-[16px] lg:leading-[24px] tracking-[0.44px] text-[14px] leading-[20px] font-semibold text-[#2D2B2C]"
                          htmlFor="username"
                        >
                          {t("career.A1_11")}
                        </label>

                        <input
                          onFocus={() => setIsFocused(5)}
                          onBlur={() => setIsFocused(0)}
                          className="border-b-2 py-5 px-3 outline-none relative z-[10]"
                          type="text"
                          id="link"
                          name="link"
                          required
                          value={formData.link}
                          onChange={handleInputChange}
                          placeholder={t("career.A1_12")}
                        />

                        {/* Border Animation */}
                        <motion.div
                          className="absolute bottom-0 left-0 bg-vietlink-logoI h-[2px] z-[100]"
                          initial={{ width: "0%", left: "50%" }}
                          animate={{
                            width: isFocused === 5 ? "100%" : "0%",
                            left: isFocused === 5 ? "0%" : "50%",
                          }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        />
                      </div>
                    </div>
                    <div className="lg:pb-8 pb-4">
                      <div className="relative flex flex-col gap-1 ">
                        <label
                          className="lg:text-[16px] lg:leading-[24px] tracking-[0.44px] text-[14px] leading-[20px] font-semibold text-[#2D2B2C]"
                          htmlFor="username"
                        >
                          {t("career.A1_13")}
                        </label>
                        {error ? (
                          <p className="bg-[#FF0000] bg-opacity-10 text-[#FF0000] text-[14px] text-center leading-[20px] font-normal tracking-[0.44px] py-3 rounded-[12px] ">
                            Invalid file type.
                          </p>
                        ) : (
                          ""
                        )}

                        {formData.file ? (
                          <div className="flex justify-between pt-3 pb-[10px]">
                            <p className="text-[16px] leading-[22.4px] tracking-[0.44px] font-normal text-[#2D2B2C]">
                              {formData.file?.name}
                            </p>
                            <img
                              className="hover:cursor-pointer"
                              onClick={() => {
                                setFormData((prevState) => ({
                                  ...prevState,
                                  file: null,
                                }));
                              }}
                              src="./img/Career/contact.svg"
                              alt=""
                            />
                          </div>
                        ) : (
                          <div
                            className={`file-dropzone ${
                              dragging ? "dragging" : ""
                            } py-8 bg-[#066AFF] bg-opacity-5 rounded-[12px] border-2 border-dashed border-[#E4E4E4
] `}
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                            onDrop={handleDrop}
                          >
                            <div className="flex flex-col">
                              <div className="flex gap-1 text-4 leading-[22px] text-center font-semibold mx-auto pb-2">
                                <p>{t("career.A1_14")}</p>
                                <input
                                  type="file"
                                  onChange={handleChange}
                                  style={{ display: "none" }}
                                  id="file-upload"
                                  accept="application/pdf"
                                />
                                <label
                                  htmlFor="file-upload"
                                  className="upload-button"
                                >
                                  <p className="text-[#066AFF]">
                                    {t("career.A1_15")}
                                  </p>
                                </label>
                              </div>
                              <p className="text-[#808191] text-[14px] leading-[19.6px] tracking-[0.25px] font-normal text-center">
                                {t("career.A1_16")}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="lg:pb-10 pb-5">
                      <div className="relative flex flex-col gap-1 ">
                        <label
                          className="lg:text-[16px] lg:leading-[24px] tracking-[0.44px] text-[14px] leading-[20px] font-semibold text-[#2D2B2C]"
                          htmlFor="username"
                        >
                          {t("career.A1_17")}
                        </label>

                        <input
                          onFocus={() => setIsFocused(6)}
                          onBlur={() => setIsFocused(0)}
                          className="border-b-2 py-5 px-3 outline-none relative z-[10]"
                          type="text"
                          id="message"
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder={t("career.A1_18")}
                        />

                        {/* Border Animation */}
                        <motion.div
                          className="absolute bottom-0 left-0 bg-vietlink-logoI h-[2px] z-[100]"
                          initial={{ width: "0%", left: "50%" }}
                          animate={{
                            width: isFocused === 6 ? "100%" : "0%",
                            left: isFocused === 6 ? "0%" : "50%",
                          }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        />
                      </div>
                    </div>
                    <div>

                      <button
                        onClick={()=>submitdata()}
                        className="rounded-[2px] pl-[29px] pr-[21px] md:max-w-[168px] w-full py-[19px] bg-vietlink-logoI gap-[10px] flex justify-center items-center transition-all transform hover:scale-125 duration-750 ease-in-out
          hover:bg-orange-500
          "
                      >
                        <p className="text-[16px] leading-[22px] text-center font-semibold text-white">
                          {t("career.A1_19")}
                        </p>
                        <img src="./img/Vector.png" alt="" />
                      </button>

                    </div>
                  </div>
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
