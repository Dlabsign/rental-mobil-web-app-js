import React from "react";

const NavSlider = ({iconop, selectedOption, option, onClick,  }) => {
  const buttonClass =
    selectedOption === option
      ? "bg-orange-500 text-white"
      : " font-basierR bg-white";

  return (
    <button
      className={` uppercase h-[80px] px-9 font-basierR tracking-[0.15em]  text-sm sm:text-base ${buttonClass}`}
      onClick={() => onClick(option)}
    >
      <span>
        <img src="" alt="" />
      </span>
      {option}
    </button>
  );
};

export default NavSlider;
