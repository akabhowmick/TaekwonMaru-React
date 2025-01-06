const currentMonth =
  new Date().toLocaleString("default", { month: "long" }) + " " + new Date().getFullYear();

export const schedule_info = {
  eventsInfo: [
    {
      title: "KPOP - Dance Class:",
      details: [
        "Friday 6:45-7:45pm (01/10, 17, 24, 31)",
        "Ateez - Ice on my Teeth ",
        "Saturday 1:30pm-2:20pm (01/04, 11, 18, 25)",
        "G-Dragon - Home Sweet Home ",
        "Rose - APT",
      ],
    },
    {
      title: currentMonth + " Events:",
      details: [
        "01/20 - No class (MLK Day)",
        "01/30 - Family class",
        "",
        ""
      ],
    },
    {
      title: "Junior Leader Meeting:",
      details: [
        "12/26/24 07:20pm - 07:55pm",
        "Mandatory Monthly Meeting for Junior Leaders!",
        "End of year party!",
        "",
        "",
      ],
    },
  ],
  scheduleTitle: `Upcoming Events For: ${currentMonth}`,
};
