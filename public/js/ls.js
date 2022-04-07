const form = document.querySelector("form");
const range = document.querySelectorAll(".input-wrapper");
const uri = document.URL;
const lastPart = uri.split("t/")[1];

const answer = document.querySelectorAll("form input");
const textAnswer = document.querySelectorAll("textarea");

export function localStorageCheck() {
  const test = "test";
  try {
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch (e) {
    return false;
  }
}

function answers() {
  answer.forEach((i) => {
    const savedAnswer = localStorage.getItem(
      `${lastPart}-${form.id}-${i.name}`
    );

    if (savedAnswer) {
      if (i.type === "radio" && i.value === savedAnswer) {
        i.checked = true;
      } else if (i.type !== "radio") {
        if (i.name === "generalRate") {
          document.getElementById("generalLabel").innerHTML = savedAnswer;
        } else if (i.name === "difficulty") {
          document.getElementById("difficultyLabel").innerHTML = savedAnswer;
        } else if (i.name === "quality") {
          document.getElementById("qualityLabel").innerHTML = savedAnswer;
        }

        i.value = savedAnswer;
      }
    }
  });

  textAnswer.forEach((i) => {
    const savedAnswer = localStorage.getItem(
      `${lastPart}-${form.id}-${i.name}`
    );

    i.value = savedAnswer;
  });
}
if (localStorageCheck() === true) {
  range.forEach((input) => {
    input.addEventListener("change", function (element) {
      localStorage.setItem(
        `${lastPart}-${form.id}-${element.target.name}`,
        element.target.value
      );
    });
  });
  form.addEventListener("focusout", function (e) {
    console.log(e.target.value);
    if (e.target.type !== "submit") {
      localStorage.setItem(
        `${lastPart}-${form.id}-${e.target.name}`,
        e.target.value
      );
    }
  });
  window.addEventListener("load", answers);
} else {
  console.log("no sir");
}
