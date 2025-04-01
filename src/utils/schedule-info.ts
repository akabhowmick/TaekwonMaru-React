const currentMonth =
  new Date().toLocaleString("default", { month: "long" }) + " " + new Date().getFullYear();

export const schedule_info = {
  eventsInfo: [
    {
      title: "KPOP - Dance Class:",
      details: [
        "Friday 6:35-7:50pm (3/28, 4/11,18,25)",
        "Ateez - Crazy form",
        "Saturday 1:30pm-2:35pm (3/29,4/5,12,19)",
        "Boy Next Door - Our  ",
      ],
    },
    {
      title: currentMonth + " Events:",
      details: [
        "04/28 - Promotion Test",
        "04/04 - JJP Performance",
        "04/05 - Robins Lane Performance",
        "",
      ],
    },
    {
      title: "Junior Leader Meeting:",
      details: [
        "TBD 07:20pm - 07:55pm",
        "Mandatory Monthly Meeting for Junior Leaders!",
        "",
        "",
        "",
      ],
    },
  ],
  scheduleTitle: `Upcoming Events For: ${currentMonth}`,
};
