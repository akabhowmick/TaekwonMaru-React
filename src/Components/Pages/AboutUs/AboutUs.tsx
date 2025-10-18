import { masterList } from "../../../utils/masters-info";
import { DisplayCard } from "../../SharedSections/DisplayCard/DisplayCard";
import "./AboutUs.css";

export const AboutUs = () => {
  return (
    <section className="about-us-container">
      <h3 className="section-header title-capitalize">About Us:</h3>
      <div className="portfolio-section">
        <div className="p-4 lg:p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 justify-items-center">
          {masterList.map((master) => {
            return (
              <div key={master.title} className="portfolio-card">
                <DisplayCard content={master} displaying={"masters"} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
