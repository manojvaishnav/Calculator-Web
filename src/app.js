const express = require('express')
const port = process.env.PORT || 3000;
const path = require('path');
const hbs = require('hbs');

const app = express();

const staticPath = path.join(__dirname,'../public/')
const viewsPath = path.join(__dirname,'../templates/views/');
const partialsPath = path.join(__dirname,'../templates/partials/');

app.use(express.static(staticPath));
app.set('view engine','hbs');
app.set('views',viewsPath);
hbs.registerPartials(partialsPath);

app.get('/',(req,res)=>{
    res.render('index');
});

app.listen(port,()=>{
    console.log(`server started at port number ${port}`);
})