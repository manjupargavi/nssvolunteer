const express = require("express");
const cors = require("cors");
require("./db/config");
const admin = require('./db/admin')
const activity = require("./db/activity")
const app = express();
app.use(express.json());
app.use(cors());
app.post("/register",async (req,res)=>{
    let an = new admin(req.body);
    let result = await an.save();
    result = result.toObject();
    delete result.pass
    delete result.cpass
    res.send(result);
})

app.post("/login",async (req,res)=>{
    if(req.body.pass && req.body.email){
    let Admin = await admin.findOne(req.body);
    if(Admin){
    res.send(Admin)
    }
    else{
        res.send({result :"No user found"})
    }
}
else{
    res.send({result: "No user found"})
}
})

app.post("/add-activity",async (req,res)=>{
    let ac = new activity(req.body);
    let result = await ac.save();
    res.send(result);
})

app.get("/activities",async(req,res)=>{
    const activities = await activity.find();
    if(activities.length > 0){
        res.send(activities)
    }
    else{
        res.send({result : "No activity found"})
    }
})

app.delete("/activity/:name",async(req,res)=>{
    let result = await activity.deleteOne({name:req.params.name});
    res.send(result)
})

app.get("/activity/:name",async(req,res)=>{
    let result = await activity.findOne({name:req.params.name})
    if(result){
        res.send(result)
    }
    else{
        res.send({"result":"No activity found"})
    }
})

app.put("/activity/:name",async(req,res)=>{
    let result =await activity.updateOne(
        {name:req.params.name},
        {
            $set:req.body
        }

    )
    res.send(result)
})

app.get("/search/:key",async(req,res)=>{
    let result = await activity.find({
        "$or":[
            {
                name:{$regex:req.params.key}
            },
            {
                location:{$regex:req.params.key}
            },
            {
                slots :{$regex:req.params.key}
            }
           
            
        ]
    });
    res.send(result);
})

app.listen(5000);