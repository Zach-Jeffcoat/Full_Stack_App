const mongoose = require("mongoose");

const dbName = "gamesDB";
mongoose.connect(`mongodb://localhost/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>{
        console.log(`You're connected to  ${dbName}, which is a database!`)
    })
    .catch((err)=>{
        console.log(`You're not connected to ${dbName}. :-(`)
    })
