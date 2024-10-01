const currentMonth =
  new Date().toLocaleString("default", { month: "long" }) + " " + new Date().getFullYear();

export const schedule_info = {
  eventsInfo: [
    {
      title: "KPOP - Dance Class Schedule:",
      details: [
        "Friday 6:45-7:45pm (09/06 ~ 09/27)",
        "NCT 127 - Walk",
        "Saturday 1:30pm-2:20pm (09/28 ~ 10/19)",
        "NewJeans/Supernatural",
        "",
      ],
    },
    {
      title: currentMonth + " Events:",
      details: [
        "10/14 - No Class (Columbus Day)",
        "10/23 - Championship Practice (change in Wednesday schedule)",
        "10/25 - Halloween Classes!",
        "10/26 - Promotion Test: Little Tigers",
        "10/28 - Promotion Test: Teens and Children",
      ],
    },
    {
      title: "Junior Leader Meeting:",
      details: [
        "10/29/24 07:20pm - 07:55pm",
        "Mandatory Monthly Meeting for Junior Leaders!",
        "",
        "",
        "",
      ],
    },
  ],
  scheduleTitle: `Upcoming Events For:  + ${currentMonth}`,
};
