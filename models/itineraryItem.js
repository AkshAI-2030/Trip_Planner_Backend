module.exports = (sequelize, DataTypes) => {
  const itineraryItem = sequelize.define(
    "itineraryItem",
    {
      itineraryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "itinerary",
          key: "id",
        },
      },
      itemId: {
        type: DataTypes.INTEGER,
      },
      type: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: true,
    }
  );
  itineraryItem.associate = (models) => {
    itineraryItem.belongsTo(models.itinerary, { foreignkey: "itineraryId" });
  };
  return itineraryItem;
};
