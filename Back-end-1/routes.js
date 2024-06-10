import express from "express";
const routes = express.Router();

const autores = [ 
   {id:1, nome:"machado de assis"},
   {id:2, nome:"monteiro lobato"},
   {id:3, nome:"dan Brown"}

]

let valores=["autores"]

routes.get('/', (req,res) => {
    res.send("hello world")
})

routes.get('/autores', (req,res) => {
    res.json(autores)

})


routes.get(`/autores/:id`, (req,res) => {
    // res.json("Vai filtrar pelo id " + req.params.id);
    let encontrar=Number(req.params.id)
    encontrar= autores.filter((item) => item.id ==id);

    


    if(encontrar) {
        res.json(encontrar)
    } else {
        res.json("Autor nao encontrado")
    }



    
    

   
    
    
    
    
} )



export {routes as default};