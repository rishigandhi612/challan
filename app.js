var itemsArray = [];
var customers = [
  {
    name: "Aditya Industrial Supplier",
    address:
      "Gut No.39, Plot No.8157, Behind Seven Three Heater, CEAT Road, MIDC Waluj Aurangabad -431136.",
    phone: "9673001214,9834772728",
    transporter: "Option Transport Pvt Ltd",
    gst: "27AJJPB3646H1ZA",
  },
  {
    name: "S.S.Enterprises",
    address:
      "301,Heera Plaza,Near Telephone Exchange,867,C.A.Road,Nagpur - 440008",
    phone: "9373129863",
    transporter: "Shree Jay Roadways",
    gst: "27AJLPK3004A1ZT",
  },
  {
    name: "Quality Print & Pack",
    address: "N-97/3,MIDC,Jalgaon",
    phone: "9823292558",
    transporter: "Arco Roadways",
    gst: "27AHHPC6839P2ZP",
  },
  {
    name: "Ashutosh Printing and Packaging",
    address:
      "Shop No. 5/6, New Bhadrawati Complex, Nr Laxminarayan Talkies, M.I.D.C. Road, Solapur",
    phone: "9895471712 /8379898405",
    transporter: "NavSamata Transport",
    gst: "27ANJPK1190M1ZN",
  },
  {
    name: "S S Print Lamination",
    address: "Kolhapur",
    phone: "9766624215",
    transporter: "Sandesh Transport",
    gst: "",
  },
  {
    name: "Vimal Enterprises",
    address: "31,Anand Hsg Soc Shahunagar, Godoli, Satara",
    phone: "9226434388",
    transporter: "JayRam Transport",
    gst: "",
  },
  {
    name: "Rohit Offset",
    address: "Bhutkarwadi,Bhingardive, Savedi Road, Ahmednagar - 414003.",
    phone: "+91 92253 20870",
    transporter: "Jaggi Goods Transport",
    gst: "27AJMPB0572H1ZC",
  },
  {
    name: "Quality Screens",
    address: "P-74,MIDC,Mirjole,Ratnagiri - 415639",
    phone: "( +91 ) 9604002117.",
    transporter: "Jagruti Transport",
    gst: "27AAZPJ3191Q1ZM",
  },
  {
    name: "Vinand Post Print",
    address: "110/112 Shukrawar Peth Tilak Chowk Solapur - 413000",
    phone: "( +91 ) 9890277712.",
    transporter: "Chandrakant Transport",
    gst: "27AAVHS8340E1ZM",
  },
  {
    name: "Sai Packaging Industriaes",
    address:
      "SR NO 1/2 FLAT NO 6 BLDG B NILESH PARK OPPO ADARSHA HOSPITAL KONDHWA BK TAL HAVELI,DIST PUNE",
    phone: "( +91 ) 9422554364.",
    transporter: "Jethabhai Doongarshi Transport Co.",
    gst: "27AOOPD4005J1Z1",
  },
  {
    name: "Sapna Industries",
    address:
      "#8,Al-Abrar Complex,Near Abrar Masjid, Khareband,Sirvodem, Margoa-Goa - 403601.",
    phone: "( +91 ) ( 0832 ) 2734091. 9343653776.",
    transporter: "Reema Transport Pvt Ltd.",
    gst: "30AFAPM5966L1ZA",
  },
    {
    name: "Sonali suppliers",
    address:
      "Ahilyanagar",
    phone: "982249421",
    transporter: "Jaggi Goods Carrier",
    gst: "",
  },

  // Add more customers as needed
];
var generateChallanClicked = false;
// var isHemantTraders = false; // Default to A N Sales

// Determine if Hemant Traders or A N Sales is selected
var selectedOption = document.getElementById("companySelect").value;
var isHemantTraders = selectedOption === "hemant"; // Check if Hemant Traders is selected

document.getElementById("addItem").addEventListener("click", addItemToTable);
document.getElementById("sb").addEventListener("click", generatechallan);
document.getElementById("companySelect").addEventListener("change", updateCompanyDetails);


