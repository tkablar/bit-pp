"use strict";

(function() {
    console.log("Hi");


    function Product(name, price, expirationDate) {
        this.productId =(Math.floor(Math.random() * 90000) + 10000);
        this.name = name;
        this.price = price.toFixed(2);
        this.expirationDate = new Date(expirationDate);
        this.info = function(){
            var infoID = name[0] + name[name.length-1] + this.productId + " " + this.name + " " + this.price;
            return infoID;
        }
    }


    function ShopingBag() {
        this.list = [];
        this.addProduct = function(input) {
            
            var today = new Date();
            
                if(input.expirationDate < today ) {
                    
                } else {
                    this.list.push(input.info());
                }
                
        }
                
        
        this.averageProductPrice = function() {
            var avrg = 0;
            var sum = 0;
    
            for(var i = 0; i < this.list.length; i++) {
                    console.log(this.list[i][8]);
                    console.log(this.list[i]);
                    

                    sum += +this.list[2];   
            }
                
            
            console.log(sum);
            avrg = sum / this.list.length;
    
            return avrg.toFixed(3) ;
        }
    
        this.mostExpensive = function() {
            var max = +this.list[0][2];
            var mostExp = this.list[0];
    
            for(var i = 0; i < this.list.length; i++) {
                if(+this.list[i][2] > max) {
                    max = +this.list[i][2];
                    mostExp = this.list[i];    
                }
            }
            
            return mostExp;
        }
    
        this.calculateTotalPrice = function() {
            var sum = 0;
            var today = new Date();
    
            for(var i = 0; i < this.list.length; i++) {
                
                sum += +this.list[i][2];
                
            }
    
            return sum;
        }
      
    }


    var productOne = new Product("apple", 120.2312584, "03/25/2023");
    var productTwo = new Product("banana", 210.351478, "02/10/2023");
    var productThree = new Product("eggs", 200.676931, "04/12/2022");
    var productFour = new Product("sugar", 180.821478, "06/12/2023");
    var productFive = new Product("milk", 110.96542, "02/02/2022" );


    console.log(productOne);
    console.log();

    console.log("productOne info= >" + productOne.info());


    var shopping = new ShopingBag();

    shopping.addProduct(productOne);
    shopping.addProduct(productTwo);
    shopping.addProduct(productThree);
    shopping.addProduct(productFour);
    shopping.addProduct(productFive);

    console.log("shopping =>" + shopping.list);

    console.log(shopping.averageProductPrice())


}) ();

















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
   
        if(card.accountBalance >= shopingBag.calculateTotalPrice()) {
            return console.log("The purchase is successful!")
            // return "You need this much:" + miss;
        } else {
            var a = shopingBag.calculateTotalPrice() - card.accountBalance;
            console.log(a)
            console.log(shopingBag.calculateTotalPrice());
            console.log(card.accountBalance);
            return console.log("You are missing " + a + " amount of $")
        }

}

console.log(shopingBagOne.addProduct(productOne, productTwo, productThree, productFour, productFive))
console.log(shopingBagOne.calculateTotalPrice(productOne, productTwo, productThree, productFour, productFive))
console.log(cardTwo.accountBalance)
checkoutAndBuy(shopingBagOne, cardTwo)
checkoutAndBuy(shopingBagOne, cardThree)