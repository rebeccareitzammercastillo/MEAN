module.exports = function (app) {
    app.get('/', (req, res) =>{

    })
    app.get('/bikes', (req,res)=>{
        bikes.index(req,res)
    })

    app.post('/bikes', (req,res)=>{
        bikes.create(req,res)
    })
}