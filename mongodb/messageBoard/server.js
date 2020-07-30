const express = require("express"),
    app = express(),
    mongoose = require('mongoose'),
    port = 8000,
    server = app.listen(port, () => console.log(`Listening on port ${port}`))
const flash = require('express-flash');
app.use(flash());

mongoose.connect('mongodb://localhost/messagebd', { useNewUrlParser: true });
const CommentSchema = new mongoose.Schema({
    name: { type: String, required: [true, "Name is required"] },
    comment: { type: String, required: [true, "Comments must have content"] },
}, { timestamps: true })
const MessageSchema = new mongoose.Schema({
    name: { type: String, required: [true, "Name is required"] },
    message: { type: String, required: [true, "Messages must have content"] },
    comments: [CommentSchema]
}, { timestamps: true })

const Comment = mongoose.model('Comment', CommentSchema);
const Message = mongoose.model('Message', MessageSchema);

const session = require('express-session');
app.use(express.urlencoded({ extended: true })); 
app.use(express.static(__dirname + "/static"));

app.use(session({                          
    secret: 'keyboardkitten',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))


app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', (req, res) => { 
    errors = req.flash('errors')
    Message.find()
        .then(data => res.render("index", {messages: data}))
        .catch(err=>{
            console.log(err)
            res.redirect('/')
        })
});

app.post('/messages', (req,res)=>{
    const message = new Message();
    message.name = req.body.name;
    message.message = req.body.message;
    message.save()
        .then(newMessageData => console.log('Message created:', newMessageData))
        .catch(err=>{
        if(err.errors.name) {
            req.flash('errors','Name is required')
        }
        if(err.errors.message) {
            req.flash('errors','Message is required')
        }
            res.redirect('/')
        })
});

app.post('/messages/:id/comments', (req,res)=>{
    const comment = new Comment()
    comment.name = req.body.name;
    comment.comment = req.body.comment; 
    comment.save()
    .then((data)=>{
        Message.update({_id:req.params.id},{
            $push: {comments: data}
        })
        .then((msg)=>{
            res.redirect('/')
        })
        .catch(err=>{
            res.redirect('/')
        })
    })
    .catch(err=>{
    if(err.errors.name) {
        req.flash('errors','Name is required')
    }
    if(err.errors.comment) {
        req.flash('errors','Comment is required')
    }
        res.redirect('/')
    })
})