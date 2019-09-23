const express = require('express');
const app = express();
var bodyparser = require('body-parser');
app.use(bodyparser.json());
var mongo = require('mongoose');
var user = require('./model/loginmodel');
var drive = require('./model/drivemodel');
var url = "mongodb://localhost/placement";
mongo.connect(url, {useNewUrlParser:true}, (err)=>{
    if (err) throw err;
    else console.log("Database connected");
})
app.use(bodyparser.urlencoded({extended:true}));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.post("/register",(req,res)=>{
    var u1 = new user();
    u1.aid= req.body.aid;
    u1.name = req.body.name;
    u1.email = req.body.email;
    u1.username = req.body.uname;
    u1.password = req.body.password;
    u1.status = 0;
    u1.role = "student";
    u1.save((err)=>{
        if (err) throw err;
        else{
            console.log("Data added");
            //res.redirect("/");
            res.send({msg:"Success"});
        }
    })
})

app.post("/login",(req,res)=>{
    //console.log(req.body.username);
    user.find({username:req.body.username,password:req.body.password},(err,result)=>{
        if (err) throw err;
        else{
            
            if(result.length!=0)
            res.send(result[0]);
                
            else
            res.send({msg:"Failed"});
        }
    })
    
})

//Admin-- add drive
app.post("/adddrive",(req,res)=>{
    var d = new drive();
    d.did= req.body.did;
    d.company = req.body.company;
    d.job = req.body.job;
    d.venue = req.body.venue;
    d.date = req.body.date;
    d.qualification = req.body.qualification;
    d.save((err)=>{
        if (err) throw err;
        else{
            console.log("Data added");
            //res.redirect("/");
            res.send({msg:"Success"});
        }
    })
})

// Admin manage drive view
app.get("/managedrive",(req,res)=>{
    drive.find({},(err,result)=>{
        if(err) throw err;
        else
            res.send(result);
    })
})


app.listen(process.env.PORT || 8000,()=>{
    console.log("Server started..");
})