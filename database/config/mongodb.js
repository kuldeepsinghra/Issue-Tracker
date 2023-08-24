const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb+srv://kuldeep123:Kuldeep9929@cluster11.1fjwa8j.mongodb.net/?retryWrites=true&w=majority'

async function getEmpData() {
    let client = await MongoClient.connect(url);
    let connection = client.db('issueTracker'); // Establish connection
    return connection.collection('IssueTracker2023'); // creating a collection and naming it also
}
module.exports = getEmpData;