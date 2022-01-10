const { argv } = require("yargs");
const yargs = require("yargs");

console.log(yargs.argv);

yargs.command({
  command: "add",
  description: "Adds two numbers",
  builder: {
    firstArgument: {
      // describe: "num",
      type: "number"
    },
    secondArgument: {
      // describe: "num",

      type: "number"
    }
  },
  handler: (argv) => {
    console.log(argv.firstArgument + argv.secondArgument);
  }
});

yargs.command({
  command: "subtract",
  description: "Subtracts two numbers",

  builder: {
    firstNum: {
      type: "number"
    },
    secondNum: {
      type: "number"
    }
  },
  handler: (argv) => {
    console.log(argv.firstNum - argv.secondNum);
  }
});


// Create the following operations: (add, subtract, multiply, pow).

yargs.command({
  command: "multiply",
  builder:{
    a:{
      type: "number"
    },
    b:{
      type: "number"
    }
  },
  handler: (argv)=> {
    console.log(argv.a * argv.b);
  }
})

yargs.command({
  command: "paw",
  builder:{
    a:{
      type: "number"
    },
    b:{
      type: "number"
    }
  },
  handler: (argv)=> {
    console.log(argv.a ** argv.b);
  }
})

yargs.parse();
