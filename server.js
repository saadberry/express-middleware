const express = require("express");

const app = express()

// Creating Middleware function
const myLogger = function (req, res, next)  {
    console.log(`${req.method} ${req.path} ${req.ip}`)
    next();
}
app.use(myLogger)

// Server Initialization
const PORT = 5000
app.listen(PORT, (req, res) => {
    console.log(`Server listening on ${PORT}`);
})

// Sending Requests
app.get('/', (req,res) => {
    res.send("Hello World!")
})

