import service from "./service.js";

async function findAll() {
    const books = await service.findAll();

    return books;
}

function findById(id) {
    return service.findById(id);
}

function save(book) {
    return service.save(book);
}

function update(book, id) {
    return service.update(book, id);
}

function deleteById(id) {
    return service.deleteById(id);
}

function count() {
    return service.count();
}

export default {
    findAll,
    findById,
    save,
    update,
    deleteById,
    count
};