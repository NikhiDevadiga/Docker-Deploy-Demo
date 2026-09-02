import express from "express";
import route from "./routes/demo.route.js";
import cors from "cors"

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors())

app.use("/api/demo",route)

export default app;