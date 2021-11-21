const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define("tourist_activity", {
    name: {
      type: DataTypes.STRING,
    },
    difficulty: {
      type: DataTypes.STRING, // valor entre 1 y 5 como lo hago?
    },
    duration: {
      type: DataTypes.STRING, //como guardo la duracion?
    },
    season: {
      type: DataTypes.ENUM("Verano", "Otoño", "Invierno", "Primavera"),
    },
  });
};
