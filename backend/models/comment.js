const mongoose=require('mongoose')
/*const {marked} = require('marked')
//const marked = require('marked')
const slugify = require('slugify')
const createDomPurify = require('dompurify')
const {JSDOM} = require('jsdom')
const dompurify = createDomPurify(new JSDOM().window)*/


const commentSchema = new  mongoose.Schema({
    commentcontent:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default: Date.now
    },
    slug:{
        type:String,
    }
    /*description:{
        type:String
    },
    markdown:{
        type:String,
        required:true
    },*/
    
    /*
    sanitizedHtml:{
        type:String,
        required:true
    }*/
})

/*articleSchema.pre('validate',function(next){
    if(this.title){
        this.slug = slugify(this.title,{lower:true,strict:true})
    }
    if(this.markdown){
        this.sanitizedHtml = dompurify.sanitize(marked(this.markdown))
    }
    next()
})*/




module.exports = mongoose.model('CommentDb',commentSchema)
