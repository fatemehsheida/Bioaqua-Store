'use client'
import React, { useEffect, useState } from 'react'

const ButtonMode = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="container w-full transition-all duration-500 ml-10">
      <input 
        type="checkbox" 
        id="theme-toggle" 
        className="hidden-checkbox transition-all duration-500"
        onClick={(e) => e.stopPropagation()}
        onChange={() => setIsDark(!isDark)}
      />
      <label htmlFor="theme-toggle" className="toggle-button transition-all duration-500">
        <div className="icon-wrapper transition-all duration-500">
          <svg className="iconn sun transition-all duration-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" 
          strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>
          <svg className="iconn moon transition-all duration-500" viewBox="0 0 24 24" fill="none" 
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
          </svg>
        </div>
      </label>
    </div>
  )
}

export default ButtonMode