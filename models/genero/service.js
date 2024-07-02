import { QueryTypes, where } from "sequelize";
import Gender from "./gender.js";

async function findAll() {
  return await Gender.findAll();
}

async function findById(id) {
  const instance = await Gender.findByPk(id);
  return instance;
}

async function save(book) {
  return await Gender.create({
    name: book.name,
  });
}

async function update(book, id) {
  const instance = await Gender.findByPk(id);
  if (!instance) {
    throw new Error("Gênero não encontrado");
  }

  return await instance.update({
    name: book.name,
  });
}

async function deleteById(id) {
  return await Gender.destroy({
    where: {
      id: id,
    },
  });
}

export default {
  findAll,
  findById,
  save,
  update,
  deleteById,
};
