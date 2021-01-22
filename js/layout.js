//++++++++++++++++++
//  側邊收闔效果
//++++++++++++++++++
const sidebar = document.querySelector(".l-container");
const nametag = document.querySelector(".chinese__name");
const l_Main_Content = document.querySelectorAll(".l-main-content");
const name = [];
const menu_btn_open = document.querySelector(".menu-btn__open");
const menu_btn = document.querySelector(".menu-btn");
//open menu
if (menu_btn_open != null) {
  menu_btn_open.addEventListener("click", opemmenu);
  function opemmenu() {
    sidebar.classList.add("sidebar__is-open");
    menu_btn.style.display = "block";
    menu_btn_open.style.display = "none";
    l_Main_Content.forEach((item) => {
      item.style.width = "calc(100vw - 267px)";
    });
    // search bar 寬度更動
    let searchWidth = document.querySelectorAll(".c-search");
    if (searchWidth != null) {
      searchWidth.forEach((item) => {
        item.style.width = "calc(100vw - 267px)";
      });
    }

    fullname();
  }
}
//close menu
if (menu_btn != null) {
  function closemenu() {
    sidebar.classList.remove("sidebar__is-open");
    menu_btn.style.display = "none";
    menu_btn_open.style.display = "block";
    l_Main_Content.forEach((item) => {
      item.style.width = "calc(100vw - 142px)";
    });
    // search bar 寬度更動
    let searchWidth = document.querySelectorAll(".c-search");
    if (searchWidth != null) {
      searchWidth.forEach((item) => {
        item.style.width = "calc(100vw - 142px)";
      });
    }
    firstname();
  }
  menu_btn.addEventListener("click", closemenu);
}
//get  username
if (nametag != null) {
  getname();
}
function getname() {
  let word = nametag.innerHTML.split("");
  name.push(word);
}

//get  firstname
function firstname() {
  nametag.innerHTML = name[0][0];
}
//get  fullname
function fullname() {
  nametag.innerHTML = name[0].join("");
}

//+++++++++++++++++++++++
//  點擊選單項目更改樣式
//+++++++++++++++++++++++

const menuItem = document.querySelectorAll(".c-sidebar-content__list__item");

for (let a = 0; a < menuItem.length; a++) {
  menuItem[a].addEventListener("click", changeItemStyle);
  function changeItemStyle() {
    let clickItem = document.querySelector(".menuItem-is-active");
    clickItem.classList.remove("menuItem-is-active");
    let menuParent = document.querySelector(".menuParent-is-active");
    menuParent.classList.remove("menuParent-is-active");
    let icon_active = document.querySelector(".icon-is-active");
    icon_active.classList.remove("icon-is-active");

    menuItem[a].classList.add("menuItem-is-active");
    let menuParentList = menuItem[a].parentNode.parentNode.childNodes;
    // 增加menutitle的border 樣式
    menuParentList.forEach(function (item) {
      if (item.className === "c-sidebar-content__list__title") {
        item.classList.add("menuParent-is-active");
        let list = item.childNodes;
        list.forEach(function (item) {
          if (item.className === "list__title__icon") {
            item.classList.add("icon-is-active");
          }
        });
      }
    });
  }
}

//+++++++++++++++++++++++
//  subMenu 萬年曆
//+++++++++++++++++++++++

var Cal = function (divId) {
  //Store div id
  this.divId = divId;
  // Days of week, starting on Sunday
  this.DaysOfWeek = ["日", "一", "二", "三", "四", "五", "六"];
  // Months, stating on January
  this.Months = [
    "一月",
    "二月",
    "三月",
    "四月",
    "五月",
    "六月",
    "七月",
    "八月",
    "九月",
    "十月",
    "十一月",
    "十二月",
  ];

  // Set the current month, year
  var d = new Date();
  this.currMonth = d.getMonth();
  this.currYear = d.getFullYear();
  this.currDay = d.getDate();
};

// Goes to next month
Cal.prototype.nextMonth = function () {
  if (this.currMonth == 11) {
    this.currMonth = 0;
    this.currYear = this.currYear + 1;
  } else {
    this.currMonth = this.currMonth + 1;
  }
  this.showcurr();
};

// Goes to previous month
Cal.prototype.previousMonth = function () {
  if (this.currMonth == 0) {
    this.currMonth = 11;
    this.currYear = this.currYear - 1;
  } else {
    this.currMonth = this.currMonth - 1;
  }
  this.showcurr();
};

// Show current month
Cal.prototype.showcurr = function () {
  this.showMonth(this.currYear, this.currMonth);
};

