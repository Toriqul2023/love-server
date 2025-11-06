const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");

const app = express();
app.use(cors());
app.use(express.json());

const client = new MongoClient("mongodb+srv://love:etLerl4FIL7YyRB5@cluster0.uaiap.mongodb.net/?appName=Cluster0");
let db;

// ✅ Connect to MongoDB
 async function run(){ 
   
    try{
      await client.connect()
        const database=client.db('heart')
        const collection= database.collection('love')
        app.post('/save-love',async(req,res)=>{
        const {YourName,PartnerName,number}=req.body
         const result = await collection.insertOne({YourName,PartnerName,number});
          res.send(result)
          console.log(result);
          
        })
        
       app.get('/',async(req,res)=>{
       
        const result = await collection.find().toArray();
        res.send(result);
       })
    
          
    }
    finally{
      
    }
  
  }
run();




app.listen(5000, () => console.log("🚀 Server running on port 5000"));
