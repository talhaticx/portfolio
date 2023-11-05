import React from 'react'

const Button = ({title}) => {
  return (
    <div style={{
        border: '2px solid #5F3315',
        borderRadius: '24px',
        padding: '4px 20px',
        transition: 'box-shadow 0.3s', // Add a transition for smooth hover effect
        cursor: 'pointer',
      }} className='hover:shadow-[0_0_20px_5px_#5f3315]'>
        <span className='text-xl font-light'>{title}</span>
      </div>
      
  )
}

export default Button