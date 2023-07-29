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
    <div
      key={item._id}
      className="grid grid-cols-2  min-w-full ">
      <div className="flex flex-col items-start justify-center p-4 ">
        <p style={{ fontSize: "40px", color: "#8f5849" }}>{item.heading}</p>
        <p style={{ fontSize: "32px" }} className="font-light max-w-xl ">
          {item.subheading}
        </p>
      </div>
      <div className="">
        <div>
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
    <div className=" h-screen  relative py-4 flex items-center  justify-center">
      <div className="max-w-[1400px]  w-full">
        <div
          className={`flex  shadow-md p-3  border rounded items-center justify-start overflow-hidden `}
        >
          {userInfor[currentIndex]}
        </div>
      </div>
    </div>
  );
};

export default HeroSecondary;
