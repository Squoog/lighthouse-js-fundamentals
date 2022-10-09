const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:

count = 0;
while (ingredients.length != count){
  console.log(ingredients[count]);
  count++;
}

console.log();

// Write a for loop that prints out the contents of ingredients:

for(let i = 0; i < ingredients.length; i++){
  console.log(ingredients[i]);
}

console.log();

// Write any loop (while or for) that prints out the contents of ingredients backwards:

while(ingredients.length != 0){
  console.log(ingredients.pop());
}