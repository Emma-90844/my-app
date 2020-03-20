const express = require('express');
const app = express();

// app.get('/', (req, res) => {
// res.send('Hello World');
// });



const courses = [
{ id:1, name: 'course1'},
{ id:2, name: 'course2'},
{ id:3, name: 'course3'}
];
app.get('/api/courses', (req, res) => {
    res.send(courses);
});

app.get('/api/courses/:id', (req, res) => {
   const course = courses.find(c => c.id === parseInt(req.params.id));
   if( !course ) res.status(404).send('Error:Course with the given id not found');
   res.send(course);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});