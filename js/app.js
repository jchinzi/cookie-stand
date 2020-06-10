'strict use';

// =================================Global Variables=======================================


var openHours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];

var cookieStoreArray = [];

// =========================================================================================
// ==============================Function List==============================================
// =========================================================================================

// Function to Add New Stores to cookieStoreArray===========================================

function addNewStoreToArray(){
  var newLocation = this.location;
  cookieStoreArray.push(newLocation);
}

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

// ==================Function to Render Cookie Sales to a Table=================================

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
//================================Test - General Store Chart Function====================================

// function renderStoreDataToTable(){
//   for (var i = 0; i < cookieStoreArray.length; i++){

//   }
// }


//================================Begin Row 2====================================

function renderCookiesToTableSeattle(){
  var table = document.getElementById('cookieChart');
  var tableRowSeattle = document.createElement('tr');
  // ==============================First Cell - City Name ================================
  var tableCell = document.createElement('td');
  tableCell.textContent = seattleLocation.location;
  tableRowSeattle.appendChild(tableCell);
  // ========End City Cell / Begin Loop for Cookies Sold on Rest of Row 2=================
  for (var i = 0; i<openHours.length; i++){
    tableCell = document.createElement('td');
    tableCell.textContent = seattleLocation.cookieSales[i];
    tableRowSeattle.appendChild(tableCell);
  }
  tableCell = document.createElement('td');
  tableCell.textContent = seattleLocation.calculateDailySum();
  tableRowSeattle.appendChild(tableCell);
  //=======================End Row 2 Cells / Append Row 2 to Table==========================
  table.appendChild(tableRowSeattle);
}
//================================Begin Row 3====================================

function renderCookiesToTableTokyo(){
  var table = document.getElementById('cookieChart');
  var tableRowTokyo = document.createElement('tr');
  // ==============================First Cell - City Name ================================
  var tableCell = document.createElement('td');
  tableCell.textContent = tokyoLocation.location;
  tableRowTokyo.appendChild(tableCell);
  // ========End City Cell / Begin Loop for Cookies Sold on Rest of Row 3=================
  for (var i = 0; i<openHours.length; i++){
    tableCell = document.createElement('td');
    tableCell.textContent = tokyoLocation.cookieSales[i];
    tableRowTokyo.appendChild(tableCell);
  }
  tableCell = document.createElement('td');
  tableCell.textContent = tokyoLocation.calculateDailySum();
  tableRowTokyo.appendChild(tableCell);
  //=======================End Row 3 Cells / Append Row 3 to Table==========================
  table.appendChild(tableRowTokyo);
}
//================================Begin Row 4====================================

function renderCookiesToTableDubai(){
  var table = document.getElementById('cookieChart');
  var tableRowDubai = document.createElement('tr');
  // ==============================First Cell - City Name ================================
  var tableCell = document.createElement('td');
  tableCell.textContent = dubaiLocation.location;
  tableRowDubai.appendChild(tableCell);
  // ========End City Cell / Begin Loop for Cookies Sold on Rest of Row 4=================
  for (var i = 0; i<openHours.length; i++){
    tableCell = document.createElement('td');
    tableCell.textContent = dubaiLocation.cookieSales[i];
    tableRowDubai.appendChild(tableCell);
  }
  tableCell = document.createElement('td');
  tableCell.textContent = dubaiLocation.calculateDailySum();
  tableRowDubai.appendChild(tableCell);
  //=======================End Row 4 Cells / Append Row 4 to Table==========================
  table.appendChild(tableRowDubai);
}
//================================Begin Row 5====================================

