const currentMonth =
  new Date().toLocaleString("default", { month: "long" }) + " " + new Date().getFullYear();

export const schedule_info = {
  eventsInfo: [
    {
      title: "KPOP - Dance Class:",
      details: [
        "Friday 6:45-7:45pm (11/1 ~ 11/22)",
        "Bad Villain - +82",
        "Saturday 1:30pm-2:20pm (10/26 ~ 11/16)",
        "Straykids - Chk Chk Boom",
        "",
      ],
    },
    {
      title: currentMonth + " Events:",
      details: [
        "11/17 - NYS Championship",
        "11/28 - 30 No Classes (Thanksgiving Break)",
        "",
        "",
        "",
      ],
    },
    {
      title: "Junior Leader Meeting:",
      details: [
        "11/26/24 07:20pm - 07:55pm",
        "Mandatory Monthly Meeting for Junior Leaders!",
        "",
        "",
        "",
      ],
    },
  ],
  scheduleTitle: `Upcoming Events For: ${currentMonth}`,
};
