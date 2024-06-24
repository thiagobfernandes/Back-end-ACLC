import service from "./service.js";



let autores = [
    {id: 1 , name: "Machado de Assis"},
    {id: 2 , name: "Monteiro Lobato"},
    {id: 3 , name: "Dan Brown"}
] //chamando o service, validacao
function findAll () {
    return service.findAll();

}
function findbyId(id){
    // return autores.filter((item) => item.id === id)
    return service.findbyId(id);
}

function findbynome(nome) {
    return service.findbynome(nome);

}

function deletar(id){
    return autores.filter((item) => item.id !== id);
}

function save(autor) {
    return service.save(autor)
}
function update(autor,id) {
    return service.update(autor , id)
}

function deleteByid(id) {
    return service.deleteByid(id)
}


export default {
    findAll,
    findbyId,
    deletar,
    findbynome,
    save,
    update,
    deleteByid,

};
