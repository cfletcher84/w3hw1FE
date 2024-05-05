let userOnline = true;
let totalPrice = 0;
const inventory = [
    {product: 'apple', price: 1.99 },
    {product: 'bananna', price: 2.99},
    {product: 'orange', price: 3.99},
];

if (userOnline) {

    console.log("Here is our inventory:");
    for (let fruit of inventory) {
        console.table(fruit);
        totalPrice += fruit.price;
        console.log(`Here is the cost of your cart: ${totalPrice}`)

    };
    
} else {
    console.log("Sorry you are not logged in!");
};



// Functions in JS

let initialBalance = 0;
let deposit1 = 100;
let deposit2 = 75;
let deposit3 = 100;


const firstDepsit = (initialBalance, deposit1) => {return initialBalance + deposit1};
const secondDepsit = (initialBalance, deposit2) => {return initialBalance + deposit2};
const thirdDepsit = (initialBalance, deposit3) => {return initialBalance + deposit3};
const totalDeposits = (deposit1 + deposit2 + deposit3);
const withdraw = (totalDeposits, withdraw) => {return totalDeposits - withdraw};


console.log(firstDepsit(initialBalance, deposit1))
console.log(firstDepsit(initialBalance, deposit2))
console.log(firstDepsit(initialBalance, deposit3))
console.log(`Here is your total deposits: ${totalDeposits}`)
console.log("Here is your current balance:")
console.log(withdraw(totalDeposits, 100))