function addItemToTable() {
  if (generateChallanClicked) {
    alert("Generate Challan button clicked. Cannot add more items.");
    return;
  }

  var itemName = document.getElementById("itemName").value;
  var itemWidth = document.getElementById("itemWidth").value;
  var itemQuantity = parseFloat(document.getElementById("itemQuantity").value);
  var itemRate = parseFloat(document.getElementById("itemRate").value);
  var otherCharges = parseFloat(document.getElementById("otherCharges").value) || 0;

  // Input Validation
  if (!itemName || isNaN(itemQuantity) || itemQuantity <= 0 || isNaN(itemRate) || itemRate <= 0) {
    alert("Please provide valid inputs for Item Name, Quantity, and Rate.");
    return;
  }

  // Film type validation for width
  var category = document
    .getElementById("itemName")
    .selectedOptions[0].getAttribute("data-category");

  if (category === "film" && (!itemWidth || parseFloat(itemWidth) <= 0)) {
    alert("Width is required and must be valid for film types.");
    return;
  }

  // Adjust width and quantity formatting
  var formattedWidth = parseFloat(itemWidth) > 60 ? `${itemWidth} mm` : `${itemWidth}"`;
  var formattedQuantity = `${itemQuantity.toFixed(3)} Kgs`;

  // Calculate total amount
  var itemAmount = itemQuantity * itemRate + otherCharges;

  // Apply GST if Hemant Traders is selected
  if (isHemantTraders) {
    const gstRate = 0.18; // 18% GST
    const gstAmount = itemAmount * gstRate;
    itemAmount += gstAmount;
  }

  // Debugging
  console.log("Item Amount (after GST, if applicable):", itemAmount);

  // Add item to array
  var item = {
    name: itemName,
    width: formattedWidth,
    quantity: formattedQuantity,
    amount: itemAmount,
  };
  itemsArray.push(item);

  // Display table headers (if not visible)
  document.getElementById("itemsTable").style.display = "table";

  // Append row to table
  var tableBody = document.getElementById("itemsTableBody");
  var newRow = tableBody.insertRow();
  newRow.innerHTML = `
    <td>${itemName}</td>
    <td>${formattedWidth}</td>
    <td>${formattedQuantity}</td>
    <td>₹${itemAmount.toFixed(2)}</td>
  `;

  // Clear input fields
  document.getElementById("itemQuantity").value = "";
  document.getElementById("itemWidth").value = "";
  document.getElementById("itemRate").value = "";
  document.getElementById("otherCharges").value = "";
}

