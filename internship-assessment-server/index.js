const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.dtu3pyw.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function run(){
  try{
    const usersCollection = client.db('onceUsersInfo').collection('onceUsers');

    app.post('/users-info', async(req, res)=>{
      const user = req.body;
      const result = await usersCollection.insertOne(user);
      res.send(result);
   });

   app.get('/users', async(req, res)=>{
    const query = {};
    const cursor = usersCollection.find(query).sort({"_id" :-1});
    const users =  await cursor.toArray();
    res.send(users)
   })
  }
  finally{}
}
run().catch(err => console.log(err))


app.get('/', (req, res) => {
    res.send('server running....')
  })
  
  app.listen(port, () => {
    console.log(`server listening on port ${port}`)
  })