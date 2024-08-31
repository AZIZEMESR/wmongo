
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
import fs from 'fs'
import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'
import path from 'path'

const envPath = path.resolve(__dirname, '.env.local');
if (fs.existsSync(envPath)) {
    dotenv.config({ path: envPath });
};

(async () => {

    const client = new MongoClient(process.env.MONGOURL);

    try {
        await client.connect();
        console.log('Connected to the MongoDB server');
        const db = client.db(process.env.MONGODB_DB);





        let f = await db.collection("test")
        let result =await f.insertMany([{
            fname:"ali",
            lname:"akbari",
            age:22,
            balance:1500
        },
        {
            fname:"hassan",
            lname:"akbari",
            age:22,
            balance:1500
        },
        {
            fname:"kamran",
            lname:"akbari",
            age:22,
            balance:1500
        }])

        console.log(result)
        // let collections = await db.collections();
        // console.log(collections.map(c=> c.collectionName))
        

    } catch {
        console.log("Failed to connect to Mongo Server.")
    }
})()



