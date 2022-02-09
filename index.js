const fs = require('fs')
const express = require('express')
const port = process.env.PORT || 4000
const app = express()

const { userCheck } = require('./modules/userCheck')
const { getSurveys } = require('./modules/getSurveys')
const { checkCourse } = require('./modules/courseData')
const { addAnswers } = require('./modules/answers')

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(express.urlencoded({ extended: true}))
app.use(express.json())
app.use(express.static('public'))

app.get('/', function(req, res) {
	res.render('inlog')
	
})

app.post('/', function(req, res) {
	userCheck(req.body, res)
})

app.get('/courses/:id', function(req, res) {
	res.render('home', {
		data: getSurveys(req.params.id)[0],
		id: req.params.id
	})
	
})

app.get('/courses/:course/:id', function(req, res) {
	res.render('form', {
		data: checkCourse(req.params.course)[0],
		id: req.params.id
	})
	
})

app.post('/courses/:course/:id', function(req, res) {
	const werk = req.params.course.trim()
	addAnswers(req.body, req.params.id, werk, res)
})


app.listen(port, function() {
	console.log(`Application started on port: ${port}`)
})
