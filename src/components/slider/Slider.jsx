import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.scss";

const SliderBar = ({ tendingNow, setFeaturedInfo }) => {
  let settings = {
    arrows: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 8,
    autoplay: false,
  };

  const moveHandler = (info) => {
    const moveID = info.Id;
    sessionStorage.setItem("my-ID", moveID);
    setFeaturedInfo(info);
  };

  return (
    <>
      <div className="slider-bar-main-block">
        <Slider {...settings}>
          {tendingNow &&
            tendingNow.map((item, index) => (
              <div className="slider-img-box-block" key={index}>
                <div className="slider-img-box">
                  <img
                    onClick={() => moveHandler(item)}
                    src={require(`../../assets/images/${item.CoverImage}`)}
                    alt=""
                  />
                </div>
              </div>
            ))}
        </Slider>
      </div>
    </>
  );
};

export default SliderBar;
