var express=require("express")
var bodyparser=require("body-parser")
var mongoose=require("mongoose")

const app=express()

app.use(bodyparser.json())
app.use(express.static('register page'))
app.use(bodyparser.urlencoded({
    extended:true
}))
 mongoose.connect('mongodb://localhost:27017/Database')
 var db=mongoose.connection
 db.on('error',()=> console.log("Error in connection to Database"))
 db.once('open',()=> console.log("connected to Database") )
 
 app.post("sign_up",(req,res) =>{
    var name= req.body.name
    var age= req.body.age
    var email= req.body.email
    var phno= req.body.phno
    var gender= req.body.gender
    var password= req.body.password

    var data={
        "name":name,
        "age":age,
        "email":email,
        "phno":phno,
        "gender":gender,
        "password":passwrd
    }
    db.collection('users').insertOne((err,collection) => {
        if(err){
            throw err;
        }
        console.log("Record Inserted successfuly")
    })
    return res.redirect('signup_successful.html')
 })
 
 
 app.get("/",(req,res)=>{
    res.set({
        "Allow-acces-Allow-Origin":'*'
    })
    return res.redirect('index.html')
}).listen(3000);

console.log("listening on port 3000")