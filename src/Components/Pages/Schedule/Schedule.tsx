import { scheduleImage } from "../../../utils/home-info";
import "./Schedule.css";

const currentMonth =
  new Date().toLocaleString("default", { month: "long" }) + " " + new Date().getFullYear();

const eventsInfo = [
  {
    title: "KPOP - Dance:",
    details: [
      "Friday 6:45-7:45pm (09/06 ~ 09/27)",
      "NCT 127 - Walk",
      "Saturday 1:30pm-2:20pm (08/31 ~ 09/21)",
      "TXT - I will see you tomorrow",
    ],
  },
  {
    title: currentMonth + " Events:",
    details: [
      "09/02 - No Class (Labor Day)",
      "09/03 - Back to School Schedule",
      "09/23-28 - Buddy Week",
      "",
    ],
  },
  {
    title: "JL Meeting:",
    details: [
      "08/27/24 07:05pm - 07:35pm",
      "Mandatory Monthly Meeting for Junior Leaders!",
      "",
      "",
    ],
  },
];

const scheduleTitle = "Upcoming Events For: " + currentMonth;

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
