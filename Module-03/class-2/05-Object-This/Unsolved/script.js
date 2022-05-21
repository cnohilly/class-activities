// TODO: What is `this` referring to here?
// this refers to the window
console.log(this);

// TODO: What is `this` referring to here?
// this is referring to the window object (the browser window)
function helloThis() {
  console.log('Inside this function, this is ' + this);
}

// TODO: What is `this` referring to here? What will be logged in the console?
// This is referring to the child object to target the age attribute
var child = {
  age: 10,
  ageTenYears: function() {
    console.log(this.age + 10);
  }
};

// TODO: What is `this` referring to here? What will be logged in the console?
// This is referring to the the investment object within the investor object to access the initialInvestment attribute
var investor = {
  name: 'Cash Saver',
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function() {
      console.log(this.initialInvestment * 1.15);
    }
  }
};

// TODO: Call the `helloThis` function and the object methods to check results in the console

helloThis();
child.ageTenYears();
investor.investment.investmentGrowth();