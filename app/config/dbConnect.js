const { default: mongoose } = require("mongoose")

const dbConnect = ()=>{
    try{
        const conn=mongoose.connect("mongodb+srv://sharonraju1243:5cqRVQXI89fWjlx4@pizza-delicious.uh5xvz4.mongodb.net/?retryWrites=true&w=majority&appName=Pizza-Delicious");
        console.log("Database Connected ");
    } catch (error){
        console.log("Database Error");
    }
};
module.exports=dbConnect;