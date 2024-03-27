
const getPricingDetailsForCalculation = "SELECT base_distance_in_km, km_price, fix_price FROM pricing WHERE organization_id = $1 AND zone = $2";
const getPriceDetails = "SELECT * FROM pricing";

module.exports = {
    getPricingDetailsForCalculation,
    getPriceDetails,
}