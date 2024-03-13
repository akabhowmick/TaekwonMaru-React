import { scheduleImage } from "../../../utils/home-info";
import "./Schedule.css";

// Todo Can refactor

const eventsInfo = [
  {
    title: "KPOP - Dance:",
    details: [
      "Friday 6:30-7:30pm (03/01~03/29)",
      "PH1harmony - Back Down",
      "Saturday 1:30pm-2:20pm (03/02 ~ 03/30)",
      "Le Sserafim - Easy",
    ],
  },
  {
    title: "March Events 2024:",
    details: ["03/23/23 Hong-Ik Championship", "", "", ""],
  },
  {
    title: "JL Meeting:",
    details: [
      "03/05/24 07:20pm - 07:55pm",
      "Mandatory Monthly Meeting for Junior Leaders!",
      "",
      "",
    ],
  },
];

const eventContainer = eventsInfo.map((event) => {
  return (
    <div key={event.title} className="table-entry col-lg-4 col-md-6 mb-4 mb-md-0">
      <h6 className="text-uppercase mb-4 font-weight-bold mt-1">{event.title}</h6>
      <hr />
      {event.details.map((detail, index) => {
        return (
          <p key={index} className={detail.length > 0 ? "" : "lies"}>
            {detail}
          </p>
        );
      })}
    </div>
  );
});

export const Schedule = () => {
  return (
    <section className="schedule">
      <h3 className="section-header title-capitalize">SCHEDULE:</h3>

      <div className="schedule-section">
        <img src={scheduleImage} alt="schedule" />
      </div>

      <div className="events">
        <h2>UPCOMING EVENTS FOR Mar. 2024</h2>
        <div className="events-grid">{eventContainer}</div>
      </div>
    </section>
  );
};
