import mongoose from "mongoose";
import Model from "../models/Model";
require("dotenv").config();
export default async (req, res) => await mongoose.connect(process.env.DB) ? await (await Model.find({username: req.url.split('/user/')[1]})).length >0 ? res.status(200).json(true).end():res.status(200).json(false).end() : res.status(500).json(false).end();
