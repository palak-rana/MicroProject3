 const food=require('./food.json')

//list all the food items
 food.forEach((array)=>{
    console.log(array);
})

//list all the food items with category vegetables
console.log("list all the food items with category vegetables")
var categoryVeg=food.filter((food)=>{
    return food.category==='Vegetable'
})
console.log(categoryVeg);


//list all the food items with category fruit
console.log("list all the food items with category fruit")
var categoryFruit=food.filter((food)=>{
    return food.category==='Fruit'
})
console.log(categoryFruit);


//list all the food items with category protien
console.log("list all the food items with category protien")
var categoryProtien=food.filter((food)=>{
    return food.category==='Protein'
})
console.log(categoryProtien);


//list all the food items with category nuts
console.log("list all the food items with category nuts")
var categoryNuts=food.filter((food)=>{
    return food.category==='Nuts'
})
console.log(categoryNuts);


//list all the food items with category grains
console.log("list all the food items with category grains")
var categoryGrain=food.filter((food)=>{
    return food.category==='Grain'
})
console.log(categoryGrain);


//list all the food items with category dairy
console.log("list all the food items with category dairy")
var categoryDairy=food.filter((food)=>{
    return food.category==='Dairy'
})
console.log(categoryDairy);


//list all the food items with calorie above 100
console.log("list all the food items with calorie above 100")
var calorieAbove=food.filter((food)=>{
    return food.calorie>100
})
console.log(calorieAbove);


//list all the food items with calorie below 100
console.log("list all the food items with calorie below 100")
var calorieAbove=food.filter((food)=>{
    return food.calorie<100
})
console.log(calorieAbove);


//list all the food items with highest protien content to lowest
console.log("list all the food items with highest protien content to lowest")
var highToLow=food.sort((a,b)=>{
    return b.protiens-a.protiens;
})
var descending=food.forEach((highToLow)=>{
    console.log(highToLow);
})


//list all the food items with lowest cab content to highest
console.log("list all the food items with lowest cab content to highest")
var lowCab=food.sort((a,b)=>{
    return a.cab-b.cab
})
var ascending=food.forEach((lowCab)=>{
    console.log(lowCab)
})



