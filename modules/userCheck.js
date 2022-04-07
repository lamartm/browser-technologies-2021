const fs = require("fs");

// inspiratie van https://github.com/benl95/browser-technologies-2021/blob/master/data/helpers/authUser.js

function newUser(name, studentNumber) {
  const obj = {
    name: name,
    id: studentNumber,
    surveys: [
      {
        survey: "wafs",
        name: "Web App From Scratch",
        completed: false,
      },
      {
        survey: "cssttr",
        name: "CSS To The Rescue",
        completed: false,
      },
      {
        survey: "pwa",
        name: "Progressive Web Apps",
        completed: false,
      },
      {
        survey: "bt",
        name: "Browser Technologies",
        completed: false,
      },
      {
        survey: "rtw",
        name: "Real-Time Web",
        completed: false,
      },
      {
        survey: "hcd",
        name: "Human Centred Design",
        completed: false,
      },
      {
        survey: "mp",
        name: "Meesterproef",
        completed: false,
      },
    ],
  };

  return obj;
}

function userCheck(info, response) {
  const studentNumber = info.studentNumber;
  const name = info.name;
  let data = [];

  const file = fs.readFileSync("./modules/data.json", "utf-8");
  const obj = JSON.parse(file);

  data = obj.users;

  if (data.some((user) => user.id === studentNumber)) {
    return response.redirect(`/courses/${studentNumber}`);
  } else {
    const addUser = newUser(name, studentNumber);
    obj.users.push(addUser);
    const addedJSON = JSON.stringify(obj);

    fs.writeFileSync("./modules/data.json", addedJSON);

    return response.redirect(`/courses/${studentNumber}`);
  }
}

module.exports = { userCheck };
