const sample_1 = require('../sampleDocuments/sample_1.json');
const sample_2 = require('../sampleDocuments/sample_2.json');

class InsertDocument {
    insertDocuments(db, callback) {
        const collection = db.collection('practise');
        collection.insertMany([sample_1, sample_2], function (err, result) {
            console.log("Inserted Successfully");
            callback(result);
        });
    }
}

module.exports = new InsertDocument();