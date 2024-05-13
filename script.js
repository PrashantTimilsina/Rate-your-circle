"use strict";
const button = document.querySelectorAll(".box1");
const cancel = document.querySelector(".cancel");
const submit = document.querySelector(".submit");
const final = document.querySelector(".final");
button.forEach((box) => {
  box.addEventListener("click", function () {
    alert("Click on submit button for submission");
    submit.addEventListener("click", function () {
      if (box.textContent < 5) {
        final.style.opacity = "1";
        final.textContent =
          "Your friend circle rating is" +
          " " +
          box.textContent +
          " " +
          "(Hope you make better friends in future😊🙌)";
      } else {
        final.style.opacity = "1";
        final.textContent =
          "Your friend circle rating is" +
          " " +
          box.textContent +
          " " +
          "(Good friend circle🤩)";
      }
    });
  });
});
cancel.addEventListener("click", function () {
  final.style.opacity = "0";
});
