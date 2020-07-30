const cakes = require('../controllers/cakes')

module.exports = function(app){
    app.get('/', (req,res)=>{
        
    })
    app.get('/cakes', (req,res)=>{
        // res.send("hello from routes")
        cakes.index(req,res)
    })
    app.get('/cakes/:id', (req,res)=>{
        cakes.show(req,res)
    })
    app.post('/cakes', (req,res)=>{
        cakes.create(req,res)
    })
    app.post('/cakes/:id/comments', (req,res) =>{
        cakes.createComment(req,res)
    })
}