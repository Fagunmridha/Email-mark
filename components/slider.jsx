import React from "react";
import Slider from "react-slick";
import BusinessCard from "./business-card";

const CardSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div style={{ marginTop: 100 }}>
      {" "}
      <Slider {...settings}>
        <div>
          <BusinessCard
            img="/images/joe.webp"
            badge="Retall"
            subtitle="Joe & The Juice use audience to keep thousend of emploess on the loop across 300+ global location not into ther are not."
            icon="/images/cl-joe.webp"
          />
        </div>
        <div>
          <BusinessCard
            img="/images/weekend.webp"
            badge="Finance"
            subtitle="Rayan Hoover (founder of product hunt ) and vedika jens use audience rn ther popular newstleer about runing a "
            icon="/images/signatureblock.webp"
          />
        </div>
        <div>
          <BusinessCard
            img="/images/soho.webp"
            badge="Entertainment"
            subtitle="Soho Live Music Club use audience to promoteevents and drive sels at their 3 award-wining music venus in heart."
            icon="/images/cl-soho.webp"
          />
        </div>
        <div>
          <BusinessCard
            img="/images/makebuild.webp"
            badge="Agencles"
            subtitle="Make Build, a shofify and webflow enterprice and agency partner use audinceful to keep their team inspired."
            icon="/images/cl-makebuild.webp"
          />
        </div>
      </Slider>
    </div>
  );
};

export default CardSlider;
