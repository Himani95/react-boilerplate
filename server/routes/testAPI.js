var express = require ('express');
var router = express.Router();

/*Date: 4 July 2020
Author: Himani
Description: To demonstrate the utilization of Node/Express server(Server Side Rendering)
This points to the default root route 
with an added callback function 
which takes in the request and respond parameters 
and also a next pointer incase there is 
another function to be called post that*/
router.get("/", function(req, res, next){
    res.send("HURRAY! API is working properly");//A simple message sent to the default route
});

module.exports=router;