import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between font-semibold'>
        {/* Company Name */}
        <div className='flex items-center text-2xl'>
            <span className='text-yellow-400 '>Too</span>
            <span className='text-white'>ter</span>
        </div>
        {/* Nav Links */}
        <div className='flex gap-12 text-gray-50'>
            <button className='text-white'>
                Home
            </button>
            <button >
                Courses
            </button>
            <button >
                Instructor
            </button>
            <button>
                Contact
            </button>
        </div>
        {/* Call to Action */}
        <button className='bg-[#53abf7] px-4 py-2 rounded-lg text-white'>
            Go to App
        </button>
    </div>
  )
}

export default Navbar