const notes = require('../controllers/notes')

module.exports = function(app) {
    app.get('/', (req,res)=>{

    })

    app.get('/notes', (req,res)=>{
        notes.index(req,res)
    })

    app.post('/notes', (req,res)=>{
        notes.create(req,res)
    })
}