// const express = require("express");
// const userModel = require("../models/childSchema");
// const app = express();

// app.post("/add_child", async (request, response) => {
//     const user = new userModel(request.body);
  
//     try {
//       await user.save();
//       response.send(user);
//     } catch (error) {
//       response.status(500).send(error);
//     }
// });

// app.get("/find_child", async (request, response) => {
//   const { headers } = request;
//   const id = headers['id'];  
//     options = {
//       _id: id
//     };
//     console.log(id);
//     const user = await userModel.findById(id);
//     try {
//         response.send(user);
//       } catch (error) {
//         response.status(500).send(error);
//       }
// });

// app.get("/children", async (request, response) => {
//     const users = await userModel.find({});
  
//     try {
//       response.send(users);
//     } catch (error) {
//       response.status(500).send(error);
//     }
//   });

//   module.exports = app;