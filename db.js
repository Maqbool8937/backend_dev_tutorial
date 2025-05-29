



// import mongoose from "mongoose";
// import dotenv from "dotenv";

// dotenv.config();

// const MONGODB_URI = process.env.MONGODB_URI;
// const DB_NAME = process.env.DB_NAME;

// if (!MONGODB_URI) {
//   throw new Error("MONGODB_URI is not defined in your .env file");
// }

// if (!DB_NAME) {
//   throw new Error("DB_NAME is not defined in your .env file");
// }

// const connectMongoDB = async () => {
//   try {
//     await mongoose.connect(`${MONGODB_URI}/${DB_NAME}`);
//     console.log("✅ Connected to MongoDB");
//   } catch (error) {
//     console.error("❌ MongoDB connection error:", error);
//     process.exit(1);
//   }
// };

// export default connectMongoDB;
