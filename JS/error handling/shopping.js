"use strict";

(function() {
    console.log("Hi")
}) ();



function Product(name, price, expirationDate) {
    this.productId = function() {
        var id = (Math.floor(Math.random() * 90000) + 10000);
        return id;
    };
    this.name = name;
    this.price = price.toFixed(2);
    this.expirationDate = new Date(expirationDate);
    this.info = function(){
        var infoID = name[0] + name[name.length-1] + this.productId() + " " + this.name + " " + this.price;
        return infoID;
    }
}

var productOne = new Product("apple", 120.2312584, "03/25/2023");
var productTwo = new Product("banana", 210.351478, "02/10/2023");
var productThree = new Product("eggs", 200.676931, "04/12/2022");
var productFour = new Product("sugar", 180.821478, "06/12/2023");
var productFive = new Product("milk", 110.96542, "02/02/2022" )



console.log(productOne);
console.log();

console.log(productOne.info());

function ShopingBag() {
    this.addProduct = function() {
        var list = [];
        var today = new Date();
        
        for(var i = 0; i < arguments.length; i++) {
        
            if(arguments[i].expirationDate < today ) {
                
            } else {
                list.push(arguments[i].name);
            }
            
            }
            return list;
    }

    this.averageProductPrice = function() {
        var avrg = 0;
        var sum = 0;
        var today = new Date();
        var count = 0;

        for(var i = 0; i < arguments.length; i++) {
            

            if(arguments[i].expirationDate < today ) {
                count++
                console.log(count)
            } else {
                console.log(arguments[i].price);
                sum += +arguments[i].price;
                console.log( "sum = "  + sum)   
            }
            
        }

        avrg = sum / (arguments.length - count);

        return avrg.toFixed(3) ;
    }

    this.mostExpensive = function() {
        var max = arguments[0].price;
        var information = arguments[0].info();

        for(var i = 0; i < arguments.length; i++) {
            if(+arguments[i].price > max) {
                max = arguments[i].price;
                information = arguments[i].info()    
            }
        }
        
        return information;
    }

    this.calculateTotalPrice = function() {
        var sum = 0;
        var today = new Date();

        for(var i = 0; i < arguments.length; i++) {
            
            if(arguments[i].expirationDate < today) {

            } else {
                sum += +arguments[i].price
            }  

        }

        return sum;
    }
  
}

var shopping = new ShopingBag();



console.log(shopping.addProduct(productOne, productTwo, productThree, productFour, productFive));

console.log(shopping.averageProductPrice(productOne, productTwo, productThree, productFour, productFive));

console.log(shopping.mostExpensive(productOne, productTwo, productThree, productFour, productFive));

console.log(shopping.calculateTotalPrice(productOne, productTwo, productThree, productFour, productFive));


function PaymentCard(accountBalance, status, validUntilDate ) {
    this.accountBalance = accountBalance;
    this.status = status;
    this.validUntilDate = validUntilDate;
}

var cardOne = new PaymentCard(1000.369871, "active", "12/10/2023");
var cardTwo = new PaymentCard(53.25896, "active", "12/10/2023");
var cardThree = new PaymentCard(1000.369871, "inactive", "12/10/2023");
var cardFour = new PaymentCard(1000.369871, "active", "12/10/2022");

var shopingBagOne = new ShopingBag(productOne, productTwo, productThree, productFour, productFive);

function checkoutAndBuy(shopingBag, card) {
   
        if(card.accountBalance < shopingBag.calculateTotalPrice) {
            console.log("You need this much:" + +shopingBag.calculateTotalPrice - card.accountBalance)
        }

}

checkoutAndBuy(shopingBagOne, cardTwo)