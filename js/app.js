'strict use';

var openHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// ====================================================================
// =========================Function List==============================
// ====================================================================


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


// ====================================================================
// ==================Constructor Function==============================
// ====================================================================

function CookieShop(location, minCustomer, maxCustomer, avgCookie, unorderedListID){
  this.location = location;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookie = avgCookie;
  this.unorderedListID = unorderedListID;
  this.cookieSales = [];
}

CookieShop.prototype.calculateCustomersHourly = calculateCustomersHourly;
CookieShop.prototype.calculateHourlyCookies = calculateHourlyCookies;
CookieShop.prototype.calculateDailySum = calculateDailySum;
CookieShop.prototype.renderStore = renderStore;

// ===========ReCreate Objects with Constructor Function=================

var seattleLocation = new CookieShop('Seattle',23,65,6.3,'seattle');
var tokyoLocation = new CookieShop('Tokyo',3,24,1.2,'tokyo');
var dubaiLocation = new CookieShop('Dubai',11,38,3.7,'dubai');
var parisLocation = new CookieShop('Paris',20,38,2.3,'paris');
var limaLocation = new CookieShop('Lima',2,16,4.6,'lima');

console.log('Seattle Cookie Array', seattleLocation.cookieSales);


// ====================================================================
// ==================Object Literal - Seattle===========================
// =====================================================================

// var seattleLocation = {
//   location : 'Seattle',
//   minCustomer : 23,
//   maxCustomer : 65,
//   avgCookie : 6.3,
//   unorderedListID : 'seattle',
//   cookieSales : [],

//   calculateCustomersHourly : calculateCustomersHourly,
//   calculateHourlyCookies : calculateHourlyCookies,
//   calculateDailySum : calculateDailySum,
//   renderStore : renderStore
// };

// Call Seattle Functions

seattleLocation.calculateHourlyCookies();
seattleLocation.calculateCustomersHourly();
seattleLocation.calculateDailySum();
seattleLocation.renderStore();
// console.log(seattleLocation.cookieSales);

// // ====================================================================
// // ==================Object Literal - Tokyo===========================
// // ====================================================================


// var tokyoLocation = {
//   location : 'Tokyo',
//   minCustomer : 3,
//   maxCustomer : 24,
//   avgCookie : 1.2,
//   unorderedListID : 'tokyo',
//   cookieSales : [],

//   calculateCustomersHourly : calculateCustomersHourly,
//   calculateHourlyCookies : calculateHourlyCookies,
//   calculateDailySum : calculateDailySum,
//   renderStore : renderStore
// };

// Call Tokyo Function

tokyoLocation.calculateHourlyCookies();
tokyoLocation.calculateCustomersHourly();
tokyoLocation.calculateDailySum();
tokyoLocation.renderStore();
// console.log(tokyoLocation.cookieSales);

// // ====================================================================
// // ==================Object Literal - Dubai===========================
// // ====================================================================

// var dubaiLocation = {
//   location : 'Dubai',
//   minCustomer : 11,
//   maxCustomer : 38,
//   avgCookie : 3.7,
//   unorderedListID : 'dubai',
//   cookieSales : [],

//   calculateCustomersHourly : calculateCustomersHourly,
//   calculateHourlyCookies : calculateHourlyCookies,
//   calculateDailySum : calculateDailySum,
//   renderStore : renderStore
// };

//Call Dubai Function

dubaiLocation.calculateHourlyCookies();
dubaiLocation.calculateCustomersHourly();
dubaiLocation.calculateDailySum();
dubaiLocation.renderStore();
// console.log(dubaiLocation.cookieSales);

// // ====================================================================
// // ==================Object Literal - Paris===========================
// // ====================================================================

// var parisLocation = {
//   location : 'Paris',
//   minCustomer : 20,
//   maxCustomer : 38,
//   avgCookie : 2.3,
//   unorderedListID : 'paris',
//   cookieSales : [],

//   calculateCustomersHourly : calculateCustomersHourly,
//   calculateHourlyCookies : calculateHourlyCookies,
//   calculateDailySum : calculateDailySum,
//   renderStore : renderStore
// };

//Call Paris Function

parisLocation.calculateHourlyCookies();
parisLocation.calculateCustomersHourly();
parisLocation.calculateDailySum();
parisLocation.renderStore();
// console.log(parisLocation.cookieSales);

// // ====================================================================
// // ==================Object Literal - Lima===========================
// // ====================================================================
// var limaLocation = {
//   location : 'Lima',
//   minCustomer : 2,
//   maxCustomer : 16,
//   avgCookie : 4.6,
//   unorderedListID : 'lima',
//   cookieSales : [],

//   calculateCustomersHourly : calculateCustomersHourly,
//   calculateHourlyCookies : calculateHourlyCookies,
//   calculateDailySum : calculateDailySum,
//   renderStore : renderStore
// };

// Call Lima Function

limaLocation.calculateHourlyCookies();
limaLocation.calculateCustomersHourly();
limaLocation.calculateDailySum();
limaLocation.renderStore();
// console.log(limaLocation.cookieSales);


// =============================================================================================
// ==================Function to Render Cookie Sales to a Table=================================

function renderCookiesToTable(){
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
  //================================Begin Row 2====================================
  var tableRowSeattle = document.createElement('tr');
  // ==============================First Cell - City Name ================================
  tableCell = document.createElement('td');
  tableCell.textContent = seattleLocation.location;
  tableRowSeattle.appendChild(tableCell);
  // ========End City Cell / Begin Loop for Cookies Sold on Rest of Row 2=================
  for (i = 0; i<openHours.length; i++){
    tableCell = document.createElement('td');
    tableCell.textContent = seattleLocation.cookieSales[i];
    tableRowSeattle.appendChild(tableCell);
  }
  tableCell = document.createElement('td');
  tableCell.textContent = seattleLocation.calculateDailySum();
  tableRowSeattle.appendChild(tableCell);
  //=======================End Row 1 Cells / Append Row 1 to Table==========================
  table.appendChild(tableRowSeattle);
  //================================Begin Row 3====================================

}

renderCookiesToTable();