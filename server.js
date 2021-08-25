const express = require('express');
const cookies = require('cookie-parser');
const app = express();
const port = 8000;
const cors = require('cors');
app.use(cors({
    credentials:true,
    origin: 'http://localhost:3000'
}))
require("./server/config/mongoose.config");
app.use(express.json(), express.urlencoded({extended:true}));
app.use(cookies());
require('./server/routes/user.route')(app)

const server = app.listen(port, ()=>console.log(`running on port ${port}`))