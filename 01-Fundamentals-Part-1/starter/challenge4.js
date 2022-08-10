const bill = 275;
let tip;

console.log(
  `The bill was ${bill}, and the tip was ${
    bill >= 50 && bill <= 300 ? (tip = bill * 0.15) : (tip = bill * 0.2)
  } and the total value ${bill + tip}`
);
