import React, { useState } from "react";
import userImage from "../public/user.png";
import Image from "next/image";

const HeroSecondary = ({ user }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [effect, setEffect] = useState(false);

  const slides = user;

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.items.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setEffect(!effect);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.items.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setEffect(!effect);
  };

  const userInfor = slides.items?.map((item) => (
    <div key={item._id}  className="flex flex-col-reverse sm:grid grid-cols-2  min-w-full ">
      <div className="flex flex-col items-start w-full   justify-center p-4 ">
        <div  className="text-[#8f5849] text-4xl sm:text-5xl heading">{item.heading}</div>

        <h4  className="font-light max-w-xl text-2xl my-3 sm:text-4xl ">
          {item.subheading}
        </h4>
      </div>
      <div className="mx-auto   ">
        <div className="flex gap-4">
          <button onClick={goToPrevious}>Previous</button>
          <button onClick={goToNext}>Next</button>
        </div>
        <Image src={userImage} alt="adsf" width={450} />
      </div>
    </div>
  ));

  if (!user) {
    return <div>data is loading...</div>;
  }

  return (
    <div className=" min-h-screen  relative py-4 flex items-center  justify-center">
      <div className="max-w-[1400px]  w-full">
        <div
          className={`flex  shadow-md p-3   rounded items-center justify-start overflow-hidden `}
        >
          {userInfor[currentIndex]}
        </div>
      </div>
    </div>
  );
};

export default HeroSecondary;
