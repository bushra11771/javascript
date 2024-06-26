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
  


    // FUNCTION 
    // function are first class data 
    // functions are object 
function multiply(x, y) {
  return x*y;
}

console.log(multiply(5,3));
multiply.version = "v.1.0.0"
console.log(multiply)
console.log(multiply.version)


  //  Function factory 
  function makeMultiplier(multiplier)  {
    var myFunc = function (x) {
      return multiplier * x;
    };
    return myFunc;

  }


  var multiplyBy3 = makeMultiplier(3);
  console.log(multiplyBy3(10));
  var doubleAll = makeMultiplier(2);
  console.log(doubleAll(100))




  // passing functio as Parameters 
  function doOprationOn(x, operation) 
  {
    return operation(x)
  }

  var result = doOprationOn(5, multiplyBy3);
  console.log(
    result
  )

  result = doOprationOn(100, doubleAll);
  console.log(result)


                //  FUnction Constructor, Prototype and 'this' keyword 

              function test() {
                console.log("function execution!");
                console.log(this);
                this.myName = "Bushra"
              }
              test();
              console.log(window.myName)



      // Function Constructor 

      function Circle (radius) {
        console.log(this)
        this.radius = radius

        this.getArea =
         function() {

          return Math.PI * Math.pow(this.radius, 2)
        }


          //  Prototype 
          Circle.prototype.getArea =
          function () {
            return Math.PI * Math.pow(this.radius, 2)
          }
      }

var myCircle = new Circle(10);
console.log("myCircle")


var myOtherCircle = new circle(20);
console.log(myOtherCircle)


// Methodes are in javascript are just function 








































