function validateFlightQueryParams(query) {
  const errors = [];
  if (!query.origin) errors.push("Origin is required.");
  if (!query.destination) errors.push("Destination is required.");
  return errors;
}
function validateHotelQueryParams(location) {
  const errors = [];
  if (!location) errors.push("Location is required for Hotels.");
  return errors;
}
function validateSiteQueryParams(location) {
  const errors = [];
  if (!location) errors.push("Location is required for Sites.");
  return errors;
}
module.exports = {
  validateFlightQueryParams,
  validateHotelQueryParams,
  validateSiteQueryParams,
};
