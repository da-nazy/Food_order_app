<<<<<<< HEAD
import cookie from 'cookie';

const handler=async (req,res)=>{
  if(req.method==="POST"){
    console.log(req.body,process.env.ADMIN_USERNAME,process.env.ADMIN_PASSWORD);
    try{
      const {username,password}=req.body;
      if(username===process.env.ADMIN_USERNAME && password===process.env.ADMIN_PASSWORD){
       res.setHeader("Set-Cookie",
       cookie.serialize("token",process.env.Token,{
           maxAge:60*60,
           sameSite:"strict",
           path:"/"
       })
       );
      res.status(200).json("Sucessful");
    }else{
        res.status(400).json("Wrong Credentails")
    }
    }catch(err){
   res.status(500).json(err);
    }
  }
}

export default handler;
//00.34.05
=======
import cookie from "cookie";

const handler =(req,res)=>{
if(req.method==="POST"){
   const {username,password}=req.body;
   if(username===process.env.USERNAME&&password===process.env.PASSWORD){
       res.setHeaders("Set-Cookie",cookie.serialize("token",process.env.TOKEN,{
           maxAge:60*60,
           sameSite:'strict',
           path:"/",
       }))
   };
   res.status(200).json("Successful")
}else{
    res.status(400).json("wrong Credentials!");
}
}

export default handler;
>>>>>>> fb01310dae0b5e54cc66e56d46bcfba2b62b2c60
