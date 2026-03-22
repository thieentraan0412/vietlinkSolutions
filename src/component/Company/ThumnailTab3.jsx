const ThumnailTab3 = ({ data }) => {
  return (
    <div>
      <div className="pb-[56px]">
        <img src={data.url} alt="" />
      </div>
      <div className="flex flex-col gap-3">
        <div className="pb-3">
          <p className="text-left font-bold text-6 leading-[29.05px] pb-2 text-[#2D2B2C]">
            {data.info1}
          </p>
          <p className="text-left font-normal text-4 leading-[22px] tracking-[0.44px] text-[#2D2B2C]">
            {data.info2}
          </p>
          <p className="text-left font-normal text-4 leading-[22px] tracking-[0.44px] text-[#2D2B2C]">
            {data.info3}
          </p>
          {data?.phone != null ? (
            <p className="text-left font-normal text-4 leading-[22px] tracking-[0.44px] text-[#2D2B2C]">
              {data.phone}
            </p>
          ) : (
            ""
          )}
        </div>
        <div>
          <p className="text-left font-semibold text-4 leading-[22px] tracking-[0.44px] text-[#2D2B2C]">
            {data.info4}
          </p>
          <div>
            <div
              className="rounded-6"
              style={{ width: "100%", height: "320px" }}
            >
              {data.map === "1" ? (
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.403623001298!2d106.70276427443494!3d10.780366589368638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f81184cfed1%3A0xe9411434879a6f77!2sSonatus%20Building!5e0!3m2!1sen!2s!4v1719980152087!5m2!1sen!2s"
                  style={{ width: "100%", height: "320px" }}
                  allowFullScreen=""
                  loading="lazy"
                  border-radius="24px"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              ) : data.map === "2" ? (
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.222118902327!2d105.88479567467965!3d21.02379668062425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135a95cd67a0883%3A0x4dc9d7020d1f2fe5!2zMiBOZ8O1IDE3NSDEkMaw4budbmcgQsOhdCBLaOG7kWksIExvbmcgQmnDqm4sIEjDoCBO4buZaSwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1720058868920!5m2!1sen!2s"
                  style={{ width: "100%", height: "320px" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              ) : (
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12964.255813148815!2d139.76488462834197!3d35.675427242093626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188942b46ee331%3A0x26d438c10e0cfc57!2sShinkawa%2C%20Chuo%20City%2C%20Tokyo%20104-0033%2C%20Japan!5e0!3m2!1sen!2s!4v1720059092343!5m2!1sen!2s"
                  style={{ width: "100%", height: "320px" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ThumnailTab3;
