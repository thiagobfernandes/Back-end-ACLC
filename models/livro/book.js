import { DataTypes } from "sequelize";
import db from "../../db.js";
import Author from "../autor/author.js";
import Gender from "../genero/gender.js";

const Book = db.define("book", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  isbn: {
    type: DataTypes.STRING,
  },
});

// One-to-many
Book.belongsTo(Author, {
  foreignKey: "authorId",
});
Author.hasMany(Book);

// Many-to-many
Book.belongsToMany(Gender, { through: 'BookGenders' });
Gender.belongsToMany(Book, { through: 'BookGenders' });

export default Book;
