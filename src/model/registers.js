const mongoose = require('mongoose');

const admissionSchema = new mongoose.Schema({
first_name: {
    type : String,
    required:true
},
last_name: {
    type : String,
    required:true
},
address : {
    type : String,
    required:true
},
email : {
    type : String,
    required:true
},
area_code: {
    type : Number,
    required:true
},
phone: {
    type : Number,
    required:true
},
caurse: {
    type : String,
    required:true
},
gender: {
    type : String,
    required:true
}

})

const Admission = new mongoose.model('Admission',admissionSchema);

module.exports = Admission;