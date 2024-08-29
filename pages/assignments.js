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
    late: new Date("1 Sep 2024 12:00:00 EST"),
    link: "link",
  },
  {
    title: "Lab 2",
    out: new Date("28 Aug 2024 12:00:00 EST"),
    due: new Date("10 Sep 2024 12:00:00 EST"),
    late: new Date("10 Sep 2024 12:00:00 EST"),
    link: "link",
  },
  {
    title: "Lab 3",
    out: new Date("11 Sep 2024 12:00:00 EST"),
    due: new Date("12 Sep 2024 12:00:00 EST"),
    late: new Date("10 Sep 2024 12:00:00 EST"),
    link: "link",
  },
];

const homeworks = [
  {
    title: "Assignment 1",
    out: new Date("27 Aug 2024 12:00:00 EST"),
    due: new Date("1 Sep 2024 12:00:00 EST"),
    late: new Date("10 Sep 2024 12:00:00 EST"),
    link: "link",
  },
  {
    title: "Assignment 2",
    out: new Date("2 Sep 2024 12:00:00 EST"),
    due: new Date("10 Sep 2024 12:00:00 EST"),
    late: new Date("10 Sep 2024 12:00:00 EST"),
    link: "link",
  },
  {
    title: "Assignment 3",
    out: new Date("11 Sep 2024 12:00:00 EST"),
    due: new Date("12 Sep 2024 12:00:00 EST"),
    late: new Date("10 Sep 2024 12:00:00 EST"),
    link: "link",
  },
];

const projects = [
  {
    title: "Project 1",
    out: new Date("27 Aug 2024 12:00:00 EST"),
    due: new Date("1 Sep 2024 12:00:00 EST"),
    late: new Date("10 Sep 2024 12:00:00 EST"),
    link: "link",
  },
  {
    title: "Project 2",
    out: new Date("2 Sep 2024 12:00:00 EST"),
    due: new Date("10 Sep 2024 12:00:00 EST"),
    late: new Date("10 Sep 2024 12:00:00 EST"),
    link: "link",
  },
  {
    title: "Project 3",
    out: new Date("11 Sep 2024 12:00:00 EST"),
    due: new Date("12 Sep 2024 12:00:00 EST"),
    late: new Date("10 Sep 2024 12:00:00 EST"),
    link: "link",
  },
];

// get the current and past assignments and update the html
const getAssignments = () => {
  d = new Date();

  // get the current and past assignments
  const currLabs = labs.filter((lab) => d.valueOf() >= lab.out.valueOf());
  const currHws = homeworks.filter((hw) => d.valueOf() >= hw.out.valueOf());
  const currProjs = projects.filter(
    (proj) => d.valueOf() >= proj.out.valueOf()
  );

  // edit the three top cards
  currLab = currLabs[currLabs.length - 1];
  labCardTitle = document.getElementById("lab-assignment-card-title");
  labCardTitle.setAttribute("href", currLab.link);
  labCardTitle.innerHTML = currLab.title;
  document.getElementById("lab-assignment-card-title").innerHTML =
    currLab.title;
  document.getElementById("lab-assignment-card-out").innerHTML =
    currLab.out.toLocaleString("en-US", date_formatting);
  document.getElementById("lab-assignment-card-due").innerHTML =
    currLab.due.toLocaleString("en-US", date_formatting);

  currHw = currHws[currHws.length - 1];
  hwCardTitle = document.getElementById("hw-assignment-card-title");
  hwCardTitle.setAttribute("href", currHw.link);
  hwCardTitle.innerHTML = currHw.title;
  document.getElementById("hw-assignment-card-out").innerHTML =
    currHw.out.toLocaleString("en-US", date_formatting);
  document.getElementById("hw-assignment-card-due").innerHTML =
    currHw.due.toLocaleString("en-US", date_formatting);

  currProj = currProjs[currProjs.length - 1];
  projCardTitle = title = document.getElementById("proj-assignment-card-title");
  projCardTitle.setAttribute("href", currProj.link);
  projCardTitle.innerHTML = currProj.title;
  document.getElementById("proj-assignment-card-out").innerHTML =
    currProj.out.toLocaleString("en-US", date_formatting);
  document.getElementById("proj-assignment-card-due").innerHTML =
    currProj.due.toLocaleString("en-US", date_formatting);

  // update the table HTML

  var hwTable = document.getElementById("homeworks-table");

  var labTable = document.getElementById("labs-table");

  var projTable = document.getElementById("projects-table");

  currHws.forEach(function (row) {
    var newRow = document.createElement("tr");
    hwTable.appendChild(newRow);

    var cellTitle = document.createElement("td");
    cellTitle.textContent = row.title;
    newRow.appendChild(cellTitle);

    var cellOut = document.createElement("td");
    cellOut.textContent = row.out.toLocaleString("en-US", date_formatting);
    newRow.appendChild(cellOut);

    var cellDue = document.createElement("td");
    cellDue.textContent = row.due.toLocaleString("en-US", date_formatting);
    newRow.appendChild(cellDue);

    var cellLate = document.createElement("td");
    cellLate.textContent = row.late.toLocaleString("en-US", date_formatting);
    newRow.appendChild(cellLate);
  });

  currLabs.forEach(function (row) {
    var newRow = document.createElement("tr");

    var cellTitle = document.createElement("td");
    cellTitle.textContent = row.title;
    newRow.appendChild(cellTitle);

    var cellOut = document.createElement("td");
    cellOut.textContent = row.out.toLocaleString("en-US", date_formatting);
    newRow.appendChild(cellOut);

    var cellDue = document.createElement("td");
    cellDue.textContent = row.due.toLocaleString("en-US", date_formatting);
    newRow.appendChild(cellDue);

    var cellLate = document.createElement("td");
    cellLate.textContent = row.late.toLocaleString("en-US", date_formatting);
    newRow.appendChild(cellLate);

    labTable.appendChild(newRow);
  });

  currProjs.forEach(function (row) {
    var newRow = document.createElement("tr");

    var cellTitle = document.createElement("td");
    cellTitle.textContent = row.title;
    newRow.appendChild(cellTitle);

    var cellOut = document.createElement("td");
    cellOut.textContent = row.out.toLocaleString("en-US", date_formatting);
    newRow.appendChild(cellOut);

    var cellDue = document.createElement("td");
    cellDue.textContent = row.due.toLocaleString("en-US", date_formatting);
    newRow.appendChild(cellDue);

    var cellLate = document.createElement("td");
    cellLate.textContent = row.late.toLocaleString("en-US", date_formatting);
    newRow.appendChild(cellLate);

    projTable.appendChild(newRow);
  });

  /* 
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
   */
};
