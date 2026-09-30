/* =========================
   STORAGE
========================= */

function getData(name) {

    return JSON.parse(
        localStorage.getItem(name) || "[]"
    );

}


function saveData(name, data) {

    localStorage.setItem(
        name,
        JSON.stringify(data)
    );

}


/* =========================
   CROPS
========================= */

function addCrop() {

    const name =
        document.getElementById("cropName").value;

    const field =
        document.getElementById("cropField").value;

    const date =
        document.getElementById("cropDate").value;


    if (!name || !field || !date) {

        alert("Please fill all fields.");

        return;
    }


    const crops = getData("crops");


    crops.push({

        name: name,
        field: field,
        date: date

    });


    saveData("crops", crops);


    document.getElementById("cropName").value = "";
    document.getElementById("cropField").value = "";
    document.getElementById("cropDate").value = "";


    displayCrops();

    updateDashboard();

}


function displayCrops() {

    const table =
        document.getElementById("cropTable");


    if (!table) return;


    const crops = getData("crops");


    table.innerHTML = "";


    crops.forEach((crop, index) => {

        table.innerHTML += `

            <tr>

                <td>${crop.name}</td>

                <td>${crop.field}</td>

                <td>${crop.date}</td>

                <td>
                    <button
                        class="delete"
                        onclick="deleteCrop(${index})">
                        Delete
                    </button>
                </td>

            </tr>

        `;

    });

}


function deleteCrop(index) {

    const crops = getData("crops");

    crops.splice(index, 1);

    saveData("crops", crops);

    displayCrops();

    updateDashboard();

}


/* =========================
   FIELDS
========================= */

function addField() {

    const name =
        document.getElementById("fieldName").value;

    const size =
        document.getElementById("fieldSize").value;

    const crop =
        document.getElementById("fieldCrop").value;


    if (!name || !size || !crop) {

        alert("Please fill all fields.");

        return;
    }


    const fields = getData("fields");


    fields.push({

        name: name,
        size: size,
        crop: crop

    });


    saveData("fields", fields);


    document.getElementById("fieldName").value = "";
    document.getElementById("fieldSize").value = "";
    document.getElementById("fieldCrop").value = "";


    displayFields();

    updateDashboard();

}


function displayFields() {

    const table =
        document.getElementById("fieldTable");


    if (!table) return;


    const fields = getData("fields");


    table.innerHTML = "";


    fields.forEach((field, index) => {

        table.innerHTML += `

            <tr>

                <td>${field.name}</td>

                <td>${field.size} acres</td>

                <td>${field.crop}</td>

                <td>

                    <button
                        class="delete"
                        onclick="deleteField(${index})">

                        Delete

                    </button>

                </td>

            </tr>

        `;

    });

}


function deleteField(index) {

    const fields = getData("fields");

    fields.splice(index, 1);

    saveData("fields", fields);

    displayFields();

    updateDashboard();

}


/* =========================
   LIVESTOCK
========================= */

function addAnimal() {

    const type =
        document.getElementById("animalType").value;

    const count =
        document.getElementById("animalCountInput").value;


    if (!type || !count) {

        alert("Please enter animal details.");

        return;
    }


    const animals = getData("animals");


    animals.push({

        type: type,
        count: Number(count)

    });


    saveData("animals", animals);


    document.getElementById("animalType").value = "";
    document.getElementById("animalCountInput").value = "";


    displayAnimals();

    updateDashboard();

}


function displayAnimals() {

    const table =
        document.getElementById("animalTable");


    if (!table) return;


    const animals = getData("animals");


    table.innerHTML = "";


    animals.forEach((animal, index) => {

        table.innerHTML += `

            <tr>

                <td>${animal.type}</td>

                <td>${animal.count}</td>

                <td>

                    <button
                        class="delete"
                        onclick="deleteAnimal(${index})">

                        Delete

                    </button>

                </td>

            </tr>

        `;

    });

}


function deleteAnimal(index) {

    const animals = getData("animals");

    animals.splice(index, 1);

    saveData("animals", animals);

    displayAnimals();

    updateDashboard();

}


/* =========================
   EXPENSES
========================= */

function addExpense() {

    const name =
        document.getElementById("expenseName").value;

    const amount =
        document.getElementById("expenseAmount").value;


    if (!name || !amount) {

        alert("Please enter expense details.");

        return;
    }


    const expenses = getData("expenses");


    expenses.push({

        name: name,

        amount: Number(amount)

    });


    saveData("expenses", expenses);


    document.getElementById("expenseName").value = "";
    document.getElementById("expenseAmount").value = "";


    displayExpenses();

    updateDashboard();

}


function displayExpenses() {

    const table =
        document.getElementById("expenseTable");


    if (!table) return;


    const expenses = getData("expenses");


    table.innerHTML = "";


    expenses.forEach((expense, index) => {

        table.innerHTML += `

            <tr>

                <td>${expense.name}</td>

                <td>₹${expense.amount}</td>

                <td>

                    <button
                        class="delete"
                        onclick="deleteExpense(${index})">

                        Delete

                    </button>

                </td>

            </tr>

        `;

    });

}


