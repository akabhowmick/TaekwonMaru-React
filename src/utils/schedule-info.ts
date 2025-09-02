const currentMonth =
  new Date().toLocaleString("default", { month: "long" }) + " " + new Date().getFullYear();

export const schedule_info = {
  eventsInfo: [
    {
      title: "KPOP - Dance Class:",
      details: [
        "Friday 6:45 - 7:45pm (8/29 ~ 9/19)",
        "Cortis - Go!",
        "Saturday 1:30pm - 2:20pm (8/30 ~ 9/20)",
        "Cortis - What you want "
      ],
    },
    {
      title: currentMonth + " Events:",
      details: [
        "09/02 - 07: Buddy Week",
        "09/11 - Long Islands Duck Performance",
        "",
        "",
      ],
    },
    {
      title: "Junior Leader Meeting:",
      details: [
        "TBD",
        "Mandatory Monthly Meeting for Junior Leaders!",
        "",
        "",
      ],
    },
  ],
  scheduleTitle: `Upcoming Events For: ${currentMonth}`,
};
