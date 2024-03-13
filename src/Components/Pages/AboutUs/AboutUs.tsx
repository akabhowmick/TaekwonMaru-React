import { masterList } from "../../../utils/masters-info";
import { DisplayCard } from "../../SharedSections/DisplayCard/DisplayCard";
import "./AboutUs.css";

export const AboutUs = () => {
  return (
    <section className="about-us-container">
      <h3 className="section-header title-capitalize">About Us:</h3>
      <div className="portfolio-section">
        <div className="portfolio-grid">
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
