/*
    CARCOST V3

    Features:
    - Car autocomplete
    - Car database
    - Automatic vehicle data
    - Manual editing
    - Ownership cost calculation
    - Keyboard navigation
*/


/* =========================================================
   CAR DATABASE
========================================================= */

const cars = [

    {
        name: "BMW M2",
        price: 75000,
        consumption: 10.2,
        fuel: 1.80,
        insurance: 1800,
        maintenance: 1400,
        power: 480,
        type: "Performance"
    },

    {
        name: "BMW M3",
        price: 95000,
        consumption: 10.5,
        fuel: 1.80,
        insurance: 2100,
        maintenance: 1700,
        power: 510,
        type: "Performance"
    },

    {
        name: "BMW M4",
        price: 98000,
        consumption: 10.5,
        fuel: 1.80,
        insurance: 2100,
        maintenance: 1700,
        power: 510,
        type: "Performance"
    },

    {
        name: "BMW M5",
        price: 145000,
        consumption: 11.5,
        fuel: 1.80,
        insurance: 2500,
        maintenance: 2200,
        power: 727,
        type: "Performance"
    },


    /* =========================
       AUDI
    ========================= */

    {
        name: "Audi RS3",
        price: 70000,
        consumption: 9.5,
        fuel: 1.80,
        insurance: 1700,
        maintenance: 1400,
        power: 400,
        type: "Performance"
    },

    {
        name: "Audi RS6",
        price: 140000,
        consumption: 12.1,
        fuel: 1.80,
        insurance: 2600,
        maintenance: 2200,
        power: 630,
        type: "Performance"
    },

    {
        name: "Audi R8",
        price: 180000,
        consumption: 13.0,
        fuel: 1.80,
        insurance: 3000,
        maintenance: 3000,
        power: 620,
        type: "Supercar"
    },


    /* =========================
       PORSCHE
    ========================= */

    {
        name: "Porsche 718 Cayman",
        price: 75000,
        consumption: 8.8,
        fuel: 1.80,
        insurance: 1500,
        maintenance: 1300,
        power: 300,
        type: "Sports car"
    },

    {
        name: "Porsche 911 Carrera",
        price: 130000,
        consumption: 9.0,
        fuel: 1.80,
        insurance: 2200,
        maintenance: 1800,
        power: 394,
        type: "Sports car"
    },

    {
        name: "Porsche 911 GT3",
        price: 205000,
        consumption: 13.0,
        fuel: 1.80,
        insurance: 3000,
        maintenance: 3000,
        power: 510,
        type: "Track"
    },

    {
        name: "Porsche 911 GT3 RS",
        price: 250000,
        consumption: 13.2,
        fuel: 1.80,
        insurance: 4000,
        maintenance: 4000,
        power: 525,
        type: "Track"
    },

    {
        name: "Porsche 911 Turbo S",
        price: 250000,
        consumption: 12.3,
        fuel: 1.80,
        insurance: 3500,
        maintenance: 3000,
        power: 650,
        type: "Performance"
    },

    {
        name: "Porsche Cayenne",
        price: 100000,
        consumption: 10.5,
        fuel: 1.80,
        insurance: 1900,
        maintenance: 1600,
        power: 353,
        type: "SUV"
    },


    /* =========================
       MERCEDES
    ========================= */

    {
        name: "Mercedes-AMG A45",
        price: 75000,
        consumption: 9.2,
        fuel: 1.80,
        insurance: 1700,
        maintenance: 1300,
        power: 421,
        type: "Performance"
    },

    {
        name: "Mercedes-AMG C63",
        price: 120000,
        consumption: 7.5,
        fuel: 1.80,
        insurance: 2200,
        maintenance: 1800,
        power: 680,
        type: "Performance"
    },

    {
        name: "Mercedes-AMG GT",
        price: 170000,
        consumption: 12.0,
        fuel: 1.80,
        insurance: 2800,
        maintenance: 2500,
        power: 585,
        type: "Sports car"
    },

    {
        name: "Mercedes-Benz G-Class",
        price: 150000,
        consumption: 14.0,
        fuel: 1.80,
        insurance: 3000,
        maintenance: 2300,
        power: 585,
        type: "SUV"
    },


    /* =========================
       FERRARI
    ========================= */

    {
        name: "Ferrari 296 GTB",
        price: 300000,
        consumption: 6.4,
        fuel: 1.80,
        insurance: 5000,
        maintenance: 4500,
        power: 830,
        type: "Supercar"
    },

    {
        name: "Ferrari F8 Tributo",
        price: 280000,
        consumption: 12.9,
        fuel: 1.80,
        insurance: 5000,
        maintenance: 4500,
        power: 720,
        type: "Supercar"
    },

    {
        name: "Ferrari 812 Superfast",
        price: 340000,
        consumption: 16.1,
        fuel: 1.80,
        insurance: 5500,
        maintenance: 5000,
        power: 800,
        type: "Supercar"
    },

    {
        name: "Ferrari SF90 Stradale",
        price: 450000,
        consumption: 6.1,
        fuel: 1.80,
        insurance: 7000,
        maintenance: 6000,
        power: 1000,
        type: "Hypercar"
    },

    {
        name: "Ferrari Purosangue",
        price: 390000,
        consumption: 17.3,
        fuel: 1.80,
        insurance: 6000,
        maintenance: 5000,
        power: 725,
        type: "SUV"
    },


    /* =========================
       LAMBORGHINI
    ========================= */

    {
        name: "Lamborghini Huracan",
        price: 240000,
        consumption: 14.5,
        fuel: 1.80,
        insurance: 4500,
        maintenance: 4000,
        power: 640,
        type: "Supercar"
    },

    {
        name: "Lamborghini Aventador",
        price: 400000,
        consumption: 17.9,
        fuel: 1.80,
        insurance: 6000,
        maintenance: 5500,
        power: 770,
        type: "Supercar"
    },

    {
        name: "Lamborghini Revuelto",
        price: 550000,
        consumption: 11.7,
        fuel: 1.80,
        insurance: 7000,
        maintenance: 6000,
        power: 1015,
        type: "Supercar"
    },

    {
        name: "Lamborghini Urus",
        price: 260000,
        consumption: 14.1,
        fuel: 1.80,
        insurance: 4500,
        maintenance: 3500,
        power: 666,
        type: "SUV"
    },


    /* =========================
       MCLAREN
    ========================= */

    {
        name: "McLaren 720S",
        price: 300000,
        consumption: 12.2,
        fuel: 1.80,
        insurance: 5000,
        maintenance: 4500,
        power: 720,
        type: "Supercar"
    },

    {
        name: "McLaren 750S",
        price: 350000,
        consumption: 12.2,
        fuel: 1.80,
        insurance: 5500,
        maintenance: 4500,
        power: 750,
        type: "Supercar"
    },

    {
        name: "McLaren Artura",
        price: 250000,
        consumption: 4.8,
        fuel: 1.80,
        insurance: 4000,
        maintenance: 3500,
        power: 700,
        type: "Supercar"
    },


    /* =========================
       FORD
    ========================= */

    {
        name: "Ford Mustang GT",
        price: 65000,
        consumption: 12.0,
        fuel: 1.80,
        insurance: 1500,
        maintenance: 1100,
        power: 446,
        type: "Sports car"
    },

    {
        name: "Ford Mustang Dark Horse",
        price: 75000,
        consumption: 13.0,
        fuel: 1.80,
        insurance: 1800,
        maintenance: 1300,
        power: 453,
        type: "Performance"
    },


    /* =========================
       NISSAN
    ========================= */

    {
        name: "Nissan GT-R",
        price: 150000,
        consumption: 12.0,
        fuel: 1.80,
        insurance: 2500,
        maintenance: 2200,
        power: 570,
        type: "Sports car"
    },


    /* =========================
       TOYOTA
    ========================= */

    {
        name: "Toyota GR86",
        price: 35000,
        consumption: 8.8,
        fuel: 1.80,
        insurance: 900,
        maintenance: 700,
        power: 234,
        type: "Sports car"
    },

    {
        name: "Toyota GR Supra",
        price: 70000,
        consumption: 8.9,
        fuel: 1.80,
        insurance: 1300,
        maintenance: 900,
        power: 340,
        type: "Sports car"
    },

    {
        name: "Toyota GR Yaris",
        price: 50000,
        consumption: 8.5,
        fuel: 1.80,
        insurance: 1000,
        maintenance: 700,
        power: 280,
        type: "Performance"
    },


    /* =========================
       VOLKSWAGEN
    ========================= */

    {
        name: "Volkswagen Golf GTI",
        price: 50000,
        consumption: 7.5,
        fuel: 1.80,
        insurance: 900,
        maintenance: 700,
        power: 265,
        type: "Performance"
    },

    {
        name: "Volkswagen Golf R",
        price: 60000,
        consumption: 8.0,
        fuel: 1.80,
        insurance: 1100,
        maintenance: 800,
        power: 333,
        type: "Performance"
    },


    /* =========================
       TESLA
    ========================= */

    {
        name: "Tesla Model 3",
        price: 45000,
        consumption: 15.0,
        fuel: 0,
        insurance: 900,
        maintenance: 500,
        power: 498,
        type: "Electric"
    },

    {
        name: "Tesla Model S",
        price: 100000,
        consumption: 18.0,
        fuel: 0,
        insurance: 1600,
        maintenance: 700,
        power: 670,
        type: "Electric"
    },

    {
        name: "Tesla Model Y",
        price: 50000,
        consumption: 16.5,
        fuel: 0,
        insurance: 900,
        maintenance: 500,
        power: 384,
        type: "Electric"
    }

];


