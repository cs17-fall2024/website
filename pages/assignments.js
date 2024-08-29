// formatting for dates
const date_formatting = {
  weekday: "short",
  month: "short",
  day: "numeric",
  hour: "2-digit",
  hour12: true,
  minute: "2-digit",
};

const labs = [
  {
    title: "Lab 1",
    out: new Date("27 Aug 2024 12:00:00 EST"),
    due: new Date("1 Sep 2024 12:00:00 EST"),
    link: "link",
  },
  {
    title: "Lab 2",
    out: new Date("2 Sep 2024 12:00:00 EST"),
    due: new Date("10 Sep 2024 12:00:00 EST"),
    link: "link",
  },
  {
    title: "Lab 3",
    out: new Date("11 Sep 2024 12:00:00 EST"),
    due: new Date("12 Sep 2024 12:00:00 EST"),
    link: "link",
  },
];

const homeworks = [
  {
    title: "Assignment 1",
    out: new Date("27 Aug 2024 12:00:00 EST"),
    due: new Date("1 Sep 2024 12:00:00 EST"),
    link: "link",
  },
  {
    title: "Assignment 2",
    out: new Date("2 Sep 2024 12:00:00 EST"),
    due: new Date("10 Sep 2024 12:00:00 EST"),
    link: "link",
  },
  {
    title: "Assignment 3",
    out: new Date("11 Sep 2024 12:00:00 EST"),
    due: new Date("12 Sep 2024 12:00:00 EST"),
    link: "link",
  },
];

const projects = [
  {
    title: "Project 1",
    out: new Date("27 Aug 2024 12:00:00 EST"),
    due: new Date("1 Sep 2024 12:00:00 EST"),
    link: "link",
  },
  {
    title: "Project 2",
    out: new Date("2 Sep 2024 12:00:00 EST"),
    due: new Date("10 Sep 2024 12:00:00 EST"),
    link: "link",
  },
  {
    title: "Project 3",
    out: new Date("11 Sep 2024 12:00:00 EST"),
    due: new Date("12 Sep 2024 12:00:00 EST"),
    link: "link",
  },
];

// get the current assignments and update the html
const getAssignments = () => {
  d = new Date();
  labs.forEach((lab) => {
    if (d.valueOf() <= lab.due.valueOf() && d.valueOf() >= lab.out.valueOf()) {
      title = document.getElementById("lab-assignment-card-title");
      title.innerHTML = lab.title;
      title.setAttribute("href", lab.link);
      document.getElementById("lab-assignment-card-title").innerHTML =
        lab.title;
      document.getElementById("lab-assignment-card-out").innerHTML =
        lab.out.toLocaleString("en-US", date_formatting);
      document.getElementById("lab-assignment-card-due").innerHTML =
        lab.due.toLocaleString("en-US", date_formatting);
    }
  });
  homeworks.forEach((hw) => {
    if (d.valueOf() <= hw.due.valueOf() && d.valueOf() >= hw.out.valueOf()) {
      title = document.getElementById("hw-assignment-card-title");
      title.innerHTML = hw.title;
      title.setAttribute("href", hw.link);
      document.getElementById("hw-assignment-card-out").innerHTML =
        hw.out.toLocaleString("en-US", date_formatting);
      document.getElementById("hw-assignment-card-due").innerHTML =
        hw.due.toLocaleString("en-US", date_formatting);
    }
  });
  projects.forEach((proj) => {
    if (
      d.valueOf() <= proj.due.valueOf() &&
      d.valueOf() >= proj.out.valueOf()
    ) {
      title = document.getElementById("proj-assignment-card-title");
      title.innerHTML = proj.title;
      title.setAttribute("href", proj.link);
      document.getElementById("proj-assignment-card-out").innerHTML =
        proj.out.toLocaleString("en-US", date_formatting);
      document.getElementById("proj-assignment-card-due").innerHTML =
        proj.due.toLocaleString("en-US", date_formatting);
    }
  });
};