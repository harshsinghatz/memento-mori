"using strict";

//Selecting DOM elements
const dateOfBirth = document.querySelector("#dob");
const noOfYears = document.querySelector(".selected-years");
const resetBtn = document.querySelector(".reset");

const displayBlock = document.querySelector(".total-years");
const about = document.querySelector(".about");

const calcBtn = document.querySelector(".btn");
//Functions for Calculations
const getNoOfWeeks = function (dateOfBirth) {
  const today = new Date().toISOString().slice(0, 10);

  const startDate = dateOfBirth.slice(0, 10);
  const endDate = today;

  const diffInMs = new Date(endDate) - new Date(startDate);
  const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
  return Math.round(diffInDays / 7);
};
const getWeeksFromYears = function (years) {
  return Math.round((years * 365) / 7);
};

//Fucntions for Displaying the Dots
const displayDots = function (noOfWeeks, numOfInpWeeks) {
  if (!Number.isNaN(noOfWeeks)) {
    displayBlock.innerHTML = "";
    // about.classList.add("hidden");
    about.style.display = "none";
    const noOfBoxes = 260;
    const noOfBlocks = numOfInpWeeks / noOfBoxes;
    let currNoOfWeeks = 1;
    for (let block = 0; block < noOfBlocks; block++) {
      displayBlock.insertAdjacentHTML(
        "beforeend",
        "<div class='box-grid'></div>"
      );
      const grid = displayBlock.lastChild;
      for (let i = 1; i <= noOfBoxes; i++) {
        grid.insertAdjacentHTML(
          "beforeend",
          `<div class="week ${
            currNoOfWeeks <= noOfWeeks ? "active" : ""
          }"></div>`
        );
        currNoOfWeeks++;
      }
    }
  }
};
const reset = function () {
  displayBlock.innerHTML = "";
  // about.classList.remove("hidden");
  about.style.display = "flex";
  dateOfBirth.value = "";
};
//Event Handlers

calcBtn.addEventListener("click", (e) => {
  const weeks = getNoOfWeeks(dateOfBirth.value);
  const userInputWeeks = getWeeksFromYears(Number(noOfYears.value));
  displayDots(weeks, userInputWeeks);
});
resetBtn.addEventListener("click", () => {
  reset();
});
