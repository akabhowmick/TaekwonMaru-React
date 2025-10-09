const currentMonth =
  new Date().toLocaleString("default", { month: "long" }) + " " + new Date().getFullYear();

export const schedule_info = {
  eventsInfo: [
    {
      title: "KPOP - Dance Class:",
      details: [
        "Friday 6:45 - 7:45pm (9/26 & 10/10, 17, 24)",
        "RIIZE - Fly up ",
        "Saturday 1:30pm - 2:20pm (9/27 & 10/11, 19, 25)",
        "Straykids - Ceremony",
      ],
    },
    {
      title: currentMonth + " Events:",
      details: [
        "10/13 - No Classes (Indigenous People's Day)",
        "10/27 - Promotion Test",
        "10/22 & 10/29 - Schedule Change Due to Championship Practice",
        "",
      ],
    },
    {
      title: "Junior Leader Meeting:",
      details: ["TBD", "Mandatory Monthly Meeting for Junior Leaders!", "", ""],
    },
  ],
  scheduleTitle: `Upcoming Events For: ${currentMonth}`,
};
