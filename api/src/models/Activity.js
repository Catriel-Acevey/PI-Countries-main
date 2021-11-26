const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define("activity", {
    name: {
      type: DataTypes.STRING,
    },
    difficulty: {
      type: DataTypes.INTEGER,
    },
    duration: {
      type: DataTypes.STRING, //revisar (puede ser range)
    },
    season: {
      type: DataTypes.ENUM("Verano", "Otoño", "Invierno", "Primavera"),
    },
  });
};
