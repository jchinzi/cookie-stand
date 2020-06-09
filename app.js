'strict use';

var openHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// ==================Object Literal - Seattle===========================
var seattleLocation = {
  location : 'Seattle',
  minCustomer : 23,
  maxCustomer : 65,
  avgCookie : 6.3,
  cookieSales : [],
  totalDailyArry : [],
  calculateSales : function(){
    for(var i = 0; i < openHours.length; i++){

      var possibleCustomers = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer;

      var cookiesPerHr = Math.round(possibleCustomers * this.avgCookie);

      var hourlyOutput = (openHours[i] + ': ' + cookiesPerHr + ' cookies');
      this.cookieSales.push(hourlyOutput);
      this.totalDailyArry.push(cookiesPerHr);
    };
  },
  // totalDailySales : function(){
  //   var total = 0
  //   dailyNum = parseInt(this.totalDailyArry[i]);
  //   for(var i=0; i<openHours.length; i++){
  //     total = total + dailyNum;
  //   }
  //   this.totalDailyArry.push(total);
  // },
};

seattleLocation.calculateSales();  //Calling Seattle Function
// seattleLocation.totalDailySales();

// console.log(seattleLocation.cookieSales);
console.log('Total Daily Array:', seattleLocation.totalDailyArry);
// console.log('Total Daily Sales:', seattleLocation.totalDailySales());

var seattleUnorderedList = document.getElementById('seattle');

for (var i = 0; i<openHours.length; i++){
  var newListItem = document.createElement('li');
  newListItem.textContent = seattleLocation.cookieSales[i];
  seattleUnorderedList.appendChild(newListItem);
};

// ==================Object Literal - Tokyo===========================

var tokyoLocation = {
  location : 'Tokyo',
  minCustomer : 3,
  maxCustomer : 24,
  avgCookie : 1.2,
  cookieSales : [],
  totalDailyArry : [],
  calculateSales : function(){
    for(var i = 0; i < openHours.length; i++){

      var possibleCustomers = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer;

      var cookiesPerHr = Math.round(possibleCustomers * this.avgCookie);

      var hourlyOutput = (openHours[i] + ': ' + cookiesPerHr + ' cookies');
      this.cookieSales.push(hourlyOutput);
      this.totalDailyArry.push(cookiesPerHr);
    };
  },
};

tokyoLocation.calculateSales();

var tokyoUnorderedList = document.getElementById('tokyo');

for (var i = 0; i<openHours.length; i++){
  var newListItem = document.createElement('li');
  newListItem.textContent = tokyoLocation.cookieSales[i];
  tokyoUnorderedList.appendChild(newListItem);
};


// ==================Object Literal - Dubai===========================

var dubaiLocation = {
  location : 'Dubai',
  minCustomer : 11,
  maxCustomer : 38,
  avgCookie : 3.7,
  cookieSales : [],
  totalDailyArry : [],
  calculateSales : function(){
    for(var i = 0; i < openHours.length; i++){

      var possibleCustomers = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer;

      var cookiesPerHr = Math.round(possibleCustomers * this.avgCookie);

      var hourlyOutput = (openHours[i] + ': ' + cookiesPerHr + ' cookies');
      this.cookieSales.push(hourlyOutput);
      this.totalDailyArry.push(cookiesPerHr);
    };
  },
};

dubaiLocation.calculateSales();

var dubaiUnorderedList = document.getElementById('dubai');

for (var i = 0; i<openHours.length; i++){
  var newListItem = document.createElement('li');
  newListItem.textContent = dubaiLocation.cookieSales[i];
  dubaiUnorderedList.appendChild(newListItem);
};

// ==================Object Literal - Paris===========================

var parisLocation = {
  location : 'Paris',
  minCustomer : 20,
  maxCustomer : 38,
  avgCookie : 2.3,
  cookieSales : [],
  totalDailyArry : [],
  calculateSales : function(){
    for(var i = 0; i < openHours.length; i++){

      var possibleCustomers = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer;

      var cookiesPerHr = Math.round(possibleCustomers * this.avgCookie);

      var hourlyOutput = (openHours[i] + ': ' + cookiesPerHr + ' cookies');
      this.cookieSales.push(hourlyOutput);
      this.totalDailyArry.push(cookiesPerHr);
    };
  },
};

parisLocation.calculateSales();

var parisUnorderedList = document.getElementById('paris');

for (var i = 0; i<openHours.length; i++){
  var newListItem = document.createElement('li');
  newListItem.textContent = parisLocation.cookieSales[i];
  parisUnorderedList.appendChild(newListItem);
};

// ==================Object Literal - Lima===========================

var limaLocation = {
  location : 'Lima',
  minCustomer : 2,
  maxCustomer : 16,
  avgCookie : 4.6
};

// =========================Random Number Generator===================

function randomizer(min, max){

  min = Math.ceil(min);
  max = Math.floor(max);

  var possibleCustomers = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer;

      var cookiesPerHr = Math.round(possibleCustomers * this.avgCookie);

      var hourlyOutput = (openHours[i] + ': ' + cookiesPerHr);
      this.cookieSales.push(hourlyOutput);
}

// ===================================================================