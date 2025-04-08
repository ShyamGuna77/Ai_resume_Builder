import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Step_one = () => {
    return (
        <div className="w-full lg:w-1/2 p-8 shadow-lg border-t-8 border-blue-500 rounded-lg bg-background dark:shadow-2xl dark:shadow-gray-600">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Personal Information</h2>
            <Input className="mb-4 p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="First Name" />
            <Input className="mb-4 p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Last Name" />
            <Input className="mb-4 p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Email Address" />
            <Input className="mb-4 p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Phone Number" />
            <Input className="mb-4 p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Address" />
            <div className="flex justify-end p-3">
                <Button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
                    Save
                </Button>
            </div>
        </div>
    );
};

export default Step_one;