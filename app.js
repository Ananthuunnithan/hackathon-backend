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

const Hackathonentry=mongoose.model("Hackathonentry",new mongoose.Schema(
    {
        teamId: String,
        teamName: String,
        teamLeaderName: String,
        leaderEmail: String,
        leaderPhone: String,
        collegeName: String,
        numberOfMembers: String,
        projectTitle: String,
        problemStatement: String,
        techStack: String,
        mentorName: String,
        regDate: String,
        table: String
    }
))

app.get("/view",async(request,response)=>{
    const Hackentry=await Hackathonentry.find()
    response.json(Hackentry)
})

app.post("/add-entry",async(request,response)=>{
    await Hackathonentry.create(request.body)
    response.json({"status":"Entry added successfully"})
})

app.listen(3000,(request,response)=>{
    console.log("Server Connected")
})