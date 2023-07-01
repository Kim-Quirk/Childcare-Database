// require('dotenv').config();
// const { MongoClient } = require('mongodb');

// async function main() {
//     /**
//      * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
//      * See https://docs.mongodb.com/drivers/node/ for more details
//      */
//     const uri = process.env.MONGO_DB_URL;
    
//     /**
//      * The Mongo Client you will use to interact with your database
//      * See https://mongodb.github.io/node-mongodb-native/3.6/api/MongoClient.html for more details
//      * In case: '[MONGODB DRIVER] Warning: Current Server Discovery and Monitoring engine is deprecated...'
//      * pass option { useUnifiedTopology: true } to the MongoClient constructor.
//      * const client =  new MongoClient(uri, {useUnifiedTopology: true})
//      */
//     const client = new MongoClient(uri);

//     try {
//         // Connect to the MongoDB cluster
//         await client.connect();
//         console.log("Success!");

//         // Make the appropriate DB calls
//         await createChild(client,
//             {
//                 name: "Johnny Doe",
//                 allergies: ["N/A"],
//                 rx: ["N/A"],
//                 bathroom: "diapers",
//                 guardians: [
//                     {
//                         name: "Jane Doe",
//                         phone: "888-8888-8888",
//                         email: "janedoe@email.com"
//                     },
//                     {
//                         name: "John Doe",
//                         phone: "888-8888-8888",
//                         email: "johndoe@email.com"
//                     }
//                 ]
//             }
//         );

//     } finally {
//         // Close the connection to the MongoDB cluster
//         await client.close();
//         console.log("Closed!");
//     }
// }

// main().catch(console.error);

// async function createChild(client, child){
//     const result = await client.db("children").collection("class1").insertOne(child);
//     console.log(`New listing created with the following id: ${result.insertedId}`);
// }

