const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

//Express Middlewares
app.use(express.json());
app.use(cors());

//Connect to MongoDB
mongoose
    .connect(process.env.MONGO_URI,{ useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB database connection established successfully"))
    .catch(err => console.log("ERROR: " + err));

//Import routers from routes directory
const userRouter = require('./routes/UserRoutes');
const packageRouter = require('./routes/PackageRoutes');

//Use routers
app.use('/api/users',userRouter);
app.use('/api/packages',packageRouter);

// Start server
app.listen(port, () => {
    console.log("Server is running on port: " + port);
});