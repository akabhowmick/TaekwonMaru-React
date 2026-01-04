const currentMonth =
  new Date().toLocaleString("default", { month: "long" }) + " " + new Date().getFullYear();

export const schedule_info = {
  eventsInfo: [
    {
      title: "KPOP - Dance Class:",
      details: [
        "Friday 6:45 - 7:45 PM (12/5, 12, 19 & 1/2)",
        "All day project - One more time",
        "Saturday 1:30 PM - 2:20 PM (12/6, 13, 30 & 1/3)",
        "Stray Kids - Famous",
      ],
    },
    {
      title: currentMonth + " Events:",
      details: [
        "01/13 - Black Belt Test",
        "",
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
