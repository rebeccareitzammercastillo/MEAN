const Businesses = require('../controllers/businesses')
const path = require('path');

module.exports = function (app) {
    app.get ('/', (req,res)=>{

    })
    app.get ('/businesses', (req,res)=>{
        Businesses.index(req,res)
    })
    app.get('/businesses/:id', (req,res)=>{
        Businesses.show(req,res)
    })
    app.post('/businesses', (req,res)=>{
        console.log("create from routes")
        Businesses.create(req,res)
    })
    app.post('/businesses/:id/edit', (req,res)=>{
        Businesses.edit(req,res)
    })
    
    app.delete('/businesses/:id', (req,res)=>{
        Businesses.delete(req,res)
    })
    app.post('businesses/:id/reviews', (req,res)=>{
        console.log("**************************routes")
        Businesses.createReview(req,res)
    })

    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}