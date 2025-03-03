const currentMonth =
  new Date().toLocaleString("default", { month: "long" }) + " " + new Date().getFullYear();

export const schedule_info = {
  eventsInfo: [
    {
      title: "KPOP - Dance Class:",
      details: [
        "Friday 6:35-7:50pm (3/07,14,21)",
        "G-Dragon - Power",
        "Saturday 1:30pm-2:35pm (3/01,08,25)",
        "NCT Dream - When I'm with you ",
      ],
    },
    {
      title: currentMonth + " Events:",
      details: [
        "03/03 - Promotion Test",
        "03/22 - Hong Ik Championship",
        "",
        ""
      ],
    },
    {
      title: "Junior Leader Meeting:",
      details: [
        "03/25/25 07:20pm - 07:55pm",
        "Mandatory Monthly Meeting for Junior Leaders!",
        "",
        "",
        "",
      ],
    },
  ],
  scheduleTitle: `Upcoming Events For: ${currentMonth}`,
};
