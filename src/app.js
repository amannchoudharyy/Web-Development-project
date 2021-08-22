const express = require('express');
const path = require('path');
const fs = require('fs');
const hbs = require('hbs')
const Admission = require('./model/registers');
const touch = require('./model/touch');
port = process.env.PORT || 80;
const app = express();
require('./db/conn');


const static_path = path.join(__dirname, '../public');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(static_path));
app.set('view engine', 'hbs');
app.get('/', (req, res) => {
    res.render('index');
})

app.get('/admission', (req, res) => {
    res.render('admission');
})



app.post('/admission', async (req, res) => {
    try {

        console.log(req.body.first_name);
        const CollegeAdmission = new Admission({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            address: req.body.address,
            email: req.body.email,
            area_code: req.body.area_code,
            phone: req.body.phone,
            caurse: req.body.caurse,
            gender: req.body.gender
        })
        const registered = await CollegeAdmission.save();
        res.status(201).render('submit', {
            namedb: req.body.first_name
        });
    } catch (error) {
        res.status(400).send(error);
    }


})




app.post('/', async (req, res) => {
    try {

        console.log(req.body.name);
        const GetInTouch = new touch({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            message: req.body.message
        })
        const registered = await GetInTouch.save();
        res.status(201).render('index', {
            done: `*hello ${req.body.name}, your quary have been submitted. we will answer your quary via mail.`
        });
    } catch (error) {
        res.status(400).send(error);
    }


})



app.get('/notice', (req, res) => {
    res.render('notice');
})
app.get('/aboutus', (req, res) => {
    res.render('aboutus');
})
app.get('/fee', (req, res) => {
    res.render('fee');
})
app.get('/submit', (req, res) => {
    res.render('submit');
})





app.listen(port, () => {

    console.log(`The application started successfully on port ${port}`);

});