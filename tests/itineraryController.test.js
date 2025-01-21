const {
  getSitesByLocation,
  getHotelsByLocation,
  getFlightsByOriginAndDestination,
} = require("../controllers/itineraryController");

const axiosInstance = require("../lib/axios.lib");

jest.mock("../lib/axios.lib.js", () => ({
  get: jest.fn(), //mocking the axiosInstance
}));

describe("ItineraryController Tests", () => {
  test("should fetch flights by origin and destination", async () => {
    const mockResponse = {
      flights: [
        {
          id: 2,
          origin: "kozikode",
          destination: "ahmedabad",
          flight_number: "4",
          departure_time: "1/4/2025, 1:55:20 AM",
          arrival_time: "1/4/2025, 4:55:20 AM",
          price: 348.89,
        },
      ],
    };
    axiosInstance.get.mockResolvedValue(mockResponse);
    const req = { query: { origin: "kozikode", destination: "ahmedabad" } };
    const res = { json: jest.fn(), status: jest.fn(() => res) };
    await getFlightsByOriginAndDestination(req, res);

    expect(axiosInstance.get).toHaveBeenCalledWith(
      `/flights/search?origin=kozikode&destination=ahmedabad`
    );
    expect(res.json).toHaveBeenCalledWith(mockResponse.data);
  });

  test("should fetch hotels by location", async () => {
    const mockResponse = {
      hotels: [
        {
          id: 1,
          name: "Bechtelar LLC Hotel",
          location: "Cuttack",
          price_per_night: 29991.83,
          available_rooms: 6,
        },
      ],
    };
    axiosInstance.get.mockResolvedValue(mockResponse);
    const req = { query: { location: "Cuttack" } };
    const res = { json: jest.fn(), status: jest.fn(() => res) };
    await getHotelsByLocation(req, res);

    expect(axiosInstance.get).toHaveBeenCalledWith(
      `/hotels/search?location=Cuttack`
    );
    expect(res.json).toHaveBeenCalledWith(mockResponse.data);
  });

  test("should fetch sites by location", async () => {
    const mockResponse = {
      sites: [
        {
          id: 2,
          name: "Kemmer - Bailey Site",
          location: "Chikballapur",
          description: "Tam necessitatibus vapulus magnam.",
        },
      ],
    };
    axiosInstance.get.mockResolvedValue(mockResponse);
    const req = { query: { location: "Chikballpur" } };
    const res = { json: jest.fn(), status: jest.fn(() => res) };
    await getSitesByLocation(req, res);

    expect(axiosInstance.get).toHaveBeenCalledWith(
      `/sites/search?location=Chikballpur`
    );
    expect(res.json).toHaveBeenCalledWith(mockResponse.data);
  });
});
