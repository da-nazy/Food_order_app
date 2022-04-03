import dbconnect from "../../../util/mongo";
import Order from "../../../models/Order";
import dbConnect from "../../../util/mongo";
import Product from "../../../models/Product";


const handler =async (req,res)=>{
    dbConnect();

    const {method,query:{id}}=req;
    
    if(method==="GET"){
    
      try{
        const order=await Order.findById(id);
        res.status(200).json(order);
      }catch(err){
          console.log(err);
          res.status(500).json(err)
      }
    }
    if(method==="PUT"){
<<<<<<< HEAD
      // To return the updated product we use new and true
   try{
   const order =await Order.findByIdAndUpdate(id,req.body,{
     new:true,
   });
   res.status(201).json(order);
   }catch(err){
   res.status(500).json(err);
   }
=======
      try{
        // product will update but won't return the newest version to prevent that we use
       // new:true,
       const order = await Order.findByIdAndUpdate(id,req.body,{new:true});
     
       res.status(209).json(order);
          }catch(err){
        res.status(500).json(err);
          }
>>>>>>> fb01310dae0b5e54cc66e56d46bcfba2b62b2c60
    }
    if(method==="DELETE"){

    }
}

export default handler;

// clip time 2:03:51