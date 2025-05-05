const mongoose = require("mongoose");

const DoctorSchema = new mongoose.Schema(
{
firstName: {
type: String, 
required: true, 
},
lastName: {
type: String, 
required: true, 
},
phoneNumber: {
type: Number, 
required: true, 
},
address: {
type: String, 
required: true, 
},
department: {
type: String, 
required: true, 
},
specialization: {
type: String, 
required: true, 
},
experience: {
type: String, 
required: true, 
},
timings: {
type: String, 
required: true, 
},
feePerConsultation: {
type: Number, 
required: true, 
},
userId: {
type: mongoose.Schema.Types.ObjectId, 
ref: "User",
required: true, 
},
website: {
type: String, 
required: true, 
},
status: {
type: String, 
default : "Pending", 
required: true, 
},
},
);





module.exports = mongoose.model("Doctor", DoctorSchema);
