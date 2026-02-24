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
   {
    name: "Pankaj Arts",
    address: "Shop No. F21,Kolhapur Udyam Co Operative SOCIETY LTD,Y.P.Powar Nagar,Kolhapur,Maharashtra 416012",
    phone: "( +91 ) 9623243499",
    transporter: "JayRam Transport",
    gst: "",
  },
   {
    name: "Shree Print Coaters Arts",
    address: "Kolhapur",
    phone: "( +91 ) 8087253028",
    transporter: "JayRam Transport",
    gst: "",
  },   {
    name: "Sai Lamination",
    address: "Kolhapur",
    phone: "( +91 ) 8007484990 / 9579492627",
    transporter: "Sandesh Transport",
    gst: "",
  },
    {
    name: "Durga Lamination",
    address: "Solapur",
    phone: "( +91 ) 9822807801 / 9021766526",
    transporter: "NavSampata Transport",
    gst: "",
  },   {
    name: "Eminence Graphics",
    address: "Jalgaon",
    phone: "( +91 ) 9422780809",
    transporter: "Jalgaon Transport",
    gst: "",
  },   {
    name: "Sandeep Arts",
    address: "Ahilyanagar",
    phone: "( +91 ) 9225252516",
    transporter: "Jaggi Goods Carrier",
    gst: "27BIXPS4074E1ZM",
  }

  // Add more customers as needed
];
var generateChallanClicked = false;
var selectedOption = document.getElementById("companySelect").value;
var isHemantTraders = selectedOption === "hemant";

document.getElementById("addItem").addEventListener("click", addItemToTable);
document.getElementById("sb").addEventListener("click", generatechallan);
document.getElementById("companySelect").addEventListener("change", updateCompanyDetails);

function getItemInputValues() {
  return {
    name: document.getElementById("itemName").value,
    width: document.getElementById("itemWidth").value,
    quantity: parseFloat(document.getElementById("itemQuantity").value),
    rate: parseFloat(document.getElementById("itemRate").value),
    otherCharges: parseFloat(document.getElementById("otherCharges").value) || 0,
    category: document
      .getElementById("itemName")
      .selectedOptions[0]
      .getAttribute("data-category"),
  };
}

function clearItemInputs() {
  document.getElementById("itemQuantity").value = "";
  document.getElementById("itemWidth").value = "";
  document.getElementById("itemRate").value = "";
  document.getElementById("otherCharges").value = "";
}

function addItemToTable() {
  if (generateChallanClicked) {
    alert("Generate Challan button clicked. Cannot add more items.");
    return;
  }

  var item = getItemInputValues();
  if (!item.name || isNaN(item.quantity) || item.quantity <= 0 || isNaN(item.rate) || item.rate <= 0) {
    alert("Please provide valid inputs for Item Name, Quantity, and Rate.");
    return;
  }

  if (item.category === "film" && (!item.width || parseFloat(item.width) <= 0)) {
    alert("Width is required and must be valid for film types.");
    return;
  }

  var formattedWidth = parseFloat(item.width) > 60 ? `${item.width} mm` : `${item.width}"`;
  var formattedQuantity = `${item.quantity.toFixed(3)} Kgs`;
  var itemAmount = item.quantity * item.rate + item.otherCharges;

  itemsArray.push({
    name: item.name,
    width: formattedWidth,
    quantity: formattedQuantity,
    amount: itemAmount,
  });

  document.getElementById("itemsTable").style.display = "table";
  var tableBody = document.getElementById("itemsTableBody");
  var newRow = tableBody.insertRow();
  newRow.innerHTML = `
    <td>${item.name}</td>
    <td>${formattedWidth}</td>
    <td>${formattedQuantity}</td>
    <td>₹${itemAmount.toFixed(2)}</td>
  `;

  clearItemInputs();
}

function getCustomerDetails() {
  return {
    challanNumber: document.getElementById("challanNumber").value,
    customerName: document.getElementById("customerName").value,
    customerAddress: document.getElementById("customerAddress").value,
    customerPhone: document.getElementById("customerPhone").value,
    transporterName: document.getElementById("transporterName").value,
    customerGSTnumber: document.getElementById("customergstno").value,
  };
}

function getDateString() {
  var now = new Date();
  var day = now.getDate().toString().padStart(2, "0");
  var month = (now.getMonth() + 1).toString().padStart(2, "0");
  var year = now.getFullYear();
  return `${day}-${month}-${year}`;
}

