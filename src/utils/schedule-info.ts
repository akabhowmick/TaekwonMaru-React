const currentMonth =
  new Date().toLocaleString("default", { month: "long" }) + " " + new Date().getFullYear();

export const schedule_info = {
  eventsInfo: [
    {
      title: "KPOP - Dance Class:",
      details: [
        "Friday 6:45 - 7:45pm (10/31, 11/7,14,21)",
        "Cortis - Fashion ",
        "Saturday 1:30pm - 2:20pm (11/1,8,15,22)",
        "All day project - Famous",
      ],
    },
    {
      title: currentMonth + " Events:",
      details: [
        "11/16 - NYS Governor's Championship",
        "11/27-29 - No Classes (Thanksgiving)",
        "",
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
