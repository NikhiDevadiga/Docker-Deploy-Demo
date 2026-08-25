import express from "express";
import {
  createEvent,
  getEvent,
  updateEvent,
  deleteEvent
} from "../controllers/demo.controller.js";

const route = express.Router();

route.post("/createEvent", createEvent);
route.get("/getEvent", getEvent);
route.put("/updateEvent/:id", updateEvent);
route.delete("/deleteEvent/:id", deleteEvent);

export default route;
