import dbConnect from "../../../util/mongo";
import Product from "../../../models/Product";

export default async function hanler(req,res){
   
   

    const {method}=req;
    dbConnect();

    if(method==="GET"){
        try{
         const products = await Product.find();
         res.status(200).json({payload:products})
        }catch(err){
            res.status(500).json(err);
        }
    }
    
    if(method==="POST"){
      try{
         const product = await Product.create(req.body);
         res.status(201).json({payload:product})
      }catch(err){
          res.status(500).json(err)
      }
    }
}