/* =========================================================
   SHORTCUT
========================================================= */

const $ = id => document.getElementById(id);


/* =========================================================
   ELEMENTS
========================================================= */

const carInput = $("carName");

const suggestions =
    $("suggestions");

let activeIndex = -1;


/* =========================================================
   CURRENCY
========================================================= */

function euro(value, decimals = 0) {

    return new Intl.NumberFormat(
        "en-US",
        {
            style: "currency",
            currency: "EUR",
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals
        }
    ).format(value);

}


/* =========================================================
   GET NUMBER
========================================================= */

function number(id) {

    const value =
        parseFloat(
            $(id).value
        );


    if (
        Number.isFinite(value)
        &&
        value >= 0
    ) {

        return value;

    }


    return 0;

}


/* =========================================================
   AUTOCOMPLETE
========================================================= */

function showSuggestions() {

    const query =
        carInput.value
            .trim()
            .toLowerCase();


    if (!query) {

        suggestions
            .classList
            .remove("show");

        return;

    }


    const matches =
        cars
            .filter(car =>
                car.name
                    .toLowerCase()
                    .includes(query)
            )
            .slice(0, 8);


    if (!matches.length) {

        suggestions.innerHTML = `

            <div class="suggestion">

                <span>
                    No match. You can keep typing.
                </span>

            </div>

        `;

    }

    else {

        suggestions.innerHTML =
            matches
                .map(
                    (car, index) => `

                        <div
                            class="suggestion ${
                                index === activeIndex
                                    ? "active"
                                    : ""
                            }"
                            data-index="${cars.indexOf(car)}"
                        >

                            <span>
                                ${highlight(
                                    car.name,
                                    query
                                )}
                            </span>

                            <small>
                                ${car.power} hp
                            </small>

                        </div>

                    `
                )
                .join("");

    }


    suggestions
        .classList
        .add("show");

}


