import React, { useEffect, useState } from "react";
import Button from "../button/Button";
import SliderBar from "../slider/Slider";
import play from "../../assets/icons/play.png";
import "./featuredInfo.scss";

const FeaturedInfo = ({ mainData, setFeaturedInfo, tendingNow }) => {
  const [sortData, setSortData] = useState(null);

  useEffect(() => {
    const sortedData = tendingNow?.TendingNow.sort((a, b) =>
      a.Date.split("/")
        .reverse()
        .join()
        .localeCompare(b.Date.split("/").reverse().join())
    );
    setSortData(sortedData);
  }, [tendingNow]);

  const idFromStorage = sessionStorage.getItem("my-ID");

  const lastMove = sortData?.filter((item) => {
    return item.Id === idFromStorage;
  });

  const {
    Category,
    TitleImage,
    Title,
    ReleaseYear,
    MpaRating,
    Description,
    Duration,
  } =
    (lastMove && lastMove !== null) || (lastMove !== undefined) === ""
      ? lastMove[0]
      : mainData;

  return (
    <>
      <div className="main-featured-info-wrapper">
        <strong>{Category}</strong>
        <img src={require(`../../assets/images/${TitleImage}`)} alt="" />
        <span>
          {ReleaseYear} {MpaRating} {Duration} s
        </span>
        <p>{Description}</p>
        <p>{Title}</p>
      </div>
      <div className="home-btn-block">
        <Button text="Play" icon={play} />
        <Button text="More info" />
      </div>

      <div className="slider-bar-block">
        <SliderBar tendingNow={sortData} setFeaturedInfo={setFeaturedInfo} />
      </div>
    </>
  );
};

export default FeaturedInfo;
