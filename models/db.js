const mongoose= require('mongoose');

mongoose.connect(`mongodb://localhost:27017/StudentDB1`,{
    useNewUrlParser:true,
},
err=>{
    if(!err) {
        console.error('conection succeeded');
    }
    else{
        console.log('error in connect: ' + err);
    }
}
);

require("./student.model");


