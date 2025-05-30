const currentMonth =
  new Date().toLocaleString("default", { month: "long" }) + " " + new Date().getFullYear();

export const schedule_info = {
  eventsInfo: [
    {
      title: "KPOP - Dance Class:",
      details: [
        "Friday 6:35-7:50pm (5/30, 6/6, 13, 20)",
        "RIIZE - Bag Bad Back ",
        "Saturday 1:30pm-2:35pm (5/31, 6/7, 14, 21)",
        "Seventeen - Don't Wanna Cry",
        "Le sserafim/ Perfect night ",
      ],
    },
    {
      title: currentMonth + " Events:",
      details: [
        "06/10 - Black Belt Test",
        "06/30 - Promotion Test (Teens and Children)",
        "",
        "",
      ],
    },
    {
      title: "Junior Leader Meeting:",
      details: [
        "06/24/25 07:20pm - 07:55pm",
        "Mandatory Monthly Meeting for Junior Leaders!",
        "",
        "",
        "",
      ],
    },
  ],
  scheduleTitle: `Upcoming Events For: ${currentMonth}`,
};
