import { DataTypes } from "sequelize";
import db from "../../db.js";

const Author = db.define("author", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
});

export default Author;
