/*Vamos criar duas rotas em nossa aplicação, uma delas vai receber uma dica e
gravar essa dica no banco de dados e a outra rota deve devolver de forma
aleatória uma das dicas que estão armazenadas no banco. Vamos usar a rota
create para salvar a dica e uma rota /tips para devolver uma dica aleatória */

// import tipsModel from './model.js'

class tipsModel {

  constructor(id_tip,tip){ 
  this.id = database.length+1 ;
  this.tip = tip;
  }
}

let database = []

const tips = (app) => { 

app.post('/create', (req,res) => { 
  const {id_tip, tip} = req.body
  const dica = new tipsModel(id_tip, tip)
  database.push(dica);
  res.send('Dica armazenada no banco de dados');
})
app.get('/dica', (req,res) =>{ 
  const randomTip = database[Math.floor(Math.random() * database.length)]
  res.send(randomTip);
})

}

export default tips