// Show month (year, month)
Cal.prototype.showMonth = function (y, m) {
  var d = new Date(),
    // First day of the week in the selected month
    firstDayOfMonth = new Date(y, m, 1).getDay(),
    // Last day of the selected month
    lastDateOfMonth = new Date(y, m + 1, 0).getDate(),
    // Last day of the previous month
    lastDayOfLastMonth =
      m == 0 ? new Date(y - 1, 11, 0).getDate() : new Date(y, m, 0).getDate();
  var html = "<table >";

  // Write selected month and year
  let title = document.querySelector(".calendar_month");
  if (title != null) {
    title.innerHTML = y + " " + this.Months[m];
  }

  // Write the header of the days of the week
  html += '<tr class="days">';
  for (var i = 0; i < this.DaysOfWeek.length; i++) {
    html += "<td>" + this.DaysOfWeek[i] + "</td>";
  }
  html += "</tr>";

  // Write the days
  var i = 1;
  do {
    var dow = new Date(y, m, i).getDay();

    // If Sunday, start new row
    if (dow == 0) {
      html += "<tr class='week'>";
    }
    // If not Sunday but first day of the month
    // it will write the last days from the previous month
    else if (i == 1) {
      html += "<tr class='week'>";
      var k = lastDayOfLastMonth - firstDayOfMonth + 1;
      for (var j = 0; j < firstDayOfMonth; j++) {
        html += '<td class="not-current">' + k + "</td>";
        k++;
      }
    }

    // Write the current day in the loop
    var chk = new Date();
    var chkY = chk.getFullYear();
    var chkM = chk.getMonth();
    if (chkY == this.currYear && chkM == this.currMonth && i == this.currDay) {
      html += '<td class="today" >' + i + "</td>";
    } else {
      html += '<td class="normal">' + i + "</td>";
    }
    // If Saturday, closes the row
    if (dow == 6) {
      html += "</tr>";
    }
    // If not Saturday, but last day of the selected month
    // it will write the next few days from the next month
    else if (i == lastDateOfMonth) {
      var k = 1;
      for (dow; dow < 6; dow++) {
        html += '<td class="not-current">' + k + "</td>";
        k++;
      }
    }

    i++;
  } while (i <= lastDateOfMonth);

  // Closes table
  html += "</table>";

  // Write HTML to the div
  let divId = document.getElementById(this.divId);
  if (divId != null) {
    divId.innerHTML = html;
  }

  //document.getElementsByClassName(this.divId)[0].innerHTML = html;
  let tbody = document.querySelector("tbody");
  if (tbody != null) {
    tbody.setAttribute("id", "clickDate");
  }
};

// On Load of the window
window.onload = function () {
  // Start calendar
  var c = new Cal("divCal");
  c.showcurr();

  // Bind next and previous button clicks
  let next = getId("btnNext");
  if (next != null) {
    next.onclick = function () {
      c.nextMonth();
    };
  }

  let prev = getId("btnPrev");
  if (prev != null) {
    prev.onclick = function () {
      c.previousMonth();
    };
  }

  thisweek();
};

// Get element by id
function getId(id) {
  return document.getElementById(id);
}

//today tag add thisweek
function thisweek() {
  let week = document.querySelectorAll(".week");
  for (let i = 0; i < week.length; i++) {
    let d = week[i].childNodes;
    for (let a = 0; a < d.length; a++) {
      if (d[a].className == "today") {
        week[i].classList.add("thisweek");
      }
    }
  }
}

//+++++++++++++++++++++++
//  subMenu 收闔
//+++++++++++++++++++++++
const submenuBtn = document.querySelector(".c-submenu-btn");
if (submenuBtn != null) {
  submenuBtn.addEventListener("click", function () {
    let container = document.querySelector(".l-container");
    container.classList.toggle("submenu__open");
  });
}

//++++++++++++++++++
//  工時填寫 切換效果
//++++++++++++++++++
let tag_item = document.querySelectorAll(".c-writeHours-title__item");
let tag_content = document.querySelectorAll(".c-writeHours-content__list");
let clickTag;
if (tag_item != null && tag_content != null) {
  for (let i = 0; i < tag_item.length; i++) {
    tag_item[i].addEventListener("click", function () {
      clickTag = tag_item[i].getAttribute("data-num");
      compare();
    });
  }
  function compare() {
    for (let a = 0; a < tag_content.length; a++) {
      let clickContent = tag_content[a].getAttribute("data-content");
      if (clickContent == clickTag) {
        tag_item[a].classList.add("is-active");
        tag_content[a].classList.add("is-active");
      } else {
        tag_item[a].classList.remove("is-active");
        tag_content[a].classList.remove("is-active");
      }
    }
  }
}

const list = document.querySelector(".Draglist");
if (list != null) {
  dragula([
    document.querySelector(".Draglist"),
    document.querySelector(".Draglist_sec"),
  ]);
}
