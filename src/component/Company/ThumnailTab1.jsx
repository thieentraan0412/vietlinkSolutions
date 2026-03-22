const ThumnailTab1 = ({ data }) => {
  return (
    <div>
      <div className="pb-4 w-[148px] ">
        <img src={data.url_img} className="" alt="" />
      </div>
      <div className="font-semibold text-[20px] leading-[22px] tracking-[0px] pb-6">
        {data.info1}
      </div>
      <div>
        <div className="pb-6 font-normal leading-[22.4px] tracking-[0.44px] text-[16px] ">
          {data.info2}
        </div>
        <div className="flex flex-col gap-3 px-6">
          <div className="flex justify-end"><div className="h-[80px] w-[80px]"><img className="h-[80px] w-[80px]" src={data.url_img2} alt="" /></div></div>
          <div>
            <p className="font-bold leading-[28px] tracking-[0.15px] text-[20px] text-right pb-1" >{data.info3}</p>
            <p className="font-normal leading-[19.6px] tracking-[0.25px] text-[14px] text-right">{data.info4}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ThumnailTab1;
