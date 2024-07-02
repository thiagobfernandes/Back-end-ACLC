import express from "express";
import controller from "./controller.js";

const routes = express.Router();

routes.get('/generos', async (req, res) => {
    const autores = await controller.findAll();
    res.status(200).json(autores);
});

routes.post('/generos', async (req, res) => {
    const livro = req.body; // pegando o conteúdo da requisição (body)
    const instance = await controller.save(livro);

    res.json(instance); // enviando o cadastro para o client
});

routes.get('/generos/:id', async (req, res) => {
    const id = Number(req.params.id);
    const encontrado = await controller.findById(id);

    if (encontrado) {
        res.status(200).json(encontrado);
    } else {
        res.status(204).send();
    }

});

routes.put('/generos/:id', async (req, res) => {
    const id = Number(req.params.id);
    const autor = req.body; 
    let updatedAutor = await controller.update(autor, id);
    if (updatedAutor) {
        updatedAutor = await controller.findById(id); 
        res.status(200).json(updatedAutor);
    }

    res.status(400);
});

routes.delete('/generos/:id', async (req, res) => {
    const id = Number(req.params.id);
    await controller.deleteById(id);

    res.status(204).send();
});

export { routes as default };