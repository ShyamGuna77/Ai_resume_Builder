import React, { FormEvent } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useResume } from '../context/Resume';


const Step_one = () => {
        const {resume,setresume}   = useResume()
        const handleSubmit = (e:FormEvent) => {
          e.preventDefault()
          console.log(resume)
        }
    return (
      <div className="w-full lg:w-1/2 p-8 shadow-lg border-t-8 border-blue-500 rounded-lg bg-background dark:shadow-2xl dark:shadow-gray-600">
        <h2 className="text-3xl font-bold mb-6 text-foreground">
          Personal Information
        </h2>
        <form onSubmit={handleSubmit}>
          
          <Input
            onChange={(e) => setresume({ ...resume, name: e.target.value })}
            value={resume.name}
            type="text"
            className="mb-4 p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="First Name"
            required
          />
          <Input
            onChange={(e) => setresume({ ...resume, job: e.target.value })}
            value={resume.job}
            type="text"
            className="mb-4 p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Job Title"
            required
          />
          <Input
            onChange={(e) => setresume({ ...resume, email: e.target.value })}
            value={resume.email}
            type="email"
            className="mb-4 p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Email Address"
            required
          />
          <Input
            onChange={(e) => setresume({ ...resume, phone: e.target.value })}
            value={resume.phone}
            type="number"
            className="mb-4 p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Phone Number"
            required
          />
          <Input
            onChange={(e) => setresume({ ...resume, address: e.target.value })}
            value={resume.address}
            type="text"
            className="mb-4 p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Address"
          />
        <div className="flex justify-end p-3">
          <Button type='submit' className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
            Save
          </Button>
        </div>
        </form>
      </div>
    );
};

export default Step_one;