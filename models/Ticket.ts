import { Schema, models, model } from "mongoose";

const ticketSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      maxLength: 256,
      minLength: 2,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      maxLength: 2000,
    },
    category: {
      type: String,
      required: [true, "Category is required"],
      maxLength: 50,
      lowercase: true,
    },
    priority: {
      type: Number,
      min: 1,
      max: 5,
      default: 1,
    },
    progress: {
      type: Number,
      min: 0,
      max: 100,
      default: 0,
    },
    status: {
      type: String,
      enum: ["pending", "done", "not-started"],
      default: "not-started",
    },
  },
  {
    timestamps: true,
  }
);

export default models.Ticket || model("Ticket", ticketSchema);
