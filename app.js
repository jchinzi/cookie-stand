'strict use';

var openHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// ==================Object Literal - Seattle===========================

var seattleLocation = {
  location : 'Seattle',
  minCustomer : 23,
  maxCustomer : 65,
  avgCookie : 6.3,
  cookieSales : [],
  calculateSales : function(){
    for(var i = 0; i < openHours.length; i++){

      var possibleCustomers = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer;

      var cookiesPerHr = Math.round(possibleCustomers * this.avgCookie);

      var hourlyOutput = (openHours[i] + ': ' + cookiesPerHr);
      this.cookieSales.push(hourlyOutput);
    };
  }
};


// ==================Object Literal - Tokyo===========================

var tokyoLocation = {
  location : 'Tokyo',
  minCustomer : 3,
  maxCustomer : 24,
  avgCookie : 1.2
};

// ==================Object Literal - Dubai===========================

var dubaiLocation = {
  location : 'Dubai',
  minCustomer : 11,
  maxCustomer : 38,
  avgCookie : 3.7
};

// ==================Object Literal - Paris===========================

var parisLocation = {
  location : 'Paris',
  minCustomer : 20,
  maxCustomer : 38,
  avgCookie : 2.3
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

  var possibleCustomers = Math.floor(Math.random() * (max - min + 1)) + min;

  var cookiesPerHr = possibleCustomers * avgCookie;

  return cookiesPerHr;
}

// ===================================================================