const Poodles = require('../controllers/poodles')

module.exports = function(app){
    app.get('/', (req, res) => {  
        Poodles.index(req, res)
    });
    
    app.get('/poodles/new', (req,res) =>{
        Poodles.new(req,res)
    })
    
    app.post('/poodles', (req,res)=>{
        Poodles.create(req,res)
    })
    
    app.get('/poodles/:id', (req,res)=>{
        Poodles.show(req,res)
    })
    
    app.get('/poodles/edit/:id', (req,res)=>{
        Poodles.edit(req,res)
    })
    
    app.post('/poodles/:id', (req,res)=>{
        Poodles.update(req,res)
    })
    
    app.get('/poodles/destroy/:id', (req,res) => {
        Poodles.delete(req,res)
    })
}