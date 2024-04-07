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

 CanchasSchema.methods.toJSON = function () {
 const { _id, ...canchas } = this.toObject()
 canchas.uid = _id;
 return canchas
   } 



module.exports = model('canchas',CanchasSchema)