function calculateTotalAmount(items) {
  return items.reduce((total, item) => total + item.amount, 0);
}

function calculateTotalWeight(items) {
  return items.reduce((total, item) => total + (parseFloat(item.quantity) || 0), 0);
}

function getTaxBreakup(totalItemAmount, gstNumber) {
  var tax = { igstAmount: 0, cgstAmount: 0, sgstAmount: 0 };

  if (!isHemantTraders || !gstNumber) {
    return tax;
  }

  var gstRate = 0.18;
  if (!gstNumber.startsWith("27")) {
    tax.igstAmount = totalItemAmount * gstRate;
  } else {
    tax.cgstAmount = (totalItemAmount * gstRate) / 2;
    tax.sgstAmount = tax.cgstAmount;
  }

  return tax;
}

function appendSummaryRows(summary) {
  var itemsTableBody = document.getElementById("itemsTableBody");

  var weightRow = itemsTableBody.insertRow(itemsTableBody.rows.length);
  weightRow.innerHTML = `
    <td></td>
    <td><strong>TOTAL:</strong></td>
    <td><strong>${summary.totalWeight.toFixed(3)} Kgs</strong></td>
    <td><strong>₹${summary.totalItemAmount.toFixed(2)}</strong></td>
  `;

  if (summary.igstAmount > 0) {
    var igstRow = itemsTableBody.insertRow(itemsTableBody.rows.length);
    igstRow.innerHTML = `
      <td></td>
      <td>ADD:</td>
      <td>IGST @ 18%</td>
      <td>₹${summary.igstAmount.toFixed(2)}</td>
    `;
  }

  if (summary.cgstAmount > 0 && summary.sgstAmount > 0) {
    var cgstRow = itemsTableBody.insertRow(itemsTableBody.rows.length);
    cgstRow.innerHTML = `
      <td></td>
      <td>ADD:</td>
      <td>CGST @ 9%</td>
      <td>₹${summary.cgstAmount.toFixed(2)}</td>
    `;

    var sgstRow = itemsTableBody.insertRow(itemsTableBody.rows.length);
    sgstRow.innerHTML = `
      <td></td>
      <td>ADD:</td>
      <td>SGST @ 9%</td>
      <td>₹${summary.sgstAmount.toFixed(2)}</td>
    `;
  }

  var totalRow = itemsTableBody.insertRow(itemsTableBody.rows.length);
  totalRow.innerHTML = `
    <td></td>
    <td></td>
    <td><strong>Total Amt (INR):</strong></td>
    <td><strong>₹${Math.round(summary.totalAmount)}/-</strong></td>
  `;
}

function renderChallanDetails(details, summary, dateString) {
  document.getElementById("cnv").innerHTML = `
    <span style="font-size: 10px; font-weight:600;">(ORIGINAL FOR RECIPIENT)</span>
    <div class="row">
      <div class="col-md-12" style="display: flex; justify-content: space-between; text-align: left;">
        <div class="col-md-3" style="text-align: left;">
          <p>D No.: ${details.challanNumber}/BWD</p>
        </div>
        <div class="col-md-3" style="text-align: right;">
          <p>DATE ${dateString}</p>
        </div>
      </div>
    </div>
    <h6 style="text-align: left; line-height: 1.3; white-space: pre-line;"><strong>M/s. </strong>${details.customerName}
${details.customerAddress}
${details.customerPhone ? `<strong>Phone:</strong> ${details.customerPhone} <br>` : ""}
      ${details.customerGSTnumber ? `<strong>GST No:</strong> ${details.customerGSTnumber} <br>` : ""}
      ${details.transporterName ? `<strong>Transporter:</strong> ${details.transporterName}` : ""}
    </h6>
    <p>RECEIVED THE BELOW MENTIONED IN GOOD ORDER AND CONDITION</p>
    <p>Total Weight: ${summary.totalWeight.toFixed(3)} Kgs</p>
  `;
}

function updateHeaderVisibility() {
  var showHeader = document.getElementById("showHeader").checked;
  var headerImage = document.getElementById("headerImage");
  if (showHeader) {
    headerImage.classList.remove("header-hidden");
  } else {
    headerImage.classList.add("header-hidden");
  }
}

