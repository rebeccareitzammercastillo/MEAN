
const tasks = require('../controllers/tasks')

module.exports = function(app){
    app.get('/', (req,res)=>{
        tasks.index(req,res)
    })
    app.get('/tasks/:id', (req,res)=>{
        tasks.show(req,res)
    })
    app.post('/tasks', (req,res)=>{
        tasks.create(req,res)
    })
    app.put('/tasks/:id', (req,res)=>{
        tasks.update(req,res)
    })
    app.get('/tasks/:id/delete', (req,res)=>{
        tasks.delete(req,res)
    })

}