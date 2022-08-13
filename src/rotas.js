/*Vamos criar duas rotas em nossa aplicação, uma delas vai receber uma dica e
gravar essa dica no banco de dados e a outra rota deve devolver de forma
aleatória uma das dicas que estão armazenadas no banco. Vamos usar a rota
create para salvar a dica e uma rota /tips para devolver uma dica aleatória */
import database from './data/database.js'
import rotasModel from './models/model.js'

 const tips = (app) => { 
app.get('/create', (req,res) => { 
  const msg = "hello world"
  console.log(msg)
  return res.send(msg) 
})
}

export default tips