function generatechallan() {
  if (!itemsArray.length) {
    alert("Please add at least one item before generating the challan.");
    return;
  }

  var details = getCustomerDetails();
  if (!details.customerName) {
    alert("Please select or enter customer details.");
    return;
  }

  generateChallanClicked = true;
  var totalItemAmount = calculateTotalAmount(itemsArray);
  var totalWeight = calculateTotalWeight(itemsArray);
  var tax = getTaxBreakup(totalItemAmount, details.customerGSTnumber);

  var summary = {
    totalItemAmount: totalItemAmount,
    totalWeight: totalWeight,
    igstAmount: tax.igstAmount,
    cgstAmount: tax.cgstAmount,
    sgstAmount: tax.sgstAmount,
    totalAmount: totalItemAmount + tax.igstAmount + tax.cgstAmount + tax.sgstAmount,
  };

  appendSummaryRows(summary);
  renderChallanDetails(details, summary, getDateString());
  updateHeaderVisibility();

  document.getElementById("inputtable").style.display = "none";
  document.querySelector(".output").style.display = "block";
  document.querySelector(".footer").style.display = "block";
  window.print();
}

function applyManualDetails() {
  var customerName = document.getElementById("customerName").value;
  var customerAddress = document.getElementById("customerAddress").value;
  var customerPhone = document.getElementById("customerPhone").value;
  var transporterName = document.getElementById("transporterName").value;
  var customerGSTnumber = document.getElementById("customergstno").value;

  document.getElementById("customerName").value = customerName;
  document.getElementById("customerAddress").value = customerAddress;
  document.getElementById("customerPhone").value = customerPhone;
  document.getElementById("transporterName").value = transporterName;
  document.getElementById("customergstno").value = customerGSTnumber;
  document.getElementById("customerDetailsInput").style.display = "none";
}

function populateCustomerDropdown() {
  var selectElement = document.getElementById("customerSelect");
  selectElement.innerHTML = '<option value="">--Select Customer--</option>';

  customers.forEach(function (customer, index) {
    var option = document.createElement("option");
    option.value = index;
    option.textContent = customer.name;
    selectElement.appendChild(option);
  });

  var otherOption = document.createElement("option");
  otherOption.value = "other";
  otherOption.textContent = "Other";
  selectElement.appendChild(otherOption);
}

function selectCustomerDetails() {
  var selectedCustomerIndex = document.getElementById("customerSelect").value;

  if (selectedCustomerIndex === "other") {
    document.getElementById("customerDetailsInput").style.display = "block";
    clearCustomerFields();
    return;
  }

  if (!selectedCustomerIndex) {
    clearCustomerFields();
    return;
  }

  var selectedCustomer = customers[parseInt(selectedCustomerIndex)];
  document.getElementById("customerName").value = selectedCustomer.name;
  document.getElementById("customerAddress").value = selectedCustomer.address;
  document.getElementById("customerPhone").value = selectedCustomer.phone;
  document.getElementById("transporterName").value = selectedCustomer.transporter;
  document.getElementById("customergstno").value = selectedCustomer.gst;
  document.getElementById("customerDetailsInput").style.display = "none";
}

function clearCustomerFields() {
  document.getElementById("customerName").value = "";
  document.getElementById("customerAddress").value = "";
  document.getElementById("customerPhone").value = "";
  document.getElementById("transporterName").value = "";
  document.getElementById("customergstno").value = "";
}

function saveNewCustomer() {
  var newCustomer = {
    name: document.getElementById("newCustomerName").value,
    address: document.getElementById("newCustomerAddress").value,
    phone: document.getElementById("newCustomerPhone").value,
    transporter: document.getElementById("newCustomerTransporter").value,
    gst: document.getElementById("newCustomerGst").value,
  };

  customers.push(newCustomer);
  alert("New customer added!");
  document.getElementById("customerDetailsInput").style.display = "none";
  populateCustomerDropdown();
}

function updateCompanyDetails() {
  var selectedCompany = document.getElementById("companySelect").value;
  updateHeaderImage(selectedCompany);
  applyGSTBasedOnCompany(selectedCompany);
}

function updateHeaderImage(selectedCompany) {
  const headerImage = document.getElementById("headerImage");
  headerImage.src = selectedCompany === "ansales" ? "ansales.png" : "hemant.png";
}

function applyGSTBasedOnCompany(selectedCompany) {
  isHemantTraders = selectedCompany === "hemant";
}

document.addEventListener("DOMContentLoaded", function () {
  populateCustomerDropdown();
  updateCompanyDetails();
  document.getElementById("showHeader").addEventListener("change", updateHeaderVisibility);
  updateHeaderVisibility();
});
