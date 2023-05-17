require("dotenv").config();

const express = require("express");
const app = express();

const connectDB = require("./db/connect");
const productRouter = require("./routes/productRoutes");

app.get("/", (req, res) => {
  res.send("Welcome world!");
});

app.use("/api/products", productRouter);

const port = process.env.PORT || 5000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
