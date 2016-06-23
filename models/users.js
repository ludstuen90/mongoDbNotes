var mongoose = require('mongoose');
var Schema= mongoose.Schema;
var Schema = new Schema({
name: String,
username:{type: String, unique: true},
password: {type: String},
admin: Boolean,
location: String,
meta: {
  age: Number,
  website: String,
},
created_at: Date,
updated_at: Date
});

//Anything refers to the name of the collection in the database
var User= mongoose.model('anything', userSchema);

module.exports= User;
