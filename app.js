const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/view/index.html');
});


const time = (req,res,next) => {
    const date = new Date();
    const hours = date.getHours();
    const day= date.getDay();

    if (day>=1 && day<=5 && hours>=9 && hours<23) {
        next();

}
else {
    res.sendFile(__dirname + '/view/closed.html');
}

}
app.use(time);
app.use(express.static(__dirname + '/view'));
app.get("/", (req, res) => {
  res.sendFile(__dirname + '/view/index.html');
});


app.get("/services", (req, res) => {
  res.sendFile(__dirname + '/view/services.html');
});


app.get("/contact", (req, res) => {
  res.sendFile(__dirname + '/view/contact.html');
});


app.listen(3000, (err) => {  err ? 
    console.error(err) :
     console.log('Server is running on port 3000')
    ; });