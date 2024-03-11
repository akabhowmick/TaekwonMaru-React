import { HomeCardInfo } from "../../../types/interfaces";
import "./Home.css";

export const HomeCardBox = ({ cardInfo, key }: { cardInfo: HomeCardInfo, key:string }) => {
  const { src, description, type } = cardInfo;

  const mediaToDisplay =
    type === "image" ? (
      <img src={src} alt={`image for {title}`} loading="lazy" />
    ) : (
      <iframe
        width="560"
        height="315"
        src={src}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    );

  return (
    <div className="card light-bg half-section img-1">
      {mediaToDisplay}
      <h3 className="subheader">{key}</h3>
      <div className="description">{description}</div>
      <a href="./html/contact-us.html" className="btn-primary">
        Book a Class
      </a>
    </div>
  );
};
