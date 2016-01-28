var count=0;
exports.sayHello = function(req,res) {
    count++;
    if(req.params.id==undefined)
    {
        console.log("1. hello Stranger!",count);
        res.send("hello Stranger!");
    }
    else{
        console.log("2. hello "+req.params.id+"!",count);
        res.send("hello "+req.params.id+"!");
    }


}