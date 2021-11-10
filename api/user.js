import { model, Schema, connect } from 'mongoose';
require("dotenv").config();
(async function () {connect(process.env.DB);})();

export default async function get(req, res) {
 const username = req.url.split('/user/');
  let test = await model('documents', new Schema({value:{type: String,required: true},username:{type: String},})).find({ username });
  if (test.length > 0) res.status(200).json(true).end();
   else res.status(200).json(false).end();
}