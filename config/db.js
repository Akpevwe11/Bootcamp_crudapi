const mongoose = require('mongoose');

const connectDB = async () => {
    const conn = await mongoose.connect(
        process.env.MONGO_URI, 
    { dbName: 'devcamper', useNewUrlParser: true,useUnifiedTopology: true 
                
        }); 
        console.log(`MongoDB Connected:${conn.connection.host}`.cyan.underline); 
    }

    module.exports = connectDB; 