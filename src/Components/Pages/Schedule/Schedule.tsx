import { scheduleImage } from "../../../utils/home-info";
import "./Schedule.css";

const eventsInfo = [
  {
    title: "KPOP - Dance:",
    details: [
      "Friday 6:30-7:30pm (05/03~05/24)",
      "NCT Dream - Smoothie",
      "Saturday 1:30pm-2:20pm (05/04 ~ 05/25)",
      "TWS - Plot Twist",
    ],
  },
  {
    title: "May Events 2024:",
    details: [
      "04/13 - Little Tiger Test",
      "04/15 - Teen & Children Test",
      "04/12 - Charles Campagne and Robbins Lane Elementary School performances",
      "04/22 - 27 Buddy Week",
    ],
  },
  {
    title: "JL Meeting:",
    details: [
      "04/22/24 07:20pm - 07:55pm",
      "Mandatory Monthly Meeting for Junior Leaders!",
      "",
      "",
    ],
  },
];

const scheduleTitle = "UPCOMING EVENTS FOR Apr. 2024";

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
