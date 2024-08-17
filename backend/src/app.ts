import express from "express";
const app = express()
const port = 4000
import morgan from 'morgan'

app.use(express.json())
app.use(morgan('dev'))
app.listen(port,()=>{
    console.log("This is Test Server")
});