const Authors = require('../controllers/authors')
const path = require('path');

module.exports = function (app) {
    app.get('/', (reg,res)=>{

    })
    app.get('/authors', (req,res)=>{
        // res.send("hello from routes")
        Authors.index(req,res)
    })
    app.post('/authors', (req,res)=>{
        console.log("This is the routes")
        Authors.create(req,res)
    })
    app.delete('/authors/:id/delete', (req,res)=>{
        Authors.delete(req,res)
    })
    app.post('/authors/:id', (req,res)=>{
        Authors.edit(req,res)
    })
    app.get('/authors/:id', (req,res)=>{
        Authors.show(req,res)
    })
    app.post('/authors/:id/quotes', (req,res)=>{
        Authors.createQuotes(req,res)
    })
    app.delete('/authors/:authorid/quotes/:quoteid', (req,res)=>{
        console.log("***************************routes")
        Authors.deleteQuotes(req,res)
    })
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}