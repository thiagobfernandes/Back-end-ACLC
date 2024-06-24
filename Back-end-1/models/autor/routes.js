import express from "express";
import controller from "./controller.js";
const routes = express.Router();


routes.get('/autores', async (req,res) => {
    const autores = await controller.findAll();
res.status(200).json(autores);
});


routes.post('/autores', (req, res) => {
    const autor = req.body
    

    // autores.push(autor)
    const saveDautor=controller.save(autor);

    if(autor) return res.status(200).json(saveDautor)
    return res.status(400).json({msg: "Não encontrado..."})
});

routes.get('/autores', (req, res) => {
    res.json(autores)
});

routes.get('/autores/:id', async (req, res) => {
    const id = Number(req.params.id)

    const autor = await  controller.findbyId(id);
    if(autor.length) return res.status(200).json(autor)
    return res.status(400).json({msg: "Mamou..."})
});


routes.post('/autores/:id', async (req, res) => {
    const id = Number(req.params.id)
    const autor=req.body
    let updateAutor=  await controller.update(autor,id)

  
    if(autor.length) return res.status(200).json(updateAutor)
 




    if(updateAutor) {
        updateAutor = await controller.findbyId(id);
        res.status(200).json(updateAutor)
    }

});





routes.delete('/autores/:id', async (req, res) => {
    const id = Number(req.params.id)
    let deletar = await controller.deleteByid(id)
   return res.status(200).json(deletar)

});

routes.get('/autores/nome/:nome', async (req, res) => {
    const {nome} = req.params
    console.log(nome)
    const autor = await controller.findbynome(nome);
    if(autor.length) return res.status(200).json(autor)
    if(nome.includes("Gabriel")) return res.status(200).json({msg: "Ah XIIIIIIIIIIIIIIUUU...", autor})
    return res.status(400).json({msg: "Não encontrado..."})
});

routes.post('/autores/filter-by-name', (req, res) => {
    const {name} = req.body
    console.log(name)
    const autor = controller.findbyId();
    if(autor.length) return res.status(200).json(autor)
    if(name.includes("Gabriel")) return res.status(200).json({msg: "Ah XIIIIIIIIIIIIIIUUU...", autor})
    return res.status(400).json({msg: "Não encontrado..."})
});







export { routes as default }