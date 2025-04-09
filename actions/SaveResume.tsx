"use server";

import { auth } from "@clerk/nextjs/server";
import ResumeSchema from "@/models/ResumeSchema";
import { ConnectDB } from "@/utils/db";

interface ResumeInput {
  name: string;
  address:string;
  job?: string;
  themeColor?: string;
  education?: {
    degree: string;
    institution: string;
    year: number;
  }[];
  experience?: {
    company: string;
    role: string;
    duration: string;
    description: string;
  }[];
  skills?: string[];
  projects?: {
    title: string;
    description: string;
    link: string;
  }[];
}

export async function SaveResume(data: ResumeInput) {
  await ConnectDB();

  const { userId } = auth();

  if (!userId) {
    throw new Error("User not authenticated");
  }

  const user = await fetch(`https://api.clerk.dev/v1/users/${userId}`, {
    headers: {
      Authorization: `Bearer ${process.env.CLERK_SECRET_KEY}`,
    },
  }).then((res) => res.json());

  const userEmail = user?.email_addresses?.[0]?.email_address;

  if (!userEmail) {
    throw new Error("User email not found");
  }

  const existing = await ResumeSchema.findOne({ userEmail });

  if (existing) {
    await ResumeSchema.updateOne({ userEmail }, { $set: data });
    return { status: "updated" };
  } else {
    await ResumeSchema.create({ ...data, userEmail });
    return { status: "created" };
  }
}
