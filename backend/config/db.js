const mongoose = require('mongoose');

const connectDB = async()=>{
    try{
        // const connect = await mongoose.connect(process.env.mongo_uri);
        const connect = await mongoose.connect('mongodb+srv://sudarshan:AFrECGQFWYq58ThL@studentmanagement.v54lnhl.mongodb.net/?retryWrites=true&w=majority&appname=studentManagement');
        
        console.log("Connected to MongoDB...", connect.connection.host, connect.connection.name);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB;