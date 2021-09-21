var productNameInput = document.getElementById("productName");
var productPriceInput = document.getElementById("productPrice");
var productCategoryInput = document.getElementById("productCategory");
var productDescriptionInput = document.getElementById("productDescription");

//console.log(productNameInput , productPriceInput , productCategoryInput , productDescriptionInput );

window.alert("Fuck off");

function addProduct() {
  var product = {
    Name: productNameInput.Value,
    Price: productPriceInput.Value,
    Category: productCategoryInput.Value,
    Description: productDescriptionInput.Value,
  };
  console.log(product);
}

//function hello () {
//  console.log("hello")
//}

//hello();

console.log(6 % 2);
console.log(6 % 3);
console.log(6 % 4);
console.log(6 % 5);

const isPrime = (number) => {
  let numberisPrime;
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      //a7tmal ytl3 m4 prime
      numberisPrime = false;
    }
  }

  console.log("numberisPrime: ", numberisPrime);
};

function isPrime(number) {
  //comment to
  for (i = 1; i <= 10; i++) {
    for (j = 1; j <= 10; j++) {
      //console.log("j", j);
      //console.log("j outside loop", j);
      if (i % j == 0 && i / j === 1) {
        console.log("is prime");
      }
      if (i / j == 1) {
        console.log(i);
      }
    }
  }
}

isPrime(5);
