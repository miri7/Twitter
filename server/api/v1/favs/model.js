const mongoose = require('mongoose');

const { Schema } = mongoose

const fields = {
    title : {
        type:String,
        trim : true,
        requerid:true,
    },
    description:{
        type:String,
        trim : true,
        
    },
    link:String
}

const favs = new Schema(fields,{
    timestamps:true
});  
module.exports =  mongoose.model('favs',favs)