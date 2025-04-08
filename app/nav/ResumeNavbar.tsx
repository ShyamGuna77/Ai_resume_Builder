import React from 'react'
import { Button } from '@/components/ui/button'
import { useResume } from '../context/Resume'

const ResumeNavbar = () => {
    const { step, setStep } = useResume()

    return (
      <>
        <div className="flex justify-center mb-6 space-x-4">
          {[1, 2, 3, 4, 5].map((btn, index) => (
            <Button
              key={index}
              onClick={() => setStep(btn)}
              className={`rounded-full  px-4 py-2 ${
                step === btn
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              {btn}
            </Button>
          ))}
        </div>
      </>
    );
}

export default ResumeNavbar