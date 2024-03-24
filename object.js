// Object Creation 
var company = new Object();
company.name = "Facebook";
company.ceo = new Object(),
company.ceo.firstName = "Mark";
company.ceo.favColor = "blue";
console.log(company)

// DOT NOtation 
console.log("Company ceo name is: " + company.ceo.firstName)

// Bracket Notation 
console.log(company["name"])
var stockPropName = "stock of company";
company[stockPropName] = 110;

console.log("Stock Price is: " + company[stockPropName]);



// Alternatively, you can use object literal notation to achieve the same result:
var company = {
    name: "Facebook"
  };
  console.log(company)
  