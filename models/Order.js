import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  Customer: {
    type: String,
    required: true,
    maxlength: 60,
  },
  address: {
    type: String,
    required: true,
    maxlength: 200,
  },
  total: {
    type: Number,
    required: true,
  },
  status: {
    type: Number,
    default:0,
  },
  method: {
    type: Number,
    required:true,
  },
},
{timestamps:true}
);
// timestamps update the createdAt and updateAt date
// checks if models exists and requst not to recreated it
export default mongoose.models.Order || mongoose.model("Order",OrderSchema);