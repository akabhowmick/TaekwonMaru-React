const currentMonth =
  new Date().toLocaleString("default", { month: "long" }) + " " + new Date().getFullYear();

export const schedule_info = {
  eventsInfo: [
    {
      title: "KPOP - Dance Class:",
      details: [
        "Friday 6:45-7:45pm (02/14, 21, 28, 03/07)",
        "Seventeen - LOVE, MONEY, FAME ",
        "Saturday 1:30pm-2:20pm (02/01, 08, 15, 22)",
        "Stray Kids - Walking on Water",
      ],
    },
    {
      title: currentMonth + " Events:",
      details: [
        "02/10 - 15 Buddy Week",
        "02/14 - Valentine's Day Special Class",
        "02/17 - No Class (President's Day)",
        "03/22 - Championship"
      ],
    },
    {
      title: "Junior Leader Meeting:",
      details: [
        "02/25/25 07:20pm - 07:55pm",
        "Mandatory Monthly Meeting for Junior Leaders!",
        "",
        "",
        "",
      ],
    },
  ],
  scheduleTitle: `Upcoming Events For: ${currentMonth}`,
};