/* =========================================================
   HIGHLIGHT
========================================================= */

function highlight(text, query) {

    const index =
        text
            .toLowerCase()
            .indexOf(query);


    if (index === -1) {

        return text;

    }


    return (

        text.slice(0, index)

        +

        "<b>"

        +

        text.slice(
            index,
            index + query.length
        )

        +

        "</b>"

        +

        text.slice(
            index + query.length
        )

    );

}


/* =========================================================
   INPUT
========================================================= */

carInput.addEventListener(
    "input",
    () => {

        $("clearCar").style.display =
            carInput.value
                ? "block"
                : "none";


        activeIndex = -1;

        showSuggestions();

    }
);


/* =========================================================
   SELECT CAR
========================================================= */

suggestions.addEventListener(
    "mousedown",
    event => {

        const item =
            event.target.closest(
                ".suggestion[data-index]"
            );


        if (!item) {

            return;

        }


        const index =
            Number(
                item.dataset.index
            );


        const car =
            cars[index];


        selectCar(car);

    }
);


/* =========================================================
   SELECT CAR FUNCTION
========================================================= */

function selectCar(car) {

    if (!car) {

        return;

    }


    carInput.value =
        car.name;


    $("clearCar")
        .style
        .display = "block";


    suggestions
        .classList
        .remove("show");


    /*
        Automatically fill
        vehicle information.
    */

    $("carPrice").value =
        car.price;


    $("fuelConsumption").value =
        car.consumption;


    $("fuelPrice").value =
        car.fuel;


    $("insurance").value =
        car.insurance;


    $("maintenance").value =
        car.maintenance;


    /*
        Store selected vehicle
        for later use.
    */

    carInput.dataset.type =
        car.type;


    carInput.dataset.power =
        car.power;


    /*
        Automatically calculate.
    */

    calculate();

}


/* =========================================================
   KEYBOARD NAVIGATION
========================================================= */

carInput.addEventListener(
    "keydown",
    event => {

        const items =
            [
                ...suggestions
                    .querySelectorAll(
                        ".suggestion[data-index]"
                    )
            ];


        if (
            !suggestions
                .classList
                .contains("show")
            ||
            !items.length
        ) {

            return;

        }


        if (
            event.key ===
            "ArrowDown"
        ) {

            event.preventDefault();


            activeIndex =
                Math.min(
                    activeIndex + 1,
                    items.length - 1
                );


            showSuggestions();

        }


        if (
            event.key ===
            "ArrowUp"
        ) {

            event.preventDefault();


            activeIndex =
                Math.max(
                    activeIndex - 1,
                    0
                );


            showSuggestions();

        }


        if (
            event.key ===
            "Enter"
            &&
            activeIndex >= 0
        ) {

            event.preventDefault();


            const index =
                Number(
                    items[
                        activeIndex
                    ].dataset.index
                );


            selectCar(
                cars[index]
            );

        }


        if (
            event.key ===
            "Escape"
        ) {

            suggestions
                .classList
                .remove("show");

        }

    }
);


