var     express = require ('express'),
        app = express(),
        bodyParser = require('body-parser'),
        port = process.env.PORT || 3000,
        func = require("./functions");
        app.use(bodyParser.urlencoded({ extended:true }));

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

    app.get('/' ,
    (req,res) =>{
    res.sendFile(`${__dirname}/index.html`);
    });

    app.get('/includes/style.css',
    (req,res) =>{
    res.sendFile(`${__dirname}/includes/style.css`);
    });

app.listen(3000,()=>{
    console.log(`listening port : ${port}`);
});

