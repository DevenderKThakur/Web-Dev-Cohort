let salesData = [
  { product: "Laptop", price: 1200 },
  { product: "Smartphone", price: 800 },
  { product: "Headphones", price: 150 },
  { product: "KeyBoard", price: 80 },
];

let totalSalesPrice = salesData.reduce(
  (acc, currentval) => acc + currentval.price,
  0
);

// console.log(totalSalesPrice); // total price of the products .

let inventory = [
  { name: "Widget A", stock: 30 },
  { name: "Widget B", stock: 120 },
  { name: "Widget C", stock: 45 },
  { name: "Widget D", stock: 70 },
];

let lowerThanFifty = inventory.filter((item) => item.stock < 50);

// console.log(lowerThanFifty)

let userActivity = [
  { user: "Alice", activityCount: 45 },
  { user: "Bob", activityCount: 72 },
  { user: "Charlie", activityCount: 33 },
];

// find the most active user

let findMostActiveUser = userActivity.reduce((acc, currentval) =>
  acc.activityCount > currentval.activityCount ? acc : currentval
);

console.log(findMostActiveUser);
