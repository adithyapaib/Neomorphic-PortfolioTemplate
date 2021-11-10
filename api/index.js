import  express from "express";
const app = express();
app.set('view engine', 'ejs');
app.get('/', (req, res) => res.status(200).render('index'))

export default app;