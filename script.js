const calculateBtn = document.getElementById("calculateBtn");

calculateBtn.addEventListener("click", calculateCost);

function getNumber(id) {
    const value = parseFloat(document.getElementById(id).value);
    return Number.isFinite(value) && value >= 0 ? value : 0;
}

function formatEuro(value) {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "EUR",
        maximumFractionDigits: 0
    }).format(value);
}

function calculateCost() {

    const carName =
        document.getElementById("carName").value.trim() || "Your car";

    const fuelConsumption = getNumber("fuelConsumption");
    const fuelPrice = getNumber("fuelPrice");
    const kmPerYear = getNumber("kmPerYear");

    const insurance = getNumber("insurance");
    const maintenance = getNumber("maintenance");
    const otherCosts = getNumber("otherCosts");

    /*
        Fuel calculation:

        km driven / 100
        × consumption in L/100 km
        × price per litre
    */

    const fuelCost =
        (kmPerYear / 100) *
        fuelConsumption *
        fuelPrice;

    const totalAnnual =
        fuelCost +
        insurance +
        maintenance +
        otherCosts;

    const monthlyCost =
        totalAnnual / 12;

    const costPerKm =
        kmPerYear > 0
            ? totalAnnual / kmPerYear
            : 0;

    const fuelMonthly =
        fuelCost / 12;

    document.getElementById("resultCarName").textContent =
        carName;

    document.getElementById("annualCost").textContent =
        formatEuro(totalAnnual);

    document.getElementById("monthlyCost").textContent =
        formatEuro(monthlyCost);

    document.getElementById("costPerKm").textContent =
        costPerKm.toFixed(2) + " €/km";

    document.getElementById("fuelCost").textContent =
        formatEuro(fuelCost);

    document.getElementById("fuelMonthly").textContent =
        formatEuro(fuelMonthly);

    document.getElementById("breakdownFuel").textContent =
        formatEuro(fuelCost);

    document.getElementById("breakdownInsurance").textContent =
        formatEuro(insurance);

    document.getElementById("breakdownMaintenance").textContent =
        formatEuro(maintenance);

    document.getElementById("breakdownOther").textContent =
        formatEuro(otherCosts);

    document.getElementById("breakdownTotal").textContent =
        formatEuro(totalAnnual);

    document.getElementById("emptyState").classList.add("hidden");

    document.getElementById("results").classList.remove("hidden");
}
