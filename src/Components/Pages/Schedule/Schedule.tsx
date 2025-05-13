import { scheduleImage } from "../../../utils/home-info";
import "./Schedule.css";
import { schedule_info } from "../../../utils/schedule-info";

export const Schedule = () => {
  const eventContainer = schedule_info.eventsInfo.map((event) => {
    return (
      <div key={event.title} className="lg:max-w-[30%]">
        <h3 className="text-uppercase text-xl mb-4 font-weight-bold mt-1">{event.title}</h3>
        <hr />
        {event.details.map((detail, index) => {
          return (
            <p key={index} className={`mb-2 text-base xl:text-lg text-left ${detail.length > 0 ? "" : "lies"}`}>
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
        <div className="flex flex-wrap md:justify-evenly md:flex-nowrap gap-4 xl:gap-8">{eventContainer}</div>
      </div>
    </section>
  );
};
