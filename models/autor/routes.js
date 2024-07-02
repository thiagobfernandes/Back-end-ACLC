import express from "express";
import controller from "./controller.js";

const routes = express.Router();

routes.get('/autores', async (req, res) => {
    const autores = await controller.findAll();
    res.status(200).json(autores);
});

routes.post('/autores', async (req, res) => {
    const autor = req.body; // pegando o conteúdo da requisição (body)
    const savedAutor = await controller.save(autor);

    res.json(savedAutor); // enviando o cadastro para o client
});

routes.get('/autores/:id', async (req, res) => {
    const id = Number(req.params.id);
    const encontrado = await controller.findById(id);

    if (encontrado.length > 0) {
        res.status(200).json(encontrado);
    } else {
        res.status(204).send();
    }

});

routes.post('/autores/:id', async (req, res) => {
    const id = Number(req.params.id);
    const autor = req.body; 
    let updatedAutor = await controller.update(autor, id);
    if (updatedAutor) {
        updatedAutor = await controller.findById(id); 
        res.status(200).json(updatedAutor);
    }

    res.status(400);
});

routes.delete('/autores/:id', async (req, res) => {
    const id = Number(req.params.id);
    await controller.deleteById(id);

    res.status(204).send();
});

routes.get('/autores/nome/:nome', (req, res) => {
    const nome = req.params.nome;

    const encontrado = autores.filter((item) => item.name.includes(nome));

    if (encontrado.length > 0) {
        res.status(200).json(encontrado);
    } else {
        res.status(400).json("Autor não cadastrado.");
    }
});

routes.post('/autores/filter-by-name', (req, res) => {
    const nome = req.body.nome;
    console.log('nome que veio na requisicao > ', nome);

    const encontrado = autores.filter((item) => item.name.includes(nome));

    if (encontrado.length > 0) {
        res.status(200).json(encontrado);
    } else {
        res.status(400).json("Autor não cadastrado.");
    }
});

export { routes as default };