const CardBanner = ({bannerTitle, bannerImg}) => {
    return (
      <div className="mx-5 w-[310px]">
        <div className="flex items-center  w-[100%] ">
          <img src={bannerImg} alt="" className="" />
        </div>
        <h2 className="font-basierB uppercase  text-gray-900 text-xl flex flex-wrap w-[310px]">
          {bannerTitle}
        </h2>
      </div>
    );

}

export default CardBanner