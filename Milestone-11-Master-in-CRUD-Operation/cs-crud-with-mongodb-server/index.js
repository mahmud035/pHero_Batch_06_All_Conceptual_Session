const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
require('colors');

const PORT = process.env.PORT || 5000;

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

//* Database Collections
const Products = client.db('curdOperation').collection('products');
const Users = client.db('crudOperation').collection('users');

Products.insertOne({ name: 'John' });

app.listen(PORT, () => {
  console.log(`Server Up and Running`.cyan.blue);
});
