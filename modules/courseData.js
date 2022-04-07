function checkCourse(course) {
  const courseData = [
    {
      name: "wafs",
      fullName: "Web App From Scratch",
      teachers: ["Joost-Faber", "Suus-ten-Voorde"],
    },
    {
      name: "cssttr",
      fullName: "CSS To The Rescue",
      teachers: ["Sanne-t-Hooft", "Vasilis-van-Gemert"],
    },
    {
      name: "pwa",
      fullName: "Progressive Web Apps",
      teachers: ["Joost-Faber", "Declan-Rek"],
    },
    {
      name: "bt",
      fullName: "Browser Technologies",
      teachers: ["Koop-Renders", "Peter-Paul-Kooch"],
    },
    {
      name: "rtw",
      fullName: "Real-Time Web",
      teachers: ["Pieter-Zwart", "Suley-Goat"],
    },
    {
      name: "hcd",
      fullName: "Human Centred Design",
      teachers: ["Pieter-Zwart", "Suley-Goat"],
    },
    {
      name: "mp",
      fullName: "Meesterproef",
      teachers: ["Pieter-Zwart", "Suley-Goat"],
    },
  ];
  return courseData
    .map((data) => {
      if (data.name === course) {
        return data;
      }
    })
    .filter((d) => d !== undefined);
}

module.exports = { checkCourse };
