const { MongoClient, ServerApiVersion } = require('mongodb');

const connectionURL ="mongodb+srv://aditya:aditya@cluster0.iggdnz8.mongodb.net/test";
const database = 'test'

MongoClient.connect(connectionURL, {useNewUrlParser:true}, (error,client) => {

	if(error)
	{
		console.log('ERROR ',error);
		return;
	}

	const db = client.db(database);
  db.collection('slots').insertOne({number:1,startTime:"6",endTime:"7",prefix:"AM"})
  db.collection('slots').insertOne({number:2,startTime:"7",endTime:"8",prefix:"AM"})
  db.collection('slots').insertOne({number:3,startTime:"8",endTime:"9",prefix:"AM"})
  db.collection('slots').insertOne({number:4,startTime:"5",endTime:"6",prefix:"PM"})
})