const ErrorHandler = require('../utils/default/errorHandler');
const bcrypt = require('bcryptjs');
const User = require('../models/UserModel');


exports.deleteuser = async(req, res, next) => {
const {email} = req.body;
const deletedUser = await User.deleteMany(
{
email
},);
res.json(deletedUser);



}

exports.getuserdata = async(req, res, next) => {
const {id} = req.params;
let var_User_List;
 var_User_List = await User.findById(id,'isAdmin email password  name isDoctor ');
res.json(var_User_List);



}

exports.getUserInfo = async(req, res, next) => {
const {email, password} = req.body;
try {
let user;
 user = await User.findOne({ },'email ');

} catch(err) {
}



}

exports.login = async(req, res, next) => {
const {email, password} = req.body;
try {
 (!email   || !password  ){
//		res login
return res.status(422).json({
        message: "Please provide all fields!",
        success: false,
      });


}
else {
}
let getUser;
 getUser = await User.findOne({ },'password email ');
 (getUser  ){
//		res get user
return res.status(404).json({
        message: "Invalid Credentials!",
        success: false,
      });


}
else {
}
let comparePassword = false;
try {
comparePassword = await bcrypt.compare(password, getUser.password);
} catch (err) {
const error = new ErrorHandler(
'"Incorrect Password, Please check again..."',
400
);
return next(error);
}

} catch(err) {
}



}

exports.register = async(req, res, next) => {
const {email, name, password, isAdmin, isDoctor} = req.body;
let registercreatedUser;
registercreatedUser = new User({
name, 
email, 
isAdmin, 
password, 
isDoctor, 
});
try {
 (!name   || !password   || !email  ){
//		res
return res.status(422).json({
        message: "Please provide all fields!",
        success: false,
      });


}
else {
}
let existingUser;
 existingUser = await User.findOne({ },'email ');
 (existingUser  ){
//		res alredy exist
return res.status(400).json({
        message: "User Already Exists!",
        success: false,
      });


}
else {
await registercreatedUser.save();
res.json(registercreatedUser);

}

} catch(err) {
await registercreatedUser.save();
res.json(existingUser.email);

}



}




