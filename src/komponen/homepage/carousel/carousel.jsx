const CardCarousel = (props) => {

  
  
  return (
    <div className=" px-6 w-[305px] lg:w-[full] h-[170px] mx-2 bg-white  rounded-[18px] shadow-lg flex flex-col items-center justify-center">
      <div className="flex items-center">
        <img src={props.gambar} alt="" />
        <a href="">
          <h5 className="mb-2 text-[14px] lg:text-[18px] font-bold tracking-tight text-slate-900 dark:text-slate-900">
            {props.heading}
          </h5>
        </a>
      </div>
      <p className="font-normal text-gray-500 dark:text-gray-400 text-xs">
        {props.paragraf}
      </p>
    </div>
  );
};
export default CardCarousel;
