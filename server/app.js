const express = require("express")


const LoginRouter=require("./routes/LoginRouter")
const RegisterRouter=require("./routes/RegisterRouter")
const WasteRouter=require("./routes/WasteRouter")
const BinRouter=require("./routes/BinRouter")
const VolunteerRouter=require("./routes/VolunteerRouter")


const cors=require("cors")
const app = express()

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
  });
  
app.use(express.urlencoded({extended:false})) 

app.use(express.json())
app.use(cors())
app.use('/login',LoginRouter)
app.use('/register',RegisterRouter)
app.use('/waste',WasteRouter)
app.use('/volunteer',VolunteerRouter)
app.use('/bin',BinRouter)


app.listen(4000, function () {
    console.log("Server Started at port 4000 !!!");
});
