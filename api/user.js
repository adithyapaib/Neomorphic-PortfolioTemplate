import * as express from "express";
import { model, Schema, Model, Document, connect } from 'mongoose';
const documentSchema = new Schema({
    value:
    {
        type: String,
        required: true
    },
    username:
    {
        type: String
    },
});
const G = model('documents', documentSchema)

require("dotenv").config();

//Middle-wares
(async function () {
    connect(process.env.DB);
})();

export default async function get(req, res) {
 const username = req.url.split('/user/');
  let test = await G.find({ username });
  if (test.length > 0) {
    res.json(true);
  } else {
    res.json(false);
  }

}