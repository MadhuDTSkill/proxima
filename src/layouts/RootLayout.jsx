import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }, []);
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default RootLayout