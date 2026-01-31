const currentMonth =
  new Date().toLocaleString("default", { month: "long" }) + " " + new Date().getFullYear();

export const schedule_info = {
  eventsInfo: [
    {
      title: "KPOP - Dance Class:",
      details: [
        "Friday 6:45 - 7:45 PM",
        "Jennie/with the IE & Seventeen/Worth it",
        "Saturday 1:30 PM - 2:20 PM",
        "Boynextdoor/Hollywood action ",
      ],
    },
    {
      title: currentMonth + " Events:",
      details: [
        "02/16 & 17 No Class ",
        "02/09-21 Buddy Week",
        "",
        "",
      ],
    },
    // {
    //   title: "Junior Leader Meeting:",
    //   details: ["TBD", "Mandatory Monthly Meeting for Junior Leaders!", "", ""],
    // },
  ],
  scheduleTitle: `Upcoming Events For: ${currentMonth}`,
};
