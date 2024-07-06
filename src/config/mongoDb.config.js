import mongoose from "mongoose";

const urlDb = "mongodb+srv://admin:admin123456@backend.3iiek3n.mongodb.net/ecommerce";

export const connectMongoDB = async () => {
  try {
    // Conexión con la base de datos
    mongoose.connect(urlDb);
    console.log("Mongo DB Conectado");
  } catch (error) {
    console.log(error);
  }
};
