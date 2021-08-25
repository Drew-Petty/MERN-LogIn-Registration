const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/MERN_Memory",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=>console.log("connected to mongoose"))
.catch(err=>console.log("did not connect to mongoose", err));