const answer = document.querySelectorAll("form input");
const formSection = document.querySelector("section");
const newInput = document.createElement("input");
const newLabel = document.createElement("label");
const newArticle = document.createElement("article");
const newParagraph = document.createElement("p");
const submitButton = document.getElementById("submitButton");
const addPopUpMessage = document
  .getElementById("formMain")
  .appendChild(newArticle.cloneNode(true));

addPopUpMessage.setAttribute("id", "submit-form");

if (
  window.getComputedStyle(formSection).getPropertyValue("display") === "flex"
) {
  submitButton.setAttribute("type", "button");
  submitButton.setAttribute("class", "formButton");
  submitButton.setAttribute("value", "Submit");
} else {
  console.log("No CSS");
}

submitButton.addEventListener("click", addPopUp);

checkInput();

changeColor("teacher");
changeDateColor("week-date");

document.querySelectorAll(".visibleWithoutJs").forEach((d) => {
  if (
    window.getComputedStyle(formSection).getPropertyValue("display") === "flex"
  ) {
    d.style.display = "none";
  }
});

const checkIfRadioFilled = (category, categoryName) => {
  let valid = false;
  for (let i of category) {
    if (i.checked === false) {
      document.getElementById(categoryName).style.color = "#AD0000";
    } else {
      document.getElementById(categoryName).style.color = "black";
      valid = true;
      break;
    }
  }
  return valid;
};

const checkIfDateFilled = () => {
  let valid = false;
  if (
    document.formWithJs.start.value === "" ||
    document.formWithJs.end.value === ""
  ) {
    document.getElementById("week-date").style.color = "#AD0000";
  } else {
    document.getElementById("week-date").style.color = "black";
    valid = true;
  }
  return valid;
};

const checkIfAllFilled = () => {
  return (
    checkIfRadioFilled(document.formWithJs.teacher, "teacher") &&
    checkIfDateFilled()
  );
};

function changeColor(element) {
  document
    .querySelectorAll(`.${element}`)
    .forEach((e) =>
      e.addEventListener(
        "change",
        () => (document.getElementById(`${element}`).style.color = "black")
      )
    );
}

function changeDateColor(element) {
  document
    .querySelector(`.${element}`)
    .addEventListener(
      "change",
      () => (document.getElementById(`${element}`).style.color = "black")
    );
}

function checkInput() {
  newInput.setAttribute("type", "range");

  if (newInput.type === "range") {
    if (
      window.getComputedStyle(formSection).getPropertyValue("display") ===
      "flex"
    ) {
      addRateInput("general-wrapper", "generalRate", "generalLabel");
      addRateInput("difficulty-wrapper", "difficulty", "difficultyLabel");
      addRateInput("quality-wrapper", "quality", "qualityLabel");
    }
  } else {
    document.querySelectorAll(".visibleWithoutJs").forEach((d) => {
      d.style.display = "initial";
    });
  }
}

function addRateInput(id, name, labelId) {
  const addInput = document
    .getElementById(id)
    .appendChild(newInput.cloneNode(true));
  const addLabel = document
    .getElementById(id)
    .appendChild(newLabel.cloneNode(true));

  addInput.setAttribute("type", "range");
  addInput.setAttribute("id", name);
  addInput.setAttribute("class", name);
  addInput.setAttribute("name", name);
  addInput.setAttribute("min", "1");
  addInput.setAttribute("max", "10");
  addInput.setAttribute("value", "6");

  addLabel.setAttribute("id", labelId);
  addLabel.setAttribute("for", name);
  addLabel.innerHTML = "6";

  changeLabelValue(addInput, addLabel);
}

function addSubmitInput(id) {
  const addInput = document
    .getElementById(id)
    .appendChild(newInput.cloneNode(true));

  addInput.setAttribute("type", "button");
  addInput.setAttribute("id", "submitJs");
  addInput.setAttribute("class", "formButton");
  addInput.setAttribute("value", "Submit");
}

function changeLabelValue(input, label) {
  input.addEventListener("change", (d) => {
    label.innerHTML = d.target.value;
  });
}

function addPopUp() {
  setTimeout(() => {
    if (checkIfAllFilled() === true) {
      addPopUpMessage.appendChild(newParagraph.cloneNode(true)).textContent =
        "De enquete is verstuurd!";
      document.getElementById("submit-form").style.display = "initial";
      setTimeout(() => document.formWithJs.submit(), 1000);
    } else {
      checkIfRadioFilled(document.formWithJs.teacher, "teacher");
      checkIfDateFilled();
    }
  }, 500);
}
