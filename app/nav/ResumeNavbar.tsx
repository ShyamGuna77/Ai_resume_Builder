import React from 'react'
import { Button } from '@/components/ui/button'
import { useResume } from '../context/Resume'

const ResumeNavbar = () => {
    const {step,setStep} = useResume()
  return (
   <>
   {[1,2,3,4,5].map((btn,index) => (
    <Button
    className=''
    key={index}>{btn}</Button>
   ))}
   </>
  )
}

export default ResumeNavbar