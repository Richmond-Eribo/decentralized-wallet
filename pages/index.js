import Footer from '../components/common/Footer'
import Header from '../components/common/Header'
import Main from '../components/Main'

export default function Home() {
  return (
    <div className='max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0'>
      <div className='flex flex-col justify-between h-screen'>
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  )
}
