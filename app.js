
console.log("hello world")

for (let i = 0; i < 5; i++) {
    console.log(i)
}

//for i = 0 to i is less than 5, console log i, then add 1 

let counter = 1
while (counter < 6) {
    console.log(counter)
    counter += 1
}

let keeplooping = true
let i = 0

/*
while (keeplooping == true); {
    console.log("iteration ",i);
    keeplooping=Math.random() < 0.5;
    i++
}
*/


const foods = ["pizza", "chocolate", "ice cream", "cheese"];
for (let i = 0; i < foods.length; i++) {
    console.log(foods[i]); //this iterates through each item in the array
}
const favFoods = ["Pizza","Butter Chicken","Carbonara","Steak"];
for (let food of favFoods) {
    console.log(favFoods) //this acc just does the whole array 4 times. A bit silly.
}


foods.forEach(function(food,index) {
    console.log(index,food)
})

//basically, for each means it iterates through each item in the array,
//Then, the anyonymous function, tracks the food/item in each position, and its index, and returns it.
//in the anyonymous function, the first item always equals the current item in the array, and the second always refers to the index. 

