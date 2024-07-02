import { DataTypes } from "sequelize";
import db from "../../db.js";

const Gender = db.define("gender", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  }
});

export default Gender;
