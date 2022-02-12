const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();

app.set('view engine','ejs')
app.set('views', path.join(__dirname, 'view'));
app.use(express.static('view'));
app.use(express.urlencoded({ extended: true })); 
const defaultRoute = require('./routes/default')

app.use('/',defaultRoute);

app.post('/',function(req,res){
    const user = req.body;
    const filePath = path.join(__dirname, 'data', 'user.json');
    const fileData = fs.readFileSync(filePath);
    const storedUsers = JSON.parse(fileData);
    storedUsers.push(user);
    fs.writeFileSync(filePath, JSON.stringify(storedUsers));
    res.redirect("/confirm");
})
app.get('/confirm', function (req,res){
    const htmlFilePath = path.join(__dirname, 'view', 'confirm.ejs');
    res.render(htmlFilePath);
})
app.listen(3000);
