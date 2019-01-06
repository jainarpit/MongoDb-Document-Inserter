const isoDate =require('isodate');
let date = isoDate('2011-08-20T19:39:52Z');
class UpdateDocument {
    updateDocument(db, callback) {
        const collection = db.collection('practise');
        collection.updateMany({"_id": /-overview/}
            , {$set: {"LastUpdatedDate": date}}, function (err, result) {
                console.log("Updated the document");
                callback(result);
            });
    }
}

module.exports = new Update();