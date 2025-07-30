'use client';

import React from 'react';

import { Input } from '@/app/components/accertinity/input';
import { Label } from '@/app/components/accertinity/label';
import { cn } from '@/app/lib/utils';

export function SignupFormDemo() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <div className='shadow-input mx-auto w-full max-w-md rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black'>
      <form className='my-8' onSubmit={handleSubmit}>
        {/* First & Last Name */}
        <div className='mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2'>
          <LabelInputContainer>
            <Label htmlFor='firstname'>First name</Label>
            <Input id='firstname' placeholder='Tyler' type='text' />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor='lastname'>Last name</Label>
            <Input id='lastname' placeholder='Durden' type='text' />
          </LabelInputContainer>
        </div>

        {/* Email & Phone Number on same row */}
        <div className='mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2'>
          <LabelInputContainer>
            <Label htmlFor='email'>Email Address</Label>
            <Input id='email' placeholder='projectmayhem@fc.com' type='email' />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor='phone'>Phone Number</Label>
            <Input id='phone' placeholder='123-456-7890' type='tel' />
          </LabelInputContainer>
        </div>

        {/* Message */}
        <LabelInputContainer className='mb-8'>
          <Label htmlFor='message'>Message</Label>
          <Input id='message' placeholder='Your message' type='text' />
        </LabelInputContainer>

        {/* Send Message Button */}
        <button
          className='group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-[#0D004D] to-[#4B0082] font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]'
          type='submit'
        >
          Send message &rarr;
          <BottomGradient />
        </button>

        {/* Privacy Policy Notice */}
        <p className='mt-4 text-sm text-gray-600 dark:text-gray-400'>
          For details on how we collect, use, and safeguard your data, please
          review our Privacy Policy. By submitting this form, you agree to our
          privacy practices as outlined in the policy.
        </p>
      </form>
    </div>
  );
}

const BottomGradient = () => (
  <>
    <span className='absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100' />
    <span className='absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100' />
  </>
);

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn('flex w-full flex-col space-y-2', className)}>
      {children}
    </div>
  );
};
