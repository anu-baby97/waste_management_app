const express = require("express")

const router = require("./routes/router")

const app = express()

app.use(express.urlencoded({extended:false})) 


app.use(express.static('./server/public'))
app.use('/',router)


app.listen(3000, function () {
    console.log("Server Started at port 3000 !!!");
});
