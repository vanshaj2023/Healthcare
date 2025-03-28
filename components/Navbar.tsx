"use client"    
import React, { useEffect, useState } from 'react';
import { UserButton, useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'

const Navbar: React.FC = () => {
    const { user, isSignedIn } = useUser()
    const [welcomeMessage, setWelcomeMessage] = useState('')
    const router = useRouter()

    useEffect(() => {
        if (isSignedIn && user) {
          setWelcomeMessage(`Welcome ${user.fullName}`)
          const timer = setTimeout(() => {
            setWelcomeMessage('')
          }, 5000) // Remove the welcome message after 5 seconds
    
          // Clear the timeout if the component unmounts
          return () => clearTimeout(timer)
        }
      }, [isSignedIn, user])

      const handleButtonClick = () => {
        if (!isSignedIn) {
          router.push('/sign-in')
        } else {
          router.push('/')
        }
      }
    
  return (
    <nav className="bg-black text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Healing Pavilion</h1>
        <div className='flex items-center gap-3'>
        {welcomeMessage && (
            <div className="font-bold duration-500 text-white">
              {welcomeMessage}
            </div>
          )}
        <ul className="flex space-x-6">
          <li>
            <a href="#features" className="hover:underline">Features</a>
          </li>
          <li>
            <a href="#iot" className="hover:underline">Live Metrics</a>
          </li>
          <li>
            <a href="#ar-blockchain" className="hover:underline">AR & Blockchain</a>
          </li>
          <li>
            <a href="#contact" className="hover:underline">Contact</a>
          </li>
        </ul>
        <button
            className="bg-white hover:bg-black-100 text-black font-bold py-2 px-4 rounded-full"
            onClick={handleButtonClick}
          >
            {isSignedIn ? 'Dashboard' : 'Login'}
          </button>
      <UserButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;