const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://ananthu:Ananthu2003@ac-bwtfq7g-shard-00-00.g033s7s.mongodb.net:27017,ac-bwtfq7g-shard-00-01.g033s7s.mongodb.net:27017,ac-bwtfq7g-shard-00-02.g033s7s.mongodb.net:27017/hackathondb?ssl=true&replicaSet=atlas-146xj9-shard-0&authSource=admin&appName=Cluster0").then(
    () => {
        console.log("MongoDB connected")
    }
).catch(
    (error) => {
        console.log(error)
    }
)

app.listen(3000,(request,response)=>{
    console.log("Server Connected")
})