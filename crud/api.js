const express = require("express");
const app = express();
app.get("/api/users",function(req,res){
    console.log("Recieved req");
    res.status(200).json({
        status:"success recieved get request on client",
    })
})
app.listen(3000,function(){
    console.log("Server is listening at port 3000");
})