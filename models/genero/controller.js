import service from "./service.js";

async function findAll() {
    const genders = await service.findAll();

    return genders;
}

function findById(id) {
    return service.findById(id);
}

function save(gender) {
    return service.save(gender);
}

function update(gender, id) {
    return service.update(gender, id);
}

function deleteById(id) {
    return service.deleteById(id);
}

export default {
    findAll,
    findById,
    save,
    update,
    deleteById,
};