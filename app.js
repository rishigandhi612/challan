
// Array to hold items
var filmItems = [];
var adhesiveItems = [];
var totalItems = [];
document.getElementById("addFilmItemToTable");  // For Film Item
document.getElementById("addAdhesiveItemToTable");  // For Adhesive Item


document.getElementById('sb').addEventListener('click', generateChallan);

// Function to apply manual customer details
function applyManualDetails() {
    var customerName = document.getElementById('customerName').value;
    var customerAddress = document.getElementById('customerAddress').value;
    var customerPhone = document.getElementById('customerPhone').value;
    var transporterName = document.getElementById('transporterName').value;
    var customerGSTnumber = document.getElementById('customergstno').value;

    // Update the input fields with the manual entry details
    document.getElementById('customerName').value = customerName;
    document.getElementById('customerAddress').value = customerAddress;
    document.getElementById('customerPhone').value = customerPhone;
    document.getElementById('transporterName').value = transporterName;
    document.getElementById('customergstno').value = customerGSTnumber;

    // Hide the input fields
    document.getElementById('customerDetailsInput').style.display = 'none';
}

// Global variables for totals
let filmTotal = 0;
let adhesiveTotal = 0;

function selectCustomerDetails() {
    const customerDetailsInput = document.getElementById('customerDetailsInput');
    customerDetailsInput.style.display = 'block';
}

function applyManualDetails() {
    const customerName = document.getElementById('customerName').value;
    const customerAddress = document.getElementById('customerAddress').value;
    const customerPhone = document.getElementById('customerPhone').value;
    const transporterName = document.getElementById('transporterName').value;
    const customergstno = document.getElementById('customergstno').value;
    
    // Here, you can handle the data as needed, e.g., display it or store it in variables
    console.log(customerName, customerAddress, customerPhone, transporterName, customergstno);
}

function addItemToTable(category) {
    const itemName = document.getElementById('itemName').value;
    const itemWidth = parseFloat(document.getElementById('itemWidth').value);
    const itemQuantity = parseFloat(document.getElementById('itemQuantity').value);
    const itemRate = parseFloat(document.getElementById('itemRate').value);
    const otherCharges = parseFloat(document.getElementById('otherCharges').value);

    if (!itemName || !itemWidth || !itemQuantity || !itemRate || isNaN(otherCharges)) {
        alert('Please fill in all fields!');
        return;
    }

    const amount = (itemQuantity * itemRate) + otherCharges;

    if (category === 'film') {
        addFilmItem(itemName, itemWidth, itemQuantity, amount);
    } else {
        addAdhesiveItem(itemName, itemQuantity, amount);
    }
}

function addFilmItem(itemName, itemWidth, itemQuantity, amount) {
    // Add the item to the film table
    const filmTableBody = document.getElementById('filmTableBody');
    const row = filmTableBody.insertRow();
    row.insertCell(0).innerText = itemName;
    row.insertCell(1).innerText = itemWidth + " mm";
    row.insertCell(2).innerText = itemQuantity + " kg";
    row.insertCell(3).innerText = amount;

    // Update film total
    filmTotal += amount;
    document.getElementById('filmTotal').innerText = filmTotal;
    document.getElementById('grandTotal').innerText = filmTotal + adhesiveTotal;

    // Show film table if hidden
    document.getElementById('filmTable').style.display = 'table';
}

function addAdhesiveItem(itemName, itemQuantity, amount) {
    // Add the item to the adhesive table
    const adhesiveTableBody = document.getElementById('adhesiveTableBody');
    const row = adhesiveTableBody.insertRow();
    row.insertCell(0).innerText = itemName;
    row.insertCell(1).innerText = itemQuantity + " kg";
    row.insertCell(2).innerText = amount;

    // Update adhesive total
    adhesiveTotal += amount;
    document.getElementById('adhesiveTotal').innerText = adhesiveTotal;
    document.getElementById('grandTotal').innerText = filmTotal + adhesiveTotal;

    // Show adhesive table if hidden
    document.getElementById('adhesiveTable').style.display = 'table';
}

document.getElementById('sb').addEventListener('click', () => {
    const challanNumber = document.getElementById('challanNumber').value;

    if (!challanNumber) {
        alert('Please enter a challan number!');
        return;
    }

    // Display or generate the challan based on your requirements
    const challanDetails = `
        <h3>Challan Number: ${challanNumber}</h3>
        <p>Film Total: ₹${filmTotal}</p>
        <p>Adhesive Total: ₹${adhesiveTotal}</p>
        <p>Grand Total: ₹${filmTotal + adhesiveTotal}</p>
    `;

    document.getElementById('cnv').innerHTML = challanDetails;
});


function addTotalRow(items, rowTitle, totalAmount) {
    // Get table body by ID
    const tableBody = document.getElementById("filmTableBody") || document.getElementById("adhesiveTableBody");

    // Ensure the table body exists before proceeding
    if (!tableBody) {
        console.error("Table or table body not found");
        return;  // Exit the function if table body is not found
    }

    // Create a new row
    const newRow = tableBody.insertRow();
    newRow.innerHTML = `
        <td colspan="3"><b>${rowTitle}</b></td>
        <td>${totalAmount}</td>
    `;
}

function generateChallan() {
    const filmItems = [];  // Replace with your actual data
    const adhesiveItems = [];  // Replace with your actual data

    const filmTotal = calculateTotalAmount(filmItems);
    const adhesiveTotal = calculateTotalAmount(adhesiveItems);
    const cgstAmount = calculateGST([...filmItems, ...adhesiveItems], 0.09);
    const sgstAmount = calculateGST([...filmItems, ...adhesiveItems], 0.09);

    const totalAmount = filmTotal + adhesiveTotal + cgstAmount + sgstAmount;

    // Add totals to the table
    addTotalRow(filmItems, "Film Total", filmTotal);
    addTotalRow(adhesiveItems, "Adhesive Total", adhesiveTotal);

    // Add GST totals and Grand Total
    addTotalRow([{ description: "CGST@9%", amount: cgstAmount }, { description: "SGST@9%", amount: sgstAmount }], "GST Details", cgstAmount + sgstAmount);
    addTotalRow([{ description: "Total", amount: totalAmount }], "Grand Total", totalAmount);

    // Ensure the tables are visible
    document.getElementById("filmTable").style.display = 'table';
    document.getElementById("adhesiveTable").style.display = 'table';
}



// Function to calculate total amount for items
function calculateTotalAmount(items) {
    return items.reduce((total, item) => total + (item.quantity * item.rate), 0);
}

// Function to calculate GST for all items
function calculateGST(items, rate) {
    return items.reduce((total, item) => total + (item.quantity * item.rate * rate), 0);
}


// Helper functions to calculate GST, total, and append rows
function calculateGST(items, rate) {
    return items.reduce((sum, item) => sum + (item.amount * rate), 0);
}

function calculateTotalAmount(items) {
    return items.reduce((sum, item) => sum + item.amount, 0);
}

function addTotalRow(items, description, totalAmount) {
    const tableBody = document.getElementById("totalTableBody");
    const table = document.getElementById("totalTable");

    if (tableBody && table) {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td><b>${description}</b></td>
            <td>${totalAmount.toFixed(2)}</td>
        `;
        tableBody.appendChild(row);
        table.style.display = "table";
    } else {
        console.error("Table or table body not found");
    }
}
