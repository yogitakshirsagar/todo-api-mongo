//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); //destructuring

// var obj = new ObjectID();
// console.log(obj);
// var user ={name:'yogita', age:28};
// var {age} = user; //makes variable of name and age and stored it to 'user'
// console.log(age);



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  
  
  // const db = client.db('TodoApp');

  // db.collection('Todos').insertOne({
    // text: 'Test1',
    // completed: false
  // }, (err, result) => {
    // if (err) {
      // return console.log('Unable to insert todo', err);
    // }
  
    // console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // // Insert new doc into Users (name, age, location)
  // db.collection('Users').insertOne({
	// //_id: 123,
    // name: 'Yogita',
    // age: 28,
    // location: 'Navi Mumbai'
  // }, (err, result) => {
    // if (err) {
      // return console.log('Unable to insert user', err);
    // }

    //console.log(result.ops[0]._id.getTimestamp());
	//console.log(result.ops);
  //});

  client.close();
});
