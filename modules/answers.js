const fs = require('fs')

function addAnswers(answer, studentNmb, courses, response) {
    let data = []

    const file = fs.readFileSync('./modules/data.json', 'utf-8')
    const obj = JSON.parse(file)

    data = obj.users
    for (const user of data) {
        if(user.id === studentNmb){
                     let selectedCourse = user.surveys.find(course => course.survey === courses)
                     selectedCourse.answers = answer;
                     selectedCourse.completed = true;

                    const addedJSON = JSON.stringify(obj)
                    console.log(addedJSON)
                    fs.writeFileSync('./modules/data.json', addedJSON)
        
                    return response.redirect(`/courses/${studentNmb}`)
                }
                 else {
                        console.log('nee')
                    }
                }
                

    // data.forEach(student => {
    //     console.log(student)
	// 	if (student.id === studentNmb) {
	// 		let currentCourse = student.surveys.find(courses => courses.survey === course);
	// 		currentCourse.answers = answer;
	// 		currentCourse.completed = true;

	// 		const json = JSON.stringify(obj);
	// 		fs.writeFileSync('./modules/data.json', json, (err) => {
	// 			if (err) {
	// 				console.log(err);
	// 			};
	// 		});

	// 		response.redirect(`/courses/${studentNmb}`);
	// 	}
	// })
    
    
}
module.exports = { addAnswers }