/* =========================================================
   CLOSE SUGGESTIONS
========================================================= */

document.addEventListener(
    "click",
    event => {

        if (
            !event.target
                .closest(".autocomplete")
        ) {

            suggestions
                .classList
                .remove("show");

        }

    }
);


/* =========================================================
   CLEAR CAR
========================================================= */

$("clearCar")
    .addEventListener(
        "click",
        () => {

            carInput.value =
                "";

            delete carInput.dataset.type;

            delete carInput.dataset.power;


            $("clearCar")
                .style
                .display = "none";


            suggestions
                .classList
                .remove("show");


            carInput.focus();

        }
    );


/* =========================================================
   ADVANCED SECTION
========================================================= */

$("advancedToggle")
    .addEventListener(
        "click",
        () => {

            const content =
                $("advancedContent");


            content
                .classList
                .toggle("hidden");


            $("advancedArrow")
                .textContent =
                    content
                        .classList
                        .contains("hidden")
                        ? "⌄"
                        : "⌃";

        }
    );


/* =========================================================
   CALCULATE
========================================================= */

$("calculateBtn")
    .addEventListener(
        "click",
        calculate
    );


/* =========================================================
   CALCULATION
========================================================= */

function calculate() {

    const name =
        carInput.value.trim()
        ||
        "Your car";


    const consumption =
        number(
            "fuelConsumption"
        );


    const fuelPrice =
        number(
            "fuelPrice"
        );


    const km =
        number(
            "kmPerYear"
        );


    const insurance =
        number(
            "insurance"
        );


    const maintenance =
        number(
            "maintenance"
        );


    const other =
        number(
            "otherCosts"
        );


    const depreciation =
        number(
            "depreciation"
        );


    /*
        Fuel calculation.

        Electric cars currently use
        kWh/100 km in the same field,
        but this will be improved
        in a future version.
    */

    const fuel =
        (
            km / 100
        )
        *
        consumption
        *
        fuelPrice;


    const total =
        fuel
        +
        insurance
        +
        maintenance
        +
        other
        +
        depreciation;


    const monthly =
        total / 12;


    const perKm =
        km > 0
            ? total / km
            : 0;


    /* =====================================================
       RESULTS
    ===================================================== */

    $("resultCarName")
        .textContent =
            name;


    $("annualCost")
        .textContent =
            euro(total);


    $("monthlyCost")
        .textContent =
            euro(monthly);


    $("costPerKm")
        .textContent =
            euro(
                perKm,
                2
            );


    $("fuelCost")
        .textContent =
            euro(fuel);


    $("fuelMonthly")
        .textContent =
            euro(
                fuel / 12
            );


    $("breakdownFuel")
        .textContent =
            euro(fuel);


    $("breakdownInsurance")
        .textContent =
            euro(insurance);


    $("breakdownMaintenance")
        .textContent =
            euro(maintenance);


    $("breakdownOther")
        .textContent =
            euro(other);


    $("breakdownDepreciation")
        .textContent =
            euro(depreciation);


    $("breakdownTotal")
        .textContent =
            euro(total);


    $("depreciationRow")
        .classList
        .toggle(
            "hidden",
            depreciation <= 0
        );


    $("emptyState")
        .classList
        .add("hidden");


    $("results")
        .classList
        .remove("hidden");


    /* =====================================================
       INSIGHT
    ===================================================== */

    const costs = [

        ["fuel", fuel],

        ["insurance", insurance],

        ["maintenance", maintenance],

        ["other costs", other],

        ["depreciation", depreciation]

    ];


    costs.sort(
        (a, b) =>
            b[1] - a[1]
    );


    const biggest =
        costs[0];


    if (
        biggest[1] > 0
    ) {

        $("insightText")
            .innerHTML =

                `Your biggest cost is
                <b>${biggest[0]}</b>
                at
                <b>${euro(biggest[1])}</b>
                per year.`;

    }

    else {

        $("insightText")
            .textContent =

                "Add some costs to get a more useful estimate.";

    }

}


/* =========================================================
   RESET
========================================================= */

$("resetBtn")
    .addEventListener(
        "click",
        () => {

            document
                .querySelectorAll("input")
                .forEach(
                    input =>
                        input.value = ""
                );


            $("fuelPrice")
                .value = "1.80";


            $("kmPerYear")
                .value = "15000";


            $("results")
                .classList
                .add("hidden");


            $("emptyState")
                .classList
                .remove("hidden");


            $("depreciationRow")
                .classList
                .add("hidden");


            $("clearCar")
                .style
                .display = "none";


            suggestions
                .classList
                .remove("show");

        }
    );
