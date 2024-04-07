const CanchasSchema = require('../models/Canchas.js')



const updateCanchas = async(req , res)=> {
    try {
     
     const {id} = req.params
     const restBody = req.body
     console.log(restBody)
     const canchaUpdated = await CanchasSchema.findByIdAndUpdate(id, restBody, {new: true})
 
 
     res.json({
         message:'cancha updated succesfully',
         cancha: canchaUpdated,
 })} 
 catch (error) {
     console.log(error.message)
 }}
 
 /* DELETE */
 const deleteCanchas = async (req , res)=> {
     const { _id } = req.params
     try {
          const cancha = await CanchasSchema.findById(_id)
 
          if (!cancha) {
             throw new Error('cancha not found')
          }
 
         const deletedcancha = await CanchasSchema.findByIdAndUpdate(id, {isActive: false}, 
             {new: true})
 
 
 
         res.json({
             message:'cancha deleted succesfully',
             deletedcancha,
     })
     } catch (error) {
         res.json({
             message: error.message
         })
     }
     }
 
 
 
 
 /* POST */
 const createCanchas  = async (req , res) => {
     try { 
        const body = req;

    const cancha = new CanchasSchema(body) 
 
  
     await cancha.save()
 
 
     res.statusCode = 201
    
     res.json({
         message:'Cancha Creada Exitosamente',
         result: cancha,
     });
     }
  catch (error) {
     res.statusCode= 500;
     console.error(error)
     res.json({
    message: 'internal server error',
    error : error.message
     })
 }}
 
 
 
 
 /* GET */
     const getCanchas =  async (req , res) => {
        const {limit, offset, } = req.query
         const query = {isActive:true}
        /* const AllUsers =  await CanchasSchema.find(query).skip(offset).limit(limit);
        const total = await CanchasSchema.countDocuments(query) */
 
        const [allCancha, total ] = await Promise.all([
         CanchasSchema.find(query).skip(offset).limit(limit),
         CanchasSchema.countDocuments(query)
         
        ])

        
         res.json({
             message: 'GET All canchas',
             result: allCancha,
             total,
         })
 
 
 
 }
 
 
  module.exports = {
         createCanchas,
         deleteCanchas,
         updateCanchas,
         getCanchas,
     }