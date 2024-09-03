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
    title: "Lab 1: Setup",
    out: new Date("8 Sep 2024 14:00:00 EST"),
    due: new Date("15 Sep 2024 13:59:00 EST"),
    link: "https://drive.google.com/file/d/1O49c2261yas4Wl6757DRd3pZGPCemoff/view?usp=drive_link",
    slide: "https://docs.google.com/presentation/d/1AYjTXpnpxLMgm5M2v_n9m9gcoL1er3BSJ2vqsD6xJs4/edit?usp=drive_link",
    source: "",
  },
  {
    /* update handout */
    title: "Lab 3: Racket",
    out: new Date("15 Sep 2024 14:00:00 EST"),
    due: new Date("22 Sep 2024 13:59:00 EST"),
    link: "",
    slide: "",
    source: "",
  },
  {
    /* update handout */
    title: "Lab 3: Recursion",
    out: new Date("22 Sep 2024 14:00:00 EST"),
    due: new Date("29 Sep 2024 13:59:00 EST"),
    link: "",
    slide: "",
    source: "",  
  },
  {
    /* update handout */
    title: "Lab 4: Natural Numbers",
    out: new Date("22 Sep 2024 14:00:00 EST"),
    due: new Date("29 Sep 2024 13:59:00 EST"),
    link: "",
    slide: "",
    source: "",
  },
  {
    /* update handout */
    title: "Lab 5: Search",
    out: new Date("29 Sep 2024 14:00:00 EST"),
    due: new Date("6 Oct 2024 13:59:00 EST"),
    link: "",
    slide: "",
    source: "",
  },
  {
    /* update handout */
    title: "Lab 6: Reason",
    out: new Date("6 Oct 2024 14:00:00 EST"),
    due: new Date("13 Oct 2024 13:59:00 EST"),
    link: "",
    slide: "",
    source: "",
  },
  {
    /* update handout */
    title: "Lab 7: Debugging",
    out: new Date("13 Oct 2024 14:00:00 EST"),
    due: new Date("20 Oct 2024 13:59:00 EST"),
    link: "",
    slide: "",
    source: "",
  },
  {
    /* update handout */
    title: "Lab 8: Environments",
    out: new Date("20 Oct 2024 14:00:00 EST"),
    due: new Date("27 Oct 2024 13:59:00 EST"),
    link: "",
    slide: "",
    source: "",
  },
  {
    /* update handout */
    title: "Lab 9: ADTs",
    out: new Date("27 Oct 2024 14:00:00 EST"),
    due: new Date("3 Nov 2024 13:59:00 EST"),
    link: "",
    slide: "",
    source: "",
  },
  {
    /* update handout */
    title: "Lab 10: Game",
    out: new Date("3 Nov 2024 14:00:00 EST"),
    due: new Date("10 Nov 2024 13:59:00 EST"),
    link: "",
    slide: "",
    source: "",
  },
  {
    /* update handout */
    title: "Lab 11: Sort",
    out: new Date("10 Nov 2024 14:00:00 EST"),
    due: new Date("17 Nov 2024 13:59:00 EST"),
    link: "",
    slide: "",
    source: "",
  },

];

const homeworks = [
  {
    title: "HW 1: Warmup",
    out: new Date("4 Sep 2024 16:20:00 EST"),
    due: new Date("11 Sep 2024 23:00:00 EST"),
    late: new Date("12 Sep 2024 23:00:00 EST"),
    link: "https://drive.google.com/file/d/1Z-dte5UflPAlq7JrSuVXmtU5hGMEsu72/view?usp=drive_link",
    source: "",
  },
  {
    title: "HW 2: Procedures",
    out: new Date("12 Sep 2024 12:00:00 EST"),
    due: new Date("18 Sep 2024 23:00:00 EST"),
    late: new Date("19 Sep 2024 23:00:00 EST"),
    link: "",
    source: "",
  },
  {
    title: "HW 3: Recursion",
    out: new Date("19 Sep 2024 12:00:00 EST"),
    due: new Date("25 Sep 2024 23:00:00 EST"),
    late: new Date("26 Sep 2024 23:00:00 EST"),
    link: "",
    source: "",
  },
  {
    title: "HW 4: More Recursion",
    out: new Date("26 Sep 2024 12:00:00 EST"),
    due: new Date("2 Oct 2024 23:00:00 EST"),
    late: new Date("3 Oct 2024 23:00:00 EST"),
    link: "",
    source: "",
  },
  {
    title: "HW 5: More HOPs and Subsets",
    out: new Date("3 Oct 2024 12:00:00 EST"),
    due: new Date("9 Oct 2024 23:00:00 EST"),
    late: new Date("10 Oct 2024 23:00:00 EST"),
    link: "",
    source: "",
  },
  {
    title: "HW 6: K-Subsets and Matrices",
    out: new Date("10 Oct 2024 12:00:00 EST"),
    due: new Date("16 Oct 2024 23:00:00 EST"),
    late: new Date("17 Oct 2024 23:00:00 EST"),
    link: "",
    source: "",
  },
  {
    title: "HW 7: Rackettecita",
    out: new Date("17 Oct 2024 12:00:00 EST"),
    due: new Date("23 Oct 2024 23:00:00 EST"),
    late: new Date("24 Oct 2024 23:00:00 EST"),
    link: "",
    source: "",
  },
  {
    title: "HW 8: ADTs",
    out: new Date("24 Oct 2024 12:00:00 EST"),
    due: new Date("30 Oct 2024 23:00:00 EST"),
    late: new Date("31 Oct 2024 23:00:00 EST"),
    link: "",
    source: "",
  },
  {
    title: "HW 9: Trees, Trees, ...and Lists",
    out: new Date("7 Nov 2024 12:00:00 EST"),
    due: new Date("13 Nov 2024 23:00:00 EST"),
    late: new Date("14 Nov 2024 23:00:00 EST"),
    link: "",
    source: "",
  },
  {
    title: "HW 10: Game Tools",
    out: new Date("14 Nov 2024 12:00:00 EST"),
    due: new Date("20 Nov 2024 23:00:00 EST"),
    late: new Date("21 Nov 2024 23:00:00 EST"),
    link: "",
    source: "",
  },
];

const projects = [
  {
    title: "Bignum",
    out: new Date("23 Sep 2024 12:00:00 EST"),
    due: new Date("4 Oct 2024 23:00:00 EST"),
    late: new Date("5 Oct 2024 23:00:00 EST"),
    link: "",
    source: "",
    gearup: "",
  },
  {
    title: "Rackette",
    out: new Date("24 Oct 2024 12:00:00 EST"),
    due: new Date("8 Nov 2024 23:00:00 EST"),
    late: new Date("9 Nov 2024 23:00:00 EST"),
    link: "",
    source: "",
    gearup: "",
  },
  {
    title: "Game",
    out: new Date("11 Nov 2024 12:00:00 EST"),
    due: new Date("6 Dec 2024 23:00:00 EST"),
    late: new Date("7 Dec 2024 23:00:00 EST"),
    link: "",
    source: "",
    gearup: "",
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
    var cellLink = document.createElement("a");
    cellLink.setAttribute("href", row.link);
    cellLink.innerHTML = row.title;
    cellTitle.appendChild(cellLink);
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
    var cellLink = document.createElement("a");
    cellLink.setAttribute("href", row.link);
    cellLink.innerHTML = row.title;
    cellTitle.appendChild(cellLink);
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
    var cellLink = document.createElement("a");
    cellLink.setAttribute("href", row.link);
    cellLink.innerHTML = row.title;
    cellTitle.appendChild(cellLink);
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
};
