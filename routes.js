const express = require("express");
const userModel = require("./models/childSchema");
const app = express();

app.post("/add_user", async (request, response) => {
    const user = new userModel(request.body);
  
    try {
      await user.save();
      response.send(user);
    } catch (error) {
      response.status(500).send(error);
    }
});

// app.get("/find_user", async (request, response) => {
//     const name = request.body;
//     console.log(name);
//     const user = await userModel.find({name: name});
  
//     try {
//         response.send(user);
//       } catch (error) {
//         response.status(500).send(error);
//       }
// });

app.get("/users", async (request, response) => {
    const users = await userModel.find({});
  
    try {
      response.send(users);
    } catch (error) {
      response.status(500).send(error);
    }
  });

  module.exports = app;