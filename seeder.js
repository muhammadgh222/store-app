const mongoose = require("mongoose");
const dotenv = require("dotenv");
const data = require("./data/data");
const Product = require("./models/productModel.js");

dotenv.config({ path: "./.env" });

const DBPasswrod = process.env.DB_PASSWORD;

const DB = process.env.MONGO_URI.replace("<PASSWORD>", DBPasswrod);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => console.log("DB connected successfully"));

const importData = async () => {
  try {
    await Product.deleteMany();

    const sampleProducts = data.map((product) => {
      return { ...product };
    });

    await Product.insertMany(sampleProducts);

    console.log("Data Imported!");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Product.deleteMany();

    console.log("Data Destroyed!");
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