function renderCookiesToTableParis(){
  var table = document.getElementById('cookieChart');
  var tableRowParis = document.createElement('tr');
  // ==============================First Cell - City Name ================================
  var tableCell = document.createElement('td');
  tableCell.textContent = parisLocation.location;
  tableRowParis.appendChild(tableCell);
  // ========End City Cell / Begin Loop for Cookies Sold on Rest of Row 5=================
  for (var i = 0; i<openHours.length; i++){
    tableCell = document.createElement('td');
    tableCell.textContent = parisLocation.cookieSales[i];
    tableRowParis.appendChild(tableCell);
  }
  tableCell = document.createElement('td');
  tableCell.textContent = parisLocation.calculateDailySum();
  tableRowParis.appendChild(tableCell);
  //=======================End Row 5 Cells / Append Row 5 to Table==========================
  table.appendChild(tableRowParis);
}
//================================Begin Row 6====================================

function renderCookiesToTableLima(){
  var table = document.getElementById('cookieChart');
  var tableRowLima = document.createElement('tr');
  // ==============================First Cell - City Name ================================
  var tableCell = document.createElement('td');
  tableCell.textContent = limaLocation.location;
  tableRowLima.appendChild(tableCell);
  // ========End City Cell / Begin Loop for Cookies Sold on Rest of Row 6=================
  for (var i = 0; i<openHours.length; i++){
    tableCell = document.createElement('td');
    tableCell.textContent = limaLocation.cookieSales[i];
    tableRowLima.appendChild(tableCell);
  }
  tableCell = document.createElement('td');
  tableCell.textContent = limaLocation.calculateDailySum();
  tableRowLima.appendChild(tableCell);
  //=======================End Row 6 Cells / Append Row 6 to Table==========================
  table.appendChild(tableRowLima);
}
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
    tableCell.textContent = 'TBD Total Equation';
    tableRowFinal.appendChild(tableCell);
  }
  tableCell = document.createElement('td');
  tableCell.textContent = '';
  tableRowFinal.appendChild(tableCell);
  //=======================End Row 4 Cells / Append Row 4 to Table==========================
  table.appendChild(tableRowFinal);
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
CookieShop.prototype.addNewStoreToArray = addNewStoreToArray;

// ===========ReCreate Objects with Constructor Function=================

var seattleLocation = new CookieShop('Seattle',23,65,6.3,'seattle');
var tokyoLocation = new CookieShop('Tokyo',3,24,1.2,'tokyo');
var dubaiLocation = new CookieShop('Dubai',11,38,3.7,'dubai');
var parisLocation = new CookieShop('Paris',20,38,2.3,'paris');
var limaLocation = new CookieShop('Lima',2,16,4.6,'lima');


// Call Seattle Functions

seattleLocation.addNewStoreToArray();
seattleLocation.calculateHourlyCookies();
seattleLocation.calculateCustomersHourly();
seattleLocation.calculateDailySum();
// seattleLocation.renderStore();
// console.log(seattleLocation.cookieSales);


// Call Tokyo Function

tokyoLocation.addNewStoreToArray();
tokyoLocation.calculateHourlyCookies();
tokyoLocation.calculateCustomersHourly();
tokyoLocation.calculateDailySum();
// tokyoLocation.renderStore();
// console.log(tokyoLocation.cookieSales);


//Call Dubai Function

dubaiLocation.addNewStoreToArray();
dubaiLocation.calculateHourlyCookies();
dubaiLocation.calculateCustomersHourly();
dubaiLocation.calculateDailySum();
// dubaiLocation.renderStore();
// console.log(dubaiLocation.cookieSales);


//Call Paris Function

parisLocation.addNewStoreToArray();
parisLocation.calculateHourlyCookies();
parisLocation.calculateCustomersHourly();
parisLocation.calculateDailySum();
// parisLocation.renderStore();
// console.log(parisLocation.cookieSales);


// Call Lima Functions

limaLocation.addNewStoreToArray();
limaLocation.calculateHourlyCookies();
limaLocation.calculateCustomersHourly();
limaLocation.calculateDailySum();
// limaLocation.renderStore();
// console.log(limaLocation.cookieSales);


// =============================================================================================
//===================================Call Table Render Functions================================

renderCookiesToTableRow1();
renderCookiesToTableSeattle();
renderCookiesToTableTokyo();
renderCookiesToTableDubai();
renderCookiesToTableParis();
renderCookiesToTableLima();
renderCookiesToTableRowFinal();
