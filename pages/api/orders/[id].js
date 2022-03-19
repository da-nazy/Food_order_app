import dbconnect from "../../../util/mongo";
import Order from "../../../models/Order";
import dbConnect from "../../../util/mongo";


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
      try{
        // product will update but won't return the newest version to prevent that we use
       // new:true,
       const order = await Order.findByIdAndUpdate(id,req.body,{new:true});
     
       res.status(209).json(order);
          }catch(err){
        res.status(500).json(err);
          }
    }
    if(method==="DELETE"){

    }
}

export default handler;

// clip time 2:03:51