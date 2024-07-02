import { QueryTypes, where } from "sequelize";
import Book from "./book.js";
import Author from "../autor/author.js";
import db from "../../db.js";
import Gender from "../genero/gender.js";

async function findAll() {
  return await Book.findAll();
}

async function findById(id) {
  const instance = await Book.findByPk(id, { include: [Author, Gender] });
  return instance;
}

async function save(book) {
  return await Book.create({
    name: book.name,
    isbn: book.isbn,
    authorId: book.authorId,
  });
}

async function update(book, id) {
  const instance = await Book.findByPk(id);
  if (!instance) {
    throw new Error("Livro não encontrado");
  }

  return await instance.update({
    name: book.name,
    isbn: book.isbn,
    authorId: book.authorId,
  });
}

async function deleteById(id) {
  return await Book.destroy({
    where: {
      id: id,
    },
  });
}

async function count() {
  return await db.query("select now()", { type: QueryTypes.SELECT });
}

export default {
  findAll,
  findById,
  save,
  update,
  deleteById,
  count,
};
