import React, { useState, useEffect } from "react";
import userImage from "../../public/user.png";
import Image from "next/image";
import axios from "axios";
const HeroSecondary = () => {
  const [data, setData] = useState([]);

  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    // Fetch data from the FastAPI backend
    const fetchData = async () => {
      try {
        const response = await axios.get('https://backend-assginment-python-f2be.vercel.app/'); // Replace with your backend URL
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log('data',data);

  const slides = [1, 2];
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="h-screen  relative py-4 flex items-center justify-center">
      <div className="flex  absolute top-0  left-0   items-center justify-center">
        <div className="grid grid-cols-2 grid-rows-2   ">
          

           {data ? (<>{data.items?.map((item) => (
            <div key={item.id} className="flex overflow-y  w-full  ">
                <div className="flex flex-col items-start justify-center p-4 ">
            <p style={{ fontSize: "40px", color: "#8f5849" }}>
             {item.heading}
            </p>
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
           ))}</>) : (<>getting the data </>)}

        </div>
      </div>
    </div>
  );
};



export default HeroSecondary;
