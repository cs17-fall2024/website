// formatting for dates
const date_formatting = {
  weekday: "short",
  month: "short",
  day: "numeric",
  hour: "2-digit",
  hour12: true,
  minute: "2-digit",
};
const date_formatting_2 = {
  weekday: "short",
  month: "short",
  day: "numeric",
};

const labs = [
  {
    title: "Lab 1: Setup",
    out: new Date("8 Sep 2024 14:00:00 EDT"),
    due: new Date("15 Sep 2024 13:59:00 EDT"),
    link: "https://drive.google.com/file/d/1O49c2261yas4Wl6757DRd3pZGPCemoff/view?usp=sharing",
    slide: "https://docs.google.com/presentation/d/1AYjTXpnpxLMgm5M2v_n9m9gcoL1er3BSJ2vqsD6xJs4/edit?usp=sharing",
    source: "",
  },
  {
    /* update handout */
    title: "Lab 2: Racket",
    out: new Date("15 Sep 2024 14:00:00 EDT"),
    due: new Date("22 Sep 2024 13:59:00 EDT"),
    link: "https://drive.google.com/file/d/1C3JYXqJKsrPUgNL_U4A96yg4wW14Gp_j/view?usp=sharing",
    slide: "https://docs.google.com/presentation/d/1PvHhnPJ6wuh9sRMMF4LteLu52txprRd3PNRYllJwOLU/edit?usp=sharing",
    source: "https://drive.google.com/drive/folders/1mvgO0FWVQb0xWKfA61Uei47HYOAfW57e?usp=drive_link",
  },
  {
    /* update handout */
    title: "Lab 3: Recursion",
    out: new Date("22 Sep 2024 14:00:00 EDT"),
    due: new Date("29 Sep 2024 13:59:00 EDT"),
    link: "https://drive.google.com/file/d/1FLLCAH1HheX538saCjNar9mM9g1wvSI1/view?usp=sharing",
    slide: "https://docs.google.com/presentation/d/13hxpabHGjCgPNYk4z4jDYDH-qu5MzPIFYmjgGQqx8C4/edit?usp=sharing",
    source: "",  
  },
  {
    /* update handout */
    title: "Lab 4: More Recursion",
    out: new Date("29 Sep 2024 14:00:00 EDT"),
    due: new Date("6 Oct 2024 13:59:00 EDT"),
    link: "https://drive.google.com/file/d/1Wd5-MmbV_29kDr_-uQ_kV9Rx71rsG2Aq/view?usp=sharing",
    slide: "https://docs.google.com/presentation/d/1qSH24E_MZbH7fQXIw67IhOy3GC0nwg6YS7O8iQON_3I/edit?usp=sharing",
    source: "",
  },
  {
    /* update handout */
    title: "Lab 5: Search",
    out: new Date("6 Oct 2024 14:00:00 EDT"),
    due: new Date("13 Oct 2024 13:59:00 EDT"),
    link: "https://drive.google.com/file/d/1tYsGp5kzUkyzFoTB-RVKnyzDapoGscyd/view?usp=sharing",
    slide: "https://docs.google.com/presentation/d/1JeTyuI1qTCp6t57dYNSTfUfte9OZ14q_azuJWglHgiE/edit?usp=sharing",
    source: "",
  },
  {
    /* update handout */
    title: "Lab 6: Reason",
    out: new Date("13 Oct 2024 14:00:00 EDT"),
    due: new Date("20 Oct 2024 13:59:00 EDT"),
    link: "https://drive.google.com/file/d/1Gln-8kNeSkdfk-q7k33Q9KKmcmFpMhrO/view?usp=sharing",
    slide: "https://docs.google.com/presentation/d/1PF59SUuaCWwoAWbk8ZpDJ48iOfnG-NE9T1IB422ezto/edit?usp=sharing",
    source: "",
  },
  {
    /* update handout */
    title: "Lab 7: Debugging",
    out: new Date("20 Oct 2024 14:00:00 EDT"),
    due: new Date("27 Oct 2024 13:59:00 EDT"),
    link: "https://drive.google.com/file/d/1hJwASkGSgmqdjGHbv8Cab7FAYdUHHatR/view?usp=sharing",
    slide: "https://docs.google.com/presentation/d/1nQdYC5LLf6EHlXQ2RixCdXsm_KSFVdg9v-ftqNk1KkY/edit?usp=sharing",
    source: "https://drive.google.com/drive/folders/1X4v65PvgKHAu599KR5nDEYIOf9WCr9XD?usp=sharing",
  },
  {
    /* update handout */
    title: "Lab 8: Environments",
    out: new Date("27 Oct 2024 14:00:00 EDT"),
    due: new Date("3 Nov 2024 13:59:00 EDT"),
    link: "https://drive.google.com/file/d/1jPiOU4w8RE31LuvnHAsxMT5RL1UP7nfS/view?usp=sharing",
    slide: "https://docs.google.com/presentation/d/1aQFP9sswfUBWup903ivFI23C0ZcbQvzzlyelaAacGzk/edit?usp=sharing",
    source: "https://drive.google.com/drive/folders/1QOYlPq7hswLHFp40viFwYO34rcWiV9e9?usp=sharing",
  },
  {
    /* update handout */
    title: "Lab 9: ADTs",
    out: new Date("3 Nov 2024 14:00:00 EST"),
    due: new Date("10 Nov 2024 13:59:00 EST"),
    link: "https://drive.google.com/file/d/1Cx_4qEQ3fkEHTvhVdSFH-bdbqsOO-IXX/view?usp=sharing",
    slide: "https://docs.google.com/presentation/d/11CfWKuklG94myIP_UToLyU3gGLq7kBJzaxJZLaiqtoI/edit?usp=sharing",
    source: "https://drive.google.com/drive/folders/1ZLU9dVAhPHbhr2wJJ9c7NjvayiEP6MYA?usp=sharing",
  },
  {
    /* update handout */
    title: "Lab 10: Game",
    out: new Date("10 Nov 2024 14:00:00 EST"),
    due: new Date("17 Nov 2024 13:59:00 EST"),
    link: "https://drive.google.com/file/d/1Xj6c8hbZ8ktkklnDtSZa7-WyxJKT2cmB/view?usp=sharing",
    slide: "https://docs.google.com/presentation/d/1bUjEGXMFmDe0POW0QXFiwkB-MhGbsue7gcJIbtC6bl8/edit?usp=sharing",
    source: "https://drive.google.com/drive/folders/14O8R6BK7XIJdQOc6bNE971mWf8k14zDv?usp=sharing",
  },
  {
    /* update handout */
    title: "Lab 11: Sort",
    out: new Date("17 Nov 2024 14:00:00 EST"),
    due: new Date("24 Nov 2024 13:59:00 EST"),
    link: "https://drive.google.com/file/d/1nOZXFV8i5_gE9hp3XjFpzhK3NSYPALZN/view?usp=sharing",
    slide: "https://docs.google.com/presentation/d/1CUatWSIatofRDjFeZWblXxUp4m4mfaGrPqNx5tWUDcI/edit?usp=sharing",
    source: "https://drive.google.com/drive/folders/1T1im4_a68wu3eggTbBGG1RFAAO93kS1_?usp=sharing",
  },

];

