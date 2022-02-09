function getSurveys(studentNumber){
let data = []
const fs  = require('fs')

const file = fs.readFileSync('./modules/data.json', 'utf-8')

const obj = JSON.parse(file)

data = obj.users

return data.map(user => {
    if (studentNumber === user.id) {
    return user.surveys
}
}).filter(entry => entry !== undefined)

}
module.exports = { getSurveys }