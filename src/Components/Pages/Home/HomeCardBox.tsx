import { HomeCardInfo } from "../../../types/interfaces";
import "./Home.css";

export const HomeCardBox = ({ cardInfo }: { cardInfo: HomeCardInfo}) => {
  const { title, src, description, type } = cardInfo;

  const mediaToDisplay =
    type === "image" ? (
      <img src={src} alt={`image for {title}`} loading="lazy" />
    ) : (
      <iframe
        src={src}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
        allowFullScreen
      ></iframe>
    );

  return (
    <div className="p-4 flex flex-col">
      {mediaToDisplay}
      <h3 className="subheader text-2xl underline">{title}</h3>
      <div className="description">{description}</div>
      <a href="/contact" className="btn-primary">
        Book a Class
      </a>
    </div>
  );
};
