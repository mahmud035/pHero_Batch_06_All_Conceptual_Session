const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
const cors = require('cors');
require('colors');

const PORT = process.env.PORT || 5000;

//* Middleware
app.use(cors());
app.use(express.json());

//* Connect with MongoDB
const uri =
  'mongodb+srv://crudOperation:GByKcm9sNaU4XJcU@cluster0.yeflywl.mongodb.net/?retryWrites=true&w=majority';

const client = new MongoClient(uri);

const dbConnect = async () => {
  try {
    await client.connect();
    console.log(`Database Connected`.yellow.italic);
  } catch (error) {
    console.log(error.name.bgRed, error.message.bold, error.stack);
  }
};
dbConnect();

//* Create Database Collections
const Products = client.db('curdOperation').collection('products');
const Users = client.db('crudOperation').collection('users');

// ============ API REQUEST ============
//* GET
app.get('/products', async (req, res) => {
  try {
    res.send('Here is your data');
  } catch (error) {
    console.log(error.name.bgRed, error.message.bold, error.stack);

    res.send({
      success: false,
      message: error.message,
    });
  }
});

//* POST
app.post('/products', async (req, res) => {
  try {
    const product = req.body;
    const result = await Products.insertOne(product);
    // console.log(result);

    undefined.null();

    if (result.insertedId) {
      res.send({
        success: true,
        message: `Successfully created the product`,
      });
    } else {
      res.send({
        success: false,
        message: `Failed to create the product`,
      });
    }
  } catch (error) {
    console.log(error.name.bgRed, error.message.bold, error.stack);

    res.send({
      success: false,
      message: error.message,
    });
  }
});

//* PUT / PATCH

//* DELETE

//* Global Error Handling
app.use((error, req, res, next) => {
  console.log(error.name.bgRed, error.message.bold, error.stack);
  res.status(500).send(`Something broke`);
});

app.listen(PORT, () => {
  console.log(`Server Up and Running`.cyan.blue);
});
