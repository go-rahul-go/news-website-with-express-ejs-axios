const express = require("express")


const app=express();

const PORT = 5000;


//static files
app.use(express.static("public"))
app.use("/css",express.static(__dirname+"/public/css"))
app.use("/images",express.static(__dirname+"/public/images"));


//setting template engine
app.set("views","./src/views")
app.set('view engine','ejs');

//routes
const newsRouter = require("./src/routes/news")
app.use("/" ,newsRouter);



//listen on port 5000
app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
})