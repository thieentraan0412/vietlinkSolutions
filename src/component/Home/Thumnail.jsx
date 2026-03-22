const Thumnail = (props) => {
  const { img, title, info, descriptions_img } = props;
  return (
    <div className=' break-inside-avoid md:mb-16'>
      <div className='relative'>
        <img src={img} alt='' className="object-cover" />
        <div className=' mx-auto absolute bottom-[8px] left-2 bg-vietlink-info rounded-[8px] px-[12px] py-[8px]'>
          <p className="text-[13px] tracking-[0.4px] leading-[16px] text-vietlink-description font-bold "> {descriptions_img}</p>
        </div> 
      </div>
      <div className='mt-2'>
        <div className='flex flex-wrap items-center justify-between text-vietlink-description'>
          <div className='flex items-center justify-center lg:ml-1'>
            {/* <img src='./img/human.png' alt='' className='object-none'/> */}
            <div><img src="./img/human.png" alt="" /></div>
            <div className='text-[14px] leading-[20px] lg:text-[16px] ml-[12px] tracking-[0.44px] lg:leading-[22.4px] items-center'>{info}</div>
          </div>
          <div className=' flex justify-center pr-[10px]'>
          {/* <img src='./img/clock.png' alt='' className='w-[16px] h-[16.3px]' /> */}
          <div><img src="./img/clock.png" alt="" /></div>
          <div className='text-[14px] leading-[20px] lg:text-[16px] ml-[8px] tracking-[0.44px] lg:leading-[22.4px] items-center'>JUL,25, 2022</div>
          </div>  
        </div>
        <div className='font-bold text-[24px] leading-[29.05px] text-vietlink-logo mt-[12px] '>
          {title}
        </div>
        <div className="lg:block hidden"><div className='h-[24px] mt-4 text-vietlink-logoI text-[14px] leading-[16.94px] tracking-[0.75px] flex font-semibold items-center'>
          <a href=''>Read More</a> <img className="ml-2" src='./img/aaa.png' alt='' />
        </div></div>
        
      </div>
    </div>
  );
};
export default Thumnail;
