var mongoose = require('mongoose');

var motifSchema = new mongoose.Schema({
  characterId: { type: String, unique: true, index: true },
  name: String,
  imgpath: String,
  value: { type: Number, default: 0 },
  currency : String,
  Percentage: { type: Number, default: 0 } ,
  risk: { type: Number, default: 0 }



});

// Create a static getTweets method to return tweet data from the db
motifSchema.statics.getMotifs = function(page, skip, callback) {

    var motifs = [],
        start = (page * 10) + (skip * 1);

    // Query the db, using skip and limit to achieve page chunks
    Motif.find({},'twid active author avatar body date screenname',{skip: start, limit: 10}).sort({date: 'desc'}).exec(function(err,docs){

        // If everything is cool...
        if(!err) {
            motifs = docs;  // We got tweets
            motifs.forEach(function(tweet){
                console.log(motif.name); // Set them to active
            });
        }

        // Pass them back to the specified callback
        callback(tweets);

    });

};


module.exports = mongoose.model('Motif', motifSchema);
