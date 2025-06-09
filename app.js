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
    name: "Kohli Export Packaging (I) Pvt. Ltd.",
    address: "30/B & 31/A/2B, K.S.Kohli Marg, Mumbai-Pune Road,Phugewadi, Dapodi, Pune – 411012.",
    phone: "(020) 27145643 , ( +91 ) 9822059500",
    transporter: "Avinash Cargo Pvt Ltd. Bhosari Godown Booking",
    gst: "27AABCK5441K1ZF",
  },
  {
    name: "Sapna Industries",
    address:
      "#8,Al-Abrar Complex,Near Abrar Masjid, Khareband,Sirvodem, Margoa-Goa - 403601.",
    phone: "( +91 ) ( 0832 ) 2734091. 9343653776.",
    transporter: "Goa Express Cargo Pvt Ltd.",
    gst: "30AFAPM5966L1ZA",
  }, {
    name: "Shri Gurukrupa Printers",
    address:
      "Saileela Hospital Basement,Near Anglo Undulating High School,Jalgaon - 425001.",
    phone: "9823399961",
    transporter: "Ajanta Roadlines",
    gst: "27AOAPA0135L1ZF",
  },
    {
    name: "Sonali suppliers",
    address:
      "Ahilyanagar",
    phone: "982249421",
    transporter: "Jaggi Goods Carrier",
    gst: "",
  },
   {
    name: "Trimurti Offset",
    address:
      "Jamkhed, Dist Ahilyanagar",
    phone: "+91 94032 23060",
    transporter: "Manohar Transport",
    gst: "",
  },
 {
    name: "Datta Xerox",
    address:
      "Jamkhed, Dist Ahilyanagar",
    phone: "+91 83084 24041",
    transporter: "Manohar Transport",
    gst: "",
  },
 {
    name: "Runa Graphics",
    address:
      "Part No 1-2/1, S No 64, Behind Trimurti Hospital, Sinhgad Rd,near Suvasini Mangal Karyalaya, Vadgaon Budruk,Pune",
    phone: "02024390019",
    transporter: "JD Transport",
    gst: "27ABQPP0921J1ZD",
  },
 {
    name: "Balaji Packaging ( Manjari - TC777)",
    address:
      "Sitaram Park, Godbole Vasti,Manjari bk,Tal - Haveli, Dist - Pune",
    phone: "9527414545/9689945653",
    transporter: "JD Transport",
    gst: "27AAOFB0109M1ZE",
  }, {
    name: "Shree Samarth Binders and Lamination",
    address: "Solapur",
    phone: "( +91 ) 96656 42002.",
    transporter: "Chandrakant Transport",
    gst: "",
  },
  {
    name: "AN SALES",
    address: "C/O Hemant Traders ,Sadashiv Peth, Pune - 411030",
    phone: "( +91 ) 94206 99675.",
    transporter: "Shree Jai Malhar Transport Services",
    gst: "",
  }, {
    name: "3R ECO PANEL AND ROOFING",
    address: "S.no 36 plot no 17- 25 Pisloi , Pune, Maharashtra, 411048",
    phone: "+91 9890232309",
    transporter: "Vaibhav Road Lines",
    gst: "27AJMPB0572H1ZC",
  }, {
    name: "Kumar Quality Printer",
    address: "1325/6 ,Nr Dudhane Bolts, Shivaji Udhyamnagar, Kolhapur",
    phone: "( +91 ) 9850956118 / 7028200362.",
    transporter: "JayRam Transport / Ashray Travels",
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
  // if (isHemantTraders) {
  //   const gstRate = 0.18; // 18% GST
  //   const gstAmount = itemAmount * gstRate;
  //   itemAmount += gstAmount;
  // }

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

  // Declare tax amounts
  var igstAmount = 0;
  var cgstAmount = 0;
  var sgstAmount = 0;

 // Calculate total item amount
 var totalItemAmount = calculateTotalAmount(itemsArray);
 // Determine GST type based on company and GST number
 if (isHemantTraders && customerGSTnumber) {
  const gstRate = 0.18; // 18% GST
  if (!customerGSTnumber.startsWith("27")) {
    // Apply IGST
    igstAmount = totalItemAmount * gstRate;
  } else {
    // Apply CGST and SGST
    cgstAmount = (totalItemAmount * gstRate) / 2;
    sgstAmount = cgstAmount;
  }
}

 // Calculate total amount including taxes
 var totalAmount = totalItemAmount + igstAmount + cgstAmount + sgstAmount;

  // Display Total Weight and Total Amount (before GST)
  var totalWeight = itemsArray.reduce((total, item) => total + parseFloat(item.quantity) || 0, 0);
  var weightRow = itemsTable.insertRow(itemsTable.rows.length);
  weightRow.innerHTML = `
    <td></td>
    <td><strong>TOTAL:</strong></td>
    <td><strong>${totalWeight.toFixed(3)} Kgs</strong></td>
    <td><strong>₹${totalItemAmount.toFixed(2)}</strong></td>
  `;
  // Add IGST row if applicable
  if (igstAmount > 0) {
    var igstRow = itemsTable.insertRow(itemsTable.rows.length);
    igstRow.innerHTML = `
      <td></td>
      <td>ADD:</td>
      <td>IGST @ 18%</td>
      <td>₹${igstAmount.toFixed(2)}</td>
    `;
  }
// Add CGST/SGST rows if applicable
if (cgstAmount > 0 && sgstAmount > 0) {
  var cgstRow = itemsTable.insertRow(itemsTable.rows.length);
  cgstRow.innerHTML = `
    <td></td>
    <td>ADD:</td>
    <td>CGST @ 9%</td>
    <td>₹${cgstAmount.toFixed(2)}</td>
  `;
  var sgstRow = itemsTable.insertRow(itemsTable.rows.length);
  sgstRow.innerHTML = `
    <td></td>
    <td>ADD:</td>
    <td>SGST @ 9%</td>
    <td>₹${sgstAmount.toFixed(2)}</td>
  `;
} // Add row for Total Amount (INR)
var totalRow = itemsTable.insertRow(itemsTable.rows.length);
totalRow.innerHTML = `
  <td></td>
  <td></td>
  <td><strong>Total Amt (INR):</strong></td>
  <td><strong>₹${Math.round(totalAmount)}/-</strong></td>
`;

// Debugging
console.log("Total Weight:", totalWeight);
console.log("Total Item Amount (Before GST):", totalItemAmount);
console.log("CGST Amount:", cgstAmount);
console.log("SGST Amount:", sgstAmount);
console.log("IGST Amount:", igstAmount);
console.log("Total Amount:", totalAmount);


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



  // Calculate total amount including GST (if applicable)
  var totalAmount = totalItemAmount + cgstAmount + sgstAmount;

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
  let cgstAmount = gstAmount/2 ;
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
