import express from "express";
const app = express();
import BusRoutes from "./routes/bus.routes.js"

app.use(express.json());
app.use(express.urlencoded());


app.get("/home",(req,res) => {
    res.send('<h1>Bus Reservation System</h1>')
})

app.use("/api/v1",BusRoutes);


export {app}