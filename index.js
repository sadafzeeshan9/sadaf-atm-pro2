#!/usr/bin/env node
import inquirer from "inquirer";
let myBalance = 50000;
let pinNumber = 45450;
console.log("welcome to sadaf-inquirer ATM");
let pinAnswer = await inquirer.prompt([
    { name: "pinNumber",
        type: "number",
        message: "enter yuor pinNumber"
    }
]);
if (pinAnswer.pinNumber === pinNumber) {
    console.log("correct pin code !!!");
    let operationAns = await inquirer.prompt([
        { name: "operation",
            type: "list",
            message: "please select option",
            choices: ["withdraw", "check balance", "fast cash", "exit"]
        }
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            { name: "amount",
                type: "number",
                message: "enter your amount"
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("insufficent Balance");
        }
        else if (myBalance -= amountAns.amount) {
            console.log(`your remaining balance is:${myBalance}`);
        }
    }
    else if (operationAns.operation === "check balance")
        console.log(`your remaining balance is ${myBalance}`);
    if (operationAns.operation === "fast cash") {
        let fastcashAns = await inquirer.prompt([
            { name: "fastcash",
                type: "list",
                message: "select amount",
                choices: [1000, 2000, 5000, 10000]
            }
        ]);
        myBalance -= fastcashAns.fastcash;
        console.log(`your remaining balance is:${myBalance}`);
    }
    else if (operationAns.operation === "exit") {
        console.log("thanks,please visit again ....");
    }
}
else {
    console.log("incorrect pin number");
}
