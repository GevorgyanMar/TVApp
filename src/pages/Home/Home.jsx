import React, { useEffect, useState } from "react";
import { mainData } from "../../data";
import homeBg from "../../assets/images/FeaturedCoverImage.png";
import "./home.scss";
import Menu from "../../components/menu/Menu";
import VideoPlayer from "../../components/videoPlayer/VideoPlayer";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";

const Home = () => {
  const [data, setData] = useState(mainData);
  const [featuredInfo, setFeaturedInfo] = useState(null);
  const [video, setVideo] = useState("");
  const getData = featuredInfo ? featuredInfo : mainData?.Featured;
  const { VideoUrl } = getData;

  useEffect(() => {
    setData(mainData);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setVideo(VideoUrl);
    }, 2000);
  }, [VideoUrl]);

  return (
    <section
      className="home-section"
      style={{ backgroundImage: `url(${homeBg})` }}
    >
      <div className="home-content">
        <Menu />
        <div className="home-body">
          {video ? (
            <VideoPlayer src={video} />
          ) : (
            <FeaturedInfo
              mainData={getData}
              tendingNow={data}
              setFeaturedInfo={setFeaturedInfo}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Home;
