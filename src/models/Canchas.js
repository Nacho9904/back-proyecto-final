const {Schema, model} = require('mongoose')

const CanchasSchema = Schema ({
    Numero:{
        type:Number,
        require:true,
    },
    tipo:{
        type:String,
        require:true,

    },
    precio:{
        type:Number,
        require:true
    },
})

/* UserSchema.methods.toJSON = function () {
 const {__v, password, _id, ...user } = this.toObject()
 user.uid = _id;
 return user
   } */



module.exports = model('CanchasSchema',CanchasSchema)