import express from 'express';



const app = express()
const port = 4000

app.use(express.json());
app.listen(port, () => {
console.log(`Servidor rodando em http://localhost:${port}`);});

import tips from "./src/dicas.js"
// import database from "./src/data/database.js";

tips(app)
