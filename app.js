const express = require('express');
const app = express();

app.use(express.static('public'));

app.use(express.static('iceland picture'));

app.get('/', (req, res) => {
    res.render("index.ejs");
});

app.get('/contact', (req, res) => {
    res.render("contact.ejs");
});

app.get('/CTA', (req, res) => {
    res.render("CTA.ejs");
});

app.get('/classiques', (req, res) => {
    res.render("classiques.ejs");
});

app.get('/grastein', (req, res) => {
    res.render("grastein.ejs");
});

app.get('/insolite', (req, res) => {
    res.render("insolite.ejs");
});

app.get('/nuitEtoilee', (req, res) => {
    res.render("nuitEtoilee.ejs");
});

app.get('/services', (req, res) => {
    res.render("services.ejs");
});

app.get('/pierreEau', (req, res) => {
    res.render("pierreEau.ejs");
});

app.get('/pierreFeu', (req, res) => {
    res.render("pierreFeu.ejs");
});

app.get('/pierreLune', (req, res) => {
    res.render("pierreLune.ejs");
});


app.listen(3001);