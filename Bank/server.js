const express = require("express");
const app = express();
const PORT = 5000;
const fs = require("fs")

app.listen(PORT, ()=>console.log(`Listening on port ${PORT}`))


app.get(`/express_backend`, (req, res)=>{
    try {
        const result = loadUsers(req.params.id);
        if (!result) {
          throw "User not found";
        } else {
            console.log(result[0]);
          res.status(200).send(result[0]);
        }
      } catch (e) {
        res.status(400).send(e);
      }
})




const loadUsers = (id = undefined) => {
    try {
      const usersBuffer = fs.readFileSync("./users.json");
      const userJSON = usersBuffer.toString();
      const users = JSON.parse(userJSON);
      if (!id) {
        console.log("users loaded");
        return users;
      } else {
        return users.find((user) => user.id === +id);
      }
    } catch (e) {
      return {error: e};
    }
  };
