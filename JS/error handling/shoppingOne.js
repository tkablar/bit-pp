"use strict";

(function() {
    console.log("Hi");

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
        this.list = [];
        this.addProduct = function(product) {
            var today = new Date();
            
                if(new Date(product.expirationDate) >= today ) {
                    this.list.push(arguments[i]);
                }
                
        }
    
        this.averageProductPrice = function() {
            var avrg = 0;
            var sum = 0;
            var today = new Date();
            var count = 0;
    
            for(var i = 0; i < this.list.length; i++) {
                
                    // console.log(this.list[i].price);
                    sum += +this.list[i].price;
                    // console.log( "sum = "  + sum)   
                
            }
    
            avrg = sum / (this.list.length);
    
            return avrg.toFixed(3) ;
        }
    
        this.mostExpensive = function() {
            var max = this.list[1].price;
            var information = this.list[1].info();
    
            for(var i = 0; i < arguments.length; i++) {
                if(+this.list[i] > max) {
                    max = this.list[i].price;
                    information = this.list[i].info()    
                }
            }
            
            return information;
        }
    
        this.calculateTotalPrice = function() {
            var sum = 0;
            var today = new Date();
    
            for(var i = 0; i < this.list.length; i++) {
                
                sum += +this.list[i].price
    
            }
    
            return sum;
        }
      
    }

    var shopping = new ShopingBag();
    shopping.addProduct(productOne, productTwo, productThree, productFour, productFive)

    console.log("add product " + shopping.addProduct(productOne, productTwo, productThree, productFour, productFive));
    console.log("list: " + shopping);

    console.log("average product price " + shopping.averageProductPrice());

    console.log("most expensive " + shopping.mostExpensive());

    console.log("total price: " + shopping.calculateTotalPrice());
    
    
    function PaymentCard(accountBalance, status, validUntilDate ) {
        this.accountBalance = accountBalance;
        this.status = status;
        this.validUntilDate = validUntilDate;
    }
    
    var cardOne = new PaymentCard(1000.369871, "active", "12/10/2023");
    var cardTwo = new PaymentCard(53.25896, "active", "12/10/2023");
    var cardThree = new PaymentCard(1000.369871, "inactive", "12/10/2023");
    var cardFour = new PaymentCard(1000.369871, "active", "12/10/2022");
    
    var shopingBagOne = new ShopingBag();
    shopingBagOne.addProduct(productOne);
    shopingBagOne.addProduct(productTwo);
    shopingBagOne.addProduct(productThree);
    shopingBagOne.addProduct(productFour);
    shopingBagOne.addProduct(productFive);
    
    
    function checkoutAndBuy(shopingBag, card) {
        var today = new Date();
        var a = shopingBag.calculateTotalPrice() - card.accountBalance;
       
        console.log();
        // console.log(card);
        if(new Date(card.validUntilDate) < today) {
            return console.log("The card is expired!")
        }
        if(card.status == "inactive") {
            return console.log("The card is inactive!");
        }
        if(card.accountBalance >= shopingBag.calculateTotalPrice()) {
            return console.log("The purchase is successful!");
        }
        else {
            
            // console.log(a)
            // console.log(shopingBag.calculateTotalPrice());
            // console.log(card.accountBalance);
            return console.log("You are missing " + a.toFixed(2) + " amount of $.")
        }
    
    }
    
    checkoutAndBuy(shopingBagOne, cardTwo);
    checkoutAndBuy(shopingBagOne, cardOne);
    checkoutAndBuy(shopingBagOne, cardThree);
    checkoutAndBuy(shopingBagOne, cardFour);
}) ();



