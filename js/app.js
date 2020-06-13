'strict use';

// =================================Global Variables=======================================


var openHours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];

// Will store the Location of each new store created
var cookieStoreArray = [];

// Will store the total cookies sold each hour
var allSalesHourly = [];


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

  newStore.calculateHourlyCookies();
  newStore.calculateCustomersHourly();
  newStore.calculateDailySum();
  newStore.renderStoreDataToTable();

  sumAllTimes();

  renderCookiesToTableRowFinal();  //ReRender Totals Row

  console.log('New Store', newStore);
  // console.log(allSalesArray);
}


// Randomizer Function:  adapted from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function randomizer(min, max){

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to Calculate Random # of Customers per Hr===========================================

function calculateCustomersHourly(){
  var customers = randomizer(this.minCustomer, this.maxCustomer);
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

  // locationDailySum.push(dailyLocationSum);
  var printSum = 'Total: ' + dailyLocationSum + ' cookies';
  this.locationDailySum = dailyLocationSum;

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
  tableCell.textContent = 'Grand Total: ' + sumAllStoresAllTimes() + ' cookies';
  tableRowFinal.appendChild(tableCell);
  //=======================End Row 4 Cells / Append Row 4 to Table==========================
  table.appendChild(tableRowFinal);
}

// ====================================================================
// ==================Constructor Function==============================
// ====================================================================

var allStores = [];

function CookieShop(location, minCustomer, maxCustomer, avgCookie, unorderedListID, locationDailySum){
  this.location = location;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookie = avgCookie;
  this.unorderedListID = unorderedListID;
  this.cookieSales = [];
  this.dailySum = locationDailySum;
  allStores.push(this);
}

CookieShop.prototype.calculateCustomersHourly = calculateCustomersHourly;
CookieShop.prototype.calculateHourlyCookies = calculateHourlyCookies;
CookieShop.prototype.calculateDailySum = calculateDailySum;
CookieShop.prototype.sumAllStoresAllTimes = sumAllStoresAllTimes;  //Test Case
CookieShop.prototype.renderStore = renderStore;
CookieShop.prototype.renderStoreDataToTable = renderStoreDataToTable;

// console.log('Total Array after Constructor:', locationDailySum);

// ===========ReCreate Objects with Constructor Function=================

var seattleLocation = new CookieShop('Seattle',23,65,6.3,'seattle');
var tokyoLocation = new CookieShop('Tokyo',3,24,1.2,'tokyo');
var dubaiLocation = new CookieShop('Dubai',11,38,3.7,'dubai');
var parisLocation = new CookieShop('Paris',20,38,2.3,'paris');
var limaLocation = new CookieShop('Lima',2,16,4.6,'lima');


// Call Seattle Functions

seattleLocation.calculateHourlyCookies();
seattleLocation.calculateCustomersHourly();
seattleLocation.calculateDailySum();

// Call Tokyo Function

tokyoLocation.calculateHourlyCookies();
tokyoLocation.calculateCustomersHourly();
tokyoLocation.calculateDailySum();


//Call Dubai Function

dubaiLocation.calculateHourlyCookies();
dubaiLocation.calculateCustomersHourly();
dubaiLocation.calculateDailySum();


//Call Paris Function

parisLocation.calculateHourlyCookies();
parisLocation.calculateCustomersHourly();
parisLocation.calculateDailySum();


// Call Lima Functions

limaLocation.calculateHourlyCookies();
limaLocation.calculateCustomersHourly();
limaLocation.calculateDailySum();


// =============================================================================================
//========Function to Sum Cookies by Hour and fill All Sales Hourly Array=======================

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

// =============================================================================================
//========Function to Sum all City Totals and Return Total Sales for the Day - All Cities=======

function sumAllStoresAllTimes(){

  // locationDailySumArray = [];
  {
    var totalSalesAllStores = 0;
    for (var storeIndex = 0; storeIndex < allStores.length; storeIndex++){
      totalSalesAllStores += allStores[storeIndex].locationDailySum; //add total sales for each location to constructor
    }
    return totalSalesAllStores;
  }
}
sumAllStoresAllTimes();

// =============================================================================================
//===================================Call Table Render Functions================================

renderCookiesToTableRow1();

seattleLocation.renderStoreDataToTable();
tokyoLocation.renderStoreDataToTable();
dubaiLocation.renderStoreDataToTable();
parisLocation.renderStoreDataToTable();
limaLocation.renderStoreDataToTable();

renderCookiesToTableRowFinal();
