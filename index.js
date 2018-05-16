var     express = require ('express'),
        app = express(),
        port = process.env.PORT || 3000,
        func = require("./functions");

app.all('*',
    (req,res,next)=>{
        console.log('Input');
        next();
    });


    app.get('/getAll/',
    (req,res)=>{
        res.status(200).json(func.getAll());
    });
    
    
    app.post('/getCatbyID/:id/',
    (req,res)=>{
        res.status(200).json(func.getbyID(req.params.id));
    });
    
    app.get('/search/:id/:title',
    (req,res)=>{
        res.status(200).json(func.search(req.params.id,req.params.title));
    });  


app.listen(3000,()=>{
    console.log(`listening port : ${port}`);
});

