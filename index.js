

// // index.js
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 4000;
const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME = process.env.DB_NAME;

(async () => {
  try {
    await mongoose.connect(`${MONGODB_URI}/${DB_NAME}`);
    console.log("✅ MongoDB connected");

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });

    app.on("error", (err) => {
      console.error("❌ Express server error:", err);
    });
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
  }
})();




// // index.js
// import express from "express";
// import dotenv from "dotenv";

// import connectMongoDB from "./db.js";




// dotenv.config();

// const app = express();

// (async () => {
//     await connectMongoDB();

//   const PORT = process.env.PORT || 4000;

//   app.listen(PORT, () => {
//     console.log(`🚀 Server running on port ${PORT}`);
//   });

//   app.on("error", (err) => {
//     console.error("Express server error:", err);
//   });
// })();







//require('dotenv').config()
// import mongoose from "mongoose";
// import express from "express";
//  import dotenv from "dotenv";
// import { DB_NAME } from "./constants.js";

// // Load .env variables
//  dotenv.config({ path: "./env" });

// // Create Express app
// const app = express();

//  const MONGODB_URI = process.env.MONGODB_URI;
// // IIFE for async/await usage
// (async () => {
//   try {
//     // Connect to MongoDB
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`, {
      
//     });

//     console.log("✅ Connected to MongoDB");

//     // Handle Express errors
//     app.on("error", (err) => {
//       console.error("❌ Error in Express server:", err);
//       throw err;
//     });

//     // Start the server
//     const PORT = process.env.PORT || 4000;
//     app.listen(PORT, () => {
//       console.log(`🚀 Server is running on port ${PORT}`);
//     });

//   } catch (err) {
//     console.error("❌ Error connecting to MongoDB:", err);
//     process.exit(1); // Exit process with failure
//   }
// })();



// const express = require('express')
// require('dotenv').config()

// const app = express()

// const port = 4000

// app.get('/', (req, res) => {
//   res.send('Hello World!am full stack dev.')
// })
// app.get('/twitter',(req,res)=>{
// res.send('Hello Twitter!now X')
// })

// app.listen(process.env.PORT, () => {
//   console.log(`Example App listening on port ${port}`)
// })