const homeworks = [
  {
    title: "HW 1: Warmup",
    out: new Date("5 Sep 2024 12:00:00 EDT"),
    due: new Date("11 Sep 2024 22:59:00 EDT"),
    late: new Date("12 Sep 2024 22:59:00 EDT"),
    link: "https://drive.google.com/file/d/1E9Huu0arrtsVxmjcJoqRmKTDHMhtvmqJ/view?usp=drive_link",
    source: "",
  },
  {
    title: "HW 2: Procedures",
    out: new Date("12 Sep 2024 12:00:00 EDT"),
    due: new Date("18 Sep 2024 22:59:00"),
    late: new Date("19 Sep 2024 22:59:00"),
    link: "https://drive.google.com/file/d/1yKj-a4fYahuC_5RoVds9quT8HkNUu9-Z/view?usp=drive_link",
    source: "",
  },
  {
    title: "HW 3: Recursion",
    out: new Date("19 Sep 2024 12:00:00 EDT"),
    due: new Date("25 Sep 2024 22:59:00 EDT"),
    late: new Date("26 Sep 2024 22:59:00 EDT"),
    link: "https://drive.google.com/file/d/1_m5DhZ3WoMLV2XpFztavElKtBwgZMxVf/view?usp=drive_link",
    source: "",
  },
  {
    title: "HW 4: More Recursion",
    out: new Date("26 Sep 2024 00:00:00 EDT"),
    due: new Date("2 Oct 2024 22:59:00 EDT"),
    late: new Date("3 Oct 2024 22:59:00 EDT"),
    link: "https://drive.google.com/file/d/1zbE4Tf4jCslb2WU_wr3sTKPTEJiGQ3yK/view?usp=drive_link",
    source: "",
  },
  {
    title: "HW 5: More HOPs and Subsets",
    out: new Date("3 Oct 2024 12:00:00 EDT"),
    due: new Date("9 Oct 2024 22:59:00 EDT"),
    late: new Date("10 Oct 2024 22:59:00 EDT"),
    link: "https://drive.google.com/file/d/1YHA9ERDSEbzFK3SduthJWUjrUKU1FlD_/view?usp=drive_link",
    source: "https://drive.google.com/file/d/19F3MakrrLCwDlemxbwfgSaNWdR84H8NY/view?usp=drive_link",
  },
  {
    title: "HW 6: K-Subsets and Matrices",
    out: new Date("10 Oct 2024 12:00:00 EDT"),
    due: new Date("16 Oct 2024 22:59:00 EDT"),
    late: new Date("17 Oct 2024 22:59:00 EDT"),
    link: "https://drive.google.com/file/d/1dYao2nYQCSlyOytJX0VfqfHeGdQribep/view?usp=drive_link",
    source: "https://drive.google.com/drive/folders/1ssPcNq9ZTTsjN0VjPFrDZHAbPJPtogV4?usp=drive_link",
    
  },
  {
    title: "HW 7: Rackettecita",
    out: new Date("17 Oct 2024 12:00:00 EDT"),
    due: new Date("24 Oct 2024 15:59:00 EDT"),
    late: new Date("25 Oct 2024 15:59:00 EDT"),
    link: "https://drive.google.com/file/d/1ykiWj_pelxrC8wliq8WM5BN50cufheEZ/view?usp=sharing",
    source: "https://drive.google.com/drive/folders/1uoyR8ujGI29pSLMrb8HI74QYpC96xArP?usp=sharing",
  },
  {
    title: "HW 8: ADTs",
    out: new Date("24 Oct 2024 12:00:00 EDT"),
    due: new Date("6 Nov 2024 22:59:00 EST"),
    late: new Date("7 Nov 2024 22:59:00 EST"),
    link: "https://drive.google.com/file/d/1b3HmAOTfkmpmiE8GhJFpXlL5zhfypVKR/view?usp=drive_link",
    source: "https://drive.google.com/drive/folders/1gRYcfhneEFK7udRhl26LUuNIEZNGafN5?usp=drive_link",
  },
  {
    title: "HW 9: Trees, Trees, ...and Lists",
    out: new Date("7 Nov 2024 12:00:00 EST"),
    due: new Date("13 Nov 2024 22:59:00 EST"),
    late: new Date("14 Nov 2024 22:59:00 EST"),
    link: "https://drive.google.com/file/d/1Z-yP90AdyViPjJg5YX6KuwzVyxPbtyt2/view?usp=drive_link",
    source: "https://drive.google.com/drive/folders/14ZJHxy8a7n9YaoglKLWiQFrUABYhkbzb?usp=drive_link",
  },
  {
    title: "HW 10: Game Tools",
    out: new Date("14 Nov 2024 12:00:00 EST"),
    due: new Date("20 Nov 2024 22:59:00 EST"),
    late: new Date("21 Nov 2024 22:59:00 EST"),
    link: "https://drive.google.com/file/d/19mMBiMBkO3wTc-gtJxs1BaQeHeNBbekM/view?usp=sharing",
    source: "https://drive.google.com/drive/folders/1OpzAoUnToY5XCT3vwJMRd3p0sEIMjoM4?usp=sharing",
  },
];

