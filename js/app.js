'strict use';

// =================================Global Variables=======================================


var openHours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];

// Will store the Location of each new store created
var cookieStoreArray = [];

// Will store the total cookies sold each hour
var allSalesHourly = [];

// var allSalesArray = [];

// var updatedTotalSalesArray = [];

// =========================================================================================
// ==============================Function List==============================================
// =========================================================================================

// Function to Delete Final Row=============================================================
// https://stackoverflow.com/questions/10686888/delete-last-row-in-table

function deleteFinalRow(tableID){
  var table = document.getElementById(tableID);
  var rowCount = table.rows.length;

  table.deleteRow(rowCount -1);
}

// Function to Interact with Form on sales.html===========================================

var newStoreForm = document.getElementById('franchise');

newStoreForm.addEventListener('submit', addUserStoreToTable);

function addUserStoreToTable(event){
  event.preventDefault();

  deleteFinalRow('cookieChart');  //Delete Original Totals Row

  var location = event.target.location.value;
  var minCustomer = parseInt(event.target.minCustomer.value);
  var maxCustomer = parseInt(event.target.maxCustomer.value);
  var avgCookie = parseFloat(event.target.avgCookie.value);

  console.log(location, minCustomer, maxCustomer, avgCookie);
  var newStore = new CookieShop(location, minCustomer, maxCustomer, avgCookie);

  // newStore.addNewStoreToArray();
  newStore.calculateHourlyCookies();
  newStore.calculateCustomersHourly();
  newStore.calculateDailySum();
  newStore.renderStoreDataToTable();
  // newStore.pushSalesArray();

  sumAllTimes();

  renderCookiesToTableRowFinal();  //ReRender Totals Row

  console.log('New Store', newStore);
  // console.log(allSalesArray);
}

// Function to Add New Stores to cookieStoreArray===========================================

// function addNewStoreToArray(){
//   var newLocation = this.location;
//   cookieStoreArray.push(newLocation);
// }

// Function to Add Hourly Sales Array to allSalesArray===========================================

//  function pushSalesArray (){
//  var storeSalesArray = this.cookieSales;
//  allSalesArray.push(storeSalesArray);
// }

// Function to Fill updatedTotalSalesArray===========================================

// function updateTotalSales(){

//   var totalCookies = 0;
//   for (var hrIndex = 0; hrIndex < openHours.length; hrIndex++){

//     for (var storeIndex = 0; storeIndex < cookieStoreArray.length; cookieStoreArray++){

//       totalCookies += allSalesArray[hrIndex][storeIndex];
//       console.log('Total Cookies1', totalCookies);
//     }
//     console.log('Total Cookies2', totalCookies);
//     // updatedTotalSalesArray.push(totalCookies);
//   }
//   console.log('Total Cookies3',totalCookies);
//   // console.log('Updated Total Sales Array', updatedTotalSalesArray);
//   console.log('All Sales Array', allSalesArray);
// }
// updateTotalSales();

// Randomizer Function:  adapted from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function randomizer(min, max){

  // min = Math.ceil(min);
  // max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to Calculate Random # of Customers per Hr===========================================

function calculateCustomersHourly(){
  var customers = randomizer(this.minCustomer, this.maxCustomer);
  // console.log('Hourly Customer - Random', customers);
  return customers;
}

// Function to Calculate Hourly Cookie Sales=======================================================

function calculateHourlyCookies(){
  for (var i = 0; i< openHours.length; i++){
    var cookiesSoldHourly = Math.round(this.calculateCustomersHourly() * this.avgCookie);
    // console.log('Each Hour Cookie Result', cookiesSoldHourly);
    this.cookieSales.push(cookiesSoldHourly);
  }
}

// Function to Calculate Final Sum of Cookies by Location - adapted from https://www.tutorialrepublic.com/faq/how-to-find-the-sum-of-an-array-of-numbers-in-javascript.php

function calculateDailySum(){

  var dailyLocationSum = this.cookieSales.reduce(function(a, b){
    return a + b;
  }, 0);

  var printSum = 'Total: ' + dailyLocationSum + ' cookies';
  return printSum;
}


// Function to Render Cookie Sales to HTML============================================================

