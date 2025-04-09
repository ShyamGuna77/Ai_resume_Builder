
import mongoose from "mongoose";

const ResumeSchema = new mongoose.Schema(
  {
    userEmail: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    job: {
        type:String
    },
    themeColor: {
        type:String
    },
  
    education: [
      {
        degree: String,
        institution: String,
        year: Number,
      },
    ],
    experience: [
      {
        company: String,
        role: String,
        duration: String,
        description: String,
      },
    ],
    skills: [String],
    projects: [
      {
        title: String,
        description: String,
        link: String,
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Resume", ResumeSchema);