// return a JSON object with the name, pdf link, due dates

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
  labs.forEach((hw) => {
    if (d.valueOf() <= hw.due.valueOf() && d.valueOf() >= hw.out.valueOf()) {
      console.log(hw);
      document.getElementById("lab-assignment-card-title").innerHTML = hw.title;
      document.getElementById("lab-assignment-card-out").innerHTML =
        hw.out.toLocaleString();
      document.getElementById("lab-assignment-card-due").innerHTML =
        hw.due.toLocaleString();
      document.getElementById("lab-assignment-card-link").innerHTML = hw.link;
    }
  });
  homeworks.forEach((hw) => {
    if (d.valueOf() <= hw.due.valueOf() && d.valueOf() >= hw.out.valueOf()) {
      console.log(hw);
      document.getElementById("hw-assignment-card-title").innerHTML = hw.title;
      document.getElementById("hw-assignment-card-out").innerHTML =
        hw.out.toLocaleString();
      document.getElementById("hw-assignment-card-due").innerHTML =
        hw.due.toLocaleString();
      document.getElementById("hw-assignment-card-link").innerHTML = hw.link;
    }
  });
  projects.forEach((hw) => {
    if (d.valueOf() <= hw.due.valueOf() && d.valueOf() >= hw.out.valueOf()) {
      console.log(hw);
      document.getElementById("proj-assignment-card-title").innerHTML =
        hw.title;
      document.getElementById("proj-assignment-card-out").innerHTML =
        hw.out.toLocaleString();
      document.getElementById("proj-assignment-card-due").innerHTML =
        hw.due.toLocaleString();
      document.getElementById("proj-assignment-card-link").innerHTML = hw.link;
    }
  });
};
