const { MongoClient } = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

async function run() {
    try {
        await client.connect();

        const db = client.db('testdb');
        const collection = db.collection('students');

        //  Update doc
        await collection.updateOne(
            { name: "Arun" },              // filter
            { $set: { marks: 95 } }         // update
        );
        console.log("Document updated");

        //  Delete doc
        await collection.deleteOne(
            { name: "Kumar" }               // filter
        );
        console.log("Document deleted");

    } catch (err) {
        console.log(err);
    } finally {
        await client.close();
    }
}

// Run function
run();