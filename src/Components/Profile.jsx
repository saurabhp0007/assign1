import React from 'react'

const Profile = () => {
  const customDottedLineStyle = {
    position: 'relative',
    height: '1px', 
    backgroundImage: 'repeating-linear-gradient(to right, black, black 5px, transparent 5px, transparent 10px)' // Adjust dot and gap size
  };
  return (
    <div className='flex justify-center items-center'>
      <div className='border border-gray-200 min-w-80 m-4 bg-[#F7F8F9] pb-5 md:pb-5 lg:pb-10 xl:pb-20 '>
        <div className='bg-white p-5 text-2xl w-full'>
          Account Settings
        </div>
        <div className=' mt-4 pl-5 text-start flex flex-col items-start justify-between max-w-[375px]'>
          <div className='flex flex-row gap-5'>
            <img className='w-20 h-20 rounded-full ' src='https://img.freepik.com/free-photo/glowing-spaceship-orbits-planet-starry-galaxy-generated-by-ai_188544-9655.jpg?size=626&ext=jpg&ga=GA1.1.2135547956.1711006582&semt=sph' />
            <div className='flex flex-col'>
              <span className='font-bold text-2xl'>
                Marry Doe
              </span>
              <span>
                Marry@gmail.com
              </span>
            </div>
          </div>
          <span className='flex flex-col mt-5'>
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
            
          </span>
          
        </div>
        <div className="my-4" style={customDottedLineStyle}></div>
        <div className="mt-80" style={customDottedLineStyle}></div>
        
      </div>
      
    </div>
  )
}

export default Profile