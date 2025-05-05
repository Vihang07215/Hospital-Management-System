const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema(
{
email: {
type: String, 
description: "Email is Required!", 
required: true, 
},
isDoctor: {
type: Boolean, 
},
name: {
type: String, 
description: "Name is Required!", 
required: true, 
},
password: {
type: String, 
select: false, 
description: "Password is Required!", 
required: true, 
},
isAdmin: {
type: Boolean, 
},
},
);


UserSchema.pre("save", async function (next) {
this.password = await bcrypt.hash(this.password, 10);
});



module.exports = mongoose.model("User", UserSchema);
