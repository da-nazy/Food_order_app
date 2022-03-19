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

    if(method==="PUT"){
        try{
      // product will update but won't return the newest version to prevent that we use
     // new:true,
     const product = await Product.findByIdAndUpdate(id,req.body,{new:true});
   
     res.status(201).json(product);
        }catch(err){
      res.status(500).json(err);
        }
    }

    if(method==="DELETE"){
        try{

        }catch(err){

        }
    }
}



