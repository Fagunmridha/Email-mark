import React, { useState } from "react";
import Slider from "react-slick";

function DynamicSlides() {
  const [slides, setSlides] = useState([1, 2, 3, 4, 5, 6]);
  const handleClick = () => {
    setSlides(
      slides.length === 6 ? [1, 2, 3, 4, 5, 6, 7, 8, 9] : [1, 2, 3, 4, 5, 6]
    );
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div
      className="slider-container"
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        width: "400px",
      }}
    >
      <button className="button" onClick={handleClick}>
        Click to change slide count
      </button>
      <Slider {...settings}>
        <div className="bg-green-400">
          <h1>one</h1>
        </div>
        <div className="bg-red-400">
          <h1>one</h1>
        </div>
        <div className="bg-blue-400">
          <h1>one</h1>
        </div>
        <div className="bg-lime-400">
          <h1>one</h1>
        </div>
      </Slider>
    </div>
  );
}

export default DynamicSlides;
