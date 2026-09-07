function calculateShippingCost(orderValue, weight, country, express) {
    if (orderValue < 0 || weight < 0) {
        throw new Error("Order value and weight cannot be negative.");
    }

    country = country.toUpperCase();

    if (country === "HU" && orderValue >= 20000) {
        return 0;
    }

    let shippingCost = 0;

    if (weight < 5) {
        shippingCost = 1500;
    } else if (weight <= 20) {
        shippingCost = 2500;
    } else {
        shippingCost = 5000;
    }

    if (country !== "HU") {
        shippingCost *= 2;
    }

    if (express === true) {
        shippingCost *= 1.5;
    }

    return shippingCost;
}