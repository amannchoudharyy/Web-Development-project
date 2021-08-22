const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/CollegeWebsite', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true}).then(()=>{
    console.log('database connection successful');
}).catch((e)=>{
    console.log('database connection fail');
})