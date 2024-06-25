import { scheduleImage } from "../../../utils/home-info";
import "./Schedule.css";

const eventsInfo = [
  {
    title: "KPOP - Dance:",
    details: [
      "Friday 5:45-6:45pm (07/05~07/26)",
      "Riize - Impossible",
      "Saturday 1:00pm-1:50pm (06/29~07/20)",
      "New Jeans - How Sweet",
    ],
  },
  {
    title: "July Events 2024:",
    details: [
      "07/04 - No School",
      "",
      "",
      "",
    ],
  },
  {
    title: "JL Meeting:",
    details: [
      "07/30/24 07:05pm - 07:35pm",
      "Mandatory Monthly Meeting for Junior Leaders!",
      "",
      "",
    ],
  },
];

const scheduleTitle = "UPCOMING EVENTS FOR July 2024";

const eventContainer = eventsInfo.map((event) => {
  return (
    <div key={event.title} className="table-entry col-lg-4 col-md-6 mb-4 mb-md-0">
      <h3 className="text-uppercase mb-4 font-weight-bold mt-1">{event.title}</h3>
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
        <h2>{scheduleTitle}</h2>
        <div className="events-grid">{eventContainer}</div>
      </div>
    </section>
  );
};
