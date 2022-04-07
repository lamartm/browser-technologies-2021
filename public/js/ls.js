const form = document.querySelector("form");
const uri = document.URL;
const username = uri.split("t/")[1];
const formString = uri.split("/courses/")[1];
const selectedForm = formString.split("/")[0];

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
      `${username}-${selectedForm}-${i.name}`
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
      `${username}-${selectedForm}-${i.name}`
    );

    i.value = savedAnswer;
  });
}
if (localStorageCheck() === true) {
  form.addEventListener("change", function (e) {
    if (e.target.type !== "submit") {
      localStorage.setItem(
        `${username}-${selectedForm}-${e.target.name}`,
        e.target.value
      );
    }
  });
  window.addEventListener("load", answers);
} else {
  console.log("no sir");
}
