const mongoose=require('mongoose')
const Schema=mongoose.Schema
const passportLocalMongoose=require('passport-local-Mongoose');
var empinfo=new Schema({
	empid:{
		type:Number
	},
	username:{

	type:String
},
age:{
	type:Number
},
email:{
	type:String
},
address:{
	type:String
},
salary:{
	type:Number
}
})
empinfo.plugin(passportLocalMongoose);
module.exports=mongoose.model('employeetable',empinfo)