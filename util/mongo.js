import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URL

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  )
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      useNewUrlParser: true, 
      serverSelectionTimeoutMS: 5000,
      autoIndex: false, // Don't build indexes
      maxPoolSize: 10, // Maintain up to 10 socket connections
      serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
      socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
      family: 4 
     

    }
  function connect(){
    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose
    })
  }
   try{
  connect();
   }catch(err){

     console.log(err.message);
   connect();
   }
  }
  cached.conn = await cached.promise
  return cached.conn
}

export default dbConnect