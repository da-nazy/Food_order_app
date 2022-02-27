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

    }
    if(method==="DELETE"){

    }
}

export default handler;