function renderStore(){
  var unorderedList = document.getElementById(this.unorderedListID);

  for (var i=0; i<openHours.length; i++){
    var listItem = document.createElement('li');
    listItem.textContent = openHours[i] + ': ' + this.cookieSales[i] + ' cookies';
    unorderedList.appendChild(listItem);
  }
  var newListItem = document.createElement('li');
  newListItem.textContent = this.calculateDailySum();
  unorderedList.appendChild(newListItem);
}
// =========================================================================================
// ==================Functions to Render Cookie Sales to a Table============================
// =========================================================================================

function renderCookiesToTableRow1(){
  // 1. Target
  var table = document.getElementById('cookieChart');
  //================================Begin Row 1====================================
  // 2. Make a New Element
  var tableRowHeader = document.createElement('tr');
  // ==============================First Empty Cell================================
  // 2.5 Provide Content for <tr>  => <td>
  //i. target is 'tr'
  //ii. create a new element
  var tableCell = document.createElement('td');
  //ii.v provide content for <td> - leave this one BLANK (top left cell)
  tableCell.textContent = '';
  //iii. append cell to row
  tableRowHeader.appendChild(tableCell);
  // ========End First Empty Cell / Begin Loop for Hours on Rest of Row 1=================
  for (var i = 0; i<openHours.length; i++){
    tableCell = document.createElement('td');
    tableCell.textContent = openHours[i];
    tableRowHeader.appendChild(tableCell);
  }
  // ========End Loop / Add Total Column===========================================
  tableCell = document.createElement('td');
  tableCell.textContent = 'Daily Location Total';
  tableRowHeader.appendChild(tableCell);
  //=======================End Row 1 Cells / Append Row 1 to Table==========================
  // 3. Append Row to Table
  table.appendChild(tableRowHeader);
}
// =========================================================================================
//================================General Store Chart Function====================================

function renderStoreDataToTable(){
  var table = document.getElementById('cookieChart');
  var tableRowStore = document.createElement('tr');
  // ==============================First Cell - City Name ================================
  var tableCell = document.createElement('td');
  tableCell.textContent = this.location;
  tableRowStore.appendChild(tableCell);
  // ========End City Cell / Begin Loop for Cookies Sold on Rest of City Row=================
  for (var i = 0; i<openHours.length; i++){
    tableCell = document.createElement('td');
    tableCell.textContent = this.cookieSales[i];
    tableRowStore.appendChild(tableCell);
  }
  tableCell = document.createElement('td');
  tableCell.textContent = this.calculateDailySum();
  tableRowStore.appendChild(tableCell);
  //=======================End Row Cells / Append Row to Table==========================
  table.appendChild(tableRowStore);
}
// =========================================================================================
//================================Begin Final Row====================================

function renderCookiesToTableRowFinal(){
  var table = document.getElementById('cookieChart');
  var tableRowFinal = document.createElement('tr');
  // ==============================First Cell - Totals ================================
  var tableCell = document.createElement('td');
  tableCell.textContent = 'Totals';
  tableRowFinal.appendChild(tableCell);
  // ========End City Cell / Begin Loop for Cookies Sold on Rest of Row 4=================
  for (var i = 0; i<openHours.length; i++){
    tableCell = document.createElement('td');
    tableCell.textContent = allSalesHourly[i];
    tableRowFinal.appendChild(tableCell);
  }
  tableCell = document.createElement('td');
  tableCell.textContent = '';
  tableRowFinal.appendChild(tableCell);
  //=======================End Row 4 Cells / Append Row 4 to Table==========================
  table.appendChild(tableRowFinal);
}
// =========================================================================================
//================================Alternative Final Row with User Input=====================

// function renderAllCookiesToFinalRow(){
//   var table = document.getElementById('cookieChart');
//   var tableRowFinal = document.createElement('tr');
//   var tableCell = document.createElement('td');
//   tableCell.textContent = 'Totals';
//   tableRowFinal.appendChild(tableCell);

//   var allCookiesSold =

//   for (var i=0; i<openHours.length; i++){

//     tableCell=document.createElement('td');
//     tableCell.textContent = ;
//     tableRowFinal.appendChild(tableCell);
//   }
//   tableCell = document.createElement('td');
//   tableCell.textContent = '';
//   tableRowFinal.appendChild(tableCell);
//   table.appendChild(tableRowFinal);
// }



// ====================================================================
// ==================Constructor Function==============================
// ====================================================================

var allStores = [];

function CookieShop(location, minCustomer, maxCustomer, avgCookie, unorderedListID){
  this.location = location;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookie = avgCookie;
  this.unorderedListID = unorderedListID;
  this.cookieSales = [];
  allStores.push(this);
}

