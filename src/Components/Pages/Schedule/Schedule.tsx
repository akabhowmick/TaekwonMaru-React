import { scheduleImage } from "../../../utils/home-info";
import "./Schedule.css";
import { schedule_info } from "../../../utils/schedule-info";

export const Schedule = () => {
  const eventContainer = schedule_info.eventsInfo.map((event) => {
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

  return (
    <section className="schedule">
      <h3 className="section-header title-capitalize">SCHEDULE:</h3>

      <div className="schedule-section">
        <img src={scheduleImage} alt="schedule" />
      </div>

      <div className="events">
        <h2>{schedule_info.scheduleTitle}</h2>
        <div className="events-grid">{eventContainer}</div>
      </div>
    </section>
  );
};
