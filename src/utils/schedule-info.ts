const currentMonth =
  new Date().toLocaleString("default", { month: "long" }) + " " + new Date().getFullYear();

export const schedule_info = {
  eventsInfo: [
    {
      title: "KPOP - Dance Class:",
      details: [
        "Friday 6:15-7:15pm (8/1 ~ 8/22)",
        "All day project - Wicked",
        "Saturday 1:30pm-2:20pm (8/2 ~ 8/23)",
        "Enhypen - Bad desire"
      ],
    },
    {
      title: currentMonth + " Events:",
      details: [
        "08/13 - Family Class!",
        "08/19 - Summer Party",
        "08/27 - Promotion Test",
        "08/18 - 30: Buddy Week",
      ],
    },
    {
      title: "Junior Leader Meeting:",
      details: [
        "08/08/25 05:45 P.M. - 06:15 P.M.",
        "08/15/25 05:45 P.M. - 06:15 P.M.",
        "08/22/25 05:45 P.M. - 06:15 P.M.",
        "08/29/25 05:45 P.M. - 06:15 P.M.",
        "Mandatory Monthly Meeting for Junior Leaders!",
        "",
      ],
    },
  ],
  scheduleTitle: `Upcoming Events For: ${currentMonth}`,
};
