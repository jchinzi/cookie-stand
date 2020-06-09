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
  console.log('Hourly Customer - Random', customers);
  return customers;
}

// Function to Calculate Hourly Cookie Sales=======================================================

function calculateHourlyCookies(){
  for (var i = 0; i< openHours.length; i++){
    var cookiesSoldHourly = Math.round(this.calculateCustomersHourly() * this.avgCookie);
    console.log('Each Hour Cookie Result', cookiesSoldHourly);
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
// ==================Object Literal - Seattle===========================
// =====================================================================

var seattleLocation = {
  location : 'Seattle',
  minCustomer : 23,
  maxCustomer : 65,
  avgCookie : 6.3,
  unorderedListID : 'seattle',
  cookieSales : [],

  calculateCustomersHourly : calculateCustomersHourly,
  calculateHourlyCookies : calculateHourlyCookies,
  calculateDailySum : calculateDailySum,
  renderStore : renderStore
};

// Call Seattle Functions

seattleLocation.calculateHourlyCookies();
seattleLocation.calculateCustomersHourly();
seattleLocation.calculateDailySum();
seattleLocation.renderStore();
console.log(seattleLocation.cookieSales);
//
// // ====================================================================
// // ==================Object Literal - Tokyo===========================
// // ====================================================================

var tokyoLocation = {
  location : 'Tokyo',
  minCustomer : 3,
  maxCustomer : 24,
  avgCookie : 1.2,
  unorderedListID : 'tokyo',
  cookieSales : [],

  calculateCustomersHourly : calculateCustomersHourly,
  calculateHourlyCookies : calculateHourlyCookies,
  calculateDailySum : calculateDailySum,
  renderStore : renderStore
};

// Call Tokyo Function

tokyoLocation.calculateHourlyCookies();
tokyoLocation.calculateCustomersHourly();
tokyoLocation.calculateDailySum();
tokyoLocation.renderStore();
console.log(tokyoLocation.cookieSales);

// // ====================================================================
// // ==================Object Literal - Dubai===========================
// // ====================================================================

// var dubaiLocation = {
//   location : 'Dubai',
//   minCustomer : 11,
//   maxCustomer : 38,
//   avgCookie : 3.7,
//   cookieSales : [],
//   totalDailyArry : [],
//   calculateSales : function(){
//     for(var i = 0; i < openHours.length; i++){

//       var possibleCustomers = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer;

//       var cookiesPerHr = Math.round(possibleCustomers * this.avgCookie);

//       var hourlyOutput = (openHours[i] + ': ' + cookiesPerHr + ' cookies');
//       this.cookieSales.push(hourlyOutput);
//       this.totalDailyArry.push(cookiesPerHr);
//     }
//   },
// };

// dubaiLocation.calculateSales(); //Call Dubai Function

// // ====================================================================
// // ==================Object Literal - Paris===========================
// // ====================================================================

// var parisLocation = {
//   location : 'Paris',
//   minCustomer : 20,
//   maxCustomer : 38,
//   avgCookie : 2.3,
//   cookieSales : [],
//   totalDailyArry : [],
//   calculateSales : function(){
//     for(var i = 0; i < openHours.length; i++){

//       var possibleCustomers = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer;

//       var cookiesPerHr = Math.round(possibleCustomers * this.avgCookie);

//       var hourlyOutput = (openHours[i] + ': ' + cookiesPerHr + ' cookies');
//       this.cookieSales.push(hourlyOutput);
//       this.totalDailyArry.push(cookiesPerHr);
//     }
//   },
// };

// parisLocation.calculateSales(); //Call Paris Function

// // ====================================================================
// // ==================Object Literal - Lima===========================
// // ====================================================================

// var limaLocation = {
//   location : 'Lima',
//   minCustomer : 2,
//   maxCustomer : 16,
//   avgCookie : 4.6,
//   cookieSales : [],
//   totalDailyArry : [],
//   calculateSales : function(){
//     for(var i = 0; i < openHours.length; i++){

//       var possibleCustomers = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer;

//       var cookiesPerHr = Math.round(possibleCustomers * this.avgCookie);

//       var hourlyOutput = (openHours[i] + ': ' + cookiesPerHr + ' cookies');
//       this.cookieSales.push(hourlyOutput);
//       this.totalDailyArry.push(cookiesPerHr);
//     }
//   },
// };

// limaLocation.calculateSales(); // Call Lima Function