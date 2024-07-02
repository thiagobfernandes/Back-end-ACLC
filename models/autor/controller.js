import service from "./service.js";

function findAll() {
    return service.findAll();
}

function findById(id) {
    return service.findById(id);
}

function save(autor) {
    return service.save(autor);
}

function update(autor, id) {
    return service.update(autor, id);
}

function deleteById(id) {
    return service.deleteById(id);
}

export default {
    findAll,
    findById,
    save,
    update,
    deleteById
};