import inquirer from "inquirer";
console.log("\n\tWelcome to Ali Bakhsh jumani table project\t\n");
let table = true;
//hamara poora code while loop ke ander hee hoga
while (table) {
    let myinput = await inquirer.prompt({
        type: "number",
        name: "num1",
        message: "Enter your number"
    });
    let mynumber = myinput.num1;
    if (mynumber) {
        console.log(`here is the table of ${mynumber}\n`);
        for (let i = 1; i <= 10; i++) {
            console.log(`${mynumber} x ${i} = ${mynumber * i}`);
        }
    }
    else {
        console.log(`\n\tSorry Enter a numerical form\n\t`);
    }
    // jab tak user table print karana chahe 
    let newprint = await inquirer.prompt({
        type: "confirm",
        name: "askuser",
        message: "Do you Want to an other table",
        default: false
    });
    if (newprint.askuser === false) {
        table = false;
    }
}
