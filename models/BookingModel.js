const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema(
{
userId: {
type: String, 
required: true, 
},
doctorId: {
type: String, 
required: true, 
},
doctorInfo: [{
type: mongoose.Schema.Types.ObjectId, 
ref: "Doctor",
required: true, 
}],
date: {
type: Date, 
required: true, 
},
status: {
type: String, 
default : "Pending", 
required: true, 
},
time: {
type: String, 
},
userInfo: {
type: mongoose.Schema.Types.ObjectId, 
ref: "User",
required: true, 
},
},
);





module.exports = mongoose.model("Booking", BookingSchema);
