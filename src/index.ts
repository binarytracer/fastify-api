import "reflect-metadata";
import "dotenv/config";
import { AppDataSource } from "./config/database";
import app from "./app";

// Initialize the database connection
AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
    const port = Number(process.env.PORT || 4000);
    app.listen({ port }, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });
