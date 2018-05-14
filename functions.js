var data = require("./data/books.json");

module.exports = {
    getAllBooks:()=>{
        return data;
    },
    
    getBookbyId:(id)=>{
        let result = false;
        for(let i in data.Books){
            var book = data.Books[i];
        if(book.id==id){
            result = true;
            return({"Title": book.title});
        }
    }
    if(!result)
        return ({"Error":"Not Found"});
    },
    search:(id,title)=>{
        let result = false;
        for(let i in data.Books){
            var book = data.Books[i];
        if(book.id==id && book.title==title){
            result = true;
            return({"Title": book.title,"Description":book.description})
            }
    }
    if(!result)
        return ({"Error":"Not Found"});
    },
}