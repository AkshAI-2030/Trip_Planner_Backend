module.exports = (sequelize, Datatypes) => {
  const flight = sequelize.define(
    "flight",
    {
      origin: Datatypes.STRING,
      destination: Datatypes.STRING,
      flight_number: Datatypes.STRING,
      departure_time: Datatypes.DATE,
      arrival_time: Datatypes.DATE,
      price: Datatypes.FLOAT,
    },
    {
      timestamps: true,
    }
  );
  return flight;
};