const projects = [
  {
    title: "Bignum",
    out: new Date("23 Sep 2024 00:00:00 EDT"),
    due: new Date("4 Oct 2024 22:59:00 EDT"),
    late: new Date("5 Oct 2024 22:59:00 EDT"),
    link: "https://drive.google.com/file/d/12yDJvOu_S-Yu9JDyEOyYpkwlYqD8IHin/view?usp=sharing",
    source: "https://drive.google.com/drive/folders/1UFut6rafCjvrMuIACXsezfQVWSJOceLS?usp=sharing",
    gearup: "https://drive.google.com/file/d/1QOVSWmAJWOci5_mV1504aQcKzEYFLfOw/view?usp=sharing",
  },
  {
    title: "Rackette",
    out: new Date("24 Oct 2024 16:00:00 EDT"),
    due: new Date("8 Nov 2024 23:59:00 EDT"),
    late: new Date("9 Nov 2024 23:59:00 EDT"),
    link: "https://drive.google.com/file/d/1cqiyI8aqgzoYYCKepRsZ_SXvfES_XDSK/view?usp=sharing",
    source: "https://drive.google.com/drive/folders/16VJIA2RUpFw2qpiPJwUtTKVfA-Fzq2jZ?usp=sharing",
    gearup: "https://drive.google.com/drive/folders/16VJIA2RUpFw2qpiPJwUtTKVfA-Fzq2jZ?usp=sharing",
  },
  {
    title: "Game",
    out: new Date("11 Nov 2024 9:00:00 EDT"),
    due: new Date("6 Dec 2024 16:00:00 EDT"),
    late: new Date("7 Dec 2024 16:00:00 EDT"),
    link: "https://drive.google.com/file/d/1gFN0hhmCnOgs_G1Pr1R6Z6cDcJwkU68U/view?usp=sharing",
    source: "https://drive.google.com/drive/folders/11K8334kKw2vKovmcrGybRCoRQxq2B3Pe?usp=sharing",
    gearup: "https://drive.google.com/drive/folders/11K8334kKw2vKovmcrGybRCoRQxq2B3Pe?usp=sharing",
  },
];

