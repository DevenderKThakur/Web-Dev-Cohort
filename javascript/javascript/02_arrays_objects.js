const chaiTypes = ["Masala Chai", "Ginger chai", "Green tea", "lemon tea"];

chaiTypes.push("Herbal Tea");

console.log(chaiTypes.pop()); // removes the last element from the value and returns the last value

let index = chaiTypes.indexOf("Green tea");

// console.log(index);

if (index !== -1) {
  chaiTypes.splice(index, 1);
}

// console.log(chaiTypes);

// chaiTypes.forEach((item, index, arr) => console.table([item, index, arr]));

let chaiRecipes = {
  name: "Masala Chai",
  ingredients: {
    teaLeaves: "Assam",
    milk: "Full cream milk",
    sugar: "Brown sugar",
    spices: ["Daalchini", "ginger"],
  },
  instruction: "Boil water , add tea leaves , milk , sugar and spices",
};

// console.log(chaiRecipes.ingredients.spices[1]);

let updateChaiRecipes = {
  ...chaiRecipes,
  instruction:
    "Boil water , add tea leaves , milk , sugar and spices with some love",
};

// console.log(updateChaiRecipes)

const { name, ingredients } = chaiRecipes;

// mapping is only enabled in object

const [firstChai, secondChai] = chaiTypes;

// console.table([name, ingredients, firstChai, secondChai]);


