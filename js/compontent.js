//+++++++++++++++++++++
//   彈跳視窗
//+++++++++++++++++++++
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".modal");
  var instances = M.Modal.init(elems, open);
});

//++++++++++++++++++
//  tab切換效果
//++++++++++++++++++
$(document).ready(function () {
  $(".tabs").tabs();
});

//++++++++++++++++++
//  select效果
//++++++++++++++++++
$(document).ready(function () {
  $("select").formSelect();
});

//+++++++++++++++++++++++++
//  accordion手風琴效果
//+++++++++++++++++++++++++

document.addEventListener("DOMContentLoaded", function () {
  let elem = document.querySelectorAll(".collapsible");
  var instance = M.Collapsible.init(elem, {
    accordion: false,
  });
  $(".collapsible-btn").click(function () {
    $(this).find(".vertical").toggleClass("open");
    $(this).find(".horizontal").toggleClass("open");
    //$(this).parent().parent().parent().addClass("is-accordion-active");
  });
});

//++++++++++++++++++
//  星星樣式改變
//++++++++++++++++++
let starBtn = document.querySelectorAll(".o-card__iconBtn");
if (starBtn != null) {
  for (let i = 0; i < starBtn.length; i++) {
    starBtn[i].addEventListener("click", function () {
      if (starBtn[i].classList.contains("o-card__star-active") === true) {
        starBtn[i].classList.remove("o-card__star-active");
        starBtn[i].classList.add("o-card__star-default");
      } else {
        starBtn[i].classList.remove("o-card__star-default");
        starBtn[i].classList.add("o-card__star-active");
      }
    });
  }
}

//++++++++++++++++++
//popover 效果
//++++++++++++++++++
//$(".dropdown-trigger").dropdown();
const pop_modal = document.querySelectorAll(".pop-modal");
const pop_btn = document.querySelectorAll(".pop-btn");
const pop_content = document.querySelectorAll(".pop-content");
const confirm_btn = document.querySelectorAll(".pop-confirm-btn");
const datePicker_btn = document.querySelectorAll(".datePicker-confirm-btn");

for (let a = 0; a < pop_modal.length; a++) {
  pop_btn[a].addEventListener("click", function () {
    let item = pop_content[a].classList.contains("pop-content");
    if (item === true) {
      pop_content[a].classList.toggle("is-pop-show");
      let popBg = document.createElement("div");
      popBg.setAttribute("class", "c-popover__bg");
      document.body.prepend(popBg);
      closePop();
    }
  });
  pop_content[a].addEventListener("click", function () {
    let content = pop_content[a].childNodes;
    for (let c = 0; c < content.length; c++) {
      if (content[c].tagName == "LI") {
        pop_content[a].classList.remove("is-pop-show");
        //移除背景遮罩
        let popBg = document.querySelector(".c-popover__bg");
        if (popBg != null) {
          document.body.removeChild(popBg);
        }
      }
    }
  });
  if (confirm_btn[a] != null) {
    confirm_btn[a].addEventListener("click", function () {
      let parentlist = confirm_btn[a].parentNode.parentNode;
      parentlist.classList.remove("is-pop-show");
    });
  }
  //點擊背景 關閉popmodal
  function closePop() {
    const popBg = document.querySelector(".c-popover__bg");
    popBg.addEventListener("click", function () {
      pop_content[a].classList.remove("is-pop-show");
      document.body.removeChild(popBg);
    });
  }
}

//++++++++++++++++++
//accordion 效果
//++++++++++++++++++
//點擊 accordion-header 底圖顏色變色
const collapsible = document.querySelectorAll(".collapsible");
collapsible.forEach(function (item) {
  item.addEventListener("click", function () {
    let a = item.classList.contains("is-accordion-active");
    if (a === false) {
      item.classList.add("is-accordion-active");
    } else {
      item.classList.remove("is-accordion-active");
    }
  });
});

//++++++++++++++++++
//tooltip 效果
//++++++++++++++++++

$(document).ready(function () {
  $(".tooltipped").tooltip();
});

//++++++++++++++++++
//card alertPlan 改變卡片顏色 效果
//++++++++++++++++++

const alertPlanInput = document.querySelectorAll(".js-inputStyle");

alertPlanInput.forEach((item) => {
  item.addEventListener("click", inputChangeCardColor);

  function inputChangeCardColor() {
    item.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.classList.toggle(
      "is-changeBackground"
    );
  }
});

//++++++++++++++++++
//card alertPlan 改變卡片顏色 效果
//++++++++++++++++++

const percentCheckInput = document.querySelectorAll(
  ".js-percentCheck-inputStyle"
);

percentCheckInput.forEach((item) => {
  item.addEventListener("click", inputChangeCardColor);

  function inputChangeCardColor() {
    item.parentNode.parentNode.parentNode.parentNode.parentNode.classList.toggle(
      "is-changeBackground"
    );
  }
});
//+++++++++++++++++++++++++++++++
//switch-workTime 改變卡片顏色 效果
//+++++++++++++++++++++++++++++++
const switchBtn = document.querySelectorAll(".js-switch-workTime");
const switchFooter = document.querySelectorAll(".l-main-content__switchFooter");

const switchText = document.querySelectorAll(".switch-text");
for (let s = 0; s < switchBtn.length; s++) {
  switchBtn[s].addEventListener("click", function () {
    let switchActive = switchFooter[s].classList.contains("is-switch-active");
    if (switchActive === false) {
      switchFooter[s].classList.add("is-switch-active");
      switchFooter[s].innerHTML = `成員可填工時`;
      switchText[s].innerHTML = `開啟`;
    } else {
      switchFooter[s].classList.remove("is-switch-active");
      switchFooter[s].innerHTML = `成員不可填工時`;
      switchText[s].innerHTML = `關閉`;
    }
  });
}
// switchBtn.addEventListener("click", function () {
//   let active = switchFooter.classList.contains("is-switch-active");
//   let switchText = document.querySelector(".switch-text");
//   if (active === false) {
//     switchFooter.classList.add("is-switch-active");
//     switchFooter.innerHTML = `成員可填工時`;
//     switchText.innerHTML = `開啟`;
//   } else {
//     switchFooter.classList.remove("is-switch-active");
//     switchFooter.innerHTML = `成員不可填工時`;
//     switchText.innerHTML = `關閉`;
//   }
// });
