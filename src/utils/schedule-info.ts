const currentMonth =
  new Date().toLocaleString("default", { month: "long" }) + " " + new Date().getFullYear();

export const schedule_info = {
  eventsInfo: [
    {
      title: "KPOP - Dance Class:",
      details: [
        "Friday 6:35-7:50pm (6/27, 7/11, 18, 25)",
        "Street Man - Woman fighter Special",
        "Each week new dance - Echo, Hey mama, New things, Smoke", 
        "Saturday 1:30pm-2:20pm (6/28, 7/12, 19, 26)",
        "P1harmony - DUH!"
      ],
    },
    {
      title: currentMonth + " Events:",
      details: [
        "07/04 - No class (Independence Day)",
        "07/01 - 05: Buddy Week",
        "",
        "",
      ],
    },
    {
      title: "Junior Leader Meeting:",
      details: [
        "07/11/25 05:45 P.M. - 06:15 P.M.",
        "07/18/25 05:45 P.M. - 06:15 P.M.",
        "07/25/25 05:45 P.M. - 06:15 P.M.",
        "Mandatory Monthly Meeting for Junior Leaders!",
        "",
      ],
    },
  ],
  scheduleTitle: `Upcoming Events For: ${currentMonth}`,
};
