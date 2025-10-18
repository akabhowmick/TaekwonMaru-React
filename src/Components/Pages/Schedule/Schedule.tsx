import { scheduleImage } from "../../../utils/home-info";
import "./Schedule.css";
import { schedule_info } from "../../../utils/schedule-info";

export const Schedule = () => {
  return (
    <section id="schedule">
      <h3 className="section-header title-capitalize">SCHEDULE:</h3>

      <div className="schedule-section">
        <img src={scheduleImage} alt="schedule" className="schedule-image" />
      </div>

      <div className="events">
        <h2 className="events-title">{schedule_info.scheduleTitle}</h2>
        <div className="events-container">
          {schedule_info.eventsInfo.map((event) => (
            <div key={event.title} className="event-card">
              <h3 className="event-title text-2xl">{event.title}</h3>
              <hr className="event-divider" />
              <div className="event-details">
                {event.details.map((detail, index) => (
                  <p key={index} className={`event-detail text-xl font-semibold ${detail.length > 0 ? "" : "lies"}`}>
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
