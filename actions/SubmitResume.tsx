
"use client"
import { SaveResume } from "./SaveResume";
import { useResume } from "@/app/context/Resume";
import { Button } from "@/components/ui/button";

const SubmitResume = () => {
  const { resume } = useResume();

  const handleSubmit = async () => {
    const payload = {
      name: resume.name,
      address: resume.address,
      job: resume.job,
      themeColor: resume.themeColor,
    };

    try {
      const result = await SaveResume(payload);
      console.log("Saved resume:", result);
    } catch (error) {
      console.error("Failed to save resume:", error);
    }
  };

  return (
    <Button
      onClick={handleSubmit}
      className="bg-blue-500 text-white px-4 py-2 rounded"
    >
      Save Resume
    </Button>
  );
};

export default SubmitResume;