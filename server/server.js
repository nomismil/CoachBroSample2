const fs = require('fs');
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { Kind } = require('graphql/language');
const { MongoClient } = require('mongodb');
const app = express();
const GraphQLDate = require('./graphQLDate');
const { log } = require('console');

let db; // variable that points to the real DB.


/*
* Resolvers
*/
const resolvers = {
  Query: {
    // insert Query functions from schema.graphql here
    listTraining,
    loginMember,
    checkUsername, //YOURS
    getTransactionsByMemberId, //YOURS
  },
  Mutation: {
    // insert Mutation functions from schema.graphql here
    addTraining,
    addMember, //YOURS
  },
  GraphQLDate,
}


/*
* Define functions in resolvers here
*/
async function listTraining() {
  const trainingDB = await db.collection('TrainingDB').find({}).toArray();
  return trainingDB;
}


async function addTraining(_, { newTraining }) {
  console.log("Adding training", newTraining);
  async function getNextSequence(name) {
    const result = await db.collection('counters').findOneAndUpdate(
      { _id: name },              // find the entry that matches this _id
      { $inc: { current: 1 } },   // perform the update
      { returnOriginal: false },  // do not return the old value, only updated counter value.
    );
    return result.value.current;
  }

  newTraining.id = await getNextSequence('fixedindex');

  const result = await db.collection('TrainingDB').insertOne(newTraining);
  const savedTraining = await db.collection('TrainingDB').findOne({ _id: result.insertedId });
  return savedTraining; // return savedTraining for confirmation
}


async function loginMember(_, { loginAcc }) {
  console.log(loginAcc);
  const member = await db.collection('MemberDB').findOne({username: loginAcc.username, password: loginAcc.password, accountType: loginAcc.accountType});
  if (member) { return member.id; }
  else { return "error"; }
}

async function checkUsername(_, {username}){
  console.log(`Checking username: ${username}`)
  const member = await db.collection('MemberDB').findOne({ username: username});
  if (member){console.log("User exist"); return true;}
  console.log("User does not exist");
  return false;
}

async function addMember(_, { newMember }) {
  console.log(newMember);
  console.log("adding new member...");
  let n;
  let prefix;
  if (newMember.accountType === "Trainer"){
    const result = await db.collection('counters').findOneAndUpdate(
      { _id: 'fixedindex' },              // find the entry that matches this _id
      { $inc: { MAT: 1 } },   // perform the update
      { returnOriginal: false },  // do not return the old value, only updated counter value.
    );
    console.log(result);
    n = result.value.MAT
    prefix = "MAT"
  } else{
    const result = await db.collection('counters').findOneAndUpdate(
      { _id: 'fixedindex' },              // find the entry that matches this _id
      { $inc: { MAO: 1 } },   // perform the update
      { returnOriginal: false },  // do not return the old value, only updated counter value.
    );
    n = result.value.MAO
    prefix = "MAO"
  }

  n = n > 999 ? n : ('00' + n).slice(-3) // assume round id no. to 3 digits unless it exceeds
  newMember.id = prefix + n;
  const result = await db.collection('MemberDB').insertOne(newMember);
  const savedMember = await db.collection('MemberDB').findOne({ _id: result.insertedId });
  return savedMember;
}

async function getTransactionsByMemberId(_, { userId }){
  let transactions;
  if (userId.slice(0,3) === "MAO"){
    transactions = await db.collection("PaymentDB").find({ userId: userId }).toArray();
  } else{
    transactions = await db.collection("PaymentDB").find({ trainerId: userId }).toArray();
  }
  console.log(transactions);
  return transactions;
}


/*
* Initialise mongoDB, express server and middleware
*/
const url = 'mongodb://localhost/coachbro';

async function connectToDb() {
  const client = new MongoClient(url, { useNewUrlParser: true });
  await client.connect();
  console.log('Connected to MongoDB at', url);
  db = client.db();
}

const server = new ApolloServer({
  typeDefs: fs.readFileSync('./server/schema.graphql', 'utf-8'),
  resolvers,
  formatError: error => {
    console.log(error);
    return error;
  },
});

app.use(express.static('public'));

server.applyMiddleware({ app, path: '/graphql' });

(async function () {
  try {
    await connectToDb();
    app.listen(3000, function () {
      console.log('App started on port 3000');
    });
  } catch (err) {
    console.log('ERROR:', err);
  }
})();
