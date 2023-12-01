const mongoose=require('mongoose');
const mongooseschema=new mongoose.Schema({


nom :{
    type :String,
    require:true
},
numero :{
    type:Number,
    require:true
}
},{timestamps:true})



  module.exports=mongoose.model('contact',mongooseschema)