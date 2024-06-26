import { HomePageSections } from "../../../types/interfaces";
import {
  HomeCardAdVideoBoxes,
  HomeCardImageBoxes,
  HomeCardKnowUsBoxes,
  HomeCardKPOPVideoBoxes,
  HomeCardVideoBoxes,
  homeImage,
} from "../../../utils/home-info";
import "./Home.css";
import { HomeCardBox } from "./HomeCardBox";

export const Home = () => {
  const sectionTitleAndMedia: HomePageSections[] = [
    { sectionTitle: "EASY TO START!", media: HomeCardImageBoxes },
    { sectionTitle: "WATCH OUR RECENT HIGHLIGHTS!", media: HomeCardVideoBoxes },
    { sectionTitle: "NOW OFFERING KPOP DANCE CLASSES!", media: HomeCardKPOPVideoBoxes },
    { sectionTitle: "FUN INSIDE AND OUTSIDE THE DOJANG!", media: HomeCardAdVideoBoxes },
    { sectionTitle: "LEARN ABOUT OUR CLASSES!", media: HomeCardKnowUsBoxes },
  ];

  return (
    <>
      <section className="home-page-section">
        <img
          className="home-picture kenburns-top"
          src={homeImage}
          alt="banner-picture-taekwonmaru"
        />
      </section>
      {sectionTitleAndMedia.map(({ sectionTitle, media }) => {
        return (
          <section className="light-bg" key={sectionTitle}>
            <div className="header-large">
              <h3 className="text-focus-in">{sectionTitle}</h3>
            </div>
            <div className="main-page-sections">
              {media.map((cardInfo) => {
                return (
                  <div
                    className="card light-bg half-section img-1 bounce-in-top"
                    key={cardInfo.title}
                  >
                    <HomeCardBox cardInfo={cardInfo} />
                  </div>
                );
              })}
            </div>
          </section>
        );
      })}
    </>
  );
};
