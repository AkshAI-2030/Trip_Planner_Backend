module.exports = (Sequelize, DataTypes) => {
  const hotel = Sequelize.define(
    "hotel",
    {
      name: DataTypes.STRING,
      location: DataTypes.STRING,
      price_per_night: DataTypes.FLOAT,
      available_rooms: DataTypes.INTEGER,
    },
    {
      timestamps: true,
    }
  );
  return hotel;
};
