const { Schema, model } = require("mongoose");



const reportSchema = new Schema({
    description: {type:String, required:true},
    location: {type:String, required:true},
    avatar: {
        type: String,
        default:
          "https://res.cloudinary.com/adamboland1/image/upload/v1645720102/avatar/blank-avatar_mylk3j.png",
      },
    user: {type:Schema.Types.ObjectId, ref:'users'}

});



const Report = model('Report', reportSchema);



module.exports = Report;