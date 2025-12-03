const express=require('express')
const jwt=require('jsonwebtoken')
const bcrypt=require('bcryptjs')
const cors=require('cors')

const port=5500
const app=express()

app.use(cors())
app.use(express.json())




const { MongoClient, ServerApiVersion ,ObjectId} = require('mongodb');
const uri = "mongodb+srv://Mrithika:bigbasket@cluster0.ezc88a1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();


    const pop=client.db("shop").collection("popcorn")

    app.post("/update",async(req,res)=>{
      const data=req.body;
      const result=await pop.insertOne(data);
      res.send(result);
    })

    app.get("/getdata",async(req,res)=>{
      const sdata=pop.find()
      const result=await sdata.toArray();
      res.send(result);
    })
    app.get("/getid/:id",async(req,res)=>{
      const para=req.params.id;
      const obj={_id:new ObjectId(para)};
      const sdata=await pop.findOne(obj);
      res.send(sdata);
    })
    

    app.delete("/delepop/:id",async(req,res)=>{
   const para=req.params.id
   const ob={_id:new ObjectId(para)}
   const sdata=await pop.deleteOne(ob)
   res.send(sdata)

    })
     app.patch("/editpop/:id",async(req,res)=>{
     const id=req.params.id;
    const obj={_id:new ObjectId(id)};
    const data=req.body;
    const editdata={$set:{
      ...data
    }}
    const options={upsert:true}
    const result=await pop.updateOne(obj,editdata,options)
    res.send(result)

  })

   const items=client.db("shop").collection("test")

      app.post("/upload",async(req,res)=>{
      const data=req.body;
      const result=await items.insertOne(data);
      res.send(result);

    })

    app.get("/getdatas",async(req,res)=>{
      const sdata=items.find()
      const result=await sdata.toArray();
      res.send(result);
    })
    app.get("/getdate/:id",async(req,res)=>{
      const para=req.params.id
      const ob={_id:new ObjectId(para)}
      const sdata=await items.findOne(ob)
      res.send(sdata);
    })
    app.delete("/deleitems/:id",async(req,res)=>{
        const para=req.params.id
        const ob={_id:new ObjectId(para)}
        const sdata=await items.deleteOne(ob)
        res.send(sdata)

    })

    app.patch("/edititems/:id",async(req,res)=>{
        const id=req.params.id;
        const obj={_id:new ObjectId(id)};
        const data=req.body;
        const editdata={$set:{
          ...data
        }}
        const options={upsert:true}
        const result=await items.updateOne(obj,editdata,options)
        res.send(result)

  })
   

  //Register//

    const userCollection=client.db("shop").collection("users");

    app.post("/register",async(req,res)=>{
      try{
        const{username,password}=req.body;
        console.log("user registered:",username)
        console.log("user registered:",password)

        const existingUser=await userCollection.findOne({username});
        if(existingUser){
          return res.status(400).json({message:"user already exists"});
        }
        const hashedPassword=await bcrypt.hash(password,10);
        console.log("user registered:",hashedPassword)

        await userCollection.insertOne({username,password:hashedPassword});
       
        res.status(201).json ({message:"user registered successfully"});
        console.log("user registered:",username);
      }catch(error){
        res.status(500).json({message: "error registering user",error});
      }
    });

    // app.post("/login",async(req,res)=>{
    //   try{
    //     const {username,password}=req.body;
    //     const user=await userCollection.findOne({username});
    //     if(!user){
    //       return res.status(401).json({message:"user not found please register"})
    //     }
    //     const isValidPassword = await bcrypt.compare(password,user.password);
    //     if(!isValidPassword){
    //       return res.status(401).json({message:"Invalid password"});
    //     }
    //     const token=jwt.sign({username},secretkey,{expiresIn:'1h'});
    //     res.json({token});
    //     console.log("user logged in:",username);
    //   }catch(error){
    //     res.status(500).json({message:"error logging in",error});
    //   }

      
    // });

    //Login//
    
    const secretKey = "your_secret_key";
    app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ message: "Username and password required" });
    }
    const user = await userCollection.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: "User not found, please register" });
    }
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ message: "Invalid password" });
    }
    const token = jwt.sign({ username: user.username }, secretKey, { expiresIn: "1h" });
    res.status(200).json({ message: "Login successful", token });
    console.log("User logged in:", username);
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ message: "Error logging in", error: error.message });
  }
});

  //verify token//

  app.post('/verifyToken',(req,res)=>{
    const token = req.headers.authorization?.split(' ')[1];

    if(!token){
      return res.status(401).json({valid:false,message:'No token provided'});
    }
    jwt.verify(token,secretKey,(err,decoded)=>{
      if(err){
        return res.status(401).json({valid:false,message:'Invalid or expired token'});
      }
      res.json({valid:true,username:decoded.username});
    });
  });




    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port,()=>{
    console.log("listening to port",port)

})







