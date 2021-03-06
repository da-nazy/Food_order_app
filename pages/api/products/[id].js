import dbConnect from "../../../util/mongo";
import Product from "../../../models/Product";

export default async function hanler(req,res){
   
   

    const {method,query:{id}}=req;
    try{
        dbConnect();
    }catch(error){
       dbConnect();
    }
    
    
    if(method==="GET"){
        try{
         const product= await Product.findById(id);
         res.status(200).json({payload:product})
        }catch(err){
        
            res.status(500).json(err);
        }
    }
    
    if(method==="PUT"){
      try{
         const product = await Product.create(req.body);
         res.status(201).json({payload:product})
      }catch(err){
          res.status(500).json(err)
      }
    }


// delete method
if(method==="DELETE"){
    try{
       await Product.findByIdAndDelete(id);
       res.status(200).json(`Product with ${id} had been deleted!`);
    }catch(err){
        res.status(500).json(err)
    }
  }

}