function deleteExpense(index) {

    const expenses = getData("expenses");

    expenses.splice(index, 1);

    saveData("expenses", expenses);

    displayExpenses();

    updateDashboard();

}


/* =========================
   HARVEST
========================= */

function addHarvest() {

    const crop =
        document.getElementById("harvestCrop").value;

    const quantity =
        document.getElementById("harvestQuantity").value;


    if (!crop || !quantity) {

        alert("Please enter harvest details.");

        return;
    }


    const harvest =
        getData("harvest");


    harvest.push({

        crop: crop,

        quantity: Number(quantity)

    });


    saveData("harvest", harvest);


    document.getElementById("harvestCrop").value = "";
    document.getElementById("harvestQuantity").value = "";


    displayHarvest();

}


function displayHarvest() {

    const table =
        document.getElementById("harvestTable");


    if (!table) return;


    const harvest = getData("harvest");


    table.innerHTML = "";


    harvest.forEach((item, index) => {

        table.innerHTML += `

            <tr>

                <td>${item.crop}</td>

                <td>${item.quantity} kg</td>

                <td>

                    <button
                        class="delete"
                        onclick="deleteHarvest(${index})">

                        Delete

                    </button>

                </td>

            </tr>

        `;

    });

}


function deleteHarvest(index) {

    const harvest = getData("harvest");

    harvest.splice(index, 1);

    saveData("harvest", harvest);

    displayHarvest();

}


/* =========================
   SALES
========================= */

function addSale() {

    const crop =
        document.getElementById("saleCrop").value;

    const quantity =
        document.getElementById("saleQuantity").value;

    const amount =
        document.getElementById("saleAmount").value;


    if (!crop || !quantity || !amount) {

        alert("Please fill all fields.");

        return;
    }


    const sales = getData("sales");


    sales.push({

        crop: crop,

        quantity: Number(quantity),

        amount: Number(amount)

    });


    saveData("sales", sales);


    document.getElementById("saleCrop").value = "";
    document.getElementById("saleQuantity").value = "";
    document.getElementById("saleAmount").value = "";


    displaySales();

}


function displaySales() {

    const table =
        document.getElementById("saleTable");


    if (!table) return;


    const sales = getData("sales");


    table.innerHTML = "";


    sales.forEach((sale, index) => {

        table.innerHTML += `

            <tr>

                <td>${sale.crop}</td>

                <td>${sale.quantity}</td>

                <td>₹${sale.amount}</td>

                <td>

                    <button
                        class="delete"
                        onclick="deleteSale(${index})">

                        Delete

                    </button>

                </td>

            </tr>

        `;

    });

}


function deleteSale(index) {

    const sales = getData("sales");

    sales.splice(index, 1);

    saveData("sales", sales);

    displaySales();

}


/* =========================
   DASHBOARD
========================= */

function updateDashboard() {

    const crops = getData("crops");

    const fields = getData("fields");

    const animals = getData("animals");

    const expenses = getData("expenses");

    const sales = getData("sales");


    const cropElement =
        document.getElementById("cropCount");


    if (cropElement) {

        cropElement.textContent =
            crops.length;

    }


    const fieldElement =
        document.getElementById("fieldCount");


    if (fieldElement) {

        fieldElement.textContent =
            fields.length;

    }


    let animalTotal = 0;


    animals.forEach(animal => {

        animalTotal += Number(animal.count);

    });


    const animalElement =
        document.getElementById("animalCount");


    if (animalElement) {

        animalElement.textContent =
            animalTotal;

    }


    let expenseTotal = 0;


    expenses.forEach(expense => {

        expenseTotal += Number(expense.amount);

    });


    const expenseElement =
        document.getElementById("expenseTotal");


    if (expenseElement) {

        expenseElement.textContent =
            "₹" + expenseTotal;

    }


    /* REPORT PAGE */

    const reportCrops =
        document.getElementById("reportCrops");

    if (reportCrops)
        reportCrops.textContent = crops.length;


    const reportFields =
        document.getElementById("reportFields");

    if (reportFields)
        reportFields.textContent = fields.length;


    const reportAnimals =
        document.getElementById("reportAnimals");

    if (reportAnimals)
        reportAnimals.textContent = animalTotal;


    const reportExpenses =
        document.getElementById("reportExpenses");

    if (reportExpenses)
        reportExpenses.textContent =
            "₹" + expenseTotal;


    let saleTotal = 0;


    sales.forEach(sale => {

        saleTotal += Number(sale.amount);

    });


    const reportSales =
        document.getElementById("reportSales");


    if (reportSales)
        reportSales.textContent =
            "₹" + saleTotal;

}


/* =========================
   PAGE LOAD
========================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        displayCrops();

        displayFields();

        displayAnimals();

        displayExpenses();

        displayHarvest();

        displaySales();

        updateDashboard();

    }
);