function calculateFinalBill(billAmount) {
  //   let amount = Number(billAmount);
  //   if (isNaN(amount)) {
  //     return `Enter the correct amount`;
  //   } else if (amount > 1000) {
  //     return `Amount to pay is $${amount * 0.1}`;
  //   } else {
  //     return `Amount to pay is $${amount}`;
  //   }
  return billAmount > 1000 ? billAmount * 0.1 : billAmount;
}

// console.log(calculateFinalBill(2334));

function checkTruthyValue(value) {
  if (value) {
    console.log("Truthy");
  } else {
    console.log("Falsy");
  }
}

// checkTruthyValue(1); // truthy
// checkTruthyValue(0); // falsy
// checkTruthyValue("Devender"); // truthy
// checkTruthyValue(""); // falsy
// checkTruthyValue([]); // truthy
// checkTruthyValue([1, 2, 4]); // truthy

function login(username, password) {
  if (username.toLowerCase() === "admin" && password === "1234") {
    return "Login";
  }
  return `Invalid password or username`;
}

console.log(login("admin", "1234"));
