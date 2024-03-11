import { classList } from "../../../utils/program-info";
import { DisplayCard } from "../../SharedSections/DisplayCard/DisplayCard";

export const Program = () => {
  return (
    <section>
      <h3 className="section-header title-capitalize">Programs:</h3>
      <div className="portfolio-section">
        <div className="portfolio-grid">
          {classList.map((program) => {
            return (
              <div key={program.title} className="portfolio-card">
                <DisplayCard content={program} displaying={"classes"} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
