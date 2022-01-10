const fs = require ("fs");
const users = require ("./users");
const yargs = require ("yargs");
const { updateStrings, command } = require("yargs");


yargs.command({
    command: "add",
    builder: {
        name:{
            demandOption: true,
            type: "string"
        },
        email: {
            // demandOption: true,
            type: "string"
        }
    },
    handler (argv) {
       users.createUser(argv.name, argv.email);
    }
})

yargs.command({
    command: "delete",
    builder: {
        id:{
            demandOption: true,
            type: "string"
        }
    }, 
    handler (argv){
        users.deleteUser(argv.id)
    }
})

yargs.command({
    command: "update",
    builder: {
        id:{
            demandOption: true,
            type: "string"
        },
        name: {
            demandOption: false,
            type:"string"
        },
        email: {
            demandOption: false,
            type: "string"
        }
    },
    handler (argv){
        users.updateUser(argv.id, argv.name, argv.email);
    }
})

yargs.command({
    command: "read",
    builder: {
        id:{
            demandOption: true,
            type:"string"
        }
    },
    handler (argv) {
        users.readUser(argv.id)
    }

})

yargs.parse()
