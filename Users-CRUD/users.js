const fs = require ("fs")
const uniqid = require ("uniqid");


const createUser = (name, email) => {
    const users = loadUsers();
    users.push({
        name: name,
        email: email,
        id: uniqid()
    })
    saveUsers(users)
}

const loadUsers = () => {
    try{
        const usersBuffer = fs.readFileSync("users.json");
        const usersJSON = usersBuffer.toString();
        const users = JSON.parse(usersJSON);
        return users
    } catch (err){
        return []
    }
}

const saveUsers = (users) => {
    const usersJSON = JSON.stringify(users)
    fs.writeFileSync("users.json", usersJSON)
}

const deleteUser = (id) => {
    const users = loadUsers();
    const filteredUsers = users.filter((element) => element.id != id);
    saveUsers(filteredUsers)
}

const updateUser = (id, newName, newMail) =>{
    const users = loadUsers();
    const index = users.findIndex((element)=> element.id === id);
    if (index === -1){
        console.log("ID not found"); 
    } else {
        if(newName) {users[index].name = newName};
       if(newMail) {users[index].email = newMail};
        saveUsers(users)
    }
}

const readUser = (id) => {
    const users = loadUsers();
    const user = users.find((element)=> element.id === id)
    console.log(user.name+ " "+ user.email);
}

module.exports = {
    createUser: createUser,
    deleteUser: deleteUser,
    updateUser: updateUser,
    readUser: readUser
}