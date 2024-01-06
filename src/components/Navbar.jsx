import  { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const [menu, setMenu] = useState(false)

  useEffect(() => {
    const width = window.addEventListener('resize', () => {
      if(document.body.clientWidth > 768) setMenu(false)
    })
    return () => {
      window.removeEventListener('resize', width)
    }
  }, [menu, setMenu])
  
  return (
    <nav className='fixed right-0 top-0 bg-white z-10 w-full flex flex-row justify-between px-4 md:px-12 py-4'>
      <div className='flex items-center justify-center'>
        <h1 className='text-2xl font-bold'>Busell</h1>
      </div>
      <div className='hidden md:flex space-x-12 justify-center items-center'>
        <Link to='/' className='text-l font-medium text-[#16161B]'>
          Home
        </Link>
        <Link to='/contact' className='text-l font-medium text-[#16161B]'>
          Contact
        </Link>
        <Link to='/about' className='text-l font-medium text-[#16161B]'>
          About
        </Link>
        <Link to='/pricing' className='text-l font-medium text-[#16161B]'>
          Pricing
        </Link>
        <Link to='/product' className='text-l font-medium text-[#16161B]'>
          Product
        </Link>
      </div>
      <div className='md:flex items-center justify-center hidden'>
          <button className='primary-btn'>
            <Link to={"/product"}>
              Brows Products
            </Link>
          </button>
      </div>
        <button className='md:hidden' onClick={() => setMenu(!menu)}>
          <svg
            width='24'
            height='18'
            viewBox='0 0 24 18'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M0 0H24V2H0V0ZM0 8H24V10H0V8ZM0 16H24V18H0V16Z'
              fill='#16161B'
            />
          </svg>
        </button>
          {menu && (
            <div className='flex flex-col items-center justify-center space-y-8 py-8 text-center absolute top-16 right-0 w-full bg-white rounded-b-lg z-50' 
            onClick={() => setMenu(false)}
            >
              <Link to='/' className='text-l font-medium text-[#16161B]'>
                Home
              </Link>
              <Link to='/contact' className='text-l font-medium text-[#16161B]'>
                Contact
              </Link>
              <Link to='/pricing' className='text-l font-medium text-[#16161B]'>
                Pricing
              </Link>
              <Link to='/product' className='text-l font-medium text-[#16161B]'>
                Product
              </Link>
              <button className='primary-btn'>
                <Link to={"/product"}>
                  Brows Products
                </Link>
              </button>
            </div>
          )}
    </nav>
  )
}

export default Navbar
