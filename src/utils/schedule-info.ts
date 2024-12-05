const currentMonth =
  new Date().toLocaleString("default", { month: "long" }) + " " + new Date().getFullYear();

export const schedule_info = {
  eventsInfo: [
    {
      title: "KPOP - Dance Class:",
      details: [
        "Friday 6:45-7:45pm (12/06,13,20 & 01/03)",
        "Enhypen - No Doubt ",
        "Saturday 1:30pm-2:20pm (11/25, 12/07,14,21)",
        "Riize - Boom Boom Base ",
        "",
      ],
    },
    {
      title: currentMonth + " Events:",
      details: [
        "12/10 - Black Belt Test",
        "12/21 - Little Tiger Test",
        "12/23 - Regular Test",
        "12/24, 25 - School Closed (Christmas Break)",
        "12/31, 1/1 - School Closed (New Year)",
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
