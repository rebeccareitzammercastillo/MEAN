
const api = require('../controllers/api')

module.exports = function(app){
    app.get('/', (req,res)=>{
        api.index(req,res)
    })
    app.get('/:name', (req,res)=>{
        api.show(req,res)
    })
    app.get('/new/:name', (req,res)=>{
        api.create(req,res)
    })
    app.get('/remove/:name', (req,res)=>{
        api.delete(req,res)
    })

}