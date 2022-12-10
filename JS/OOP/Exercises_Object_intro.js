//task 1
// Create an object that represents your favourite coffee. Please include coffee name,
// strength, flavour, milk, sugar, … everything you like!

var coffee = {
    name: "black coffee",
    strength: "strong",
    spice: "cinnamon",
    milk: "no",
    sugar: "no"
}

console.log(typeof coffee)
console.log(coffee)

//task 2
// Create an object that represents your favourite movie. Please include title, actors,
// director, genre, popularity.

var movie = {
    title: "Avatar",
    actors: {
        first: "Sam Worthington",
        second: "Zoe Saldana",
        third: "Sigourney Weaver"
    },
    director: "James Cameron",
    genre: "Science fiction",
    rating: 8,
}

console.log(typeof movie)
console.log(movie)

console.log(movie.actors.first)
console.log(movie["actors"]["second"])
console.log(movie.actors["third"])
console.log(movie["actors"].first)

var movieOne = {
    title: "Avatar",
    actors: [
         "Sam Worthington",
         "Zoe Saldana",
         "Sigourney Weaver"
    ],
    director: "James Cameron",
    genre: "Science fiction",
    rating: 8,
}


console.log(movieOne.actors[0])
console.log(movieOne["actors"][2])



//task 3
// Write a function that creates an object that represents a project. Each project is
// described by: description, programming language, git repository, boolean status that
// says if the project is in development or not. Add a method that prints out the project's
// repository, a method that checks if the project is written in JavaScript as well as a
// method that checks if the project is in development or not.


function enterProject(name, description, programingLanguage, gitRepository, inDevelopment, repository, javaScript, checkDevelopment) {
    this.name = name;
    this.description = description;
    this.programingLanguage = programingLanguage;
    this.gitRepository = gitRepository;
    this.inDevelopment = inDevelopment;
    this.repository = repository;
    this.javaScript = javaScript;
    this.checkDevelopment = checkDevelopment
    
};

var app = new enterProject("Sass project", "Convert CSS project to Sass", "Sass","BIT-PP", false, function() {
    return ("https://github.com/tkablar/bit-pp/tree/main/CSS/CSS%20project%20Sass")
}, function() {
    if(this.programingLanguage == "JS") {
        return true;
    } else {
        return false;
    }
}, function() {
    if(!inDevelopment) {
        return false;
    } else {
        return true;
    }
});
console.log(app);
console.log(app.repository());
console.log(app.javaScript());
console.log(app.name)


//task 4
// Write a function that creates an object that represents a culinary recipe. Each recipe is
// described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients,
// preparing time, preparing instruction.
// ○ Add a method that prints out all the ingredients necessary for the meal
// preparation.
// ○ Add a method that checks if a meal can be prepared in under 15 minutes.
// ○ Add a method that changes the type of cuisine to the given value.
// ○ Add a method that delete a given ingredient from the list of ingredients.


function recipe(name, cuisine, complexity, ingredients, preparingTime, instruction, methodOne, methodTwo, methodThree, methodFour ) {
    this.name = name;
    this.cuisine = cuisine;
    this.complexity = complexity;
    this.ingredients = ingredients;
    this.preparingTime = preparingTime;
    this.instruction = instruction;
    this.methodOne = methodOne;
    this.methodTwo = methodTwo;
    this.methodThree = methodThree;
    this.methodFour = methodFour

}

var myRecipe = new recipe("Bolognese", "Italian", 3, ["spaghetti", "tomato juice", "minced meat", "onion", "garlic", "oregano", "basil", "parsely"], 90, "Cut onion and dinstaj 15 min",function() {
    return this.ingredients
},
function preparingTime() {
    if(this.preparingTime == 15) {
        return "15 min";
    } else {
        return this.preparingTime + "min";
    }
},
function typeOfCuisine() {
    return this.cuisine = "french"
},
 function (a, b) {
    var a = this.ingredients;
     for(var i = 0; i < a.length; i++) {
        if(i == b) {
            delete this.ingredients[b];
        }
     }
     return this.ingredients
}
 );

// console.log(myRecipe);
console.log(myRecipe.cuisine)

console.log(myRecipe.ingredients)

console.log(myRecipe.methodFour(1, 3))

console.log(myRecipe.preparingTime)

console.log(myRecipe.methodOne())

console.log(myRecipe.methodTwo())

console.log(myRecipe.methodThree())

console.log(myRecipe.cuisine)














