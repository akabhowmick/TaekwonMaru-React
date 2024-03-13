import { HomeCardInfo } from "../../../types/interfaces";
import "./Home.css";

export const HomeCardBox = ({ cardInfo }: { cardInfo: HomeCardInfo}) => {
  const { title, src, description, type } = cardInfo;

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
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
        allowFullScreen
      ></iframe>
    );

  return (
    <>
      {mediaToDisplay}
      <h3 className="subheader">{title}</h3>
      <div className="description">{description}</div>
      <a href="./html/contact-us.html" className="btn-primary">
        Book a Class
      </a>
    </>
  );
};
