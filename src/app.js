const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const port = process.env.PORT || 8000;  //either global hosted or the local assigned port
const public = path.join(__dirname, '../public/');
const partialPath = path.join(__dirname, '../templates/partials');
const templatePath = path.join(__dirname, '../templates/views');

app.set('views',templatePath); //give path till views
app.set('view engine','hbs');
app.use(express.static(public))  //static files
hbs.registerPartials(partialPath); //adding partials


//routing
app.get('/', (req,res) =>{
    res.render('index');
})

app.get('/about', (req,res) =>{
    res.render('about');
})

app.get('/weather', (req,res) =>{
    res.render('weather');
})

app.get('*', (req,res) =>{
    res.render('error', {errorMsg: "Wrong URL mayb? Click here to go back "});
})

app.listen(port, ()=> console.log(`Server at ${port}`));