function generatechallan() {
  console.log("Generate button clicked");
  if (itemQuantity <= 0 || itemRate <= 0) {
      alert("Quantity and Rate must be positive numbers.");
      return;
  }

  // Show alert for Hemant Traders
  if (isHemantTraders) {
      alert("GST will be applied for Hemant Traders.");
  }

  generateChallanClicked = true;

  var challanNumber = document.getElementById("challanNumber").value;
  var customerName = document.getElementById("customerName").value;
  var customerAddress = document.getElementById("customerAddress").value;
  var customerPhone = document.getElementById("customerPhone").value;
  var transporterName = document.getElementById("transporterName").value;
  var customerGSTnumber = document.getElementById("customergstno").value;
  var now = new Date();
  var day = now.getDate().toString().padStart(2, "0");
  var month = (now.getMonth() + 1).toString().padStart(2, "0");
  var year = now.getFullYear().toString().slice(-2);
  var dateString = day + "-" + month + "-" + "20" + year;

  var itemsTable = document.getElementById("itemsTableBody");

  // Declare GST amounts (initialize to 0)
  var cgstAmount = 0;
  var sgstAmount = 0;

  // Apply GST if Hemant Traders
  if (isHemantTraders) {
      // Calculate CGST and SGST for Hemant Traders (18% GST, split as 9% CGST and 9% SGST)
      const gstData = calculateGST(itemsArray);
      cgstAmount = gstData.cgstAmount;
      sgstAmount = gstData.sgstAmount;
  }

  // Debugging: Log calculated CGST and SGST amounts
  console.log("CGST Amount: ", cgstAmount);
  console.log("SGST Amount: ", sgstAmount);

  // Calculate total weight
  var totalWeight = itemsArray.reduce((total, item) => {
    const quantity = parseFloat(item.quantity) || 0; // Parse and default to 0 if invalid
    return total + quantity;
}, 0);

console.log("Total Weight:", totalWeight); // Ensure this logs a valid number
// Calculate total amount from itemsArray
var totalItemAmount = calculateTotalAmount(itemsArray); // Ensure itemsArray is valid
console.log("Total Item Amount (Before GST):", totalItemAmount); // Debugging

// Use totalItemAmount in subsequent calculations or display logic

// Ensure totalWeight is a number before calling toFixed()
console.log("Total Weight: ", totalWeight);
document.getElementById('cnv').innerHTML = `
   
`;
console.log("Items Array: ", itemsArray);

// Add rows for Total Weight and Total Amount (Before GST) above CGST row
var weightRow = itemsTable.insertRow(itemsTable.rows.length);
var weightCell1 = weightRow.insertCell(0);
var weightCell2 = weightRow.insertCell(1);
var weightCell3 = weightRow.insertCell(2);
var weightCell4 = weightRow.insertCell(3);

weightCell1.innerHTML = "";
weightCell2.innerHTML = "TOTAL:";
weightCell3.innerHTML = `<strong>${totalWeight.toFixed(3)} Kgs</strong>`; // 3 decimal places for total weight
weightCell4.innerHTML = `<strong>₹${totalItemAmount.toFixed(2)}</strong>`;// 2 decimal places for amount


  // Add rows for CGST and SGST if Hemant Traders
  if (isHemantTraders) {
      var cgstRow = itemsTable.insertRow(itemsTable.rows.length);
      var cgstCell1 = cgstRow.insertCell(0);
      var cgstCell2 = cgstRow.insertCell(1);
      var cgstCell3 = cgstRow.insertCell(2);
      var cgstCell4 = cgstRow.insertCell(3);

      cgstCell1.innerHTML = "";
      cgstCell2.innerHTML = "ADD:";
      cgstCell3.innerHTML = "CGST@9%";
      cgstCell4.innerHTML = cgstAmount.toFixed(2); // Round off to two decimal places

      var sgstRow = itemsTable.insertRow(itemsTable.rows.length);
      var sgstCell1 = sgstRow.insertCell(0);
      var sgstCell2 = sgstRow.insertCell(1);
      var sgstCell3 = sgstRow.insertCell(2);
      var sgstCell4 = sgstRow.insertCell(3);

      sgstCell1.innerHTML = "";
      sgstCell2.innerHTML = "ADD:";
      sgstCell3.innerHTML = "SGST@9%";
      sgstCell4.innerHTML = sgstAmount.toFixed(2); // Round off to two decimal places
  }

  // Add row with Total Amt (INR)
  var totalRow = itemsTable.insertRow(itemsTable.rows.length);
  var totalCell1 = totalRow.insertCell(0);
  var totalCell2 = totalRow.insertCell(1);
  var totalCell3 = totalRow.insertCell(2);
  var totalCell4 = totalRow.insertCell(3);

  totalCell1.innerHTML = "";
  totalCell2.innerHTML = "";
  totalCell3.innerHTML = "<strong>Total Amt (INR):</strong>";

  // Calculate total amount including GST (if applicable)
  var totalAmount = totalItemAmount + cgstAmount + sgstAmount;

  totalCell4.innerHTML = `<strong>${Math.round(totalAmount)}/-</strong>`;

  // Debugging: Log the total weight and total amount before GST
  console.log("Total Weight: ", totalWeight);
  console.log("Total Amount Before GST: ", totalItemAmount);

  document.getElementById('cnv').innerHTML = `
      <span style="font-size: 10px; font-weight:600;">(ORIGINAL FOR RECIPIENT)</span>
      <div class="row">
          <div class="col-md-12" style="display: flex; justify-content: space-between; text-align: left;">
              <div class="col-md-3" style="text-align: left;">
                  <p>D No.: ${challanNumber}/BWD</p>
              </div>
              <div class="col-md-3" style="text-align: right;">
                  <p>DATE ${dateString}</p>
              </div>
          </div>
      </div>
      <div class="row">
          <div class="col-md-12">
              <p style="display: inline;">M/S</p>
              <h4 style="display: inline;">${customerName}</h4>
          </div>
      </div>
      <h6>
          ${customerAddress ? `<strong>Address:</strong> ${customerAddress}<br>` : ''}
          ${customerPhone ? `<strong>Contact No:</strong> ${customerPhone} <br>` : ''}
          ${customerGSTnumber ? `<strong>GST No:</strong> ${customerGSTnumber} <br>` : ''}
          ${transporterName ? `<strong>Transporter:</strong> ${transporterName}` : ''}
      </h6>
      <p>RECEIVED THE BELOW MENTIONED IN GOOD ORDER AND CONDITION</p>
       <p>Total Weight: ${totalWeight.toFixed(3)} Kgs</p>`;

  // Hide input section
  document.getElementById("inputtable").style.display = "none";

  // Show output section
  document.querySelector(".output").style.display = "block";
  document.querySelector(".footer").style.display = "block";
  window.print();
}

// Function to calculate total amount for all items
function calculateTotalAmount(items) {
  return items.reduce((total, item) => total + item.amount, 0);
}


