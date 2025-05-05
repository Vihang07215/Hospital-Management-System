const ErrorHandler = require('../utils/default/errorHandler');
const Doctor = require('../models/DoctorModel');


exports.adddoc = async(req, res, next) => {
const {address, department, experience, feePerConsultation, firstName, lastName, phoneNumber, specialization, status, timings, userId, website} = req.body;
let createdDoctor;
createdDoctor = await Doctor.create({
department, 
phoneNumber, 
website, 
userId, 
status, 
feePerConsultation, 
firstName, 
timings, 
specialization, 
experience, 
address, 
lastName, 
});
res.json(createdDoctor);



}

exports.deletedoc = async(req, res, next) => {
const {id} = req.body;
const deletedDoctor = await Doctor.findByIdAndDelete(id);
console.log("Data deleted!");



}

exports.getdocdata = async(req, res, next) => {
const {id} = req.params;
let var_Doctor_List;
 var_Doctor_List = await Doctor.findById(id,'firstName status feePerConsultation experience specialization website phoneNumber department lastName timings address userId ');
res.json(var_Doctor_List);



}




