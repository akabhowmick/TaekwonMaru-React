const currentMonth =
  new Date().toLocaleString("default", { month: "long" }) + " " + new Date().getFullYear();

export const schedule_info = {
  eventsInfo: [
    {
      title: "KPOP - Dance Class:",
      details: [
        "Friday 6:45-7:45pm (12/6 ~ 12/27)",
        "Enhypen - No Doubt ",
        "Saturday 1:30pm-2:20pm (11/23, 12/7 ~ 12/21)",
        "Riize - Boom Boom Base ",
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
