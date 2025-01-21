const express = require("express");
const cors = require("cors");

const {
  getItinerary,
  createItinerary,
} = require("./controllers/dataController");

const {
  getFlights,
  getHotels,
  getSites,
  getFlightsByOriginAndDestination,
  getHotelsByLocation,
  getSitesByLocation,
} = require("./controllers/itineraryController");
const { sequelize } = require("./models");

require("dotenv").config();
const app = express();

app.use(express.json());
app.use(cors());

app.post("/itinerary", createItinerary);
app.get("/itinerary/:id", getItinerary);

app.get("/data/flights", getFlights);
app.get("/data/hotels", getHotels);
app.get("/data/sites", getSites);
app.get(
  "/data/getFlightsByOriginAndDestination",
  getFlightsByOriginAndDestination
);
app.get("/data/getHotelsByLocation", getHotelsByLocation);
app.get("/data/getSitesByLocation", getSitesByLocation);

sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => {
    console.error("unable to connect to database", error);
  });

app.listen(3002, () => {
  console.log(`server started at port${3002}`);
});

module.exports = app;
