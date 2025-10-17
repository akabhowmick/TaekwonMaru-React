import { HomeCardInfo } from "../../../types/interfaces";
import "./Home.css";

export const HomeCardBox = ({ cardInfo }: { cardInfo: HomeCardInfo }) => {
  const { title, src, description, type } = cardInfo;

  const mediaToDisplay =
    type === "image" ? (
      <div className="media-wrapper">
        <img src={src} alt={`image for ${title}`} loading="lazy" />
      </div>
    ) : (
      <div className="media-wrapper">
        <iframe
          src={src}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
          allowFullScreen
        ></iframe>
      </div>
    );

  return (
    <div className="p-4 flex flex-col h-full">
      {mediaToDisplay}
      <div className="flex flex-col flex-grow justify-between">
        <div>
          <h3 className="subheader sm:text-2xl md:text-4xl font-bold mb-3">{title}</h3>
          <div className="description mb-4 sm:text-xl md:text-2xl">{description}</div>
        </div>
        <a href="/contact" className="btn-primary no-underline inline-block mt-auto">
          Book a Class
        </a>
      </div>
    </div>
  );
};