// Function to calculate GST
function calculateGST(items) {
  const gstRate = 0.18; // 18% GST
  let totalAmount = items.reduce((sum, item) => sum + item.amount, 0);
  let gstAmount = totalAmount * gstRate;
  let cgstAmount = gstAmount / 2;
  let sgstAmount = cgstAmount;
  return { cgstAmount, sgstAmount };
}


function applyManualDetails() {
  // Retrieve values from input fields and update corresponding elements
  var customerName = document.getElementById("customerName").value;
  var customerAddress = document.getElementById("customerAddress").value;
  var customerPhone = document.getElementById("customerPhone").value;
  var transporterName = document.getElementById("transporterName").value;
  var customerGSTnumber = document.getElementById("customergstno").value;

  // Update the input fields with the manual entry details
  document.getElementById("customerName").value = customerName;
  document.getElementById("customerAddress").value = customerAddress;
  document.getElementById("customerPhone").value = customerPhone;
  document.getElementById("transporterName").value = transporterName;
  document.getElementById("customergstno").value = customerGSTnumber;

  // Hide the input fields
  document.getElementById("customerDetailsInput").style.display = "none";
}
// Ensure DOM is loaded before calling functions
document.addEventListener("DOMContentLoaded", function() {
    populateCustomerDropdown();
  });

  // Populate the dropdown with customer names
  function populateCustomerDropdown() {
    var selectElement = document.getElementById("customerSelect");

    // Clear previous options
    selectElement.innerHTML = '<option value="">--Select Customer--</option>';

    // Add customer options to dropdown
    customers.forEach(function (customer, index) {
      var option = document.createElement("option");
      option.value = index;
      option.textContent = customer.name;
      selectElement.appendChild(option);
    });

    // Add "Other" option for manual entry
    var otherOption = document.createElement("option");
    otherOption.value = "other";
    otherOption.textContent = "Other";
    selectElement.appendChild(otherOption);
  }
  // Handle customer selection
  function selectCustomerDetails() {
    var selectedOption = document.getElementById("customerSelect").value;

    if (selectedOption === "other") {
      // Show manual entry fields if "Other" is selected
      document.getElementById("customerDetailsInput").style.display = "block";
      // Clear the input fields for a fresh start
      clearCustomerFields();
    } else if (selectedOption) {
      // User selected a predefined customer
      var selectedCustomer = customers[parseInt(selectedOption)];

      // Update the input fields with the selected customer details
      document.getElementById("customerName").value = selectedCustomer.name;
      document.getElementById("customerAddress").value = selectedCustomer.address;
      document.getElementById("customerPhone").value = selectedCustomer.phone;
      document.getElementById("transporterName").value = selectedCustomer.transporter;
      document.getElementById("customergstno").value = selectedCustomer.gst;
      // Hide manual entry fields if a customer is selected
      document.getElementById("customerDetailsInput").style.display = "none";
    } else {
      // Clear input fields if no customer is selected
      clearCustomerFields();
    }
  }
  // Function to clear input fields
  function clearCustomerFields() {
    document.getElementById("customerName").value = '';
    document.getElementById("customerAddress").value = '';
    document.getElementById("customerPhone").value = '';
    document.getElementById("transporterName").value = '';
    document.getElementById("customergstno").value = '';
  }

  // Save new customer details
  function saveNewCustomer() {
    var newCustomer = {
      name: document.getElementById("newCustomerName").value,
      address: document.getElementById("newCustomerAddress").value,
      phone: document.getElementById("newCustomerPhone").value,
      transporter: document.getElementById("newCustomerTransporter").value,
      gst: document.getElementById("newCustomerGst").value
    };

    // Add to customers array
    customers.push(newCustomer);

    // Optionally, update UI or form
    alert("New customer added!");
    document.getElementById("customerDetailsInput").style.display = "none"; // Hide manual input
    populateCustomerDropdown(); // Refresh dropdown with new customer
  }

function updateCompanyDetails() {
  var selectedCompany = document.getElementById("companySelect").value;

  // Update company-specific details
  updateHeaderImage(selectedCompany);
  applyGSTBasedOnCompany(selectedCompany);
}

function updateHeaderImage(selectedCompany) {
  const headerImage = document.getElementById("headerImage");
  headerImage.src = selectedCompany === "ansales" ? "../ansales.png" : "../hemant.png";
}


function applyGSTBasedOnCompany(selectedCompany) {
  if (selectedCompany === "hemant") {
    isHemantTraders = true;
    alert("GST will be applied for Hemant Traders.");
  } else if (selectedCompany === "ansales") {
    isHemantTraders = false;
    alert("GST will not be applied for A N Sales.");
  }
}
