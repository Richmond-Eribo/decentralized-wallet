import Image from 'next/image'
import Wallets from './wallets/wallets.js'
import Link from 'next/link'

export default function Main() {
  return (
    <main className='mx-auto'>
      <div className='text-cool-gray-500' id='about'>
        <h1 className='container flex justify-center mt-20 text-4xl font-semibold '>
          Wallet Integrate
        </h1>

        <div className='mx-8 mt-8'>
          <h2 class='flex justify-center text-3xl font-thin text-center'>
            An open protocol for linking wallets and Dapps.
          </h2>
          <div className='mt-14 lg:flex lg:justify-center'>
            <Image
              src='/banner-main.png'
              height='221'
              width='768'
              alt='crypto-wallet-info'
              className='lg:max-w-3xl'
            />
          </div>
        </div>
      </div>

      <div id='github' className='flex sm:flex-row sm:justify-center'>
        <div className='flex flex-col mx-6 mt-16 font-thin text-gray-700 sm:flex-row sm:mx-8 sm:space-x-16 sm:max-w-sxl'>
          <div className='sm:w-1/2'>
            <h2 class='text-base flex  font-semibold text-black dark:text-white'>
              What is Wallet Integrate<div class='ml-1 animate-bounce'>?</div>
            </h2>
            <p class='mt-6 text-lg leading- text-black dark:text-white'>
              Wallet Integrate is a very open source protocol for connecting
              decentralised applications to mobile wallets with QR code scanning
              or deep linking. A user can interact securely with any Dapp from
              their mobile phone, making WalletConnect wallets a safer choice
              compared to desktop or browser extension wallets.
            </p>
          </div>

          <div className='mt-16 sm:w-1/2 sm:mt-0'>
            <h2 class='text-base flex font-semibold text-black dark:text-white'>
              How does it work<div class='ml-1 animate-bounce'>?</div>
            </h2>
            <p class='mt-6 text-lg leading-6 text-black dark:text-white'>
              Wallet Integrate connects web applications to supported mobile
              wallets WalletConnect session is started by a scanning a QR code
              (desktop) or by clicking an application deep link (mobile).
            </p>
          </div>
        </div>
      </div>

      <div
        id='wallets'
        className='flex flex-col mx-8 mt-12 space-y-10 text-center align-middle'
      >
        <div className='flex justify-center'>
          <div className='max-w-3xl'>
            <h1 class='text-4xl font-medium text-cool-gray-500 dark:text-white'>
              Wallets
            </h1>
            <p class='mt-10 text-lg font-thin leading-6 text-gray-700 dark:text-white'>
              Multiple iOS and Android wallets support the WalletConnect
              protocol. Simply scan a QR code from your desktop computer screen
              to start securely using a dApp with your mobile wallet.
              Interaction between mobile apps and mobile browsers are supported
              via mobile deep linking.
            </p>
            <div class='mt-2'></div>
          </div>
        </div>

        <div className='flex justify-center'>
          <div className='grid max-w-3xl grid-cols-3 gap-10 mt-2 sm:grid-cols-2 md:grid-cols-4'>
            {Wallets.map(wallet => (
              <Link href={'/wallets/' + wallet.name}>
                <div class='flex flex-col group' key={wallet.name}>
                  <div class='flex justify-center'>
                    <div class='w-20 p-0 transition duration-300 ease-in-out rounded-full group-hover:shadow-lg md:w-32 sm:w-24'>
                      <img
                        class='inline-block w-20 rounded-full md:w-32 sm:w-24'
                        src={wallet.image}
                        alt='mewwallet'
                      />
                    </div>
                  </div>
                  <div class='flex justify-center mt-4 font-semibold text-black dark:text-white group-hover:text-blue-700'>
                    {wallet.name}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
