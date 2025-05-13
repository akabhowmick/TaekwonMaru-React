const currentMonth =
  new Date().toLocaleString("default", { month: "long" }) + " " + new Date().getFullYear();

export const schedule_info = {
  eventsInfo: [
    {
      title: "KPOP - Dance Class:",
      details: [
        "Friday 6:35-7:50pm (5/2, 9, 16, 30)",
        "Mark - 82 pressin",
        "Saturday 1:30pm-2:35pm Tik Tok challenge dance",
        "4/26 - Jennie - Like Jennie",
        "5/3 - Shinee - Lucifer",
        "5/10 - J-hope - Sweet Dreams",
        "5/17 - Review Week!",
      ],
    },
    {
      title: currentMonth + " Events:",
      details: [
        "05/26 - Memorial Day: School Closed",
        "",
        "",
        "",
      ],
    },
    {
      title: "Junior Leader Meeting:",
      details: [
        "04/14/25 07:20pm - 07:55pm",
        "Mandatory Monthly Meeting for Junior Leaders!",
        "",
        "",
        "",
      ],
    },
  ],
  scheduleTitle: `Upcoming Events For: ${currentMonth}`,
};