// get the current and past assignments and update the html
const getAssignments = () => {
  d = new Date();
  console.log(d)

  // get the current and past assignments
  const currLabs = labs.filter((lab) => d.valueOf() >= lab.out.valueOf());
  const currHws = homeworks.filter((hw) => d.valueOf() >= hw.out.valueOf());
  const currProjs = projects.filter((proj) => d.valueOf() >= proj.out.valueOf());
  // update current assignment cards!
  /*  
    labs contain:
      link to handout, link to slideshow, source code
  */
  const labCard = document.getElementById("lab-assignment-card");
  if(currLabs.length == 0){
    labCard.style.display = "none";
  } else {
    let currLab = currLabs[currLabs.length - 1];
    labCardTitle = document.getElementById("lab-assignment-card-title");
    labCardTitle.setAttribute("href", currLab.link);
    labCardTitle.innerHTML = currLab.title;
    document.getElementById("lab-assignment-card-title").innerHTML =
      currLab.title;
    document.getElementById("lab-assignment-card-out").innerHTML =
      currLab.out.toLocaleString("en-US", date_formatting);
    document.getElementById("lab-assignment-card-due").innerHTML =
     currLab.due.toLocaleString("en-US", date_formatting);
    
     /* add slide and source code link if present */
    if(currLab.slide == null || currLab.slide == ""){
      document.getElementById("slide").style.display = "none";
    }else{
      document.getElementById("slide").setAttribute("href", currLab.slide);
    }
    if(currLab.source == null || currLab.source == ""){
      document.getElementById("setup").style.display = "none";
    }else{
      document.getElementById("setup").setAttribute("href", currLab.source);
    }
  }

  // update hw cards
  const hwCard = document.getElementById("hw-assignment-card");
  if(currHws.length == 0){
    hwCard.style.display = "none";
  } else {
    let currHw = currHws[currHws.length - 1];
    hwCardTitle = document.getElementById("hw-assignment-card-title");
    hwCardTitle.setAttribute("href", currHw.link);
    hwCardTitle.innerHTML = currHw.title;
    document.getElementById("hw-assignment-card-out").innerHTML =
      currHw.out.toLocaleString("en-US", date_formatting);
    document.getElementById("hw-assignment-card-due").innerHTML =
      currHw.due.toLocaleString("en-US", date_formatting);
    
    if(currHw.source == null || currHw.source == ""){
      document.getElementById("hw-setup").style.display = "none";
    }else{
      document.getElementById("hw-setup").setAttribute("href", currHw.source);
    }  
  }
  const projCard = document.getElementById("proj-assignment-card");
  if(currProjs.length == 0){
    projCard.style.display = "none";
  } else {
    currProj = currProjs[currProjs.length - 1];
    projCardTitle = title = document.getElementById("proj-assignment-card-title");
    projCardTitle.setAttribute("href", currProj.link);
    projCardTitle.innerHTML = currProj.title;
    document.getElementById("proj-assignment-card-out").innerHTML =
      currProj.out.toLocaleString("en-US", date_formatting);
    document.getElementById("proj-assignment-card-due").innerHTML =
      currProj.due.toLocaleString("en-US", date_formatting);

    if(currProj.source == null || currProj.source == ""){
      document.getElementById("proj-setup").style.display = "none";
    }else{
      document.getElementById("proj-setup").setAttribute("href", currProj.source);
    }    

    if(currProj.gearup == null || currProj.gearup == ""){
      document.getElementById("gearup").style.display = "none";
    }else{
      document.getElementById("gearup").setAttribute("href", currProj.gearup);
    }
  }

  // update the table HTML
  var hwTable = document.getElementById("homeworks-table");

  var labTable = document.getElementById("labs-table");

  var projTable = document.getElementById("projects-table");

  homeworks.forEach(function (row) {
    var newRow = document.createElement("tr");
    hwTable.appendChild(newRow);

    var cellTitle = document.createElement("td");
    
    if (row.link == "" || row.link == null || row.out.valueOf() > d.valueOf()) {
      cellTitle.textContent = row.title;
      cellTitle.classList.add("no-decoration");
    } else {
      var cellLink = document.createElement("a");
      cellLink.setAttribute("href", row.link);
      cellLink.innerHTML = row.title;
      cellTitle.appendChild(cellLink);
    }
    newRow.appendChild(cellTitle);

    var cellOut = document.createElement("td");
    cellOut.textContent = row.out.toLocaleString("en-US", date_formatting_2);
    newRow.appendChild(cellOut);

    var cellDue = document.createElement("td");
    cellDue.textContent = row.due.toLocaleString("en-US", date_formatting);
    newRow.appendChild(cellDue);

    var cellLate = document.createElement("td");
    cellLate.textContent = row.late.toLocaleString("en-US", date_formatting);
    newRow.appendChild(cellLate);
  });

  labs.forEach(function (row) {
    var newRow = document.createElement("tr");
    labTable.appendChild(newRow);

    var cellTitle = document.createElement("td");
  
    if (row.link == "" || row.link == null || row.out.valueOf() > d.valueOf()) {
      cellTitle.textContent = row.title;
      cellTitle.classList.add("no-decoration");
    } else {
      var cellLink = document.createElement("a");
      cellLink.setAttribute("href", row.link);
      cellLink.innerHTML = row.title;
      cellTitle.appendChild(cellLink);
    }
    newRow.appendChild(cellTitle);

    var cellOut = document.createElement("td");
    cellOut.textContent = row.out.toLocaleString("en-US", date_formatting_2);
    newRow.appendChild(cellOut);

    var slideshows = document.createElement("td");

    if (row.slide == "" || row.slide == null || row.out.valueOf() > d.valueOf()) {
      slideshows.textContent = "";
    } else {
      var cellLink = document.createElement("a");
      cellLink.setAttribute("href", row.slide);
      cellLink.textContent = "Slides";
      slideshows.appendChild(cellLink);
    }
    newRow.appendChild(slideshows);
  });

  projects.forEach(function (row) {
    var newRow = document.createElement("tr");
    projTable.appendChild(newRow);

    var cellTitle = document.createElement("td");
  
    if (row.link == "" || row.link == null || row.out.valueOf() > d.valueOf()) {
      cellTitle.textContent = row.title;
      cellTitle.classList.add("no-decoration");
    } else {
      var cellLink = document.createElement("a");
      cellLink.setAttribute("href", row.link);
      cellLink.innerHTML = row.title;
      cellTitle.appendChild(cellLink);
    }
    newRow.appendChild(cellTitle);

    // add due dates 
    var cellOut = document.createElement("td");
    cellOut.textContent = row.out.toLocaleString("en-US", date_formatting_2);
    newRow.appendChild(cellOut);

    var cellDue = document.createElement("td");
    cellDue.textContent = row.due.toLocaleString("en-US", date_formatting);
    newRow.appendChild(cellDue);

    var cellLate = document.createElement("td");
    cellLate.textContent = row.late.toLocaleString("en-US", date_formatting);
    newRow.appendChild(cellLate);

    var slideshows = document.createElement("td");

    if (row.gearup == "" || row.gearup == null || row.out.valueOf() > d.valueOf()) {
      slideshows.textContent = "";
    } else {
      var cellLink = document.createElement("a");
      cellLink.setAttribute("href", row.gearup);
      cellLink.textContent = "Gearup";
      slideshows.appendChild(cellLink);
    }

    newRow.appendChild(slideshows);
  });

};
