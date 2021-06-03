import Image from 'next/image'

export default function Footer() {
  return (
    <footer className='dark:bg-black'>
      <div className='flex flex-col items-center mt-16'>
        <div className='flex items-center mb-2 space-x-2 text-sm font-semibold text-black dark:text-white'>
          <div>
            <a href='/' rel='noopener noreferrer'>
              <Image
                src='/logo.svg'
                height='40'
                width='40'
                className='cursor-pointer object-fit'
                alt='CryptoConnect logo'
              />
            </a>
          </div>

          <div> • </div>

          <div>"Copyright " "© 2021" "all rights reserved."</div>

          <div> • </div>

          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://discord.com/invite/jhxMvxP'
          >
            <img
              className='w-5 h-5 cursor-pointer object-fit'
              src='/discord.svg'
              alt='discord icon'
            />
          </a>

          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://github.com/walletconnect'
          >
            <img
              className='w-5 h-5 cursor-pointer object-fit'
              src='/github.svg'
              alt='github icon'
            />
          </a>

          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://t.me/walletconnect_announcements'
          >
            <img
              className='w-5 h-5 cursor-pointer object-fit'
              src='/telegram.svg'
              alt='telegram icon'
            />
          </a>

          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://twitter.walletconnect.org/'
          >
            <img
              className='w-5 h-5 cursor-pointer object-fit'
              src='/twitter.svg'
              alt='twitter icon'
            />
          </a>
        </div>
      </div>
    </footer>
  )
}
