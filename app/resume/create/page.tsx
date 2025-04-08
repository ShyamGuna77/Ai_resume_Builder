"use client"
import { useResume } from "@/app/context/Resume"
import Step_one from "@/app/Steps/Step_one"
import Step_Two from "@/app/Steps/Step_Two"
import Step_three from "@/app/Steps/Step_three"
import Step_four from "@/app/Steps/Step_four"
import Step_five from "@/app/Steps/Step_five"
const ResumeCreatePage = () => {
    const {step,resume} = useResume()
  return (
    <div className="flex items-center justify-center h-screen">
      {step === 1 && <Step_one />}
      {step === 2 && <Step_Two />}
      {step === 3 && <Step_three />}
      {step === 4 && <Step_four />}
      {step === 5 && <Step_five/>}
    </div>
  );
}

export default ResumeCreatePage;