CookieShop.prototype.calculateCustomersHourly = calculateCustomersHourly;
CookieShop.prototype.calculateHourlyCookies = calculateHourlyCookies;
CookieShop.prototype.calculateDailySum = calculateDailySum;
CookieShop.prototype.renderStore = renderStore;
CookieShop.prototype.renderStoreDataToTable = renderStoreDataToTable;
// CookieShop.prototype.addNewStoreToArray = addNewStoreToArray;
// CookieShop.prototype.pushSalesArray = pushSalesArray;

// ===========ReCreate Objects with Constructor Function=================

var seattleLocation = new CookieShop('Seattle',23,65,6.3,'seattle');
var tokyoLocation = new CookieShop('Tokyo',3,24,1.2,'tokyo');
var dubaiLocation = new CookieShop('Dubai',11,38,3.7,'dubai');
var parisLocation = new CookieShop('Paris',20,38,2.3,'paris');
var limaLocation = new CookieShop('Lima',2,16,4.6,'lima');


// Call Seattle Functions

// seattleLocation.addNewStoreToArray();
seattleLocation.calculateHourlyCookies();
seattleLocation.calculateCustomersHourly();
seattleLocation.calculateDailySum();
// seattleLocation.pushSalesArray();
// seattleLocation.renderStore();
// console.log(seattleLocation.cookieSales);


// Call Tokyo Function

// tokyoLocation.addNewStoreToArray();
tokyoLocation.calculateHourlyCookies();
tokyoLocation.calculateCustomersHourly();
tokyoLocation.calculateDailySum();
// tokyoLocation.pushSalesArray();
// tokyoLocation.renderStore();
// console.log(tokyoLocation.cookieSales);


//Call Dubai Function

// dubaiLocation.addNewStoreToArray();
dubaiLocation.calculateHourlyCookies();
dubaiLocation.calculateCustomersHourly();
dubaiLocation.calculateDailySum();
// dubaiLocation.pushSalesArray();
// dubaiLocation.renderStore();
// console.log(dubaiLocation.cookieSales);


//Call Paris Function

// parisLocation.addNewStoreToArray();
parisLocation.calculateHourlyCookies();
parisLocation.calculateCustomersHourly();
parisLocation.calculateDailySum();
// parisLocation.pushSalesArray();
// parisLocation.renderStore();
// console.log(parisLocation.cookieSales);


// Call Lima Functions

// limaLocation.addNewStoreToArray();
limaLocation.calculateHourlyCookies();
limaLocation.calculateCustomersHourly();
limaLocation.calculateDailySum();
// limaLocation.pushSalesArray();
// limaLocation.renderStore();
// console.log(limaLocation.cookieSales);

// =============================================================================================
//========Function to Sum Cookies by Hour and fill All Sales Hourly Array=======================

// TODO: Newly added stores are not being added to the totals line

function sumAllTimes(){

  allSalesHourly = [];
  for (var hrIndex = 0; hrIndex < openHours.length; hrIndex++){
    var salesByTime = 0;
    for (var storeIndex = 0; storeIndex < allStores.length; storeIndex++){
      salesByTime += allStores[storeIndex].cookieSales[hrIndex];
    }
    allSalesHourly.push(salesByTime);
  }
}
sumAllTimes();
console.log('Hourly Sales Array Test:', allSalesHourly);

// function sumAllTimesAllStores(){
//   for (var hrIndex = 0; hrIndex < openHours.length; hrIndex++){
//     for (var cityIndex = 0; cityIndex <cookieStoreArray.length; cityIndex++){

      
//     }
//       var salesByTime = 
//       allSalesArray[0][hrIndex]+
//       allSalesArray[1][hrIndex]+
//       allSalesArray[2][hrIndex]+
//       allSalesArray[3][hrIndex]+
//       allSalesArray[4][hrIndex];
//       updatedTotalSalesArray.push(salesByTime);
//     }
// }
// sumAllTimesAllStores();
// console.log('Total Sales Array', updatedTotalSalesArray);

// =============================================================================================
//===================================Call Table Render Functions================================

renderCookiesToTableRow1();

seattleLocation.renderStoreDataToTable();
tokyoLocation.renderStoreDataToTable();
dubaiLocation.renderStoreDataToTable();
parisLocation.renderStoreDataToTable();
limaLocation.renderStoreDataToTable();

renderCookiesToTableRowFinal();

