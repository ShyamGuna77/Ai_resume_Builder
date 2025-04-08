"use client"

import React, { ReactNode, useContext, useState } from 'react'

import { createContext } from 'react'

type ResumeState = {
  name: string;
  job: string;
  address: string;
  phone: string;
  email: string;
  themeColor: string;
};

const initialState:ResumeState = {
    name: "",
    job: "",
    address:"",
    phone:"",
    email:"",
    themeColor:""
}
type ResumeContextType = {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  resume: ResumeState;
  setresume: React.Dispatch<React.SetStateAction<ResumeState>>;
};

const ResumeContext = createContext<ResumeContextType | null>(null)

export const  ResumeProvider = ({children}:{children:ReactNode}) => {
    const [resume,setresume] = useState<ResumeState>(initialState)
    const [step,setStep] = useState<number>(1)

  return (
    <ResumeContext.Provider value={{step,setStep,resume,setresume}}>{children}</ResumeContext.Provider>
  )
}

export const useResume = () => {
      const context = useContext(ResumeContext);
      if (!context) {
        throw new Error("useResume must be used within a ResumeProvider");
      }
      return context;
}