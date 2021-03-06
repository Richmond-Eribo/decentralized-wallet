import {useState} from 'react'
import Image from 'next/image'
import Head from 'next/head'
// import {root} from 'postcss'

export default function Header() {
  const [menu, setMenu] = useState(false)
  const [dark, setDark] = useState(false)

  const changeMenu = () => {
    setMenu(current => !current)
  }

  const darkMode = () => {
    setDark(current => !current)

    const root = window.document.documentElement
    if (dark) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }
  return (
    <header className='flex items-center justify-between py-10'>
      <div>
        <a href='/' aria-label='Tailwind CSS blog'>
          <div className='flex items-center justify-between'>
            <div className='mr-3'>
              <a href='/'>
                <Image
                  className='cursor-pointer object-fit'
                  src='/logo.svg'
                  height='40'
                  width='40'
                  alt='wallet'
                />
              </a>
            </div>
          </div>
        </a>
      </div>

      <div className='flex items-center text-base leading-5'>
        <div className='hidden sm:block'>
          <a
            href='#'
            className='p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100'
          >
            ABOUT
          </a>
          <a
            href='#'
            className='p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100'
          >
            GITHUB
          </a>
          <a
            href='#'
            className='p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100'
          >
            DOCS
          </a>
          <a
            href='#'
            className='p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100'
          >
            WALLETS
          </a>
        </div>

        <button
          aria-label='Toggle Dark Mode'
          // type='button'
          className='w-8 h-8 p-1 ml-1 mr-1 rounded sm:ml-4'
          onClick={darkMode}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
            className='text-gray-900 dark:text-gray-100'
          >
            <path
              d={
                dark
                  ? 'M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586'
                  : 'M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z'
              }
            ></path>
          </svg>
        </button>

        <div className='sm:hidden'>
          <button
            // type='button'
            className='w-8 h-8 ml-1 mr-1 rounded'
            aria-label='Toggle Menu'
            onClick={changeMenu}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className='text-gray-900 dark:text-gray-100'
            >
              <path
                fillRule='evenodd'
                d={
                  menu
                    ? 'M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                    : 'M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                }
                clipRule='evenodd'
              ></path>
            </svg>
          </button>
          <div
            className={`fixed right-0 z-10 w-full h-full duration-300 ease-in-out transform ${
              menu ? 'translate-x-0' : 'translate-x-full'
            }  bg-gray-200 top-24 dark:bg-gray-800 opacity-95`}
          >
            <button
              type='button'
              aria-label='toggle modal'
              className='fixed w-full h-full cursor-auto focus:outline-none'
            ></button>
            <nav className='fixed h-full mt-8'>
              <div className='px-12 py-4'>
                <a
                  exact='true'
                  href='#'
                  className='text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100'
                >
                  about
                </a>
              </div>
              <div className='px-12 py-4'>
                <a
                  exact='true'
                  href='#'
                  className='text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100'
                >
                  github
                </a>
              </div>
              <div className='px-12 py-4'>
                <a
                  exact='true'
                  href='#'
                  className='text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100'
                >
                  docs
                </a>
              </div>
              <div className='px-12 py-4'>
                <a
                  exact='true'
                  href='#'
                  className='text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100'
                >
                  wallets
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
