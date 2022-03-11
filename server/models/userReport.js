const { Schema, model } = require("mongoose");



const reportSchema = new Schema({
    description: {type:String, required:true},
    location: {type:String, required:true},
});



const Report = model('Report', reportSchema);


module.exports = Report;