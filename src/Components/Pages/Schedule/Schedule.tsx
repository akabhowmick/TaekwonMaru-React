import "./Schedule.css";

export const Schedule = () => {
  return (
    <section className="schedule">
      <h3 className="section-header title-capitalize">SCHEDULE:</h3>

      <div className="schedule-section">
        <img src="../assets/school.png" alt="schedule" />
      </div>

      <div className="events">
        <h2>UPCOMING EVENTS FOR Mar. 2024</h2>
        <div className="events-grid">
          <div className="table-entry col-lg-4 col-md-6 mb-4 mb-md-0">
            <h6 className="text-uppercase mb-4 font-weight-bold mt-1">
              KPOP - Dance:
            </h6>
            <hr />
            <p className="underline">Friday 6:30-7:30pm (03/01~03/29)</p>
            <p>PH1harmony - Back Down</p>
            <p className="underline">Saturday 1:30pm-2:20pm (03/02 ~ 03/30)</p>
            <p>Le Sserafim - Easy</p>
          </div>
          <div className="table-entry col-lg-4 col-md-6 mb-4 mb-md-0">
            <h6 className="text-uppercase mb-4 font-weight-bold mt-1">
              March Events 2024:
            </h6>
            <hr />
            <p>03/23/23 Hong-Ik Championship</p>
            <p className="lies">Tuesday, 02/28: 07:20pm - 08:00pm</p>
            <p className="lies">Tuesday, 02/28: 07:20pm - 08:00pm</p>
            <p className="lies">Tuesday, 02/28: 07:20pm - 08:00pm</p>
          </div>
          <div className="table-entry col-lg-4 col-md-6 mb-4 mb-md-0">
            <h6 className="text-uppercase mb-4 font-weight-bold mt-1">
              JL Meeting:
            </h6>
            <hr />
            <p>03/05/24 07:20pm - 07:55pm</p>
            <p>Mandatory Monthly Meeting for Junior Leaders!</p>
            <p className="lies">Tuesday, 02/28: 07:20pm - 08:00pm</p>
            <p className="lies">Tuesday, 02/28: 07:20pm - 08:00pm</p>
          </div>
        </div>
      </div>
    </section>
  );
};
