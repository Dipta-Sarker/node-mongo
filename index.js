const express = require("express");


const app = express();



app.get('/',(req,res) =>{
    res.send("Thank you so much");
} )

app.listen(3000, ()=> console.log("Listenting to part 3000"));