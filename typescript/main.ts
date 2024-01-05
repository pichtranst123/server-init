import { MongoClient, MongoClientOptions } from 'mongodb';


const uri = 'mongodb+srv://freeuibos:gHhPehF7IRJh9KVZ@cluster03.k2fmqhk.mongodb.net/';
const dbName = 'BookstoreMain1';

// Updated MongoClientOptions type
const clientOptions: MongoClientOptions = {};


async function connectToMongoDB() {
  const client = new MongoClient(uri, clientOptions);

  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db(dbName);
    const booksCollection = db.collection('BookstoreMain1');
    const books = await booksCollection.find().toArray();
    console.log('Books in the database:');
    books.forEach((book, index) => {
      console.log(`#${index + 1}`);
      console.log(`Title: ${book.title}`);
      console.log(`Author: ${book.author}`);
      console.log(`Genre: ${book.genre}`);
      console.log(`Publication Year: ${book.publication_year}`);
      console.log(`Price: $${book.price}`);
      console.log(`Stock Quantity: ${book.stock_quantity}`);
      console.log(`Publisher: ${book.publisher}`);
      console.log(`Ratings: ${JSON.stringify(book.ratings)}`);
      console.log(`Tags: ${JSON.stringify(book.tags)}`);
      console.log('------------------------');
    });
    // Here, you can perform operations with your db object
    // For example, listing collections
    const collections = await db.listCollections().toArray();
    console.log('Collections:', collections.map((collection) => collection.name));
  } finally {
    await client.close();
  }
}

connectToMongoDB().catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});
