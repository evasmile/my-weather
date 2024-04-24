import express from'express';
import bodyParser from "body-parser";
import axios from 'axios';



const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}))

app.get("/",function(req,res){
    res.render("home.ejs")
})

app.post("/", async function(req,res){
   
    try{

        const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${req.body.city}&appid=7791aeab6c3b7a623eee7c764078479f`)

        console.log(result.data)
        res.render('home.ejs',{'data':result.data})
    }catch(error){

       console.log(error)
    }
})





app.listen("3000",function(){
   console.log("on")
})

      
    

