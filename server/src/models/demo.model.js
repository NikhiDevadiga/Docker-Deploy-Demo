import mongoose from "mongoose";

const demoSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      unique: [true, "name should be unique"],
    },
    content: {
      type: String,
      required: [true, "content is required"],
    },
  },
  { timestamps: true },
);

const demoModel = mongoose.model("Demo",demoSchema);
export default demoModel;
